function onSubmit(event) {
  event.preventDefault();

  // Retrieve form values
  const username = document.getElementById("name").value.trim();
  const organization = document.getElementById("organization").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Validation flags
  let isValid = true;

  let alertMessage = "";

  // Name validation
  if (username.length < 2 || username.length > 50) {
    isValid = false;
    alertMessage += "- Name must be between 2 and 50 characters.\n";
  }

  // Organization Name validation
  if (organization.length < 2 || organization.length > 100) {
    isValid = false;
    alertMessage +=
      "- Organization name must be between 2 and 100 characters.\n";
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    alertMessage += "- Invalid email format.\n";
  }

  // Contact Number validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    isValid = false;
    alertMessage += "- Phone number must be exactly 10 digits.\n";
  }

  // Show custom alert
  if (isValid) {
    showAlert("- Form submitted successfully", "success");
  } else {
    showAlert(alertMessage.trim(), "error");
  }
}

function reset() {
  // Retrieve form values
  const username = document.getElementById("name");
  const organization = document.getElementById("organization");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  console.log("reset called");
  username.value = "";
  organization.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
}

function showAlert(message, type) {
  const alertDiv = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  alertMessage.textContent = message;
  alertDiv.style.backgroundColor = type === "success" ? "#d4edda" : "#f8d7da";
  alertDiv.style.color = type === "success" ? "#155724" : "#721c24";
  alertDiv.style.borderColor = type === "success" ? "#c3e6cb" : "#f5c6cb";

  alertDiv.style.display = "flex";

  // Auto-hide the alert after 5 seconds
  setTimeout(() => {
    if (type === "success") {
      reset();
    }
    alertDiv.style.display = "none";
  }, 5000);
}

function closeAlert() {
  const alertDiv = document.getElementById("custom-alert");
  alertDiv.style.display = "none";
}