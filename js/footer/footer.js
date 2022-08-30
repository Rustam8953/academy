const footerWindow = document.querySelector('.footer-with-block');

const footerLogin = document.querySelector('.footer-login-block');


if(footerWindow) {
    const footerHTMLBlock = `
    <div class="box">

        <div class="footer-position">
            <div class="footer-form">
                <div class="footer-form-left">
                    <div class="footer-form-img">
                        <div class="footer-form-text">
                            <div class="footer-form-title">Помочь с выбором?</div>
                            <div class="footer-form-subtitle">Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут подходящий вариант обучения.</div>
                        </div>
                    </div>
                </div>
                <div class="footer-form-right">
                    <form action="">
                        <div class="footer-form-input">
                            <input type="text" placeholder="Ваше имя" class="footer-form-input-name">
                            <div class="footer-form-input-contact">
                                <input type="text" placeholder="Ваш телефон" data-phone-pattern class="footer-form-input-tel">
                                <input type="text" placeholder="Ваш e-mail" class="footer-form-input-email">
                            </div>
                        </div>
                        <div class="footer-form-btn">
                            <div class="footer-form-btn-text">Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</div>
                            <button class="footer-form-btn-button btn btn-form">Отправить</button>
                        </div>
                    </form>
                </div>
                <div class="footer-form-bird"></div>
            </div>
            <div class="footer-form-bckg"></div>
        </div>
    </div>

        <div class="footer-items">

            <div class="box">
                <div class="footer__contact">
                    <div class="footer__contact-logo"></div>
                    <a href="tel: 8 800 950-33-98" class="footer__contact-tel">8 800 950-33-98 </a>
                    <div class="footer__contact-adress">г. Москва, ул. Ленина, д. 50</div>
                    <a href="mailto:info@hodfutureacademy.ru" class="footer__contact-mail">info@hodfutureacademy.ru</a>
                    <div class="footer__contact-soc">
                        <a href="" class="footer__contact-soc-item1 footer__contact-soc-item"></a>
                        <a href="" class="footer__contact-soc-item2 footer__contact-soc-item"></a>
                        <a href="" class="footer__contact-soc-item3 footer__contact-soc-item"></a>
                        <a href="" class="footer__contact-soc-item4 footer__contact-soc-item"></a>
                        <a href="" class="footer__contact-soc-item5 footer__contact-soc-item"></a>
                    </div>
                    <div class="footer__contact-subtitle">© ХОД, Future Academy</div>
                </div>

                <div class="footer__list">

                    <div class="footer__list-menu">
                        <div class="footer__list-title">Детям</div>
                        <div class="footer__list-items">
                            <a href="" class="footer__list-item">Робототехника</a>
                            <a href="" class="footer__list-item">Создание игр</a>
                            <a href="" class="footer__list-item">Программирование</a>
                            <a href="" class="footer__list-item">Мультимедиа</a>
                            <a href="" class="footer__list-item">Soft skills</a>
                            <a href="" class="footer__list-item">Шахматы</a>
                            <a href="" class="footer__list-item">Боулинг</a>
                            <a href="" class="footer__list-item">Создание игр</a>
                            <a href="" class="footer__list-item">Программирование</a>
                            <a href="" class="footer__list-item">Мультимедиа</a>
                            <a href="" class="footer__list-item">Soft skills</a>
                        </div>
                    </div>

                    <div class="footer__list-menu">
                        <div class="footer__list-title">Подросткам</div>
                        <div class="footer__list-items">
                            <a href="" class="footer__list-item">Web-разработка</a>
                            <a href="" class="footer__list-item">Прикладное программирование</a>
                            <a href="" class="footer__list-item">Графическое моделирование</a>
                            <a href="" class="footer__list-item">Game Development</a>
                            <a href="" class="footer__list-item">Soft skills</a>
                            <a href="" class="footer__list-item">Разработчик мобильных приложений</a>
                            <a href="" class="footer__list-item">Блогинг</a>
                            <a href="" class="footer__list-item">Создание игр</a>
                            <a href="" class="footer__list-item">Программирование</a>
                            <a href="" class="footer__list-item">Мультимедиа</a>
                            <a href="" class="footer__list-item">Soft skills</a>
                        </div>
                    </div>

                    <div class="footer__list-menu">
                        <div class="footer__list-title">Взрослым</div>
                        <div class="footer__list-items">
                            <a href="" class="footer__list-item">Разработчик игр на Unity</a>
                            <a href="" class="footer__list-item">Разработка ПО</a>
                            <a href="" class="footer__list-item">Графический Дизайн</a>
                            <a href="" class="footer__list-item">Тестировщик ПО</a>
                            <a href="" class="footer__list-item">Интернет Маркетинг</a>
                            <a href="" class="footer__list-item">Java-разработчик</a>
                            <a href="" class="footer__list-item">Python–разработчик</a>
                            <a href="" class="footer__list-item">IOS-разработчик</a>
                            <a href="" class="footer__list-item">Программированиеa</a>
                        </div>
                    </div>

                    <div class="footer__list-menu">
                        <div class="footer__list-title">Информация</div>
                        <div class="footer__list-items">
                            <a href="" class="footer__list-item">Об академии</a>
                            <a href="./../events.html" class="footer__list-item">Мероприятия</a>
                            <a href="./../news.html" class="footer__list-item">Новости</a>
                            <a href="" class="footer__list-item">База знаний</a>
                            <a href="./../career.html" class="footer__list-item">Карьера</a>
                            <a href="./../contact.html" class="footer__list-item">Контакты</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>`;

    footerWindow.insertAdjacentHTML('beforeend', footerHTMLBlock);
}

