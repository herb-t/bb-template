'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var template = require('./about.html');
var AnimationController = require('../../modules/AnimationController');

var About = Backbone.View.extend({

  template: _.template(template()),

  events: {
    'click a': 'onClick',
  },

  initialize: function() {

    // underscore
    var content = {
      data: this.model.get('data')[0]
    };
    this.$el.html(this.template(content));

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

    if (this.model.get('route') === 'about' ){

      this.show();
    } else {
      this.hide();
    }
  }
});

module.exports = About;
