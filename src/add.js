import deleteButton from './images/deleteButton.png'

import { projectList, project, task } from './factories.js'

// add a new task to the specified project
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

// add a new project to the master project list
function addProject() {
    const titleInput = document.querySelector('#project-modal-title-input');
    const newProject = project(titleInput.value);

    projectList.add(newProject);
    projectList.info();

    // new listener added every time submit button is clicked, remove here
    const addProjectSubmitButton = document.querySelector('#project-modal-submit');
    addProjectSubmitButton.removeEventListener('click', addProject);

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

// update menu with custom project
function updateMenu() {
    const customTasks = document.querySelector('#custom-project');
    customTasks.innerHTML = "";

    projectList.info().forEach((title) => {
        const projectItem = document.createElement('div');
        projectItem.setAttribute('class', 'custom-project-item');

        const projectText = document.createElement('div');
        projectText.setAttribute('id', title);
        projectText.setAttribute('class', 'click');
        projectText.innerText = title;


        const projectDelete = new Image();
        projectDelete.src = deleteButton;
        projectDelete.setAttribute('id', `delete${title}`);
        projectDelete.setAttribute('class', 'delete click');

        projectItem.appendChild(projectText);
        projectItem.appendChild(projectDelete);

        customTasks.appendChild(projectItem);
    });
}

export { addTask, addProject, addNote };