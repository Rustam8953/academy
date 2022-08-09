const reviewWindow = document.querySelector('.review-window');

const reviewArray = [
    {
        id: 1,
        name: "Имя Фамилия",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        star: "4,87 / 5",
        about: "Студент курса «WEB-разработчик»",
    },
    {
        id: 2,
        name: "Имя Фамилия",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. ",
        star: "4,27 / 5",
        about: "Студент курса «WEB-разработчик»",
    },

    {
        id: 3,
        name: "Имя Фамилия",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!",
        star: "4,47 / 5",
        about: "Студент курса «WEB-разработчик»",
    },
    {
        id: 4,
        name: "Имя Фамилия",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales.",
        star: "4,97 / 5",
        about: "Студент курса «WEB-разработчик»",
    },
    {
        id: 5,
        name: "Имя Фамилия",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales.",
        star: "4,47 / 5",
        about: "Студент курса «WEB-разработчик»",
    },
    {
        id: 6,
        name: "Имя Фамилия",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius.",
        star: "4,47 / 5",
        about: "Студент курса «WEB-разработчик»",
    },
    {
        id: 7,
        name: "Имя Фамилия",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!",
        star: "4,47 / 5",
        about: "Студент курса «WEB-разработчик»",
    },
    {
        id: 8,
        name: "Имя Фамилия",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales.",
        star: "4,47 / 5",
        about: "Студент курса «WEB-разработчик»",
    },
]

reviewArray.forEach((item) => {
    const reviewHTML = `
    <span class="slider-item review-item" data-id=${item.id}>
        <div class="review-info">
            <div class="review-img"></div>
            <div class="review-contact">
                <div class="review-name">${item.name}</div>
                <div class="review-about">${item.about}</div>
            </div>
        </div>
        <div class="review-text">${item.text}</div>
        <div class="review-star">${item.star}</div>
    </span>`;
    reviewWindow.insertAdjacentHTML('beforeend', reviewHTML);
})

console.log(1180/4);