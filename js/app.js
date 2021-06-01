$(function() {


    // FILTER

    let filter = $('[data-filter]');

    filter.on('click', function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $('[data-cat').show();
        } else {
            $('[data-cat]').each(function() {
                let workCat = $(this).data('cat'); 
                    if (workCat != cat) {
                       $(this).hide();
                    } else {
                       $(this).show();
                    }
            });
        }
    });



    //  MODAL


    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).show();
        $('body').addClass('no-scroll');

        setTimeout(function() { 
            $(modalId).find('.modal__dialog').css({transform: 'scale(1)'}); 
        }, 200);

        $("#workSlider").slick('setPosition');
        $("#workSlider2").slick('setPosition');


    });

    modalClose.on('click', function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find('.modal__dialog').css({transform: 'scale(0)'}); 

        setTimeout(function() { 
            $(modalParent).hide();
            $('body').removeClass('no-scroll');
        }, 200);

    });

    $('.modal').on('click', function(event) {
        let $this = $(this);

        $this.find('.modal__dialog').css({transform: 'scale(0)'});

        setTimeout(function() { 
            $this.hide();
            $('body').removeClass('no-scroll');
        }, 200);
    });  

        
    $('.modal__dialog').on('click', function(event) {
        event.stopPropagation();
    });


    // Slider https://kenwheeler.github.io/slick/

    
$('#workSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

     
$('#workSlider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });



// Burger

$("#navToggle").on('click', function() {
$('#nav').toggleClass('show');

});



});