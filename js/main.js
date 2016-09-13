$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  
  if (startchange.length){
      $(document).scroll(function() { 
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
            $(".navbar-default").css('background-color', '#ffffff');
          } else {
            $('.navbar-default').css('background-color', 'transparent');
          }
      });
  }
  console.log($('.navbar-toggle').hasClass('collapsed'));
  $('.navbar-toggle').on('click', function () {
    if($('.navbar-toggle').hasClass('collapsed')==false){
        $('.navbar-default').css('background-color', 'transparent');
    }else{
        $(".navbar-default").css('background-color', '#ffffff');
    }
    // $(".navbar-default").css('background-color', '#ffffff');
  });
});