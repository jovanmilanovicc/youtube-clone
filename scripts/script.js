const showMenu = (headerToggle,navbarId) => {
    let toggleBtn = document.getElementById(headerToggle);
    let nav = document.getElementById(navbarId);

    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            toggleBtn.classList.toggle('fa-times');
        })
    }
}

showMenu('header-toggle', 'nav-bar');

const linkColor = document.querySelectorAll('.nav-link');

function color(){
    linkColor.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(i => i.addEventListener('click', color));

const showMenu2 = document.getElementById('main-menu');
const navElement = document.getElementById('nav-bar');
//const subscribe = document.querySelectorAll('.subscribe-contain,.nav_subititle');

//const navItems = document.querySelectorAll('.nav_subititle.logo_name.nav_dropdown-icon.navtop.nav_link.subscribe-contain');

function HideScrollbar() {
    var style = document.createElement("style");
    style.innerHTML = 'body::-webkit-scrollbar {display: block;}';
    document.head.appendChild(style);
  }

showMenu2.addEventListener('click', () =>{
    navElement.classList.toggle('expand');
    //subscribe.forEach(el => el.classList.toggle('show'));

    //HideScrollbar();
});



const showMore = document.getElementById('showMore');
const moreOptions = document.getElementById('moreOptions');


showMore.addEventListener('click', () => {
    moreOptions.classList.toggle('reply');
    
});