window.addEventListener("load", async () => {
  const usersTable = document.querySelector(".users-table");
  const accessToken = localStorage.getItem("access-token");

  const res = await fetch("https://sabzlearn-graphql.iran.liara.run/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      query: `
        query {
            users {
                _id
                username
                email
                role
            }
        }
      `,
    }),
  });

  const response = await res.json();

  if (!response.errors) {
    const users = response.data.users;
    console.log(users);

    users.forEach((user, index) => {
      usersTable.insertAdjacentHTML(
        "beforeend",
        `
            <div class="table-row">
                <p class="id">#${index + 1}</p>
                <p>${user.username}</p>
                <p>${user.email}</p>
                <div class="flex center">
                <p class="${
                  user.role === "ADMIN" ? "green" : "yellow"
                }-status">${user.role}</p>
                </div>
                <div class="flex center">
                <button class="ui-button error">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button class="ui-button primary">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                </div>
            </div>
        `
      );
    });
  } else {
  }
});
