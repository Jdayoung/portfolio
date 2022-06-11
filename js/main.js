$(function() {

    $('body').mousemove(function(e){

        gsap.to('.cursor',0.5,{
            x: e.clientX - ($('.cursor').width()/2),
            y: e.clientY -($('.cursor').width()/2),
            stagger:0.03
        })
    })





    const config = {
        view: document.querySelector('.container'),
        native: true,
      };
      
      const r = window.rolly(config);
      r.init();



})