import headerIcon from './images/checklist.png';
import addIcon from './images/addIcon.png';
import deleteIcon from './images/deleteIcon.png'
import editIcon from './images/editIcon.png'

import { createAddTaskModal, clearModals, createAddProjectModal, createTaskInfoModal, createEditTaskModal } from './modals.js'

import { projectList, project, task } from './factories.js'

let selectedProject = 'Home';

let currentTaskInfoModal = document.createElement('dialog');
currentTaskInfoModal.setAttribute('id', 'current-task-info-modal');

const editTaskModal = createEditTaskModal();

let currentTaskObject = {};

function pageInit() {
    // initialize page layout
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const headerLogo = document.createElement('div');
    headerLogo.setAttribute('id', 'header-logo');

    const headerLogoImg = new Image();
    headerLogoImg.setAttribute('id', 'header-logo-img');
    headerLogoImg.src = headerIcon;

    headerLogo.appendChild(headerLogoImg);

    const headerText = document.createElement('div');
    headerText.setAttribute('id', 'header-text');
    headerText.innerText = "To Do List"

    header.appendChild(headerLogo);
    header.appendChild(headerText);

    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const menuTopSection = document.createElement('div');
    menuTopSection.setAttribute('id', 'menu-top-section');

    const HomeTask = document.createElement('div');
    HomeTask.setAttribute('id', 'Home-task');
    HomeTask.setAttribute('class', 'click');
    HomeTask.innerText = "Home";
    HomeTask.addEventListener('click', () => {
        selectedProject = 'Home';
        updateMenu();
        updateContent();
    })

    const dueTodayTasks = document.createElement('div');
    dueTodayTasks.setAttribute('id', 'due-today');
    dueTodayTasks.setAttribute('class', 'click');
    dueTodayTasks.innerText = "Due Today";
    dueTodayTasks.addEventListener('click', () => {
        selectedProject = 'Due Today';
        updateMenu();
        updateContent();
    })
    

    const dueThisWeekTasks = document.createElement('div');
    dueThisWeekTasks.setAttribute('id', 'due-this-week');
    dueThisWeekTasks.setAttribute('class', 'click');
    dueThisWeekTasks.innerText = "Due This Week";
    dueThisWeekTasks.addEventListener('click', () => {
        selectedProject = 'Due This Week';
        updateMenu();
        updateContent();
    })

    const customProject = document.createElement('div');
    customProject.setAttribute('id', 'custom-project');

    const taskSection = document.createElement('div');
    taskSection.setAttribute('id', 'task-section');

    taskSection.appendChild(HomeTask);
    taskSection.appendChild(dueTodayTasks);
    taskSection.appendChild(dueThisWeekTasks);
    taskSection.appendChild(customProject);

    const addSection = document.createElement('div');
    addSection.setAttribute('id', 'add-section');

    // add project button
    const addProjectDiv = document.createElement('div');
    addProjectDiv.setAttribute('id', 'add-project');

    const addProjectButton = new Image();
    addProjectButton.setAttribute('id', 'add-project-button');
    addProjectButton.setAttribute('class', 'click');
    addProjectButton.src = addIcon;

    const addProjectText = document.createElement('div');
    addProjectText.setAttribute('id', 'add-project-text');
    addProjectText.innerText = "Add Project";

    addProjectDiv.appendChild(addProjectButton);
    addProjectDiv.appendChild(addProjectText);

    // add task button
    const addTaskDiv = document.createElement('div');
    addTaskDiv.setAttribute('id', 'add-task');

    const addTaskButton = new Image();
    addTaskButton.setAttribute('id', 'add-task-button');
    addTaskButton.setAttribute('class', 'click');
    addTaskButton.src = addIcon;

    const addTaskText = document.createElement('div');
    addTaskText.setAttribute('id', 'add-task-text');
    addTaskText.innerText = "Add Task";

    addTaskDiv.appendChild(addTaskButton);
    addTaskDiv.appendChild(addTaskText);

    addSection.appendChild(addProjectDiv);
    addSection.appendChild(addTaskDiv);

    menuTopSection.appendChild(taskSection);

    menu.appendChild(menuTopSection);
    menu.appendChild(addSection);

    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');

    main.appendChild(menu);
    main.appendChild(mainContent);

    container.appendChild(header);
    container.appendChild(main);

    const addTaskModal = createAddTaskModal()
    const addProjectModal = createAddProjectModal();

    container.appendChild(currentTaskInfoModal);
    container.appendChild(addTaskModal);
    container.appendChild(addProjectModal);
    container.appendChild(editTaskModal);

    // add listeners to buttons
    addTaskButton.addEventListener('click', () => {
        addTaskModal.showModal();
        clearModals();

        const addTaskSubmitButton = document.querySelector('#task-modal-submit');
        addTaskSubmitButton.addEventListener('click', addTask);
    })

    addProjectButton.addEventListener('click', () => {
        addProjectModal.showModal();
        clearModals();

        const addProjectSubmitButton = document.querySelector('#project-modal-submit');
        addProjectSubmitButton.addEventListener('click', addProject);
    });

    // add Home project
    const HomeProject = project('Home');
    projectList.addProject(HomeProject);

    return container;
}

