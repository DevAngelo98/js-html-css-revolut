$(document).ready(function(){

  $(".downli").click(function(){
   $(".downli").not($(this)).removeClass("active");
   $(this).toggleClass("active");
  });

  $(".my_bars").click(function(){
    $(".nav_bar").toggleClass("hambactive");
  });
    

});
