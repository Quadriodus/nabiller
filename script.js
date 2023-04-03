const nav_menu = document.getElementById('ham')
const sidebar = document.getElementById('sidebar')
nav_menu.addEventListener('click', function(){
    sidebar.classList.toggle('d-none w-100')
})