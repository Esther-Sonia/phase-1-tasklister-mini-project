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

      


});
