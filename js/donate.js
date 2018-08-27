/*
Project 01_06_03

Author: Charley Tran
Date: 8.23.18

Filename: donate.js
*/

"use strict";

var formValidity = true;

// This function checks input and select elements to validate if there's content.
function validateRequired() {
  var inputElements = document.getElementsByTagName("input");
  var selectElements = document.getElementsByTagName("select");
  var errorDiv = document.getElementById("errorText");
  var fieldsetValidity = true;
  var currentElement;

  try {
    // input element validation
    for (var i = 0; i < inputElements.length; i++) {
      currentElement = inputElements[i];
      if (currentElement.value === "") {
        currentElement.style.background = "rgb(255, 233, 233)";
        fieldsetValidity = false;
      }
      else {
        currentElement.style.background = "white";
      }
    }

    // select element validation
    for (var i = 0; i < selectElements.length; i++) {
      currentElement = selectElements[i];
      if (currentElement.value === "") {
        currentElement.style.border = "2px solid red";
        fieldsetValidity = false;
      } 
      else {
        currentElement.style.border = "";
      }
    }

     // This throws the error message
         if (fieldsetValidity === false) {
           throw "Please complete the rest of the form.";
         } else {
           errorDiv.style.display = "none";
           errorDiv.innerHTML = "";
           formValidity = true;
         }
         // This catches and displays the error message
       } catch (msg) {
         errorDiv.style.display = "block";
         errorDiv.innerHTML = msg;
         formValidity = false;
       }
       if (formValidity === true) {
         document.getElementsByTagName("form")[0].submit();
       }
     }

// Activates validation function
function validateForm(evt) {
  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;
  }

  validateRequired();
}

function createEventListeners() {
  var form = document.getElementsByTagName("form")[0];
  if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false);
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm);
  }
}

// Makes the reset button reset the page
function reloadPage(){
  document.location.reload();
}

// Added event listener to load the function createEventListeners.
window.addEventListener("load", createEventListeners);

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reloadPage, false);