const openingsBlock = document.querySelectorAll('.openings-tab');

openingsBlock.forEach((item) => {
    item.addEventListener('click', (e) => {
        const eventBlock = e.target.closest('.openings-block');

        const eventInfo = eventBlock.querySelector('.openings-info')

        eventInfo.classList.toggle('display-none');
    })
})