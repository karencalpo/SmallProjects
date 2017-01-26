var icon = document.getElementById('container').childNodes;
var sort_button = document.getElementById('press');
var directory = "/assets_site";

document.addEventListener("onload", navHeight(), bannerWidth(), getData());
document.getElementById('press').onclick = function(){ activity(data); };
window.addEventListener("resize", function(){
    navHeight();
    bannerWidth();
});

function getData() {
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", directory + "/resources/data/data.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");	

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
	       var response = this.responseText;
           data = JSON.parse(response);
           activity(data);
        } else if (this.readyState !== 4 && this.status !== 200) {
            console.log("Data not found.");
        }
    };
    
    xhr.send(); 
}

function activity(data) {
    
    if(document.getElementById('container').className === "alpha_rev" || document.getElementById('container').className === "") {
        data.sort( function( a, b ) {
            a = a.title[0].toLowerCase();
            b = b.title[0].toLowerCase();
            return a < b ? -1 : a > b ? 1 : 0;
        });
        document.getElementById('container').className = "alpha";
    } else {
        data.sort( function( a, b ) {
            //console.log(a.title[0]);
            a = a.title[0].toLowerCase();
            b = b.title[0].toLowerCase();
            return b < a ? -1 : b > a ? 1 : 0;
        });
        document.getElementById('container').className = "alpha_rev";
    }
    
    while (document.getElementById('container').lastChild.id !== 'flex-icon') {
        document.getElementById('container').removeChild(document.getElementById('container').lastChild);
    }
    
    for(var key in data) {
        if(data[key].is_published){
            var node = document.createElement("div");
            node.className = "floated_img";
            node.id = "pic_" + key;
            document.getElementById("container").appendChild(node);
            var img = document.createElement("img");
            img.src = directory + "/images/" + data[key].image_name;
            img.alt = data[key].image_name;
            document.getElementById(node.id).appendChild(img);
            var title = document.createElement("p");
            title.innerHTML = data[key].title + '<br><i>' + data[key].image_name + '</i>';
            document.getElementById(node.id).appendChild(title);
            var hr = document.createElement("hr");
            document.getElementById(node.id).appendChild(hr);
            var desc = document.createElement("p");
            desc.innerHTML = data[key].description;
            document.getElementById(node.id).appendChild(desc);
            var icons = document.createElement("p");
            icons.innerHTML = '<i class="material-icons">' + "favorite" + '</i><i class="material-icons">' + "grade" + '</i>';
            document.getElementById(node.id).appendChild(icons);
        }
    }
  
}