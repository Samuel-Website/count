let start = 0;

document.getElementById('start').innerHTML = start;
document.getElementById('i').onclick = function(){
  start += 1;
  document.getElementById('start').innerHTML = start;
  
}
document.getElementById('r').onclick = function() {
  start = 0;
  document.getElementById('start').innerHTML = start;

}
document.getElementById('d').onclick = function() {
  start -= 1;
  document.getElementById('start').innerHTML = start;

}