// Anton Huggard, May 2020 -- jQuery has been added


$(document).ready(function(){
    $("#hamburger").click(function(){
      var mobile_menu = $(".mobile_top_menu");
      mobile_menu.toggleClass("hidden");
    });
});
  
function scam_function() {
    alert('this page has stopped responding');
    alert('well would you look at that. It\'s working again. What are the odds?')
}
function goto_page(link) {
    window.location.href = link;
}


function colourChange() {
    document.getElementById("normal_head").style.backgroundColor = "black";
}

function random() {
    let num = Math.floor((Math.random() * 75) + 1);
    window.location='../'+num;
}

let monochrome = true;
function toggle_colour() {
    if (monochrome) {
        document.getElementById("comic").src = "../assets/img/comics/12_19e-C.png";
        monochrome = false;
    } else {
        document.getElementById("comic").src = "../assets/img/comics/12_19e.png";
        monochrome = true;
    }
}
