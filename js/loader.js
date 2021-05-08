$(document).ready(function(){
    $('.carousel').carousel();
    indicators: true;
  });

  function opnn(){
    var instance = M.Carousel.getInstance(elem);
    instance.next(1);
    instance.next(2);
}

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  function para()
  {
    var instance = M.Parallax.getInstance(elem);
instance.open();
  }
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('.tap-target').tapTarget();
  });

  $(document).ready(function(){
    $('.slider').slider();

  });

  function slide(){
    var instance = M.Slider.getInstance(elem);
    instance.start();
    
    instance.interval(5000);
 
  }
  