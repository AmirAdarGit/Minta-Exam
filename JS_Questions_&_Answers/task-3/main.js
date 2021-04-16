function appendChildren() {
  var allDivs = document.getElementsByTagName("div");
  const size = allDivs.length;
  for (var i = 0; i < size; i++) {
    var newDiv = document.createElement("div");
    allDivs[i].appendChild(newDiv);
  }
}

appendChildren();
console.log("finish");
