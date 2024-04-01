let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');

btn.onclick = function() {
    body.classList.toggle('on');
    audio.play();

if (body.classList.contains('on')) {
    status.textContent = 'Light On';
    document.getElementById("notice").innerHTML = "Light On!";
} else {
    document.getElementById("notice").innerHTML = "Light Off!";
    status.textContent = 'Light Off';
}
}