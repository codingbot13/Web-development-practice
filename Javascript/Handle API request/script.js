async function fetchUsers() {

    let message = document.getElementById("message");
    let users = document.getElementById("users");

    message.innerHTML = "Loading...";
    users.innerHTML = "";

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user details");
        }

        let data = await response.json();

        message.innerHTML = "Users loaded successfully!";

        data.forEach(function(user) {

            users.innerHTML += `
                <div class="user">
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address.city}</p>
                </div>
            `;

        });

    }

    catch (error) {

        message.innerHTML = "Error: Unable to fetch data. Please try again.";

        console.log(error);

    }

}