var links = {};
var hasStorage = (function() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (exception) {
        return false;
    }
}());  

$('#works').find('a').each(function() {
    var str = $(this).attr('href');
    links[str] = str;
}); 

if(hasStorage) {
    localStorage.setItem('links', JSON.stringify(links));
}