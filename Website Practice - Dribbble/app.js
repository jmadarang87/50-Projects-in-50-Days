console.log("hi");
const filterBtn = document.querySelector('.filter-button');
const drop = document.querySelector('.filter-dropdown');
const filterArrow = document.querySelector('.filter-arrow');

filterBtn.addEventListener('click', () => {
    if (filterArrow.classList.contains('down')) {
        filterArrow.classList.remove('down');
        filterArrow.classList.add('up');
        drop.classList.remove('hide');
        drop.classList.add('show');
    } else if (filterArrow.classList.contains('up')) {
        filterArrow.classList.remove('up');
        filterArrow.classList.add('down');
        drop.classList.remove('show');
        drop.classList.add('hide');
    } else {
        filterArrow.classList.add('up');
        drop.classList.add('show');
    };
});
