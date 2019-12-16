$(document).ready(function(){

   let controller = new ScrollMagic.Controller();

   new ScrollMagic.Scene({
       triggerElement: '#experience', 
   })
       .setClassToggle('#experience', 'fade-in')
       .addTo(controller);

       new ScrollMagic.Scene({
         triggerElement: '#portfolio', 
     })
         .setClassToggle('#portfolio', 'fade-in')
         .addTo(controller);

         new ScrollMagic.Scene({
            triggerElement: '#contact', 
        })
            .setClassToggle('#contact', 'fade-in')
            .addTo(controller);
});

