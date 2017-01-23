'use strict';

var data;
var jsonResponse;
var user_activity;
var millisec_start = 1468334211000;
var relative_path = "/mobile_json";

$(document).ready(getData());

$('.nav a').on('click', function(){
    $('.btn-navbar').click();
    $('.navbar-toggle').click();
});

$('#arrow').on('click', function(){
    if($('#title_name').text() === "Comments"){
        getData();
    } else if($('#title_name').text() === "Ideas") {
        comments(user_activity);
    } else if ($('#title_name').text() === "Replies") {
        ideas(user_activity);
    } else if ($('#title_name').text() === "Activity") {
        replies(user_activity);
    }
});

function convertTime(ms) {

        var seconds = (ms / 1000).toFixed(0);
        var minutes = (ms / (1000 * 60)).toFixed(0);
        var hours = (ms / (1000 * 60 * 60)).toFixed(0);
        var days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);

        if (seconds < 60) {
            if(seconds <= 1) {
                return "a second ago";
            } else if (seconds < 5) {
                return "a few seconds ago";
            } else {
                return seconds + " seconds ago";
            }
        } else if (minutes < 60) {
            if(minutes <= 1) {
                return "a minute ago";
            } else if (minutes < 5) {
                return "a few minutes ago";
            } else {
                return minutes + " minutes ago";
            }
        } else if (hours < 24) {
            if(hours <= 1) {
                return "an hour ago";
            } else if (hours < 5) {
                return "a few hours ago";
            } else {
                return hours + " hours ago";
            }
        } else {
            if(days <= 1) {
                return "a day ago";
            } else if (days < 5) {
                return "a few days ago";
            } else {
                return days + " days ago";
            }
        }
}

function getData() {
    
    var xhr = new XMLHttpRequest();
   
    xhr.open("GET", "http://projects.draconicscales.com/mobile_json/resources/data/data.json", true);
    xhr.setRequestHeader("Content-Type", "application/json");	

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
	       data = this.responseText;
           jsonResponse = JSON.parse(data);
           user_activity = jsonResponse.data.recentActivities;
           activity(user_activity);
        } else if (this.readyState !== 4 && this.status !== 200) {
            console.log("Data not found.");
        }
    };
    
    xhr.send(); 
}

function activity(data) {
    $("#title_name").text($("#all").text());
    $( "#activity" ).remove();
    $("<div></div>").insertAfter("nav").addClass("container").attr("id", "activity");
    for(var key in user_activity) {
        $("<div></div>").appendTo("#activity").addClass("row").attr("id", user_activity[key].nodeid);

        $("<div></div>").appendTo('#' + user_activity[key].nodeid).addClass("col-xs-12 container-row").html('<img class="avatar" src=' + relative_path + user_activity[key].authorAvatar + ' height="64px" width="64px">');

        if(user_activity[key].nodeTypeString === "Comment") {
            $("<div></div>").appendTo('#' + user_activity[key].nodeid + ' div:first-child').addClass("row-style").html('<p class="id-intro"><span class="username">' + user_activity[key].author + '</span> commented on the idea</p><p class="subject">' + user_activity[key].title + '</p><p class="timestamp">' + convertTime(user_activity[key].postDate - millisec_start) + '</p>');
        } else if(user_activity[key].nodeTypeString === "Idea") {
            $("<div></div>").appendTo('#' + user_activity[key].nodeid + ' div:first-child').addClass("row-style").html('<p class="id-intro"><span class="username">' + user_activity[key].author + '</span> posted an idea</p><p class="subject">' + user_activity[key].title + '</p><p class="timestamp">' + convertTime(user_activity[key].postDate - millisec_start) + '</p>');
        } else if(user_activity[key].nodeTypeString === "Reply") {
            $("<div></div>").appendTo('#' + user_activity[key].nodeid + ' div:first-child').addClass("row-style").html('<p class="id-intro"><span class="username">' + user_activity[key].author + '</span> replied to a comment on the idea</p><p class="subject">' + user_activity[key].title + '</p><p class="timestamp">' + convertTime(user_activity[key].postDate - millisec_start) + '</p>');
        }

    }
}

function comments(data) {
    $("#title_name").text($("#comments").text());
    $( "#activity" ).remove();
    $("<div></div>").insertAfter("nav").addClass("container").attr("id", "activity");
    for(var key in user_activity) {

        if(user_activity[key].nodeTypeString === "Comment") {
            $("<div></div>").appendTo("#activity").addClass("row").attr("id", user_activity[key].nodeid);

            $("<div></div>").appendTo('#' + user_activity[key].nodeid).addClass("col-xs-12 container-row").html('<img class="avatar" src=' + relative_path + user_activity[key].authorAvatar + ' height="64px" width="64px">');
            
            $("<div></div>").appendTo('#' + user_activity[key].nodeid + ' div:first-child').addClass("row-style").html('<p class="id-intro"><span class="username">' + user_activity[key].author + '</span> commented on the idea</p><p class="subject">' + user_activity[key].title + '</p><p class="timestamp">' + convertTime(user_activity[key].postDate - millisec_start) + '</p>');
        }
    }
}

function ideas(data) {
    $("#title_name").text($("#ideas").text());
    $( "#activity" ).remove();
    $("<div></div>").insertAfter("nav").addClass("container").attr("id", "activity");
    for(var key in user_activity) {

        if(user_activity[key].nodeTypeString === "Idea") {
            
            $("<div></div>").appendTo("#activity").addClass("row").attr("id", user_activity[key].nodeid);

            $("<div></div>").appendTo('#' + user_activity[key].nodeid).addClass("col-xs-12 container-row").html('<img class="avatar" src=' + relative_path + user_activity[key].authorAvatar + ' height="64px" width="64px">');
            
            $("<div></div>").appendTo('#' + user_activity[key].nodeid + ' div:first-child').addClass("row-style").html('<p class="id-intro"><span class="username">' + user_activity[key].author + '</span> posted an idea</p><p class="subject">' + user_activity[key].title + '</p><p class="timestamp">' + convertTime(user_activity[key].postDate - millisec_start) + '</p>');
        }
    }
}

function replies(data) {
    $("#title_name").text($("#replies").text());
    $( "#activity" ).remove();
    $("<div></div>").insertAfter("nav").addClass("container").attr("id", "activity");
    for(var key in user_activity) {

        if(user_activity[key].nodeTypeString === "Reply") {
            
            $("<div></div>").appendTo("#activity").addClass("row").attr("id", user_activity[key].nodeid);

            $("<div></div>").appendTo('#' + user_activity[key].nodeid).addClass("col-xs-12 container-row").html('<img class="avatar" src=' + relative_path + user_activity[key].authorAvatar + ' height="64px" width="64px">');
            
            $("<div></div>").appendTo('#' + user_activity[key].nodeid + ' div:first-child').addClass("row-style").html('<p class="id-intro"><span class="username">' + user_activity[key].author + '</span> replies to a comment on idea</p><p class="subject">' + user_activity[key].title + '</p><p class="timestamp">' + convertTime(user_activity[key].postDate - millisec_start) + '</p>');
        }
    }
}