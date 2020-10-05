function changeImage() {
  val =
    document.bookingForm.cars.options[document.bookingForm.cars.selectedIndex].value;
  document
    .getElementById("selectedCar")
    .setAttribute("src", "images/" + val + ".png");
}

function register() {
  alert("You have registered successfully!");
  location.href='login.html';
}

function goToRegister() {
  location.href='register.html';
}

function login() {
  alert("You have logged in successfully!");
  location.href='home.html';
}

function goToBooking() {
  location.href='booking.html';
}

function book() {
  alert("Booked successfully!");

}