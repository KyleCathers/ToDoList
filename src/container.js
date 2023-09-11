import headerIcon from './images/checklist.png';
import addIcon from './images/addIcon.png';
import deleteButton from './images/deleteButton.png'

import { createAddTaskModal, clearAddTaskModal, createAddProjectModal,
    clearAddProjectModal, createAddNoteModal, clearAddNoteModal } from './modals.js'

import { projectList, project, task } from './factories.js'

let selectedProject = 'home';

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

    const homeTask = document.createElement('div');
    homeTask.setAttribute('id', 'home-task');
    homeTask.setAttribute('class', 'click');
    homeTask.innerText = "Home";
    homeTask.addEventListener('click', () => {
        selectedProject = 'home';
        console.log(selectedProject);
        updateMenu();
    })

    const dueTodayTasks = document.createElement('div');
    dueTodayTasks.setAttribute('id', 'due-today');
    dueTodayTasks.setAttribute('class', 'click');
    dueTodayTasks.innerText = "Due Today";
    dueTodayTasks.addEventListener('click', () => {
        selectedProject = 'Due Today';
        console.log(selectedProject);
        updateMenu();
    })
    

    const dueThisWeekTasks = document.createElement('div');
    dueThisWeekTasks.setAttribute('id', 'due-this-week');
    dueThisWeekTasks.setAttribute('class', 'click');
    dueThisWeekTasks.innerText = "Due This Week";
    dueThisWeekTasks.addEventListener('click', () => {
        selectedProject = 'Due This Week';
        console.log(selectedProject);
        updateMenu();
    })

    const customProject = document.createElement('div');
    customProject.setAttribute('id', 'custom-project');

    const taskSection = document.createElement('div');
    taskSection.setAttribute('id', 'task-section');

    taskSection.appendChild(homeTask);
    taskSection.appendChild(dueTodayTasks);
    taskSection.appendChild(dueThisWeekTasks);
    taskSection.appendChild(customProject);

    const noteSection = document.createElement('div');
    noteSection.setAttribute('id', 'note-section');
    noteSection.innerText = "Notes";

    /* ~~~~~~~~~~~~~~~~~~~~ REMOVE LATER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    noteSection.addEventListener('click', () => {
        console.log(projectList.getArray());
        updateContent();
    });

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

    // add note button
    const addNoteDiv = document.createElement('div');
    addNoteDiv.setAttribute('id', 'add-note');

    const addNoteButton = new Image();
    addNoteButton.setAttribute('id', 'add-note-button');
    addNoteButton.setAttribute('class', 'click');
    addNoteButton.src = addIcon;

    const addNoteText = document.createElement('div');
    addNoteText.setAttribute('id', 'add-note-text');
    addNoteText.innerText = "Add Note";

    addNoteDiv.appendChild(addNoteButton);
    addNoteDiv.appendChild(addNoteText);

    addSection.appendChild(addProjectDiv);
    addSection.appendChild(addTaskDiv);
    addSection.appendChild(addNoteDiv);

    menuTopSection.appendChild(taskSection);
    menuTopSection.appendChild(noteSection);

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
    const addNoteModal = createAddNoteModal();

    container.appendChild(addTaskModal);
    container.appendChild(addProjectModal);
    container.appendChild(addNoteModal);

    // add listeners to buttons
    addTaskButton.addEventListener('click', () => {
        addTaskModal.showModal();
        clearAddTaskModal();

        const addTaskSubmitButton = document.querySelector('#task-modal-submit');
        addTaskSubmitButton.addEventListener('click', addTask);
    })

    addProjectButton.addEventListener('click', () => {
        addProjectModal.showModal();
        clearAddProjectModal();

        const addProjectSubmitButton = document.querySelector('#project-modal-submit');
        addProjectSubmitButton.addEventListener('click', addProject);
    });

    addNoteButton.addEventListener('click', () => {
        addNoteModal.showModal();
        clearAddNoteModal();

        const addNoteSubmitButton = document.querySelector('#note-modal-submit');
        addNoteSubmitButton.addEventListener('click', addNote);    
    });

    // add home project
    const homeProject = project('home');
    projectList.addProject(homeProject);

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
        if(title == 'home') return; // skip adding home project since it's a default

        const projectItem = document.createElement('div');
        projectItem.setAttribute('class', 'custom-project-item');

        const projectText = document.createElement('div');
        projectText.setAttribute('id', title);
        projectText.setAttribute('class', 'click');
        projectText.innerText = title;
        projectText.addEventListener('click', () => {
            selectedProject = title;
            console.log(selectedProject);
        });


        const projectDelete = new Image();
        projectDelete.src = deleteButton;
        projectDelete.setAttribute('id', `delete${title}`);
        projectDelete.setAttribute('class', 'delete click');
        projectDelete.addEventListener('click', () => {
            projectList.removeProject(title);
            // TODO: if current project is the one deleted, display home project in main content
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

    // TODO: if home project, go through all projects and add to DOM, otherwise only selected project

    // TODO: if 'due today' project, filter home project by date and update
    // TODO: if 'due this week' project, filter home project by date and update

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

        // (title, details, dueDate, priority, doneState)
        const taskTitle = document.createElement('div');
        taskTitle.setAttribute('class', 'task-title');
        taskTitle.setAttribute('id', `${task.title}-title`);
        taskTitle.innerText = task.title;

        const taskDetails = document.createElement('div');
        taskDetails.setAttribute('class', 'task-details');
        taskDetails.setAttribute('id', `${task.title}-details`);
        taskDetails.innerText = task.details;

        const taskDueDate = document.createElement('div');
        taskDueDate.setAttribute('class', 'task-due-date');
        taskDueDate.setAttribute('id', `${task.title}-due-date`);
        taskDueDate.innerText = task.dueDate;

        const taskPriority = document.createElement('div');
        taskPriority.setAttribute('class', 'task-priority');
        taskPriority.setAttribute('id', `${task.title}-priority`);
        taskPriority.innerText = task.priority;

        const taskDoneState = document.createElement('div');
        taskDoneState.setAttribute('class', 'task-done-state');
        taskDoneState.setAttribute('id', `${task.title}-done-state`);
        taskDoneState.innerText = task.doneState;

        currentTask.append(taskTitle);
        currentTask.append(taskDetails);
        currentTask.append(taskDueDate);
        currentTask.append(taskPriority);
        currentTask.append(taskDoneState);

        mainContent.appendChild(currentTask);
    });

}

export { pageInit };