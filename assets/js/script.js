function toggleOpen() {
    const icon = document.querySelector('.hamburgerIcon');
    const menu = document.querySelector('.hamburgerLink');

    icon.classList.toggle('open');
    menu.classList.toggle('open');
}