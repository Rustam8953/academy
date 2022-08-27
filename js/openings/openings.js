const openingsBlock = document.querySelectorAll('.openings-tab');

openingsBlock.forEach((item) => {
    item.addEventListener('click', (e) => {
        const eventBlock = e.target.closest('.openings-block');

        const eventInfo = eventBlock.querySelector('.openings-info');
        
        const eventIcon = eventBlock.querySelector('.openings-icon');

        eventInfo.classList.toggle('display-none');
        eventIcon.classList.toggle('rotate')
    })
})