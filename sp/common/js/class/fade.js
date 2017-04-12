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

      $(".lang-switch").langswitcher('en');
      ref.loadFade();         //loadした時のfadeの動き    
    
    }


//---loadFade-----

  ,loadFade: function(){
    $('#wrap').hide();


    setInterval(function(){
      $('#wrap').fadeIn(1000);

    }, 10);

  }

}