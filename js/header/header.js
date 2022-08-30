const headerLight = document.querySelector('.header-light');

const headerDark = document.querySelector('.header-dark')

const navMenu = document.querySelector('.nav');

const mobileBlock = document.querySelector('.mobile-menu')

if(headerLight) {
    lightwindow()
}

if(headerDark) {
    darkWindow()
}

const mobileHTML = `
    <div class="box">
        <a href='./index.html' class="mobile-logo"></a>
        <div class="mobile-block-burger">
            <div class="mobile-burger">
                <div class="mobile-line mobile-line1"></div>
                <div class="mobile-line mobile-line2"></div>
                <div class="mobile-line mobile-line3"></div>
            </div>
        </div>
    </div>
    <progress value=""></progress>`
    mobileBlock.insertAdjacentHTML('beforeend', mobileHTML);

function darkWindow() {
    const headerDarkHTML = `
    <div class="box">
        <div class="display nav-dark">
            <a href="./index.html"><div class="nav-logo-dark"></div></a>
            <div class="nav-list">
                <a href="./courses.html" class="nav-list-item">Все курсы</a href="./courses.html">
                <a href="./events.html" class="nav-list-item">Мероприятия</a>
                <a href="./news.html" class="nav-list-item">Новости</a>
                <a href="./career.html" class="nav-list-item">Карьера</a>
            </div>
            <div class="nav-contact">
                <a href="tel: 8 800 950-33-98" class="nav-contact-tel">8 800 950-33-98 </a>
                <a href="./login.html" class="nav-contact-account">
                    Войти | Регистрация
                </a>
            </div>
        </div>
    </div>
    <progress value=""></progress>`;
    headerDark.insertAdjacentHTML('beforeend', headerDarkHTML);
}

function lightwindow() {
    const headerLightHTML = `
    <div class="box">
        <div class="display">
            <a href="./index.html"><div class="nav-logo"></div></a>
            <div class="nav-list">
                <a href="./courses.html" class="nav-list-item">Все курсы</a>
                <a href="./events.html" class="nav-list-item">Мероприятия</a>
                <a href="./news.html" class="nav-list-item">Новости</a>
                <a href="./career.html" class="nav-list-item">Карьера</a>
            </div>
            <div class="nav-contact">
                <a href="tel: 8 800 950-33-98" class="nav-contact-tel">8 800 950-33-98 </a>
                <a href="./login.html" class="nav-contact-account">
                    Войти | Регистрация
                </a>
            </div>
        </div>
    </div>
    <progress value=""></progress>`;
    headerLight.insertAdjacentHTML('beforeend', headerLightHTML);
}

const mobileMenu = document.querySelector('.mobile-burger');
const mobileLine1 = document.querySelector('.mobile-line1');
const mobileLine2 = document.querySelector('.mobile-line2');
const mobileLine3 = document.querySelector('.mobile-line3');
const mobileBlockBurger = document.querySelector('.mobile-block-burger');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileLine2.classList.toggle('active');
        mobileLine1.classList.toggle('active');
        mobileLine3.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileBlockBurger.classList.toggle('active');
        navMenu.classList.toggle('transform-menu');
    })
}

const progress = document.querySelectorAll('progress');

window.addEventListener('scroll', () => {
    progress.forEach((item) => {
        const window = document.body.scrollTop || document.documentElement.scrollTop
        const offset = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = window / offset
        item.value = scrolled
    })
})
