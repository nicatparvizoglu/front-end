$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    $("#mynavbar").css("top","5%")
    if(scroll < 200){
        $('#mynavbar').css('background','transparent');
    }
    else{
        $('#mynavbar').css('background','linear-gradient(89deg,#a5215e 3%,#ee5586 98%');
        $("#mynavbar").css("top","0")
    }
});

var imp=document.querySelector(".imp")
var chat=document.querySelector(".main-chat")
imp.onclick=function(){
    chat.classList.toggle("active")
}


$('.case-tittle').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  })
  ;
 