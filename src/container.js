import headerIcon from './images/checklist.png';
import addIcon from './images/addIcon.png';

import { createAddTaskModal, clearAddTaskModal, createAddProjectModal,
    clearAddProjectModal, createAddNoteModal, clearAddNoteModal } from './modals.js'

import { addTask, addProject, addNote } from './add.js'

import { projectList, project, task } from './factories.js'

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

    const dueTodayTasks = document.createElement('div');
    dueTodayTasks.setAttribute('id', 'due-today');
    dueTodayTasks.setAttribute('class', 'click');
    dueTodayTasks.innerText = "Due Today";

    const dueThisWeekTasks = document.createElement('div');
    dueThisWeekTasks.setAttribute('id', 'due-this-week');
    dueThisWeekTasks.setAttribute('class', 'click');
    dueThisWeekTasks.innerText = "Due This Week";

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
    noteSection.innerText = "Notes"

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

    return container;
}

export { pageInit };