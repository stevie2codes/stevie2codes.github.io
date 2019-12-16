$(document).ready(function(){

   let controller = new ScrollMagic.Controller();

   new ScrollMagic.Scene({
       triggerElement: '#experience', offset: -300
   })
       .setClassToggle('#experience', 'fade-in')
       .addTo(controller);

       new ScrollMagic.Scene({
         triggerElement: '#portfolio', offset: -300
     })
         .setClassToggle('#portfolio', 'fade-in')
         .addTo(controller);

         new ScrollMagic.Scene({
            triggerElement: '#contact', offset: -300
        })
            .setClassToggle('#contact', 'fade-in')
            .addTo(controller);
 



});
let myButton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()};


    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
    }

        function topFunction(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }