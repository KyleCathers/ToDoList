import deleteButton from './images/deleteButton.png'

import { taskGroupList, taskGroup, task } from './factories.js'

// add a new task to the specified task group
function addTask() {
    const titleInput = document.querySelector('#task-modal-title-input');
    console.log(titleInput.value);

    const detailsInput = document.querySelector('#task-modal-details-input');
    console.log(detailsInput.value);

    const dueDateInput = document.querySelector('#task-modal-duedate-input');
    console.log(dueDateInput.value);

    const priorityInput = document.querySelector('#task-modal-priority-input');
    console.log(priorityInput.value);

    // new listener added every time submit button is clicked, remove here
    const addTaskSubmitButton = document.querySelector('#task-modal-submit');
    addTaskSubmitButton.removeEventListener('click', addTask);
}

// add a new task group to the master task group list
function addTaskGroup() {
    const titleInput = document.querySelector('#taskgroup-modal-title-input');
    const newTaskGroup = taskGroup(titleInput.value);

    taskGroupList.add(newTaskGroup);
    taskGroupList.info();

    // new listener added every time submit button is clicked, remove here
    const addTaskGroupSubmitButton = document.querySelector('#taskgroup-modal-submit');
    addTaskGroupSubmitButton.removeEventListener('click', addTaskGroup);

    // refresh menu
    updateMenu();
}

// add note, to do later ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function addNote() {
    const titleInput = document.querySelector('#note-modal-title-input');
    console.log(titleInput.value);

    const detailsInput = document.querySelector('#note-modal-details-input');
    console.log(detailsInput.value);
}

// update menu with custom tasks group
function updateMenu() {
    const customTasks = document.querySelector('#custom-tasks-group');
    customTasks.innerHTML = "";

    taskGroupList.info().forEach((title) => {
        const taskGroupItem = document.createElement('div');
        taskGroupItem.setAttribute('class', 'custom-tasks-group-item');

        const taskGroupText = document.createElement('div');
        taskGroupText.setAttribute('id', title);
        taskGroupText.setAttribute('class', 'click');
        taskGroupText.innerText = title;


        const taskGroupDelete = new Image();
        taskGroupDelete.src = deleteButton;
        taskGroupDelete.setAttribute('id', `delete${title}`);
        taskGroupDelete.setAttribute('class', 'delete click');

        taskGroupItem.appendChild(taskGroupText);
        taskGroupItem.appendChild(taskGroupDelete);

        customTasks.appendChild(taskGroupItem);
    });
}

export { addTask, addTaskGroup, addNote };