if(footerLogin) {
    const footerHTMLBlock = `
        <div class="footer-items">
            <div class="box">
                <div class="footer__contact">
                    <div class="footer__contact-logo"></div>
                    <a href="tel: 8 800 950-33-98" class="footer__contact-tel">8 800 950-33-98 </a>
                    <div class="footer__contact-adress">г. Москва, ул. Ленина, д. 50</div>
                    <a href="mailto:info@hodfutureacademy.ru" class="footer__contact-mail">info@hodfutureacademy.ru</a>
                    <div class="footer__contact-soc">
                        <a href="" class="footer__contact-soc-item1 footer__contact-soc-item"></a>
                        <a href="" class="footer__contact-soc-item2 footer__contact-soc-item"></a>
                        <a href="" class="footer__contact-soc-item3 footer__contact-soc-item"></a>
                        <a href="" class="footer__contact-soc-item4 footer__contact-soc-item"></a>
                        <a href="" class="footer__contact-soc-item5 footer__contact-soc-item"></a>
                    </div>
                    <div class="footer__contact-subtitle">© ХОД, Future Academy</div>
                </div>

                <div class="footer__list">

                    <div class="footer__list-menu">
                        <div class="footer__list-title">Детям</div>
                        <div class="footer__list-items">
                            <a href="" class="footer__list-item">Робототехника</a>
                            <a href="" class="footer__list-item">Создание игр</a>
                            <a href="" class="footer__list-item">Программирование</a>
                            <a href="" class="footer__list-item">Мультимедиа</a>
                            <a href="" class="footer__list-item">Soft skills</a>
                            <a href="" class="footer__list-item">Шахматы</a>
                            <a href="" class="footer__list-item">Боулинг</a>
                            <a href="" class="footer__list-item">Создание игр</a>
                            <a href="" class="footer__list-item">Программирование</a>
                            <a href="" class="footer__list-item">Мультимедиа</a>
                            <a href="" class="footer__list-item">Soft skills</a>
                        </div>
                    </div>

                    <div class="footer__list-menu">
                        <div class="footer__list-title">Подросткам</div>
                        <div class="footer__list-items">
                            <a href="" class="footer__list-item">Web-разработка</a>
                            <a href="" class="footer__list-item">Прикладное программирование</a>
                            <a href="" class="footer__list-item">Графическое моделирование</a>
                            <a href="" class="footer__list-item">Game Development</a>
                            <a href="" class="footer__list-item">Soft skills</a>
                            <a href="" class="footer__list-item">Разработчик мобильных приложений</a>
                            <a href="" class="footer__list-item">Блогинг</a>
                            <a href="" class="footer__list-item">Создание игр</a>
                            <a href="" class="footer__list-item">Программирование</a>
                            <a href="" class="footer__list-item">Мультимедиа</a>
                            <a href="" class="footer__list-item">Soft skills</a>
                        </div>
                    </div>

                    <div class="footer__list-menu">
                        <div class="footer__list-title">Взрослым</div>
                        <div class="footer__list-items">
                            <a href="" class="footer__list-item">Разработчик игр на Unity</a>
                            <a href="" class="footer__list-item">Разработка ПО</a>
                            <a href="" class="footer__list-item">Графический Дизайн</a>
                            <a href="" class="footer__list-item">Тестировщик ПО</a>
                            <a href="" class="footer__list-item">Интернет Маркетинг</a>
                            <a href="" class="footer__list-item">Java-разработчик</a>
                            <a href="" class="footer__list-item">Python–разработчик</a>
                            <a href="" class="footer__list-item">IOS-разработчик</a>
                            <a href="" class="footer__list-item">Программированиеa</a>
                        </div>
                    </div>

                    <div class="footer__list-menu">
                        <div class="footer__list-title">Информация</div>
                        <div class="footer__list-items">
                            <a href="" class="footer__list-item">Об академии</a>
                            <a href="./../events.html" class="footer__list-item">Мероприятия</a>
                            <a href="./../news.html" class="footer__list-item">Новости</a>
                            <a href="" class="footer__list-item">База знаний</a>
                            <a href="./../career.html" class="footer__list-item">Карьера</a>
                            <a href="./../contact.html" class="footer__list-item">Контакты</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>`;

    footerLogin.insertAdjacentHTML('beforeend', footerHTMLBlock);
}