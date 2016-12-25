function login_form() {
    if(document.getElementById("login_button").innerHTML !== "Logout") {
        document.getElementById("login_form").style.display = 'block';
    }
}

function login() {
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "http://projects.draconicscales.com/catalina/ajax_info/ajax_file.txt", true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var user = document.getElementById("username").value;
            document.getElementById("user").innerHTML = user;
            document.getElementById("login_button").innerHTML = "Logout";
            document.getElementById("welcome_text").style.display = 'inline-block';
            document.getElementById("login_form").style.display = 'none';
        }
    };
    
    xhr.send(); 
}