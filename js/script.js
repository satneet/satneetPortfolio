/**
 * WEB222 – WEB222 Final Assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Satneet Kaur
 *      Student ID: 106932213
 *      Date:       16/12/2022
 */

let fullForm = document.querySelector("form");
let hideOrShow = document.getElementById("hourlyRateEl")

fullForm.elements.radioInput[0].addEventListener("click" , function(){
    hideOrShow.style.display = "none";
});

fullForm.elements.radioInput[1].addEventListener("click" , function(){
    hideOrShow.style.display = "none";
});

fullForm.elements.radioInput[2].addEventListener("click" , function(){
    hideOrShow.style.display = "block";
});




