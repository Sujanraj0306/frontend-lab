// This file contains JavaScript code for interactive features on the website.

// Function to toggle the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
}

// Function to show an alert message
function showAlert(message) {
    alert(message);
}

// Function to simulate loading action
function showLoadingButton(button) {
    button.innerHTML = "Loading...";
    button.disabled = true;

    // Simulate a loading delay
    setTimeout(() => {
        button.innerHTML = "Add to Cart";
        button.disabled = false;
    }, 2000);
}

// Event listeners for dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById("dropdownButton");
    dropdownButton.addEventListener("click", toggleDropdown);

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches('#dropdownButton')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });
});