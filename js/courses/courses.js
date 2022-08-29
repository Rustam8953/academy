const windowCourse = document.querySelector('.courses__items')

const coursArray = [
    {
        id: 1,
        title: "«Разработка мобильных приложений»",
        text: "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        date: "24 месяца",
        color: "#C7EEFF",
    },
    {
        id: 2,
        title: "«Разработка мобильных приложений»",
        text: "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        date: "24 месяца",
        color: "#FFCE94",
    },
    {
        id: 3,
        title: "«Разработка мобильных приложений»",
        text: "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        date: "24 месяца",
        color: "#FFE38E"
    },
    {
        id: 4,
        title: "«Разработка мобильных приложений»",
        text: "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах.",
        date: "24 месяца",
        color: "#DDDDFF"
    }
]

coursArray.forEach((item) => {
    const coursHTML = `
    <div class="courses__item" data-id=${item.id} style="background-color: ${item.color}">
        <div class="courses__item-subtitle">Программа</div>
        <div class="courses__item-title">${item.title}</div>
        <div class="courses__item-text">${item.text}</div>
        <div class="courses__item-date">${item.date}</div>
    </div>`;
    windowCourse.insertAdjacentHTML('beforeend', coursHTML)
})