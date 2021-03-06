'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var AnimationController = require('../../modules/AnimationController');

var Home = Backbone.View.extend({

  events: {
    'click a': 'onClick',
  },

  initialize: function() {
    this.listenTo(this.model, 'change:route', this.onRouteChange);

    this.animate = new AnimationController();
  },

  hide: function() {
    this.animate.animateOut(this.el);
  },

  show: function() {
    this.animate.animateIn(this.el);
  },

  onClick:function(event) {
    // tracking call here

  },

  onRouteChange: function() {
    if (this.model.get('route') === 'home' ){
      this.show();
    } else {
      this.hide();
    }
  }
});

module.exports = Home;
