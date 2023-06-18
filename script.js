const formContainer = document.getElementById("formContainer");
const addButton = document.getElementById("addButton");
const studentForm = document.getElementById("studentForm");
const databaseTable = document.getElementById("database-table");
const databaseBody = document.getElementById("database-body");
const rmaddbtn = document.getElementById("removeAddButton");

addButton.addEventListener("click", () => {
  formContainer.classList.add("show");
  // addButton.style.backgroundColor = "#0f0"; // Green background
  rmaddbtn.style.display = "block";
  studentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Add student data to the database table
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${name}</td>
          <td>${email}</td>
          <td>${phone}</td>
          <td class="database-buttons">
            <button onclick="updateRow(this)">Update</button>
            <button onclick="deleteRow(this)">Delete</button>
          </td>
        `;
    databaseBody.appendChild(row);

    // Clear the form inputs
    studentForm.reset();

    // Hide the form and show the database table
    formContainer.classList.remove("show");
    addButton.style.backgroundColor = "#555"; // Restore original color
    databaseTable.style.display = "table";
  });
});

function updateRow(button) {
  const row = button.closest("tr");
  const columns = row.querySelectorAll("td");

  const name = columns[0].textContent;
  const email = columns[1].textContent;
  const phone = columns[2].textContent;

  // Populate the form with row data for editing
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("phone").value = phone;

  // Delete the row
  row.remove();
}

function deleteRow(button) {
  const row = button.closest("tr");
  row.remove();
}