// add a new task to selectedProject
function addTask() {
    // get info from modal
    const titleInput = document.querySelector('#task-modal-title-input');
    const detailsInput = document.querySelector('#task-modal-details-input');
    const dueDateInput = document.querySelector('#task-modal-duedate-input');
    const priorityInput = document.querySelector('#task-modal-priority-input');

    // go into currently selected project of project list array
    let targetProject = projectList.getProject(selectedProject);

    // add modal details as task to selected project
    targetProject.addTask(titleInput.value, detailsInput.value, dueDateInput.value, priorityInput.value)

    updateContent();

    // new listener added every time submit button is clicked, remove here
    const addTaskSubmitButton = document.querySelector('#task-modal-submit');
    addTaskSubmitButton.removeEventListener('click', addTask);
}

// add a new project to the master project list
function addProject() {
    const titleInput = document.querySelector('#project-modal-title-input');
    const newProject = project(titleInput.value);

    projectList.addProject(newProject);

    // new listener added every time modal submit button is clicked, remove here
    const addProjectSubmitButton = document.querySelector('#project-modal-submit');
    addProjectSubmitButton.removeEventListener('click', addProject);

    // refresh menu DOM since new project is added
    updateMenu();
}

// update menu with custom project
function updateMenu() {
    const customTasks = document.querySelector('#custom-project');
    customTasks.innerHTML = "";

    projectList.info().forEach((title) => {
        if(title == 'Home') return; // skip adding Home project since it's a default

        const projectItem = document.createElement('div');
        projectItem.setAttribute('class', 'custom-project-item');

        const projectText = document.createElement('div');
        projectText.setAttribute('id', title);
        projectText.setAttribute('class', 'click');
        projectText.innerText = title;
        projectText.addEventListener('click', () => {
            selectedProject = title;
            console.log(selectedProject);
            updateContent();
        });


        const projectDelete = new Image();
        projectDelete.src = deleteIcon;
        projectDelete.setAttribute('id', `delete${title}`);
        projectDelete.setAttribute('class', 'delete click');
        projectDelete.addEventListener('click', () => {
            projectList.removeProject(title);
            // TODO: if current project is the one deleted, display Home project in main content
            updateMenu();
        });

        projectItem.appendChild(projectText);
        projectItem.appendChild(projectDelete);

        customTasks.appendChild(projectItem);
    });


}

