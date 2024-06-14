document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskNameInput = document.getElementById('task-name');
    const taskPrioritySelect = document.getElementById('task-priority');
    const incompleteTasksList = document.getElementById('incomplete-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    const goalForm = document.getElementById('goal-form');
    const goalNameInput = document.getElementById('goal-name');
    const goalsList = document.getElementById('goals');

    const affirmationForm = document.getElementById('affirmation-form');
    const affirmationInput = document.getElementById('affirmation');
    const affirmationsList = document.getElementById('affirmations');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = taskNameInput.value;
        const taskPriority = taskPrioritySelect.value;
        addTask(taskName, taskPriority);
        taskNameInput.value = '';
    });

    goalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const goalName = goalNameInput.value;
        addGoal(goalName);
        goalNameInput.value = '';
    });

    affirmationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const affirmation = affirmationInput.value;
        addAffirmation(affirmation);
        affirmationInput.value = '';
    });

    function addTask(name, priority) {
        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, priority }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            loadTasks();
        });
    }

    function completeTask(name) {
        fetch('/tasks', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            loadTasks();
        });
    }

    function removeTask(name) {
        fetch('/tasks', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            loadTasks();
        });
    }

    function addGoal(name) {
        const goalItem = document.createElement('li');
        goalItem.textContent = name;
        goalsList.appendChild(goalItem);
    }

    function addAffirmation(text) {
        const affirmationItem = document.createElement('li');
        affirmationItem.textContent = text;
        affirmationsList.appendChild(affirmationItem);
    }

    function loadTasks() {
        fetch('/tasks')
        .then(response => response.json())
        .then(tasks => {
            incompleteTasksList.innerHTML = '';
            completedTasksList.innerHTML = '';
            tasks.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.innerHTML = `
                    ${task.name} [${task.priority}]
                    <div>
                        ${!task.completed ? `<button class="complete-btn">Complete</button>` : ''}
                        <button class="remove-btn">Remove</button>
                    </div>
                `;
                if (task.completed) {
                    taskItem.classList.add('completed');
                    completedTasksList.appendChild(taskItem);
                } else {
                    incompleteTasksList.appendChild(taskItem);
                }

                if (!task.completed) {
                    taskItem.querySelector('.complete-btn').addEventListener('click', () => {
                        completeTask(task.name);
                    });
                }

                taskItem.querySelector('.remove-btn').addEventListener('click', () => {
                    removeTask(task.name);
                });
            });
        });
    }

    loadTasks();
});
