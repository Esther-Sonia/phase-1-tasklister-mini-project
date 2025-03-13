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
function addTask(taskText) {
  const li = document.createElement("li"); 
  li.textContent = taskText; 

  const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => li.remove());
  


      


}});
