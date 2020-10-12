function changeImage() {
  val =
    document.bookingForm.cars.options[document.bookingForm.cars.selectedIndex]
      .value;
  document
    .getElementById("selectedCar")
    .setAttribute("src", "images/" + val + ".png");
}

function validateName(name) {
  letters = /^[A-Za-z ]+$/;
  errMsg = "";
  if (name == "") {
    errMsg = "Name is required";
  } else if (name.match(letters) == null) {
    errMsg =
      "Name should contain only lowercase letter, uppercase letters and space";
  } else if (name.length > 20) {
    errMsg = "Name should not be longer than 20 characters";
  }
  document.getElementById("nameError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validateUsernameOnLogin(username) {
  errMsg = "";
  if (username == "") {
    errMsg = "Username is required";
  }
  document.getElementById("usernameError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validatePasswordOnLogin(password) {
  errMsg = "";
  if (password == "") {
    errMsg = "Password is required";
  }
  document.getElementById("passwordError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validateCarsOnBooking(cars) {
  errMsg = "";
  if (cars == "") {
    errMsg = "Car is required";
  }
  document.getElementById("carError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validatePickupLocationOnBooking(pickupLocation) {
  errMsg = "";
  if (pickupLocation == "") {
    errMsg = "Pickup location is required";
  }
  document.getElementById("pickupLocationError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validatePickupDateOnBooking(pickupDate) {
  errMsg = "";
  if (pickupDate == "") {
    errMsg = "Pickup date is required.";
  }
  document.getElementById("pickupDateTimeError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validatePickupTimeOnBooking(pickupTime) {
  errMsg = "";
  if (pickupTime == "") {
    errMsg = "Pickup time is required.";
  }
  document.getElementById("pickupDateTimeError").textContent += errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validateDropoffLocationOnBooking(dropoffLocation) {
  errMsg = "";
  if (dropoffLocation == "") {
    errMsg = "Dropoff location is required.";
  }
  document.getElementById("dropoffLocationError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validateDropoffDateOnBooking(dropoffDate) {
  errMsg = "";
  if (dropoffDate == "") {
    errMsg = "Dropoff date is required";
  }
  document.getElementById("dropoffDateTimeError").textContent += errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validateDropoffTimeOnBooking(dropoffTime) {
  errMsg = "";
  if (dropoffTime == "") {
    errMsg = "Dropoff time is required";
  }
  document.getElementById("dropoffDateTimeError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validateUsernameOnRegister(username) {
  letters = /^[A-Za-z0-9]+$/;
  errMsg = "";
  if (username == "") {
    errMsg = "Username is required";
  } else if (username.match(letters) == null) {
    errMsg =
      "Username should contain only lowercase letter, uppercase letters and numbers";
  } else if (username.length > 20) {
    errMsg = "Username should not be longer than 20 characters";
  }
  document.getElementById("usernameError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validatePasswordOnRegister(password) {
  errMsg = "";
  if (password == "") {
    errMsg = "Password is required";
  } else if (password.length < 7 || password.length > 15) {
    errMsg = "Password length should be between 7 and 15 characters";
  }
  document.getElementById("passwordError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validateEmail(emailID) {
  atposition = emailID.indexOf("@");
  dotposition = emailID.lastIndexOf(".");

  errMsg = "";
  if (emailID == "") {
    errMsg = "Email is required";
  } else if (atposition < 1 || dotposition - atposition < 2) {
    errMsg = "Invalid Email id";
  }
  document.getElementById("emailError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function validateMobileNumber(mob) {
  numbers = /^[0-9]+$/;
  errMsg = "";
  if (mob == "") {
    errMsg = "Mobile number is required";
  } else if (mob.match(numbers) == null) {
    errMsg = "Please enter valid mobile number";
  } else if (mob.length < 10) {
    errMsg = "Please enter valid mobile number";
  }
  document.getElementById("mobileNumberError").textContent = errMsg;
  if (errMsg.length != 0) {
    return false;
  }
  return true;
}

function register() {
  var nameValue = document.forms["registrationForm"]["name"].value;
  var usernameValue = document.forms["registrationForm"]["username"].value;
  var passwordValue = document.forms["registrationForm"]["password"].value;
  var emailValue = document.forms["registrationForm"]["email"].value;
  var mobileNumberValue =
    document.forms["registrationForm"]["mobilenumber"].value;

  isValidName = validateName(nameValue);
  isValidUsername = validateUsernameOnRegister(usernameValue);
  isValidPassword = validatePasswordOnRegister(passwordValue);
  isValidEmail = validateEmail(emailValue);
  isValidMob = validateMobileNumber(mobileNumberValue);

  if (
    isValidName &&
    isValidUsername &&
    isValidPassword &&
    isValidEmail &&
    isValidMob
  ) {
    alert("You have registered successfully!");
    location.href = "login.html";
  } else {
    return false;
  }
}

function goToRegister() {
  location.href = "register.html";
}

function login() {
  var usernameValue = document.forms["LoginForm"]["username"].value;
  var passwordValue = document.forms["LoginForm"]["password"].value;

  isValidUsername = validateUsernameOnLogin(usernameValue);
  isValidPassword = validatePasswordOnLogin(passwordValue);

  if (usernameValue && passwordValue) {
    alert("You have logged in successfully!");
    location.href = "login.html";
  } else {
    return false;
  }
}

function goToBooking() {
  location.href = "booking.html";
}

function book() {
  var carsValue = document.forms["bookingForm"]["cars"].value;
  var pickupLocationValue =
    document.forms["bookingForm"]["pickupLocation"].value;
  var pickupDateValue = document.forms["bookingForm"]["pickupDate"].value;
  var pickupTimeValue = document.forms["bookingForm"]["pickupTime"].value;
  var dropoffLocationValue =
    document.forms["bookingForm"]["dropoffLocation"].value;
  var dropoffDateValue = document.forms["bookingForm"]["dropoffDate"].value;
  var dropoffTimeValue = document.forms["bookingForm"]["dropoffTime"].value;

  isValidCarsValue = validateCarsOnBooking(carsValue);
  isValidPickupLocation = validatePickupLocationOnBooking(pickupLocationValue);
  isValidPickupDate = validatePickupDateOnBooking(pickupDateValue);
  isValidPickupTime = validatePickupTimeOnBooking(pickupTimeValue);
  isValidDropoffLocation = validateDropoffLocationOnBooking(
    dropoffLocationValue
  );
  isValidDropoffDate = validateDropoffDateOnBooking(dropoffDateValue);
  isValidDropoffTime = validateDropoffTimeOnBooking(dropoffTimeValue);

  if (
    isValidCarsValue &&
    isValidPickupLocation &&
    isValidPickupDate &&
    isValidPickupTime &&
    isValidDropoffLocation &&
    isValidDropoffDate &&
    isValidDropoffTime
  ) {
    alert("Booked successfully!");
  } else {
    return false;
  }
}
