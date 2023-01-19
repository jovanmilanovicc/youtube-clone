const showReply = document.getElementById('show-reply');
const reply = document.getElementById('reply')
showReply.addEventListener('click', () => {
    showReply.classList.toggle('reply');
    showReply.firstElementChild.classList.toggle('fa-caret-up');
    reply.classList.toggle('apear');
});

const showMenu2 = document.getElementById('main-menu');
const navElement = document.getElementById('nav-bar');
//const subscribe = document.querySelectorAll('.subscribe-contain,.nav_subititle');

//const navItems = document.querySelectorAll('.nav_subititle.logo_name.nav_dropdown-icon.navtop.nav_link.subscribe-contain');

showMenu2.addEventListener('click', () =>{
    navElement.classList.toggle('expand');
    //subscribe.forEach(el => el.classList.toggle('show'));

    //HideScrollbar();
});

const showMore = document.getElementById('showMore');
const moreOptions = document.getElementById('moreOptions');
const icon = document.getElementById('icon');

showMore.addEventListener('click', () => {
    moreOptions.classList.toggle('reply');
    icon.classList.toggle('fa-caret-up');
});