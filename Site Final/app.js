var pics = [
  "imgs/1.png",
  "imgs/2.jpg",
  "imgs/3.jpg",
  "imgs/4.jpg",
  "imgs/5.jpg",
  "imgs/6.jpg",
  "imgs/7.jpg",
  "imgs/8.jpg",
  "imgs/9.jpg",
  "imgs/10.jpg",
  "imgs/11.png",
  "imgs/12.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var count = 0;

btn.addEventListener("click", function () {
  if(count === 12){
    count = 0;
  }
  img.src = pics[count]
  count = count + 1;
});
