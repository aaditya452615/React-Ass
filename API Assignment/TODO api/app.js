const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Sample API for demonstration
const todoList = document.getElementById('todoList');

// Function to fetch todos from the API
function fetchTodos() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(todos => {
      // Clear existing content
      todoList.innerHTML = '';

      // Append each todo to the DOM
      todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
          <span>${todo.id}. ${todo.title}</span>
          <span>Status: ${todo.completed ? 'Completed' : 'Pending'}</span>
        `;
        todoList.appendChild(todoItem);
      });
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}

// Fetch the todos when the page loads
document.addEventListener('DOMContentLoaded', fetchTodos);
