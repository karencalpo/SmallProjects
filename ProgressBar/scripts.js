function progress() {
    var bar = document.getElementById("bar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if(width >= 100) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
    }
}