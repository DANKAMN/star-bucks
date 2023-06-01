function imageSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeColor(color) {
    let circle = document.querySelector('.circle');
    circle.style.background = color;
}

function menu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('.active');
    navigation.classList.toggle('.active');
}