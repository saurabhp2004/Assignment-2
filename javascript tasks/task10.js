document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registerForm");
    const userTable = document.getElementById("userTable");

    // 📝 Handle form submission
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;

            // ✅ Validate input
            if (!name || !email || !contact || !address) {
                alert("Please fill in all fields.");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push({ name, email, contact, address });

            localStorage.setItem("users", JSON.stringify(users));

            alert("User Registered Successfully!");

            form.reset();
        });
    }

    // 📝 Display users on View Page
    if (userTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach((user, index) => {
            let row = userTable.insertRow();
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
                </td>
            `;
        });
    }
});

// 🗑️ Delete user function
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User Deleted!");
    location.reload();
}
