$(document).ready(function () {

    // Apply 'open' status to HTML elements
    $(`.menu-toggler`).on(`click`, function () {
        $(this).toggleClass(`open`);
        $(`.top-nav`).toggleClass(`open`);
    });
    $(`.top-nav .nav-link`).on(`click`, () => {
        $(`.menu-toggler`).toggleClass(`open`);
        $(`.top-nav`).toggleClass(`open`);
    });

    // Smooth Scrool Navigation
    $(`nav a[href*="#"]`).on(`click`, function(){
        $(`html, body`).animate({
            scrollTop: $($(this).attr(`href`)).offset().top - 100
        }, 2000);
    });
    $(`#up`).on(`click`, () => {
        $(`html, body`).animate({
            scrollTop: 0
        },2000);
    });
    
    // Parallax Effects
    const paralliam = document.querySelectorAll(`.paralliam`)
    window.addEventListener(`scroll`, () => {
        let scroll = window.pageYOffset;
        
        paralliam.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateX(${scroll * speed}px)`;
        })
        
    })


// Fix menu toggler 
    function stickyNavigation () {
        const body = $(`body`);
        if($(window).scrollTop()>=navTop){
            body.css(`padding-top`,nav.outerHeight()+"px");
            body.addClass(`fixedNav`);
        }else{
            body.css(`padding-top`,0);
            body.removeClass(`fixedNav`);
        }
    }
    const nav =$(`#navigationBar`);
    const navTop = nav.offset().top;
    $(window).on(`scroll`, stickyNavigation());



    // Initialize Animate on Scroll library 
    AOS.init({
        easing: `ease`,
        duration: `1800`,
        once: true,
    })
})