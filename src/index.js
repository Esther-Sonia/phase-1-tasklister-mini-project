document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault(); 

    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert("Fill the task field!");
        return;
    }

    addTask(taskText);
    taskInput.value = ""; 
}
function addTask(taskText,priority) {
  const li = document.createElement("li"); 
  li.textContent = taskText; 

  const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => li.remove());

  const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => editTask(li, taskText));      
        
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskList.addEventListener("click", (event) => {
          if (event.target.classList.contains("edit-btn")) {
            const li = event.target.parentElement;
            const newText = prompt("Edit your task:", li.firstChild.textContent);
            if (newText !== null && newText.trim() !== "") {
              li.firstChild.textContent = newText.trim();
            }
          }
    
  });
  
}});
