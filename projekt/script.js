function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}


//operatorok es mapok megnyitasa dinamikus linkel
const baseUrl = 'https://rainbowsix.fandom.com/wiki/';

const operators = document.querySelectorAll('.operator');

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        const operatorName = operator.querySelector('h2').textContent;
        const url = baseUrl + encodeURIComponent(operatorName);
        window.open(url, '_blank');
    });
});

const baseMapUrl = 'https://rainbowsix.fandom.com/wiki/';

const maps = document.querySelectorAll('.map');

maps.forEach(map => {
    map.addEventListener('click', () => {
        const mapName = map.querySelector('h2').textContent;
        const url = baseMapUrl + encodeURIComponent(mapName);
        window.open(url, '_blank');
    });
});

function showTable(tableId) {
    var arLmgTable = document.getElementById('ar-lmg-table');
    var smgTable = document.getElementById('smg-table');

    if (tableId === 'ar-lmg') {
        arLmgTable.style.display = 'table';
        smgTable.style.display = 'none';
    } else if (tableId === 'smg') {
        arLmgTable.style.display = 'none';
        smgTable.style.display = 'table';
    }
}


//urlap ellenorzes
function validateForm() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const eula = document.getElementById('eula').checked;

    if (email === '' || username === '' || password === '' || confirmPassword === '' || !eula) {
        alert('Kérjük, töltse ki az összes mezőt és fogadja el a feltételeket.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('A jelszavak nem egyeznek.');
        return false;
    }

    return true;
}

document.querySelector('form').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});