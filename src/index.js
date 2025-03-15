document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskInput = document.querySelector("#new-task-description");
  const prioritySelect = document.querySelector("#task-priority"); 
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault(); 

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    
    if (!taskText) {
        alert("Fill in the task description field!");
        return;
    }

    if (!priority) {
      alert("Fill in the priority field!");
      return;
  }


    addTask(taskText, priority);
    taskInput.value = ""; 
    prioritySelect.value = "";
  }

  function addTask(taskText, priority) {
    const li = document.createElement("li"); 

    const taskSpan = document.createElement("strong");
    taskSpan.textContent = taskText;

    const prioritySpan = document.createElement("em");
prioritySpan.textContent = `${priority} Priority`;
prioritySpan.className = priority.toLowerCase(); 

    li.appendChild(taskSpan);
    li.appendChild(document.createTextNode(" ~ ")); 
    li.appendChild(prioritySpan); 

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => li.remove());

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit your task:", li.firstChild.textContent);
      if (newText) li.firstChild.textContent = newText;
    });
    

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
  }
});
