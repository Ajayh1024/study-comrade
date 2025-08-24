// Select elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add Task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="delete">Delete</button>
    </div>
  `;

  // Mark as completed on click
  li.querySelector('.task-text').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete task
  li.querySelector('.delete').addEventListener('click', () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
