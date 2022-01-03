var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var timerID = setInterval(updateTime, 1000); // 每隔1秒执行一次
updateTime();

function updateTime() {
  var cd = new Date();
  document.getElementById("time").innerHTML = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(),
    2) + ':' + zeroPadding(cd.getSeconds(), 2);
  document.getElementById("date").innerHTML = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() +
    1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
  var zero = '';
  for (var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}