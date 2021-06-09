console.log("hi");
const filter = document.querySelector('.filter-button');
const drop = document.querySelector('.filter-dropdown');


filter.addEventListener('click', () => {
    if (drop.classList.contains("hide")) {
        drop.classList.remove("hide");
        drop.classList.add("show");
    } else {
        drop.classList.remove("show");
        drop.classList.add("hide"); 
    }
});