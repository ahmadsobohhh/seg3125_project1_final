document
  .querySelector(".appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data into an object
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      appointmentDate: document.getElementById("appointmentDate").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      email: document.getElementById("email").value,
      serviceType: document.getElementById("serviceType").value,
      dentist: document.getElementById("dentist").value,
      additionalInfo: document.getElementById("additionalInfo").value,
    };

    // Store the data in localStorage
    localStorage.setItem("appointmentData", JSON.stringify(formData));

    // Redirect to email.html
    window.location.href = "email.html";
  });
