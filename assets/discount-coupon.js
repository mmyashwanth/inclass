let cpnBtn = this.getElementById("cpnBtn");
let cpnCode = this.getElementById("cpnCode");
console.log(this);
cpnBtn.onclick = function () {
  navigator.clipboard.writeText(cpnCode.innerHTML);
  cpnBtn.innerHTML = "COPIED";
  setTimeout(function () {
    cpnBtn.innerHTML = "COPY&nbsp;CODE";
  }, 3000);
};
