/**
 *
 *
 * Global Functions
 *
 *
 */


// https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
window.getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};


window.getRandomColor = function() {
  var red = getRandomInt(0, 257);
  var green = getRandomInt(0, 257);
  var blue = getRandomInt(0, 257);
  return 'rgb('+ red + ', ' + green + ', ' + blue  +')';
};


Announcement: "<!DOCTYPE html> <html> <head> <meta…"
M Teichman
Created 10:43 AM10:43 AM
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Flappy Monster Game Project</title>
  <link href="css/style.css" rel="stylesheet" />
</head>
<body>

  <canvas id="flappy-monster-game" width="900" height="600"></canvas>

  <script src="js/util.js"></script>
  <script src="js/canvas-script.js"></script>


</body>
</html>
