var count = 0;
var p = document.getElementById("display");
var btn = document.getElementById("add");
function test() {
  alert("test");
}

function myFunction() {
  console.log("run myFunction");
  document.getElementById("demo").innerHTML = "Hello World";
}
function plusOne() {
  count++;
  p.innerHTML = count;
}