// display all tasks of selected project
function updateContent() {
    console.log(selectedProject);

    // TODO: if Home project, go through all projects and add to DOM, otherwise only selected project
    // TODO: if 'due today' project, filter Home project by date and update
    // TODO: if 'due this week' project, filter Home project by date and update

    const mainContentTitle = document.createElement('div');
    mainContentTitle.setAttribute('id', `main-content-title`);
    mainContentTitle.innerText = selectedProject;

    const mainContent = document.querySelector('#main-content');
    mainContent.innerHTML = "";
    mainContent.appendChild(mainContentTitle);

    // go into currently selected project of project list array
    let targetProject = projectList.getProject(selectedProject);

    // iterate all tasks of target project and add to DOM
    targetProject.getTaskObjects().forEach((task) => {

        const currentTask = document.createElement('div');
        currentTask.setAttribute('id', task.title);
        currentTask.setAttribute('class', `task ${task.priority}`);

        // (title, details, dueDate, priority, doneState)
        const taskTitle = document.createElement('div');
        taskTitle.setAttribute('class', 'task-title');
        taskTitle.setAttribute('id', `${task.title}-title`);
        taskTitle.innerText = `${task.title}`;
        taskTitle.addEventListener('click', () => {
            currentTaskInfoModal.innerHTML = "";
            currentTaskInfoModal.appendChild(createTaskInfoModal(task));
            currentTaskInfoModal.showModal();
        });

        const taskRight = document.createElement('div');
        taskRight.setAttribute('class', 'task-right');

        const taskDetails = document.createElement('div');
        taskDetails.setAttribute('id', `${task.title}-details`);
        taskDetails.innerText = "Details";
        // when clicked pull up module with title, details, due date, done sate, priority
        taskDetails.addEventListener('click', () => {
            // module.show
        });

        const taskDueDate = document.createElement('div');
        taskDueDate.setAttribute('class', 'task-due-date');
        //taskDueDate.setAttribute('id', `${task.title}-due-date`);
        taskDueDate.innerText = `Due: ${task.dueDate}`;

        const taskDoneState = document.createElement('div');
        taskDoneState.setAttribute('class', 'task-done-state');
        taskDoneState.setAttribute('id', `${task.title}-done-state`);
        taskDoneState.innerText = task.doneState ? 'Done' : 'Not Done';
        taskDoneState.addEventListener('click', () => {
            task.doneState = !task.doneState
            updateContent();
            return;
        });

        const editContainer = document.createElement('div');
        editContainer.setAttribute('class', 'button-container');

        const editButton = new Image();
        editButton.src = editIcon;
        editButton.setAttribute('id', `${task.title}-edit`);
        editButton.setAttribute('class', 'edit click');
        // when clicked pull up module to edit title, details, due date, done sate, priority
        editButton.addEventListener('click', () => {
            editTaskModal.showModal();
            clearModals();

            currentTaskObject = task;
            
            const editTaskSubmitButton = document.querySelector('#edit-task-modal-submit');
            editTaskSubmitButton.addEventListener('click', editTask);
        });
        

        editContainer.append(editButton);

        const deleteContainer = document.createElement('div');
        deleteContainer.setAttribute('class', 'button-container');

        const deleteButton = new Image();
        deleteButton.src = deleteIcon;
        deleteButton.setAttribute('id', `${task.title}-delete`);
        deleteButton.setAttribute('class', 'delete click');
        // when clicked pull up module with title, details, due date, done state, priority
        deleteButton.addEventListener('click', () => {
            targetProject.removeTask(task.title);
            updateContent();
            return;
        });

        deleteContainer.append(deleteButton);


        taskRight.append(taskDueDate);
        taskRight.append(taskDoneState);
        taskRight.append(editContainer);
        taskRight.append(deleteContainer);

        currentTask.append(taskTitle);
        currentTask.append(taskRight);

        mainContent.appendChild(currentTask);
    });

}

function editTask() {
    // get info from modal
    const titleInput = document.querySelector('#edit-task-modal-title-input');
    const detailsInput = document.querySelector('#edit-task-modal-details-input');
    const dueDateInput = document.querySelector('#edit-task-modal-duedate-input');
    const priorityInput = document.querySelector('#edit-task-modal-priority-input');
    const doneInput = document.querySelector('#edit-task-modal-done-state-input');

    // add modal details as task to selected project
    currentTaskObject.title = titleInput.value;
    currentTaskObject.details = detailsInput.value;
    currentTaskObject.dueDate = dueDateInput.value;
    currentTaskObject.priority = priorityInput.value;
    currentTaskObject.doneState = doneInput.value;

    updateContent();
}

export { pageInit, updateContent };