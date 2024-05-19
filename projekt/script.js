function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

//operatorok megnyitasa dinamikus linkel
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
