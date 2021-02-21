function openNav() {

    let width = window.screen.width;
    if(width <560){
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("main").style.marginLeft = "100%";
    }else{
        document.getElementById("mySidenav").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";
    }

    document.getElementById("btnOpen").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("btnOpen").style.display = "inline";
    document.body.style.backgroundColor = "white";
}

$(document).ready(function(){
    $(document).scroll(function() {
        let y = $(this).scrollTop();
        if (y > 400) {
            $('#yo').fadeIn();
        } else {
            $('#yo').fadeOut();
        }
    });
    $( "#yo" ).click(function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});

