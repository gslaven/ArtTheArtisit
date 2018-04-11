/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

 function mobileDropdown() {
    console.log("main my function")
     var x = document.getElementById("myTopnav");
     console.log(x.className);
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
    } 
}

// function mobileDropdown() {
//     console.log('inside myFunction');
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }