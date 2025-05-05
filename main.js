const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const sidebar = document.querySelector('.sidebar')
    const nav = document.querySelector('.nav')
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "flex";
        sidebar.style.position = "relative";
        nav.style.display = "none";
    };
});
function delClick() {
    event.preventDefault()
    const sidebar = document.querySelector('.sidebar')
    const nav = document.querySelector('.nav')
    if (getComputedStyle(sidebar).display === "flex") {
        sidebar.style.display = "none";
        nav.style.display = "flex";
    };
}

const slider = document.querySelector('.slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < slider.children.length - 1) {
        index++;
        slider.style.transform = `translateX(-${index * 320}px)`;
    }
});
prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        slider.style.transform = `translateX(-${index * 320}px)`;
    }
});
function showImage() {
    document.getElementById("customAlert").style.display = "block";
}
function closeImage() {
    document.getElementById("customAlert").style.display = "none";
}
