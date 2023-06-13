let arr = document.querySelectorAll('button.drum');
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
        sound(this.innerHTML);
        addAnimateButton(this.innerHTML);
    });

}
document.addEventListener("keydown", function (event) {
    sound(event.key);
    addAnimateButton(event.key);
});

function sound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom1.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('./sounds/tom2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom4.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/kick.mp3');
            audio.play();
            break;

        default:

    }

}
function addAnimateButton(key){
    let obj = document.querySelector("."+key);
    console.log(obj);
    obj.classList.add("pressed");
    setTimeout(function(){
        obj.classList.remove("pressed");
    },100);
}