$(document).ready(function(){

    $(document).scroll(function() {
        let y = $(this).scrollTop();
        if (y > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }

        let scrollPos = y;
        $('#sidenav ul li a').each(function () {
            let currLink = $(this);
            let refElement = $(currLink.attr("href"));
            console.log("scrollPOS", scrollPos);
            console.log("Height", refElement.height());
            console.log("Top", refElement.position()?.top);
            if (refElement.position()?.top <= scrollPos && refElement.position()?.top + refElement.height() > scrollPos ) {
                $('#sidenav ul li a').removeClass("active");
                currLink.addClass("active");
            }else{
                currLink.removeClass("active");
            }
        });
        
    });
    $( "#sidenav ul li a" ).click(function() {
        let width = window.screen.width;
        if(width <560) closeNav();
        $('#sidenav ul li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        let target = this.hash, menu = target;
        $target = $(target);
        let scrollTop = $target.offset().top;
        if(width<560) scrollTop -= 70
        $('html, body').stop().animate({
            'scrollTop': scrollTop
        }, 'smooth', function () {
            window.location.hash = target;
        });
    });
    $( "#scroll-top" ).click(function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});

function openNav() {
    let width = window.screen.width;
    if(width <560){
        document.getElementById("sidenav").style.width = "100%";
    }else{
        document.getElementById("sidenav").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";
    }
    document.getElementById("main").style.paddingTop= "0";
    document.getElementById("header").style.display = "none";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.paddingTop= "80px";
    document.getElementById("header").style.display = "inline";
}
