var ww, wh;   //画面の横と縦


$(function() {
  var transition = new Transition();
});

  var Transition = function(){

    this.initialize.apply(this, arguments);
}

  Transition.prototype = {
    //setup
    initialize: function() {
      var ref = this;

      //言語設定(defalutは英語)
      //$(".header-language").langswitcher('en');
    

      ref.windowResize();
      ref.loadFade();         //loadした時のfadeの動き 
      //ref.resizeMenew();       //resizeした時にvarを横にずらす
    
    }


//----- LOADFade -----------------------------------------

  ,loadFade: function(){
    var i = 0;  
    var int = 0;  

    $('.top01-image').hide();
    $('.sub-image li').hide(); 
    $('.top02-image').hide();
    $('.right-message').hide();


      setInterval(function(){
        var list = $('.top01-image').length;   
        var list = $('.sub-image li').length; 
        var list = $('.top02-image').length; 
        var list = $('right-message').length;  
        
        if (i >= list) {  
        clearInterval(int);  
        }

        //fade実装部分
        $('.top01-image').eq(i).fadeIn(800);   
        $('.sub-image li').eq(i).fadeIn(1500);
        $('.top02-image').eq(i).fadeIn(2500); 
        $('.right-message').fadeIn(1500);
        
          i++;  

      },50);
  }

//------ RESISE MENEW ---------------------------------------

  ,resizeMenew: function(){
    var ref = this;
    var windowWidth = $(window).width();

    //load時のwindwosサイズが小さい場合
    if(windowWidth <= 1169){
     

    }else{
      $('.right-header').css('margin-right','0px'); 
    }

    //resizeした時の移動
    $(window).resize(function(){
      //WindowSizeを取得
      windowWidth = $(window).width();

      if(windowWidth <= 1169){
        $(".right-header").animate({
          'margin-right' : "280px"
        },{
          duration : 1000
          ,easing : "easeOutExpo"
          ,queue : false
        });

  
      }else{
         $(".right-header").animate({
          'margin-right' : "0px"
        },{
          duration : 1000
          ,easing : "easeOutExpo"
          ,queue : false
        });  
      }
    });
  }


//------ windowResize ---------------------------------------
  ,windowResize: function(){
    var ref = this; 
  

    //firstView
    ww = $(window).width();
    wh = $(window).height();

    if(ww < 1279){
      $('.right-message').hide();
    }
    else if(ww > 1400){
      ww = 1400;
    }

    ref.tileGrid();

    $(window).resize(function(){

      ww = $(window).width();
      wh = $(window).height();

      if(ww < 1150){
        //$('.right-message').hide();
        $('.right-message').fadeOut(1000); 
      }
      else if(ww > 1200){
        $('.right-message').fadeIn(1000); 

      }

       ref.tileGrid();
    });

  }

//------ tile GRID ---------------------------------------
  ,tileGrid: function(){
    

    //work
    var $cont = $('#contents-stage');
    var $box = $cont.find('.boxes');

    var line = 3;

    var tileWidth = (ww / line);
    var tileHeight = (wh / line);


    //各要素に繰り返し
    $box.each(function(i) {
      var $t = $(this);
      var $thumb = $t.find('.boxes');
      var $img = $thumb.find('img');
      var tmp1 = 0;
      var tmp2 = 0;

      tmp1 = (ww - 142) / line;
      tmp2 = (tmp1 / ww) * 100;

      $t.css({
        width: tmp2 + '%'
      });

      //高さは変更しない
      //$t.width( tileWidth );
     /* $t.height(tileHeight);*/

      /*$thumb.width(tileWidth);*/
      /*$thumb.height(tileHeight);*/

      /*$img.width(imgWidth);*/
     /* $img.height(imgHeight);*/
      $img.css({
        /*left: imgLeft,
        top: imgTop*/
      });
    });
  }
}




 