const title = document.getElementById('title');
const inp = document.getElementById('inp');
const button_go = document.getElementById('buttongo');
const music = document.getElementById('music');

button_go.addEventListener("click", function() {
    let input = inp.value;
    if (input === 'yem14') {
        window.location.href = 'ye.html';
    } else if (input === 'ya15_') {
        window.location.href = 'ya.html';
    } else if (input === 'marexd') {
        window.location.href = 'mare.html';
    } else {
        window.alert('none>');
    }
});
music.addEventListener('ended', function () {
    audio.currentTime = 0;
    music.play();
});
music.play();