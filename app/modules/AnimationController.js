'use strict';

var TweenMax = require('../vendor/gsap/TweenMax');

module.exports = function() {

  // show();
  this.animateIn = function(element) {
    this.element = element;
    // $(element).removeClass('displayNone');
  	// TweenMax.set(element, {display: 'block'});
  	TweenMax.to(element, 0.5, {
  	  delay: 0.025,
  	  autoAlpha: 1,
  	  // top: 50,
  	  ease: Power1.easeOut
  	});
  };

  // hide();
  this.animateOut = function(element) {
  	this.element = element;
    
  	TweenMax.to(element, 0.5, {
  	  autoAlpha: 0,
  	  // top: 100,
  	  ease: Power3.easeOut,
  	  onComplete: function() {
  	  	//TweenMax.set(element, {display: 'none'});
        // $(element).addClass('displayNone');
        
  	  }
  	});
  };

};
