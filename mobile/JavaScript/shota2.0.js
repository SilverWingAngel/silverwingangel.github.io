var num = Math.ceil(Math.random() * 164);
var num2 = -1;
var num3 = -1;
window.setTimeout("fun()", 0);

function fun() {
  document.getElementById("1").style.backgroundImage = "url('../img/zip_images/shota (" + num + ").jpg')";

  num++;

  if (num >= 164)
    num = 1;
  document.getElementById("2").style.backgroundImage = "url('../img/zip_images/shota (" + num + ").jpg')";
  num++;
  if (num >= 164)
    num = 1;
  document.getElementById("3").style.backgroundImage = "url('../img/zip_images/shota (" + num + ").jpg')";
  window.setTimeout("bg()", 1);
}

function next() {
  var box1 = document.getElementById('2');
  var box3 = document.getElementById('3');
  box1.style.width = 0 + "px";
  box3.style.width = "100%";
  window.setTimeout("add()", 1);
}

function add() {
  var box1 = document.getElementById('1');
  document.getElementById('2').id = '1';
  document.getElementById('3').id = '2';

  box1.parentNode.removeChild(box1); //删除盒子1
  var last = document.getElementById('5');
  var box1 = document.createElement('div'); //创建一个div

  box1.id = '3'; //给div添加属性
  box1.style.width = "0px";
  box1.className = 'z1';
  last.parentNode.insertBefore(box1, last); //把div1加入到last前面
  window.setTimeout("huantu()", 1);
}

function huantu() {
  //获取一个随机数（1-164)
  if (num3 == num)
    num = num + 2;
  num = num + 1;

  if (num >= 164)
    num = 1;
  num2 = num;
  document.getElementById("3").style.backgroundImage = "url('../img/zip_images/shota (" + num + ").jpg')";

  var box1 = document.getElementById('1');
  box1.style.width = 0 + "px";
  window.setTimeout("bg()", 1);
}

function last() {
  var box1 = document.getElementById('box');
  box1.style.flex = "right";
  var box1 = document.getElementById('2');
  var box3 = document.getElementById('1');
  box1.style.width = 0 + "px";
  box3.style.width = "100%";
  window.setTimeout("del()", 1);
}

function del() {
  var box1 = document.getElementById('3');
  document.getElementById('2').id = '3';
  document.getElementById('1').id = '2';

  box1.parentNode.removeChild(box1); //删除盒子1
  var last = document.getElementById('2');
  var box1 = document.createElement('div'); //创建一个div

  box1.id = '1'; //给div添加属性
  box1.style.width = "0px";
  last.parentNode.insertBefore(box1, last); //把div1加入到last前面
  window.setTimeout("huantu2()", 1);
}

function huantu2() {
  //获取一个随机数（1-164)
  if (num2 == num)
    num = num - 2;
  num = num - 1;

  if (num <= 0)
    num = 164;
  num3 = num;
  document.getElementById("1").style.backgroundImage = "url('../img/zip_images/shota (" + num + ").jpg')";

  var box1 = document.getElementById('3');
  box1.style.width = 0 + "px";
  window.setTimeout("bg()", 1);
}

function bg() {
  var aa;
  if (num2 == num)
    aa = num - 1;
  if (num3 == num)
    aa = num + 1;
  if (num2 != num && num3 != num)
    aa = num - 1;
  var a = document.getElementById('a');
  a.setAttribute("href", "../img/images/shota (" + aa + ").jpg");
  document.getElementById("img").style.backgroundImage = "url('../img/zip_images/shota (" + aa + ").jpg')";
}
