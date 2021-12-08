const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {

        // toggle links
    nav.classList.toggle('nav-active');

        // animate links
    navlinks.forEach(links, index=>{
        if(links.style.animation){
               link.style.animation = '';
        } else {
            link.style.animation =`navLinkFade 0.5s ease fowards ${index /7 +0.3}s`;
           }
        });
        // burger animation
        burger.classList.toggle('toggle');

    });
}

navSlide();
