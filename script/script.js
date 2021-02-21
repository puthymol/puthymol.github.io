function openNav() {

    let width = window.screen.width;
    console.log(width)
    if(width <560){
        document.getElementById("sidenav").style.width = width+"px";
        document.getElementById("main").style.marginLeft = width+"px";
    }else{
        document.getElementById("sidenav").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";
    }

    document.getElementById("btn-open").style.display = "none";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("btn-open").style.display = "inline";
    document.body.style.backgroundColor = "white";
}

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
            if (refElement.position()?.top <= scrollPos && refElement.position()?.top + refElement.height() > scrollPos) {
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    });
    $( "#scroll-top" ).click(function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });


    $(document).on("scroll", onScroll);
});


function onScroll(event){
    console.log("Yo")

}
