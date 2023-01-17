const showMenu = (headerToggle,navbarId) => {
    const toggleBtn = document.getElementById(headerToggle);

    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            toggleBtn.classList.toggle('fa-times');
        })
    }
}

showMenu('header-toggle', 'navbar');

const linkColor = document.querySelectorAll('.nav-link');

function color(){
    linkColor.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(i => i.addEventListener('click', color));