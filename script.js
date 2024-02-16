const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new todo item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <input type="checkbox">
            <label>${todoText}</label>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

// Event listener for adding a new todo
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Event listener for deleting a todo item
todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});
