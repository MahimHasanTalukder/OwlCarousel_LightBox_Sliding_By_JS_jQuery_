jQuery(document).ready(function(){
    jQuery(".owl-carousel").owlCarousel({
    'items' : 3,
    'margin' : 200 ,
    'loop'   : true ,
    'autoplay' : true ,
    'autoplayTimeout' :1000 ,
    'autoplayHoverPause' : true ,
    'center' :  true ,
    'mouseDrag' : true ,
    'freeDrag'  : true ,
    'stagePadding' : 4 ,
    'merge' : true ,
    'mergeFit' : false ,
    'autoWidth' : true,
    'startPosition' : "5" ,
    'URLhashListener' : true,
    'nav' : true ,
    'navText' :['pev' , 'next'] ,
    'slideBy' : 3 ,
    'fluidSpeed' : 2 ,
    'autoplaySpeed' : 200 ,
    'animateOut' : true ,
    'fallbackEasing' : 'easeInOutCubic' ,
    'responsiveRefreshRate' : 200 ,
    'URLhashListener': true,
    'checkVisible' : false ,
    'responsive' :  {

    0 : {
        items :1
    } ,


    200 : {
        items : 2
    } ,

    320 : {
        items : 3
    } ,

    420 : {
        items : 4
    } ,

    520: {
        items : 5
    } ,

    768 : {
        items : 6
    } ,

    1440 : {
        items : 7
    } ,

    }
 
    });
  });




