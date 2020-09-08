$(document).ready(function(){
    $.getJSON("https://6sf2pz2771.execute-api.us-east-1.amazonaws.com/Prod/Prod", function(data){
        $("#visitor-count").text(data.visitorCount); //#visitor-count can be referenced in html file, data.visitorCount represents the attribtue visitorCount returned as json file
        $('[data-toggle="counter-up"]').counterUp({ // place data-toggle counter in this file from main.js to show updated count
            delay: 10,
            time: 1000
        });
    }).fail(function(){
        console.log("An error has occurred while fetching the visitor count."); // error control
    });
});