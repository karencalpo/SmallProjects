function dStart(event){
    event.dataTransfer.effectAllowed='move';
    event.dataTransfer.setData('Text', event.target.getAttribute('id'));
    event.dataTransfer.setDragImage(event.target,100,100);
    return true;
}

function dEnter(event) {
    event.preventDefault();
    return true;    
}

function dOver(event) {
    event.preventDefault();
}

function dDrop(event) {
    var data = event.dataTransfer.getData('Text');
    event.target.appendChild(document.getElementById(data));
    event.preventDefault();
    return false;
}
