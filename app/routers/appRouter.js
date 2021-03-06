'use strict';

var $ = window.$ = window.jQuery = require('jquery');
var Backbone = require('backbone');
var Home = require('../views/home/home.js');
var Nav = require('../views/header-nav/nav.js');
var About = require('../views/about/about.js');
var Contact = require('../views/contact/contact.js');
var Update = require('../views/update/update.js');

var AppRouter = Backbone.Router.extend({

  model: null,
  home: null,
  contact: null,
  update: null,
  about: null,

  start: function( m ) {

    this.model = m;
    this.nav = new Nav({el: $('#nav'), model: this.model});
    this.home = new Home({el: $('#home'), model: this.model});
    this.about = new About({el: $('#about'), model: this.model});
    this.update = new Update({el: $('#update'), model: this.model});
    this.contact = new Contact({el: $('#contact'), model: this.model});


    Backbone.history.start({pushState: false});
  },

  routes: {
    '': 'routeHome',
    home: 'routeHome',
    nav: 'routeNav',
    about: 'routeAbout',
    contact: 'routeContact',
    update: 'routeUpdate'
  },

  routeHome: function() {
    this.model.set({route: 'home'});
  },

  routeNav: function() {
    this.model.set({route: 'nav'});
  },

  routeAbout: function() {
    this.model.set({route: 'about'});
  },

  routeContact: function() {
    this.model.set({route: 'contact'});
  },

  routeUpdate: function() {
    this.model.set({route: 'update'});
  }
});

module.exports = AppRouter;

