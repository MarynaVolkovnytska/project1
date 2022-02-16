'use strict';

document.addEventListener("DOMContentLoaded", () => {

    $(document).ready(function () {
        $('.carousel__inner').slick({
            speed: 1200,            
            prevArrow: '<button type="button" class="slick-prev"><img src="icon/prev.png"/></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icon/next.png"/></button>',
            responsive: [
                {
                 breakpoint: 992,
                    settings: {                    
                    dots: true,
                    arrows: false
                }


            }]
        });
    });


});