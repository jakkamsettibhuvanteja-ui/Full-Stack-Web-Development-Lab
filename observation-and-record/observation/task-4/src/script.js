const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


addTaskBtn.addEventListener("click", function () {


    const taskText = taskInput.value.trim();



    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }



    const taskItem = document.createElement("li");

    taskItem.className = "task-item";



    const taskTextElement = document.createElement("span");

    taskTextElement.className = "task-text";

    taskTextElement.textContent = taskText;



    const buttonGroup = document.createElement("div");

    buttonGroup.className = "button-group";



    const completeButton = document.createElement("button");

    completeButton.textContent = "Complete";

    completeButton.className = "complete-btn";



    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-btn";



    completeButton.addEventListener("click", function () {

        taskTextElement.classList.toggle("completed");

    });



    deleteButton.addEventListener("click", function () {

        taskItem.remove();

        checkEmptyList();

    });



    buttonGroup.appendChild(completeButton);

    buttonGroup.appendChild(deleteButton);



    taskItem.appendChild(taskTextElement);

    taskItem.appendChild(buttonGroup);



    taskList.appendChild(taskItem);



    taskInput.value = "";


    checkEmptyList();

});



function checkEmptyList() {

    if (taskList.children.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }

}