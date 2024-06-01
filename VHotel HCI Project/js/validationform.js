let errorMessage = document.getElementById("error-message");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate() {
  let checkIn = document.getElementById("input-date-in").value;
  let checkOut = document.getElementById("input-date-out").value;
  let name = document.getElementById("input-name").value;
  let adult = document.getElementById("input-adult").value;
  let child = document.getElementById("input-child").value;
  let room = document.getElementById("input-room").value;
  let type = document.getElementById("input-type").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-number").value;

  if (validateCheckOut(checkIn, checkOut) == false) {
    return;
  } else if (validateName(name) == false) {
    return;
  } else if (validateEmail(email) == false) {
    return;
  } else if (validateAdult(adult) == false) {
    return;
  } else if (validateChild(child) == false) {
    return;
  } else if (validateRoom(room) == false) {
    return;
  } else if (validateType(type) == false) {
    return;
  } else if (validatePhone(phone) == false) {
    return;
  } else {
    errorMessage.innerHTML = "Success Book";
  }
}

function validateCheckOut(checkIn, checkOut) {
  if (checkIn > checkOut) {
    errorMessage.innerHTML =
      "Check-out date cannot be set before check-in date.";
    return false;
  }
  return true;
}

function validateName(name) {
  if (name.length < 6) {
    errorMessage.innerHTML = "Full name should be at least 6 characters long.";
    return false;
  }
  return true;
}

function validateEmail(email) {
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Invalid email. Please enter a valid email.";
    return false;
  }
  return true;
}

function validateAdult(adult) {
  if (adult < 1) {
    errorMessage.innerHTML = "Minimum 1 adult is required.";
    return false;
  }
  return true;
}

function validateChild(child) {
  if (child < 0) {
    errorMessage.innerHTML = "Minimum 0 child is allowed.";
    return false;
  }
  return true;
}

function validateRoom(room) {
  if (room < 1) {
    errorMessage.innerHTML = "Minimum 1 room is required.";
    return false;
  }
  return true;
}

function validateType(type) {
  if (type == "") {
    errorMessage.innerHTML = "Please select a room type.";
    return false;
  }
  return true;
}

function validatePhone(phone) {
  if (isNaN(phone) || phone.length < 10) {
    errorMessage.innerHTML = "Enter a valid 10-digit phone number.";
    return false;
  }
  return true;
}
