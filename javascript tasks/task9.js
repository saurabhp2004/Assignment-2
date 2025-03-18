// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;

            let user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);

            localStorage.setItem("users", JSON.stringify(users));

            alert("User Registered Successfully!");
            form.reset();
        });
    }

    // Function to display users
    const userTableBody = document.getElementById("userTableBody");

    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            let row = userTableBody.insertRow();
            row.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.contact}</td><td>${user.address}</td>`;
        });
    }
});
