$(document).ready(function(){
   $('.up').click(function(){
      $(this).parent().css('background-color','green');
   });
    $('.down').click(function(){
      $(this).parent().css('background-color','red'); 
   });
});