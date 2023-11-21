let form=document.getElementById("Form")
function listener(event){
    event.preventDefault()
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const terms = document.getElementById("check").checked;
  
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
  
    printOnPage();
    form.reset();
}
let table=document.getElementById("table")
function printOnPage() {
    table.innerHTML = "";
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
        table.appendChild(row);
      });
}
form.addEventListener("submit",listener)
printOnPage()
