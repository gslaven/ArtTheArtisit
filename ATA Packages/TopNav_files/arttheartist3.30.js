
// desktop slider
    var slideIndex = 1;
    showDivs(slideIndex);

function plusDivs(n) 
{
    showDivs(slideIndex += n);
}
function showDivs(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
// mobile slider
var slideIndex = 1;
    showmDivs(slideIndex);

function plusmDivs(n) 
{
    showmDivs(slideIndex += n);
}
function showmDivs(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlidesMobile");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

         
    

//Nav Bar
window.onscroll = function () { myFunction() };

var mySidenav = document.getElementById("mySidenav");
var sticky = mySidenav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        mySidenav.classList.add("sticky")
    }
    else {
        mySidenav.classList.remove("sticky");
    }
}

