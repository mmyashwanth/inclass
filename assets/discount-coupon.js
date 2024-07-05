var cpnBtn = this.getElementById("cpnBtn");
var cpnCode = this.getElementById("cpnCode");
console.log(this);
cpnBtn.onclick = function () {
  navigator.clipboard.writeText(cpnCode.innerHTML);
  cpnBtn.innerHTML = "COPIED";
  setTimeout(function () {
    cpnBtn.innerHTML = "COPY&nbsp;CODE";
  }, 3000);
};
