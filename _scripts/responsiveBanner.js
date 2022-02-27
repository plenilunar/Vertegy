$(document).ready(function() {
    
    $('.currentCaption').css('display', 'list-item');
    
   function timerImageChange() {
            
            
            ///////photos///////
            $('.currentImage').fadeOut().removeClass('currentImage');
            $('.nextImage').fadeIn().removeClass('nextImage').addClass('currentImage');
                if($('.slides img.currentImage').next().length == 0){
                    $('.slides img.one').addClass('nextImage');
                } else {
                    $('.slides img.currentImage').next().addClass('nextImage');
                }


            ///////words//////
            $('.currentCaption').fadeOut().removeClass('currentCaption');
            $('.nextCaption').fadeIn().removeClass('nextCaption').addClass('currentCaption');
                if($('.rCaptions li.currentCaption').next().length == 0){
                    $('.rCaptions li.one').addClass('nextCaption');
                } else {
                $('.rCaptions li.currentCaption').next().addClass('nextCaption');
                }
       


            /////////selectors///////
            $('.currentSelector').removeClass('currentSelector');
            $('.nextSelector').removeClass('nextSelector').addClass('currentSelector');
                if($('.rSelectors li.currentSelector').next().length == 0){
                    $('.rSelectors li.one').addClass('nextSelector');
                } else {
                    $('.rSelectors li.currentSelector').next().addClass('nextSelector');
                }
       }
    
    
    function manualImageChange(a,b) {
        if (($(b).hasClass('currentImage'))==false){
            
            var clicked = a;
            var imageNext = b;


            /////photos///////
            $('.nextImage').removeClass('nextImage');
            $('.currentImage').fadeOut().removeClass('currentImage');
            $('.slides '+imageNext ).fadeIn().addClass('currentImage');
                if($('.slides img.currentImage').next().length == 0){
                    $('.slides img.one').addClass('nextImage');
                } else {
                    $('.slides img.currentImage').next().addClass('nextImage');
                }


            /////////words///////
            $('.currentCaption').fadeOut().removeClass('currentCaption');
            $('.nextCaption').removeClass('nextCaption');
            $('.rCaptions '+clicked ).fadeIn().addClass('currentCaption');
                if($('.rCaptions li.currentCaption').next().length == 0){
                    $('.rCaptions li.one').addClass('nextCaption');
                } else {
                $('.rCaptions li.currentCaption').next().addClass('nextCaption');
                }
       

            //////////selectors/////
            $('.nextSelector').removeClass('nextSelector');
            $('.currentSelector').removeClass('currentSelector');
            $('.rSelectors '+clicked ).addClass('currentSelector');
                if($('.rSelectors li.currentSelector').next().length == 0){
                    $('.rSelectors li.one').addClass('nextSelector');
                } else {
                    $('.rSelectors li.currentSelector').next().addClass('nextSelector');
                }
                
            
            clearInterval(rotatorInterval);
            
            rotatorInterval = setInterval(function() {
            timerImageChange();
                
		}, 3500 );
        }
    }
    
    
    
    rotatorInterval = setInterval(function() {
            timerImageChange();
		}, 3500 );
    
    $('.rSelectors li').click(function(){
         switch (true) {
            case $(this).hasClass('one'):
            manualImageChange('li.one', 'img.one');
            break;
            case $(this).hasClass('two'):
            manualImageChange('li.two', 'img.two');
            break;
            case $(this).hasClass('three'):
            manualImageChange('li.three', 'img.three');
            break;
            case $(this).hasClass('four'):
            manualImageChange('li.four', 'img.four');
            break;
            case $(this).hasClass('five'):
            manualImageChange('li.five', 'img.five');
            break;
        } 
        
    });
    
}); //end doc ready