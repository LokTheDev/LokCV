//<--intial for Main-->
$(".IDcard").hide();
$("#iconText").hide();
$(".maintext").hide();
$(".mainH2").hide();
$(".mainP").hide();
$(".TBC").hide();


$(document).ready(function (){
    $(".IDcard").fadeIn(3000);
    $("#iconText").fadeIn(3000);
    $(".maintext").fadeIn(3000);
    $(".mainH2").fadeIn(3000);
    $(".mainP").fadeIn(3000);
    $(".TBC").fadeIn(3000);
});


//<!--intial for skill-->
$(".skillTitle").slideUp();
$(".skillImg").slideUp();
$(".skillText").slideUp();

//get Scroll value//
$(window).scroll( function() { 
    scrolled_val = $(document).scrollTop().valueOf();
    
    if(scrolled_val >= 582){
    $(".skillTitle").slideDown(2000);
    $(".skillImg").slideDown(2500);    
    }
    return scrolled_val
       });

for(let i = 1; i < 10;i++){

$("#SP"+ i).on("click", function(){
    $("#ST"+ i).toggle("slide")})
}

//Project Effect
$(".pContainer2").slideUp();

if( $(document).scrollTop().valueOf() < 3000){
$(window).scroll( function() { 
    NEWscrolled_val = $(document).scrollTop().valueOf();
    
    if(NEWscrolled_val >= 1550){
        scroller(NEWscrolled_val);
        scroller2(NEWscrolled_val);
        scroller3(NEWscrolled_val);
    }})
scroller = (scroll) =>{
    newscroll= -scroll+2215;
    
    $("#PB1").css("margin-left", newscroll+"px");       
}

scroller2 = (scroll) =>{
    newscroll= -scroll+3500;    
    $(".pContainer2").slideDown(2000);
}

scroller3 = (scroll) =>{
    newscroll= -scroll+3000;    
    $("#PB3").css("margin-right", newscroll+"px"); 
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    $("#PB3").css("margin-right", "0px"); 
     
    }
}
}
