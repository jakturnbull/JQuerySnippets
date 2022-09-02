$(document).ready(function() {
  $("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
  });
  $("body").keypress(function(event){

    $("h1").text(event.key);
  });
  $("h1").on("mouseover", function(){
    $("h1").css("color", "green");
  })
  $("button").html("<em>dont click</em>")
  $("a").attr("href","https://www.bing.com")
});
