<template>
  <div>
    <canvas id="myCanvas" width="800" height="485"
style="border:1px solid RED;">
    Your browser does not support the canvas element.
    </canvas>
  </div>
</template>

<script>
var directions = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 300; var y = 300;
var k = 40;
var n = 0;

var direct =[];
var formula = "V";
for (var j = 0; j < 8; j++) {
for (var i = 0; i < formula.length; i++) {
  if (formula.slice(i,i+1) === "T") {n += 1} else {
  if (formula.slice(i,i+1) === "L") {n += 2;} else {
  if (formula.slice(i,i+1) === "V") {n += 3;}
  }
  }
  if (n >= 8 ) {n %= 8}
	direct.push(directions[n]);
}}

ctx.moveTo(x,y);
for(p=0; p<direct.length; p++){
  ctx.lineTo(x+k*direct[p][0],y+k*direct[p][1]);
    x=x+k*direct[p][0];
    y=y+k*direct[p][1];
}
ctx.stroke();
</script>

<style scoped>

</style>


