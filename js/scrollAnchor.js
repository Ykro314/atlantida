(function(){
  "use strict";

  function menuClickHandler( event ) {
    var jumpClass = event.target.getAttribute( "data-jump" );
    if( jumpClass ) {
      Jump( jumpClass, {
        duration: 1500
      } );
    }
  }

  var menu = document.querySelector( ".main-menu" );
  var getStartedBtn = document.querySelector( ".btn-standart--banner" );
  var portfolioBtn = document.querySelector( ".about-us__portfolio" );

  menu.addEventListener( "click", menuClickHandler );
  getStartedBtn.addEventListener( "click", menuClickHandler );
  portfolioBtn.addEventListener( "click", menuClickHandler );

})();