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
      $(".lang-switch").langswitcher('en');
      //loadした時のfadeの動き 
      ref.loadFade();   

      //scrollの動き
      ref.clickScroll();      
      

     // ref.windowResize();

      //clickした時にスクロールのイベントを作成。
      //ref.clickScroll(); 
    
    }


//----- LOADFade -----------------------------------------

  ,loadFade: function(){
    var i = 0;  
    var int = 0;  

   // $('.top01-image').hide();
    //$('.sub-image li').hide(); 
    //$('.top02-image').hide();
    $('.right-message').hide();
    $('.sumnails li').hide();


      setInterval(function(){
       // var list = $('.top01-image').length;   
       // var list = $('.sub-image li').length; 
        //var list = $('.top02-image').length; 
        //var list = $('.right-message').length;  
        var list = $('.sumnails li').length;
        
        if (i >= list) {  
        clearInterval(int);  
        }

        //fade実装部分
       // $('.top01-image').eq(i).fadeIn(1500);   
        //$('.sub-image li').eq(i).fadeIn(1000);
       // $('.top02-image').eq(i).fadeIn(2500); 
        //$('.right-message').fadeIn(3000);
        $('.sumnails li').eq(i).fadeIn(1500); 

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

    });

  }

//------ clickScroll ---------------------------------------
  ,clickScroll: function(){

    var ref = this; 
    var url = $(location).attr('href');
    if (url.indexOf("?id=") == -1) {
        // スムーズスクロール以外の処理（必要なら）

         $("img.lazy").lazyload({
            effect : "fadeIn"
          });
         setTimeout(function(){
         $('.right-message').fadeIn(1500);

            },500);

         $("html, body").animate({top: "0"}, 0, "swing",function(){
         $("img.lazy").lazyload({
            effect : "fadeIn"
          });

            setTimeout(function(){
         $('.right-message').fadeIn(1500);

            },800);
           

         
          });
         
    }else{
        // スムーズスクロールの処理
        var url_sp = url.split("?id=");
        var hash   = '#' + url_sp[url_sp.length - 1];
        var tgt    = $(hash);
        var pos    = tgt.offset().top;
        $("html, body").animate({scrollTop:pos}, 0, "swing",function(){
         $("img.lazy").lazyload({
            effect : "fadeIn"
          });

            setTimeout(function(){
         $('.right-message').fadeIn(1500);

            },800);
           

         
          });

           

        
    }
  }
}




 