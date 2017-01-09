var page_links = JSON.parse(localStorage.getItem('links'));
var randomSite = {};

function pickRandom(obj) {
    var result;
    var count = 0;
    for (var prop in obj) {
        if (Math.random() < 1/++count) {
           result = prop;
        }
    }
    return result;
}

while(Object.keys(randomSite).length < 4) {
    var site_name = pickRandom(page_links);
    var path = $(location).attr('pathname');
    var new_path = path.replace(/^\/|\/$/g, '');
    if((randomSite[site_name] !== site_name) && (site_name !== new_path)) {
        randomSite[site_name] = site_name;
    }
}

for(key in randomSite) {
    $("<div></div>").appendTo("#pages").addClass("grid_1_of_4 images_1_of_4").html('<a href="' + key + '"><img src="images/' + key.replace(/.html/i, '.jpg') + '"></a>');
}