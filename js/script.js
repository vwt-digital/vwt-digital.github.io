$(document).ready(function(){
  windowHeight();
});

$(window).resize(function(){
  windowHeight();
});


function windowHeight(){
  if($(window).height() > $('body').height()){
    $('footer').addClass('fullHeight');
  } else{
    $('footer').removeClass('fullHeight');
  }
}
