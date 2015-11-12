jQuery = $ = require('jquery');
Backbone = require('backbone');
_ = require('underscore');
Backbone.$ = $;
Backbone.emulateHTTP = true;
var Main = require('./main.js');
App = {

    Models:{},
    Collection:{},
    Views:{},
    root: "/",

    init:function(){ 
      this.Views.main = new Main({ el: $("#main")})
    }
}

Backbone.history.start({pushState: true})
App.init();