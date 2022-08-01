const menu = document.querySelector('.mobile-nav-icon');
const nav = document.querySelector('.mobile-nav');
const remove = document.querySelector('.closenav');

menu.addEventListener('click', displaynav);



function displaynav() {
    nav.classList.add("active");
}

remove.addEventListener('click', closenav);

function closenav() {
    nav.classList.remove("active");
}

function addClass() {
    document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', reveal2);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealspoint = 150;

        if (revealtop < windowHeight - revealspoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

function reveal2() {
    const reveals2 = document.querySelectorAll('.reveal2');

    for (let i = 0; i < reveals2.length; i++) {
        let windowHeight = window.innerHeight;
        let revealtop2 = reveals2[i].getBoundingClientRect().top;
        let revealspoint2 = 150;

        if (revealtop2 < windowHeight - revealspoint2) {
            reveals2[i].classList.add('active2');
        }
        else {
            reveals2[i].classList.remove('active2');
        }
    }
}