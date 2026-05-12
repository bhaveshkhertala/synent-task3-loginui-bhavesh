showTask();

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value;

    // Empty Input Check
    if (task == "") {

        alert("Please enter a task");

        return;
    }

    // Create List Item
    let li = document.createElement("li");

    // Create Checkbox
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    // Create Task Text
    let span = document.createElement("span");

    span.innerText = task;

    // Checkbox Function
    checkbox.onclick = function () {

        if (checkbox.checked) {

            span.style.textDecoration = "line-through";

            span.style.color = "gray";

        } else {

            span.style.textDecoration = "none";

            span.style.color = "black";
        }

        saveTask();
    };

    // Create Delete Button
    let button = document.createElement("button");

    button.innerText = "Delete";

    // Delete Function
    button.onclick = function () {

        deleteTask(button);

        saveTask();
    };

    // Add Elements Inside LI
    li.appendChild(checkbox);

    li.appendChild(span);

    li.appendChild(button);

    // Add LI to UL
    document.getElementById("taskList").appendChild(li);

    // Clear Input
    input.value = "";

    // Save Data
    saveTask();
}

// Delete Task
function deleteTask(button) {

    button.parentElement.remove();
}

// Save Tasks in LocalStorage
function saveTask() {

    localStorage.setItem(
        "data",
        document.getElementById("taskList").innerHTML
    );
}

// Show Saved Tasks
function showTask() {

    document.getElementById("taskList").innerHTML =
        localStorage.getItem("data") || "";

    // Delete Button After Refresh
    let buttons = document.querySelectorAll("#taskList button");

    buttons.forEach(function(button) {

        button.onclick = function () {

            deleteTask(button);

            saveTask();
        };
    });

    // Checkbox After Refresh
    let checkboxes =
        document.querySelectorAll("#taskList input[type='checkbox']");

    let spans =
        document.querySelectorAll("#taskList span");

    checkboxes.forEach(function(checkbox, index) {

        // Keep Checked Style After Refresh
        if (checkbox.checked) {

            spans[index].style.textDecoration = "line-through";

            spans[index].style.color = "gray";
        }

        // Checkbox Click Event
        checkbox.onclick = function () {

            if (checkbox.checked) {

                spans[index].style.textDecoration = "line-through";

                spans[index].style.color = "gray";

            } else {

                spans[index].style.textDecoration = "none";

                spans[index].style.color = "black";
            }

            saveTask();
        };
    });
}