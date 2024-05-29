function showPopup(message) {
    var popup = document.getElementById("popupMessage");
    var popupText = document.getElementById("popupText");
    var closeButton = document.querySelector(".closePopup");
    popupText.textContent = message;
    popup.style.display = "block";
    closeButton.addEventListener("click", function() {
        hidePopup();
    });
}

function hidePopup() {
    var popup = document.getElementById("popupMessage");
    popup.style.display = "none";
}

function sendFormData() {
    var formData = new FormData(document.getElementById("contactForm"));
    fetch("/contact", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then(data => {
        showPopup("Thank you for the message. We will get back to you soon!");
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    sendFormData();
});

hidePopup();