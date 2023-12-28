let cat = document.getElementById('cat');
let qs = document.getElementById('q');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let music = document.getElementById('music');

let angry = new Audio('angry_cat.mp3');
let meow = new Audio('meow.mp3');
let rrrrr = new Audio('rrrrr.mp3');
let soft_meow = new Audio('soft_meow.mp3');

let path = 0;
let negtive_path = 0;
function hide() {
    yes.style.visibility = 'hidden';
    no.style.visibility = 'hidden';
    qs.style.visibility = 'hidden';
};
function show() {
    yes.style.visibility = 'visible';
    no.style.visibility = 'visible';
    qs.style.visibility = 'visible';
}
yes.addEventListener("click", function() {
    if (path==0){
        rrrrr.play();
        hide();
        qs.textContent = 'rub it agian?';
        setTimeout(() => {
            path = 1;
            show();
            cat.src = 'cat2.png'
        }, 10000);
    }
    else if(path==1){
        rrrrr.play();
        hide();
        setTimeout(() => {
            path = 2;
            show();
        }, 10000);
    }
    else if(path==2){
        rrrrr.play();
        hide();
        qs.textContent = 'rub it agian?';
        setTimeout(() => {
            path = 3;
            show();
        }, 10000);
    }
    else if(path==3){
        meow.play();
        yes.style.visibility = 'hidden';
        no.style.visibility = 'hidden';
        qs.textContent = 'the cat got bored';
        setTimeout(() => {
            path = 4;
            yes.style.visibility = 'visible';
            no.style.visibility = 'visible';
            qs.textContent = 'rub it again?';
        }, 4000);
    }
    else if(path==4){
        angry.play();
        hide();
        qs.textContent = 'do you want to see my uncle?';
        setTimeout(() => {
            path = 5;
            show();
            cat.src = 'cat3.png'
        }, 1000);
    }
    else if(path==6){
        hide();
        cat.src = 'catfuck.jpg'
        setTimeout(() => {
            window.close();
        }, 1500);
    }
    if(path==5){
        cat.src = 'cursed_cat.png'
        hide();
        qs.textContent = '...???';
        setTimeout(() => {
            path = 6;
            show();
        }, 4000);
    }
});
no.addEventListener("click", function() {
    if (path==0){
        meow.play();
        negtive_path --;
        hide();
        setTimeout(() => {
            show();
        }, 1000);
    }
    else if(path==1 || path==2){
        soft_meow.play();
        negtive_path --;
        hide();
        setTimeout(() => {
            show();
        }, 1000);
    }
    else if(path==6){
        hide();
        cat.src = 'catfuck.jpg'
        setTimeout(() => {
            window.close();
        }, 1500);
    }
    if(negtive_path == -4){
        angry.play();
        hide();
        qs.textContent = 'do you want to see my uncle?';
        setTimeout(() => {
            path = 5;
            show();
            cat.src = 'cat3.png';
        }, 1000);
    }
});
music.addEventListener('ended', function () {
    audio.currentTime = 0;
    music.play();
});
music.play();