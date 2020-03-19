document.addEventListener('click', changeBackground);

function changeBackground() {
    document.body.style.background = colors();
}

function colors() {
    var a = '0123456789ABCDEF';
    var color = '#';
    for(let i=0;i<6;i++){
        color+=a[Math.floor(Math.random()*16)];
    }   
    return color;
}