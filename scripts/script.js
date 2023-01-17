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