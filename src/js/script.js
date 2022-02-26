// Burger menu
$(function() {
    $('#nav-icon5').click(function(){
        $(this).toggleClass('open');
    });
});

$(document).ready(function() {
    $("#nav-icon5").click(function() {
      $(this).toggleClass("active");
      $('.burger-bg').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
});

// Swiper

new Swiper('.animals-cards', {
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
        },
        pagination: {
            el: '.swiper-pagination',
        },
})

// Modal

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        $('.modal-dialog').addClass('zoomIn');
        $('.modal-dialog').removeClass('zoomOut');

        setTimeout(function() {
            $(modalId).find(".modal-dialog").css({
            });
        }, 200);
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');



        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
            $('.modal-dialog').removeClass('zoomIn');
        });
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);


        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
            $('.modal-dialog').removeClass('zoomIn');
        });
    });

    $(".modal-dialog").on("click", function(event) {
        event.stopPropagation();
});
