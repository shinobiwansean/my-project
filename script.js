// Function to validate the contact form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return false;
    }

    // Check if the email format is valid
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}

// Function to toggle the visibility of an element
function toggleElement(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Add event listeners
document.getElementById("toggleButton").addEventListener("click", function() {
    toggleElement("hiddenContent");
});

// Add more interactive functionalities as needed
