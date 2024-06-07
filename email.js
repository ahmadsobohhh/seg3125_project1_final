window.onload = function () {
  const appointmentData = JSON.parse(localStorage.getItem("appointmentData"));
  if (appointmentData) {
    document.getElementById("confirmName").textContent =
      appointmentData.firstName + " " + appointmentData.lastName;
    document.getElementById("confirmDate").textContent =
      appointmentData.appointmentDate;
    document.getElementById("confirmService").textContent =
      appointmentData.serviceType;
    document.getElementById("confirmEmail").textContent = appointmentData.email;
    document.getElementById("confirmPhone").textContent =
      appointmentData.phoneNumber;
      document.getElementById("confirmDentist").textContent =
      appointmentData.dentist;
    document.getElementById("confirmInfo").textContent =
      appointmentData.additionalInfo;
  } else {
    document.body.innerHTML =
      "<h1>Booking information could not be found. Please try submitting the form again.</h1>";
  }
};

function goBack() {
  window.history.back();
}
