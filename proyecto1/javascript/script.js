// script.js
document.getElementById('menu-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '0px';
});

document.getElementById('close-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-250px';
});
