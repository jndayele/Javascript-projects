let myImg = document.getElementById("img");
function changeImg() {
    myImg.src = "https://picsum.photos/200/300/?" + Math.random();
}
setInterval(changeImg, 1000);
