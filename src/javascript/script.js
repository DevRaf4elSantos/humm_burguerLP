$(document).ready(() => {
    
    $('#btn_mobile').on('click', () => {
        $('#menu_mobile').toggleClass('active');
        $('#btn_mobile').find('i').toggleClass('fa-x');
    })

    const sections = $('section');
    const navItem = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        let activeSectionIndex = 0
        const scrollPosition = $(window).scrollTop() -  header.outerHeight();

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none')
        }
        else{
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.3)')
        }

        sections.each(function(i){
            const section = $(this)
            const sectionTop = section.offset().top - 100
            const sectionBottom = sectionTop + section.outerHeight()
            
            if(scrollPosition >= sectionTop && scrollPosition <= sectionBottom){
                activeSectionIndex = i
                return false
            }
        })
        navItem.removeClass('active')
        $(navItem[activeSectionIndex]).addClass('active')
        
    })

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    } );
    ScrollReveal().reveal('.dish', {
        origin: 'top',
        duration: 2000,
        distance: '20%'
    } );
    ScrollReveal().reveal('#testimonials_chef', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    } );
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    } );
})


