const itemWindow = document.querySelector('.news-items');

const newsPage = document.querySelector('.news-page');

const newsArray = [
    {
        id: 1,
        title: "Заголовок новости",
        date: "1 ноября 2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        img: "unsplash_2EJCSULRwC8.svg"
    },
    {
        id: 2,
        title: "Заголовок новостиdasas",
        date: "16 ноября 2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        img: "unsplash_XJXWbfSo2f0.svg"
    },
    {
        id: 3,
        title: "Заголовок новостиdasdas",
        date: "15 октября 2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        img: "unsplash_SYTO3xs06fU.svg"
    },
    {
        id: 4,
        title: "Заголовок новости",
        date: "20 августа 2022",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        img: "unsplash_MxVkWPiJALs.svg"
    },
    {
        id: 5,
        title: "Заголовок новости",
        date: "29 ноября 2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        img: "unsplash_m_HRfLhgABo.svg"
    },
    {
        id: 6,
        title: "Заголовок новости",
        date: "16 декабря 2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.",
        img: "unsplash_IayKLkmz6g0.svg"
    },
]

let pageItem = []

if(localStorage.getItem('page')) {
    pageItem = JSON.parse(localStorage.getItem('page'));
    if(newsPage) {
        pageItem.forEach((page) => renderPage(page))
    }

    if(pageItem.length > 0) {
        pageItem.shift()
    }
}

newsArray.forEach((item) => {
    const newsHTML = `
    <a href="./news-page.html" class="news-item data-news">
        <div class="news-img" img="${item.img}" style="background: url('./img/container/news/${item.img}');"></div>
        <div class="news-info">
            <div class="news-date">${item.date}</div>
            <div class="news-title">${item.title}</div>
            <div class="news-subtitle">${item.text}</div>
            <div class="news-link">Подробнее</div>
        </div>
    </a>`;
    itemWindow.insertAdjacentHTML('beforeend', newsHTML);
})

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
        <div class="news-date news-page-date">${page.date}</div>
        <div class="news-page-text">${page.subtitle} Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst.</div>
        <div class="news-page-block">
            <div class="news-vector news-vector1"></div>
            <div class="news-vector news-vector2"></div>
            <div class="news-vector news-vector3"></div>
            <div class="news-vector news-vector4"></div>
            <div class="news-page-img" style="background: url('./img/container/news/${page.img}'); background-repeat: no-repeat; background-size: cover; margin-right: 0;"></div>
        </div>
        <div class="news-page-text">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst. Vestibulum tristique porta aliquam. Suspendisse blandit et sapien sit amet sagittis. Praesent tristique ante sed lacinia congue. Etiam egestas mauris at arcu gravida interdum. Aliquam feugiat risus lacus, ac rutrum dolor porttitor vitae. Etiam porta, nunc sit amet pellentesque posuere, risus nulla sollicitudin enim, commodo bibendum nulla lacus et lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</br></br>

            Proin sit amet lorem consequat, elementum nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a, elementum facilisis tortor. Sed porta ultrices orci, maximus tincidunt est sodales vel. Vestibulum lobortis turpis nibh. Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est porta, fringilla ligula nec, ornare dolor. In tristique sagittis mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis felis molestie dictum. Sed consequat malesuada quam, id malesuada augue euismod nec. Phasellus ultrices velit non venenatis sagittis.

        </div>
    </div>`
    newsPage.insertAdjacentHTML('beforeend', pageHTML);
}