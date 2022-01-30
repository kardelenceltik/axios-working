axios.get("https://reqres.in/api/users").then((response) => {
  
  let userElement = document.getElementById("users-list-area");

  response.data.data.forEach((user) => {
    userElement.insertAdjacentHTML(
      "beforebegin",
      `<a href="/detail.html?id=${user.id}" class="list-group-item list-group-item-action">${user.first_name}</a>`
    );
  });
});
