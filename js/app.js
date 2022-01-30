const urlParams = new URLSearchParams(window.location.search);
const idValue = urlParams.get("id");

axios.get(`https://reqres.in/api/users/${idValue}`).then((response) => {
  let firstName = response.data.data.first_name;
  let lastName = response.data.data.last_name;
  let email = response.data.data.email;
  let imageURL = response.data.data.avatar;
  let firstNameElement = document.getElementById("first-name-area");
  let lastNameElement = document.getElementById("last-name-area");
  let emailElement = document.getElementById("email-area");
  let imageElement = document.getElementById("image-area");
  firstNameElement.innerHTML = firstName;
  lastNameElement.innerHTML = lastName;
  emailElement.innerHTML = email;
  imageElement.setAttribute("src", imageURL);
});
