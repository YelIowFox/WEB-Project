// Write our JavaScript in here
var pics = [
  "imgs/1.jpg",
  "imgs/2.jpg",
  "imgs/3.jpg",
  "imgs/4.jpg",
  "imgs/5.jpg",
  "imgs/6.jpg",
  "imgs/7.png",
  "imgs/8.jpg",
  "imgs/9.jpg",
  "imgs/10.jpg",
  "imgs/11.jpg",
  "imgs/12.jpg",
  "imgs/13.ico",
  "imgs/14.jpg",
  "imgs/15.jpg",
  "imgs/16.png",
  "imgs/17.png",
  "imgs/18.jpg",
  "imgs/19.jpg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var count = 15;

btn.addEventListener("click", function () {
  if(count === 19){
    count = 0;
  }
  img.src = pics[count]
  count = count + 1;
});
