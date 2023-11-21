const form = document.getElementById("form");
const userData = document.getElementById("table");

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("acceptterms").checked;

  const user = {
    name,
    email,
    password,
    dob,
    terms,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  displayUsers();
  form.reset();
}

function displayUsers() {
  userData.innerHTML = "";
  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>${user.dob}</td>
      <td>${user.terms ? "true" : "false"}</td>
    `;
    userData.appendChild(row);
  });
}

form.addEventListener("submit", handleSubmit);
//localStorage.clear();
displayUsers();
