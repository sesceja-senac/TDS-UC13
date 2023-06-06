$(".menu-toggle").click(function(){
    $(".bg-fundo").toggleClass("mod");
    $('body').toggleClass('overflow');
    $('.menu').toggleClass('fade-check');
});

$(".bg-fundo").click(function(){
    $(this).removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});

$(".fundo-item").click(function(){
    $(".bg-fundo").removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#btn-topo').addClass('show');
        } else {
            $('#btn-topo').removeClass('show');
        }
    });
    
    $('#btn-topo').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#btn-topomobile').addClass('show');
        } else {
            $('#btn-topomobile').removeClass('show');
        }
    });
    
    $('#btn-topomobile').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
});
