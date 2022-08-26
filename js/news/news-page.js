const newsPage = document.querySelector('.news-page');

let pageItem = []

if(localStorage.getItem('page')) {
    pageItem = JSON.parse(localStorage.getItem('page'));

    pageItem.forEach((page) => renderPage(page))

    if(pageItem.length > 0) {
        pageItem.shift()
    }
}

console.log(pageItem)

window.addEventListener('click', (e) => {
    if(e.target.closest('.data-news')) {
        const dataPage = e.target.closest('.data-news');
        const pageArray = {
            date: dataPage.querySelector('.news-date').innerText,
            title: dataPage.querySelector('.news-title').innerText,
            subtitle: dataPage.querySelector('.news-subtitle').innerText,
            img: dataPage.querySelector('.news-img').getAttribute('img'),
        }
        pageItem.push(pageArray)
        saveLocalStorage();
    }
})

function saveLocalStorage() {
    localStorage.setItem('page', JSON.stringify(pageItem));
}

function renderPage(page) {
    const pageHTML = `
    <div class="page">
        <div class="title">${page.title}</div>
        <div class="news-page-text">${page.subtitle}</div>
        <div class="news-page-block">
            <div class="news-page-img">${page.img}</div>
        </div>
        <div class="news-page-text">${page.subtitle}</div>
    </div>`
    newsPage.insertAdjacentHTML('beforeend', pageHTML);
}