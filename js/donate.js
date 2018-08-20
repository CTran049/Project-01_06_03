$("document").ready(function() {
  $("#donate").click(validate);
});

function validate() {
  // alert("Test 2");
  var fName = document.getElementById("firstName");
  if (fName.validity.valueMissing || fName.validity.patternMismatch) {
      fName.setCustomValidity("Enter your name as it appears on your card.");
  } else {
      fName.setCustomValidity("");
  }
  var lName = document.getElementById("lastName");
  if(lName.validity.valueMissing || lName.validity.patternMismatch) {
    lName.setCustomValidity("Enter your name as it appears on your card.");
  } else {
    lName.setCustomValidity("");
  }
  var street = document.getElementById("street");
  if(street.validity.valueMissing || street.validity.patternMismatch) {
    street.setCustomValidity("Enter your full street address.");
  } else {
    street.setCustomValidity("");
  }
  var city = document.getElementById("city");
  if(city.validity.valueMissing || city.validity.patternMismatch) {
    city.setCustomValidity("Enter your city.");
  } else {
    city.setCustomValidity("");
  }
  var state = document.getElementById("state");
  if(state.selectedIndex === 0) {
    state.setCustomValidity("Please select your state.");
  } else {
    state.setCustomValidity("");
  }
  var zip = document.getElementById("zip");
  if(zip.validity.valueMissing || zip.validity.patternMismatch) {
    zip.setCustomValidity("Please enter your 5 digit zip code.");
  } else {
    zip.setCustomValidity("");
  }
  var cardNum = document.getElementById("cardNum");
  if(cardNum.validity.valueMissing || cardNum.validity.patternMismatch || luhn(cardNum.value) == false) {
    cardNum.setCustomValidity("Please enter your card number as it appears on your card.");
  } else {
    cardNum.setCustomValidity("");
  }
  var cardCVC = document.getElementById("cardCVC");
  if(cardCVC.validity.valueMissing || cardCVC.validity.patternMismatch) {
    cardCVC.setCustomValidity("Please enter your card CVC as it appears on your card.");
  } else {
    cardCVC.setCustomValidity("");
  }
  var cardType = document.getElementById("cardType");
  if(cardType.selectedIndex === 0) {
    cardType.setCustomValidity("Please select your card type.");
  } else {
    cardType.setCustomValidity("");
  }
  var expMonth = document.getElementById("expMonth");
  if(expMonth.selectedIndex === 0) {
    expMonth.setCustomValidity("Please select your card's expiration date.");
  } else {
    expMonth.setCustomValidity("");
  }
  var expYear = document.getElementById("expYear");
  if(expYear.selectedIndex === 0) {
    expYear.setCustomValidity("Please select your card's expiration year.");
  } else {
    expYear.setCustomValidity("");
  }
  var amount = document.getElementById("amount");
  if(amount.selectedIndex === 0) {
    amount.setCustomValidity("Please select your donation amount.");
  } else {
    amount.setCustomValidity("");
  }
}

function sumDigits(numStr) {
    var digitTotal = 0;
    for (var i = 0; i < numStr.length; i++) {
        digitTotal += parseInt(numStr.charAt(i));
    }
    return digitTotal;
}

function luhn(idNum) {
    var string1 = "";
    var string2 = "";

    // Retrieve the odd numbered digits
    for (var i = idNum.length - 1; i >= 0; i -= 2) {
        string1 += idNum.charAt(i);
    }
    // Retrieve the even numbered digits and double them
    for (var i = idNum.length - 2; i >= 0; i -= 2) {
        string2 += 2 * idNum.charAt(i);
    }

    // Return whether the sume of the digits is divisible by 10
    return sumDigits(string1 + string2) % 10 === 0;
}
