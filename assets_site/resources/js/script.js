

function navHeight(){
    
    var body = document.body;
    var html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    var width = Math.max( body.scrollWidth, body.offsetWidth, 
                           html.clientWidth, html.scrollWidth, html.offsetWidth );
    var h = document.documentElement.clientHeight; 
    document.getElementById('left').style.height =height + "px"; 
    document.getElementById('main').style.height =height + "px";
  
}


function bannerWidth(){
    var body = document.body;
    var html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
    var width = Math.max( body.scrollWidth, body.offsetWidth, 
                           html.clientWidth, html.scrollWidth, html.offsetWidth );
    document.getElementById('main').style.width = document.getElementById('banner').style.width;

}

