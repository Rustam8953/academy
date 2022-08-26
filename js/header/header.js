const headerLight = document.querySelector('.header-light');

const headerDark = document.querySelector('.header-dark')

if(headerLight) {
    lightwindow()
}

if(headerDark) {
    darkWindow()
}
function darkWindow() {
    const headerDarkHTML = `
    <div class="box">
        <div class="display nav-dark">
            <a href="./index.html"><div class="nav-logo-dark"></div></a>
            <div class="nav-list">
                <div class="nav-list-item">Все курсы</div>
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
    </div>`;
    headerDark.insertAdjacentHTML('beforeend', headerDarkHTML);
}

function lightwindow() {
    const headerLightHTML = `
    <div class="box">
        <div class="display">
            <a href="./index.html"><div class="nav-logo"></div></a>
            <div class="nav-list">
                <div class="nav-list-item">Все курсы</div>
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
    </div>`;
    headerLight.insertAdjacentHTML('beforeend', headerLightHTML);
}