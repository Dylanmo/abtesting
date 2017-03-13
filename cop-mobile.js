$(document).ready(function() {

  $("img").load(function() {
    var $productWidth = $(this).width();
      //alert($(this).height());
  });

var numberOfProducts = $('.mobile-swipebox-list .mobile-swipebox-product').length;
var $product = $('.mobile-swipebox-list .mobile-swipebox-product');
var imageHolder = $('#mobile-swipebox-holder');
//alert(numberOfProducts);
    //var $totalWidth =  $productWidth * numberOfProducts - 200;


    $($product).on( "swipeleft", swipeHandlerLeft );
    function swipeHandlerLeft( event ){
        if(!$('#mobile-swipebox-holder').is(':animated')){
          var x = $('#mobile-swipebox-holder').css('right');
          //alert(x);
          if(x > '0'){
              alert('do nothing');
          }
          else{
              $('#mobile-swipebox-holder').animate({
                  left: "-=248"
              },500);
          }
      }

    }

    $($product).on( "swiperight", swipeHandlerRight );
    function swipeHandlerRight( event ){
        if(!$('#mobile-swipebox-holder').is(':animated')){
          var x = $('#mobile-swipebox-holder').css('left');
          if(x >= '0px'){
              //alert("do nothing");
          }
          else{
              $('#mobile-swipebox-holder').animate({
                left: "+=248"
            },500);
          }
      }
    }

});
