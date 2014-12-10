// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./current_user
//= require ./authentication
//= require ./lousing

// for more details see: http://emberjs.com/guides/application/
Lousing = Ember.Application.create({
  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true // detailed logging of all routing steps
});

Lousing.Alert = function(type, message) {
  $('.lousing-alert').html(
    '<div class="alert alert-' + type + ' alert-dismissible fade in" role="alert">' +
      '<button type="button" class="close" data-dismiss="alert">' +
       '<span aria-hidden="true">&times;</span>' +
        '<span class="sr-only">Close</span>' +
      '</button>' +
      message
    + '</div>');

  window.setTimeout(function(){
    $('.lousing-alert').alert('close');
    $('.lousing-alert').html('');
  }, 3000);
}

//= require_tree .
