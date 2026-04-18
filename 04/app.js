import { key } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    
    // Pola formularza
    const inputLat = document.querySelector('.form__field--lat');
    const inputLng = document.querySelector('.form__field--lng');
    const selectUnits = document.querySelector('.form__units');

    // Pola wyświetlania
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemp = document.querySelector('.weather__temperature');
    const weatherUnit = document.querySelector('.weather__unit');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

    const lat = parseFloat(inputLat.value.replace(',', '.'));
    const lng = parseFloat(inputLng.value.replace(',', '.'));
    const units = selectUnits.value;

    if (isNaN(lat) || isNaN(lng)) {
        alert('Współrzędne muszą być liczbami!');
        return;
    }

    if (lat < -90 || lat > 90) {
        alert('Szerokość (latitude) musi mieścić się w zakresie od -90 do 90');
        return;
    }

    if (lng < -180 || lng > 180) {
        alert('Długość (longitude) musi mieścić się w zakresie od -180 do 180');
        return;
    }

        fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=pl&units=${units}`)
            .then(resp => {
                if (!resp.ok) throw new Error('Problem z kluczem lub API');
                return resp.json();
            })
            .then(data => {
                const actualData = data.data[0]; 

                weatherLat.innerText = actualData.lat;
                weatherLng.innerText = actualData.lon;
                weatherSummary.innerText = actualData.weather.description;
                weatherTemp.innerText = actualData.temp;
                weatherUnit.innerText = units === 'M' ? '℃' : '℉';
            })
            .catch(err => {
                console.error('Błąd:', err);
                weatherSummary.innerText = "Błąd pobierania danych";
            });
    });
});