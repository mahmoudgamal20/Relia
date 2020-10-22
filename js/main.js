/* trigger the carousel */

$(function() {
    $('.carousel').carousel();
});

/* trigger wow.js  */

AOS.init({
    duration: 1000
});

/* show the hidden projects */

var moreProjectsBtn = document.querySelector(".more-projects"),
    hiddenRow = document.querySelector(".hidden-row");

moreProjectsBtn.onclick = function() {
    hiddenRow.classList.toggle("hidden-row");
    this.style.display = "none";
}


/* adjust scrollup and navbar on scroll */

var myNavbar = document.querySelector(".navbar"),
    scrollupBtn = document.querySelector(".scrollup");

window.onscroll = function() {
    if (window.pageYOffset > 200) {
        myNavbar.style.transition = "0.3s";
        myNavbar.style.background = "#fff";
        myNavbar.style.filter = "drop-shadow(0px 0px 5px #ddd)";
        scrollupBtn.style.display = "block";
    } else {
        myNavbar.style.transition = "0.3s";
        myNavbar.style.background = "transparent";
        myNavbar.style.filter = "none";
        scrollupBtn.style.display = "none";
    }
}

scrollupBtn.onclick = function() {
    window.scrollTo(0, 0);
}

/* adjust the loader */

var spinnerLoading = document.querySelector(".loader");

function hideLoader() {
    spinnerLoading.style.visibility = "hidden";
}
window.onload = function() {
    setTimeout(hideLoader, 2000);
}