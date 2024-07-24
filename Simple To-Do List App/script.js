function addTask() {
    let taskInputElement = document.getElementById('taskInput');
    let taskListElement = document.getElementById('taskList');
    let taskLimitMessageElement = document.getElementById('taskLimitMessage');

    if (taskInputElement.value.trim() !== '') {
        if (taskListElement.children.length >= 5) {
            taskLimitMessageElement.textContent = 'Oops! You’ve hit the task limit. Please remove a task first.';
            taskLimitMessageElement.style.display = 'block';
            return;
        } else {
            taskLimitMessageElement.style.display = 'none';
        }

        let taskItemElement = document.createElement('li');

        let taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskInputElement.value;
        taskTextElement.onclick = function() {
            taskTextElement.classList.toggle('strikethrough');
        };
        taskItemElement.appendChild(taskTextElement);

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.className = 'delete';
        deleteButtonElement.onclick = function() {
            taskItemElement.remove();
        };
        taskItemElement.appendChild(deleteButtonElement);

        taskListElement.appendChild(taskItemElement);
        taskInputElement.value = '';
    } else {
        alert('Please enter a task.');
    }
}

document.getElementById('taskInput').addEventListener('input', function() {
    let charLimitMessageElement = document.getElementById('charLimitMessage');
    let maxLength = this.getAttribute('maxlength');
    let currentLength = this.value.length;

    if (currentLength >= maxLength) {
        charLimitMessageElement.textContent = `You’ve reached the maximum character limit of ${maxLength}.`;
    } else {
        charLimitMessageElement.textContent = '';
    }
});
