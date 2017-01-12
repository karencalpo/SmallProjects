function login_form() {
    if(document.getElementById("login_button").innerHTML !== "Logout") {
        document.getElementById("login_form").style.display = 'block';
    } else {
        document.getElementById("login_form").style.display = 'block';
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("login_button").innerHTML = "Login";
        document.getElementById("welcome_text").style.display = 'none';
    }
}

function login() {
    
    var xhr = new XMLHttpRequest();
   
    
    xhr.open("GET", "http://projects.draconicscales.com/catalina/ajax_info/welcome.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");	

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
	     var data = this.responseText;
            var jsonResponse = JSON.parse(data);
            var user = document.getElementById("username").value;

            document.getElementById("login_button").innerHTML = "Logout";
            document.getElementById("welcome_text").style.display = 'inline-block';
	     document.getElementById("welcome_text").innerHTML = jsonResponse.message + user;
            document.getElementById("login_form").style.display = 'none';
        }
    };
    
    xhr.send(); 
}