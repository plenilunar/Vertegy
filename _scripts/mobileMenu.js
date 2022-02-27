$(document).ready(function() {
    $(window).resize(function() {
        if (($(document).width() >= 615)) {
        $('.popUpNav').css('display','block'); 
        $('.popUpNav').css('height','0px');   
        } else {
           
        }
    });
    
    $('.mobileNavButton').click(function() {
        if ($('.popUpNav').css('height') < '200') {
            $('.popUpNav').css('display','block');
            $('.popUpNav').animate({
                height: '240px',
                opacity: 1
            }, 500, function() {
                //action for end of animation
            });
    
        } else {
            $('.popUpNav').animate({
                height: '0px',
                opacity: 0
            }, 500, function() {
                //action for end of animation
            });  
        } //end if
  }); // end click function
    
    $('.selected').click(function() {
        $('.selected').slideUp();
        $('.next').slideDown();
            });
    
}); //end doc ready