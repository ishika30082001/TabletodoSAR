// document
//   .getElementById("addListButton")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value;
//     console.log(name);

//     const email = document.getElementById("email").value;
//     console.log(email);

//     if (email && name) {
//       const table = document.getElementsByTagName("table");
//       const tableData = document.getElementsByTagName("td");
//       console.log(tableData);

//       for (let i = 0; i < tableData.length; i++) {
//         console.log(tableData[i].innerText); // or .textContent
//       }
//     //   tableData.forEach(myData);

//     //   function myData(item, index) {
//     //     console.log(item);
//     //     console.log(index);
//     //   }
//     // }
//   });

const addTask = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const name = nameInput.value;
  const email = emailInput.value;

  if (name || email) {
    const table = document
      .getElementById("crud-table")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const actionsCell = newRow.insertCell(2);

    nameCell.innerText = name;
    emailCell.innerText = email;

    actionsCell.innerHTML = `
                    <button onclick="editTask(this)">Edit</button>
                    <button onclick="deleteTask(this)">Delete</button>
                `;

    // let tbody ;
    nameInput.value = "";
    emailInput.value = "";
  }

  //   saveData();
};

function editTask(button) {
  // Add your edit logic here
  alert("Edit button clicked!");
  //   saveData();
}

function deleteTask(button) {
  // Add your delete logic here
  const row = button.parentElement.parentElement;
  row.remove();
  //   saveData();
}
