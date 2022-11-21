const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav .nav-bottom ul');

menuToggle.addEventListener('click', function() {
	nav.classList.toggle('slide');
})

document.removeChild('nav .nav-bottom ul .satu')