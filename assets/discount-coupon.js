let cpnBtn = document.getElementById("cpnBtn");
let cpnCode = document.getElementById("cpnCode");

cpnBtn.onclick = function () {
  navigator.clipboard.writeText(cpnCode.innerHTML);
  cpnBtn.innerHTML = "COPIED";
  setTimeout(function () {
    cpnBtn.innerHTML = "COPY&nbsp;CODE";
  }, 3000);
};
