const apiUrl = 'http://localhost:8000/users.php';

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadUsers();
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', addUser);
    }
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function fetchGet(url) {
    return fetch(url)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
        });
}

function fetchPost(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp => {
        if(resp.ok) { return resp.json(); }
        return Promise.reject(resp);
    });
}

function addUser(e) {
    e.preventDefault();

    const firstNameEl = document.querySelector('.form__field--first-name');
    const lastNameEl = document.querySelector('.form__field--last-name');

    const firstName = firstNameEl.value.trim();
    const lastName = lastNameEl.value.trim();

    if (firstName.length === 0 || lastName.length === 0) {
        alert('Proszę wypełnić oba pola!');
        return;
    }

    if(firstNameEl && lastNameEl) {
        const newUser = {
            firstName: firstNameEl.value,
            lastName: lastNameEl.value
        };

        fetchPost(apiUrl, newUser)
            .then(data => {
                console.log('Użytkownik dodany:', data);
                firstNameEl.value = '';
                lastNameEl.value = '';
            })
            .catch(err => console.error('Błąd podczas dodawania:', err))
            .finally(() => {
                loadUsers();
            });
    }
}

function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}
