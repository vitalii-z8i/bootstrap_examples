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
//= require jquery_ujs
//= require twitter/bootstrap
//= require video
//= require video.dev
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  $("#divshot-screencast").length&&(
    videojs.options.flash.swf="http://divshot.com/assets/video-js.swf",
    s=videojs("divshot-screencast",{},function(){
      return vjs("divshot-screencast").ready(function(){
        var t;
        return s=this,this.player_.tech.el_.playbackRate=10, 
               t=this.controlBar,
               t.fadeOut(),
               s.player_.on("timeupdate",function(){
                return $(".screencast-info .time").html(this.currentTime())
               })
      })
    }),
    $(".screencast-info .controls a").click(function(t){
      var e;
      switch(
        s=vjs("divshot-screencast"),
        $(".screencast-info .controls a.active").removeClass("active"),
        $(this).addClass("active"),
        e=$(this).data("action")
      )
      {
        case"pause":s.pause(),
          s.controlBar.fadeIn(),
          $(".hero-actions").show();
          break;  
        case"play":s.play(),
          setTimeout(function(){
            return s.player_.tech.el_.playbackRate=1
          },100),
          s.controlBar.fadeOut(),
          $(".hero-actions").hide();
          break;
        case"play-2x":s.play(),
          setTimeout(function(){
            return s.player_.tech.el_.playbackRate=10
          },100),
          s.controlBar.fadeOut(),
          $(".hero-actions").hide();
          break;
        case"play-3x":s.play(),
          setTimeout(function(){
            return s.player_.tech.el_.playbackRate=100
          },100),
          s.controlBar.fadeOut(),
          $(".hero-actions").hide()
      }
      return false;
    })
  )
});