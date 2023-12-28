const robux = document.getElementById('bobux');
const plus = document.getElementById('+');
const nega = document.getElementById('-');
const take = document.getElementById('take');
const music = document.getElementById('music');
const title = document.getElementById('title');
const contain = document.getElementById('robux');
let current_robux = 0;

plus.addEventListener("click", function() {
    current_robux ++;
    robux.textContent = current_robux;
});
nega.addEventListener("click", function() {
    current_robux --;
    if (current_robux <= 0){
        current_robux = 0;}
    robux.textContent = current_robux;
});
take.addEventListener('click', function () {
    robux.style.display = 'none';
    contain.style.display = 'none';
    take.style.display = 'none';
    plus.style.display = 'none';
    nega.style.display = 'none';
    if (current_robux <= 20){
        title.textContent = "مش معايا تاخد كريديت كبديل و اديلهولك روبكس؟";
        title.style.fontSize = '3em';
        title.style.width = '50dvw';
        title.style.height = '80dvh';
        title.style.marginTop = '15dvh'
    }
    else{
        title.textContent = "انا فقير انت فقير احنا فقرة مش معان حاجة -ش كس بير";
        title.style.fontSize = '2.5em';
        title.style.width = '50dvw';
        title.style.height = '80dvh';
        title.style.marginTop = '15dvh'
    }
})
music.addEventListener('ended', function () {
    audio.currentTime = 0;
    music.play();
});
music.play();