//solution 1
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    alert(i);
  }, 1000 + i);
}


//another solution using closures

for(var i = 0; i < 3; i++){
 function close (copyOfI) {
  setTimeout(function () {
   alert(copyOfI);
  }, copyOfI + 1000);}
  close(i);
}
