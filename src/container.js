import headerIcon from './images/checklist.png';
import addIcon from './images/addIcon.png';

import { createAddTaskModal, clearAddTaskModal, createAddTaskGroupModal,
    clearAddTaskGroupModal, createAddNoteModal, clearAddNoteModal } from './modals.js'

import { addTask, addTaskGroup, addNote } from './add.js'

import { taskGroupList, taskGroup, task } from './factories.js'

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

    const customTasksGroup = document.createElement('div');
    customTasksGroup.setAttribute('id', 'custom-tasks-group');


    const taskSection = document.createElement('div');
    taskSection.setAttribute('id', 'task-section');

    taskSection.appendChild(homeTask);
    taskSection.appendChild(dueTodayTasks);
    taskSection.appendChild(dueThisWeekTasks);
    taskSection.appendChild(customTasksGroup);

    const noteSection = document.createElement('div');
    noteSection.setAttribute('id', 'note-section');
    noteSection.innerText = "Notes"

    const addSection = document.createElement('div');
    addSection.setAttribute('id', 'add-section');

    // add task group button
    const addTaskGroupDiv = document.createElement('div');
    addTaskGroupDiv.setAttribute('id', 'add-taskgroup');

    const addTaskGroupButton = new Image();
    addTaskGroupButton.setAttribute('id', 'add-taskgroup-button');
    addTaskGroupButton.setAttribute('class', 'click');
    addTaskGroupButton.src = addIcon;

    const addTaskGroupText = document.createElement('div');
    addTaskGroupText.setAttribute('id', 'add-taskgroup-text');
    addTaskGroupText.innerText = "Add Task Group";

    addTaskGroupDiv.appendChild(addTaskGroupButton);
    addTaskGroupDiv.appendChild(addTaskGroupText);

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

    addSection.appendChild(addTaskGroupDiv);
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
    const addTaskGroupModal = createAddTaskGroupModal();
    const addNoteModal = createAddNoteModal();

    container.appendChild(addTaskModal);
    container.appendChild(addTaskGroupModal);
    container.appendChild(addNoteModal);

    // add listeners to buttons
    addTaskButton.addEventListener('click', () => {
        addTaskModal.showModal();
        clearAddTaskModal();

        const addTaskSubmitButton = document.querySelector('#task-modal-submit');
        addTaskSubmitButton.addEventListener('click', addTask);
    })

    addTaskGroupButton.addEventListener('click', () => {
        addTaskGroupModal.showModal();
        clearAddTaskGroupModal();

        const addTaskGroupSubmitButton = document.querySelector('#taskgroup-modal-submit');
        addTaskGroupSubmitButton.addEventListener('click', addTaskGroup);
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