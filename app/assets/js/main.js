var offsetTop=$('.about').offset().top+($('.about').height()/2);
$(window).scroll(function(){
    if($(window).scrollTop()>offsetTop){
        $('.item').css({'transform':'scale(1)'});
    }
})