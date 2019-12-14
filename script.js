$(document).ready(function(){

$("#about").on("click",function(){
    console.log("hello");
    $(".container").css("display","none");
    $("#pageTwo").css("display","block");
});

})