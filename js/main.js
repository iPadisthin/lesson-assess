$(document).ready(function(){
    var count = 0;
   $('.up').click(function(){
      $(this).parent().css('background-color','green');
       count += 1;
       $('.score span').html(count);
   });
    $('.down').click(function(){
      $(this).parent().css('background-color','red'); 
        count -= 1;
       $('.score span').html(count);
   });
});