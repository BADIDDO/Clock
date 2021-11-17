
function updateDate() {
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setData = document.getElementById("setData");
    setData.innerHTML = date.getDate() + "-" + parseInt(date.getMonth()+1) + "-" + date.getUTCFullYear();
}
setInterval(updateDate, 1000);
onload = updateDate();

function getColor () {
  var getColor = document.getElementById("setColor").value;
  localStorage.setItem("Color" , getColor);
  document.getElementById("time").style.background = localStorage.getItem("Color");
  document.getElementById("body").style.background = localStorage.getItem("Color");
}

function setColor () {
document.getElementById("setColor").value = localStorage.getItem("Color");
document.getElementById("time").style.background = localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");
}

