document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}
 const btn = document.querySelector('button');
 const span = document.querySelector('section span');

async function getIP() {
    const span = document.querySelector('section span');
    
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        
        if (!response.ok) throw new Error('Błąd serwera');

        const data = await response.json();
        span.innerText = data.ip;

    } catch (error) {
        console.error('Błąd:', error);
        span.innerText = 'Błąd dostępu (CORS)';
    }
}

btn.addEventListener('click', getIP);