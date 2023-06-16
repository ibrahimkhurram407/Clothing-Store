document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform form validation (you can customize this based on your requirements)
  if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Perform signup process (you can replace this with your own logic)
  alert("Signup successful!");

  // Reset form
  document.getElementById("signup-form").reset();
});
