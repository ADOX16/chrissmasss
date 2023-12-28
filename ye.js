//girl textbox text music yes no
const girl = document.getElementById('girl');
const textbox = document.getElementById('textbox');
const text = document.getElementById('text');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const catfuck = document.getElementById('catfuck');
const music = document.getElementById('music');

let ah = new Audio('ah.mp3');
let ara = new Audio('ara.mp3');
let yamete = new Audio('yamete.mp3');

path = 0;
negtive = 0;
at = 0;
setInterval(() => {
    console.log(`path: ${path}\nnegtive: ${negtive}`);
}, 100);

textbox.style.visibility = 'hidden';
text.style.visibility = 'hidden';

function hide() {
    yes.style.visibility = 'hidden';
    no.style.visibility = 'hidden';
};
const animate = (element, animations, sec) => {
    element.style.animation = animations;
    setTimeout(() => {
      element.style.animation = '';
    }, sec * 1000);
};

function show(texts) {
    textbox.style.visibility = 'visible';
    text.textContent = '';
    text.style.visibility = 'visible';
    setTimeout(() => {
        yes.style.visibility = 'visible';
        no.style.visibility = 'visible';
    }, 2000);
}
function write(text1) {
    text.textContent = text1;
    animate(text, 'type 1.5s steps(11) forwards', 1.5)
}
function buttons(yest, not) {
    yes.textContent = yest;
    no.textContent = not;
}
if (path==0){
    setTimeout(() => {
        show();
        write('hi honey it\nmust be a hard\nday at work')
        buttons('yes it was', 'no it aint much for me')
        yes.style.fontSize = '1em'
        no.style.fontSize = '0.7em'
        path = 1;
    }, 3000);
}


yes.addEventListener("click", function() {
    if(path==1){
        hide();
        ara.play();
        write('here let me\ntake your\ncloth off.')
        setTimeout(() => {
            show()
            write('so......\ndo you want\nto do it?=>')
            buttons('yes ofc', 'no not now')
            yes.style.fontSize = '1em'
            no.style.fontSize = '1em'
            path = 2;
        }, 3500);
    }
    else if(path==2){
        hide();
        setTimeout(() => {
            show();
            write('okay shall i\ntake my cloth\nof now?')
            buttons('yes', 'no')
            yes.style.fontSize = '1em'
            no.style.fontSize = '1em'
            path=3;
        }, 3500);
    }
    else if(path==-1){
        hide();
        setTimeout(() => {
            show();
            write('okay shall i\ntake my cloth\nof now?')
            buttons('yes', 'no')
            yes.style.fontSize = '1em'
            no.style.fontSize = '1em'
            if (at==1){
                path=3;
            }else if(at==2){path==5}
            
        }, 3500);
    }
    else if(path==3){
        hide();
        girl.src = 'girl2.png'
        show();
        write('how...how\ndo i look?')
        buttons('you are gourges', 'can i touch you?')
        yes.style.fontSize = '0.8em'
        no.style.fontSize = '0.8em'
        path=4;
    }
    else if(path==4){
        hide();
        girl.src = 'girl4.png'
        write('well thanks\nsweetheart')
        setTimeout(() => {
            show();
            write('well shall we\nstart?')
            buttons('yes', 'not now')
            yes.style.fontSize = '1em'
            no.style.fontSize = '1em'
            path=5;
        }, 3000);
    }
    else if(path==5){
        hide();
        girl.src = 'girl3.jpg'
        write('well thanks\nsweetheart')
        show();
        write('wait i forgot\nto give you\na gift.')
        buttons('what is it?', 'i dont want it')
        yes.style.fontSize = '0.9em'
        no.style.fontSize = '0.8em'
        path=6;
    }
    else if(path==6){
        hide();
        write('its...')
        setTimeout(() => {
            window.location.href = '/html/index.html';
        }, 400);
    }
});


no.addEventListener("click", function() {
    if(path==1){
        hide();
        ara.play();
        write('well well\nyou are a\nstrong man:).')
        setTimeout(() => {
            show()
            write('so......\ndo you want\nto do it?=>')
            buttons('yes ofc', 'no not now')
            yes.style.fontSize = '1em'
            no.style.fontSize = '1em'
            path = 2;
        }, 3500);
    }
    else if(path==2){
        hide();
        write('okay...')
        setTimeout(() => {
            show();
            write('well how about\n now?')
            buttons('yes', 'no')
            yes.style.fontSize = '1em'
            no.style.fontSize = '1em'
            at=1;
            path=-1;
        }, 3500);
    }
    else if(path==4){
        hide();
        write('ummm...\nokey.')
        ah.play();
        setTimeout(() => {
            yamete.play();
        }, 1000);
        setTimeout(() => {
            show();
            girl.src = 'girl4.png'
            write('well.. shall\nwe start?')
            buttons('yes', 'not now')
            yes.style.fontSize = '1em'
            no.style.fontSize = '1em'
            path=5;
        }, 3000);
    }
    else if(path==5){
        hide();
        write('okay...')
        setTimeout(() => {
            show();
            write('well how about\n now?')
            buttons('yes', 'no')
            yes.style.fontSize = '1em'
            no.style.fontSize = '1em'
            path=-1;
            at==2;
        }, 3500);
    }
    else if(path==6){
        girl.style.display = 'none';
        yes.style.display = 'none';
        no.style.display = 'none';
        text.style.display = 'none';
        textbox.style.display = 'none';
        catfuck.style.display = 'block';
    }
    else if(path==-1){
        hide();
        if (negtive == -1){
            negtive--; 
            write('okay.....')
            setTimeout(() => {
                show();
                write('alright how \nabout now?')
                buttons('yes', 'no')
                yes.style.fontSize = '1em'
                no.style.fontSize = '1em'
            }, 3500);}
        }
        else if (negtive == -2){
            negtive--;
            write('okay......')
            setTimeout(() => {
                show();
                write('and now?')
                buttons('yes', 'no')
                yes.style.fontSize = '1em'
                no.style.fontSize = '1em'
            }, 3500);
        }
        else if(negtive==-3){
            hide();
            write('okay screw it')
            setTimeout(() => {
                window.close
            }, 2000);
        }
        else{negtive--; write('okay....')
            setTimeout(() => {
                show();
                write('well how about\n now?')
                buttons('yes', 'no')
                yes.style.fontSize = '1em'
                no.style.fontSize = '1em'
            }, 3500);
        }
    }   
);
music.addEventListener('ended', function () {
    audio.currentTime = 0;
    music.play();
});
music.play();
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (isMobileDevice()) {
    text.style.transform = 'translate(translate(9dvw, -19dvh)'
}

