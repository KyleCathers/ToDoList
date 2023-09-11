import exitModal from './images/exitButton.png'

function createAddTaskModal() {
    const addTaskModal = document.createElement('dialog');
    addTaskModal.setAttribute('id', 'add-task-modal');
    addTaskModal.innerHTML =   `<div class="modalTitle">Add Task</div>
                                <form method="dialog" id='add-task-form'>
                                    <div class="dialogRow">
                                        <label for="task-modal-title-input">Title:</label>
                                        <input type="text" id="task-modal-title-input">
                                    </div>
                                    <div class="dialogRow">
                                        <label for="task-modal-details-input">Details:</label>
                                        <input type="text" id="task-modal-details-input">
                                    </div>
                                    <div class="dialogRow">
                                        <label for="task-modal-duedate-input">Due Date:</label>
                                        <input type="date" value="2023-09-08" id="task-modal-duedate-input">
                                    </div>
                                    <div class="dialogRow">
                                        <label for="task-modal-priority-input">Priority:</label>
                                        <select name="priority" id="task-modal-priority-input">
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>
                                    <div class="error"></div>
                                    <div class="dialogRow">
                                        <button class="submitButton" id="task-modal-submit" type="submit">Submit</button>
                                    </div>
                                </form>`;

    
    return addTaskModal;
}

function createAddProjectModal() {
    const addProjectModal = document.createElement('dialog');
    addProjectModal.setAttribute('id', 'add-project-modal');

    const modalTitle = document.createElement('div');
    modalTitle.setAttribute('class', 'modalTitle');
    modalTitle.innerText = "Add Project";

    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    form.setAttribute('id', 'add-project-form');

    const row1 = document.createElement('div');
    row1.setAttribute('class', 'dialogRow');
    
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'project-modal-title-input');
    titleLabel.innerText = "Title:";

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'project-modal-title-input');

    row1.appendChild(titleLabel);
    row1.appendChild(titleInput);

    const error = document.createElement('div');
    error.setAttribute('class', 'error');
    error.setAttribute('id', 'project-modal-error');

    const row2 = document.createElement('div');
    row2.setAttribute('class', 'dialogRow');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'submitButton');
    submitButton.setAttribute('id', 'project-modal-submit');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = "Submit";

    row2.appendChild(submitButton);

    form.appendChild(row1);
    form.appendChild(error);
    form.appendChild(row2);
    
    addProjectModal.appendChild(modalTitle);
    addProjectModal.appendChild(form);

    // validate form inputs ~~~~~~~~~~~~~~~~~~~~~ DO LATER
    form.addEventListener('submit', (e) => {  
        // also check if it already exists

        if(titleInput.value == "") {
            //error.innerText = "ERROR: Title can not be blank";
            e.preventDefault();
        }
    });

    return addProjectModal;
}

function createTaskInfoModal(task) {
    const container = document.createElement('form');
    container.setAttribute('id', 'task-info-form');

    const titleRow = document.createElement('div');
    titleRow.setAttribute('class', 'title-row');

    const title = document.createElement('div');
    title.setAttribute('id', 'task-info-modal-title');
    title.innerText = task.title;

    const exitContainer = document.createElement('button');
    exitContainer.setAttribute('id', 'exit-button-container');
    exitContainer.setAttribute('formmethod', 'dialog');

    const exit = new Image();
    exit.setAttribute('id', 'exit-button');
    exit.src = exitModal;

    exitContainer.appendChild(exit);

    titleRow.appendChild(title);
    titleRow.appendChild(exitContainer);

    const dueDate = document.createElement('div');
    dueDate.setAttribute('id', 'task-info-modal-due-date');
    dueDate.innerText = `Due Date: ${task.dueDate}`;

    const details = document.createElement('div');
    details.setAttribute('id', 'task-info-modal-details');
    details.innerText = `Details: ${task.details}`;
    
    const priority = document.createElement('div');
    priority.setAttribute('id', 'task-info-modal-priority');
    priority.innerText = `Priority: ${task.priority}`;

    const doneState = document.createElement('div');
    doneState.setAttribute('id', 'task-info-modal-done-state');
    doneState.innerText = task.doneState ? 'Done' : 'Not Done';

    container.appendChild(titleRow);
    container.appendChild(dueDate);
    container.appendChild(details);
    container.appendChild(priority);
    container.appendChild(doneState);

    return container;
}

function createAddNoteModal() {
    const addNoteModal = document.createElement('dialog');
    addNoteModal.setAttribute('id', 'add-note-modal');
    addNoteModal.innerHTML =  `<div class="modalTitle">Add Note</div>
                                    <form method="dialog" id='add-note-form'>
                                        <div class="dialogRow">
                                            <label for="note-modal-title-input">Title:</label>
                                            <input type="text" id="note-modal-title-input">
                                        </div>
                                        <div class="dialogRow">
                                            <label for="note-modal-details-input">Details:</label>
                                            <input type="text" id="note-modal-details-input">
                                        </div>
                                        <div class="error"></div>
                                        <div class="dialogRow">
                                            <button class="submitButton" id="note-modal-submit" type="submit">Submit</button>
                                        </div>
                                    </form>`;
    return addNoteModal;
}

function clearModals() {
    const taskTitleInput = document.querySelector('#task-modal-title-input');
    taskTitleInput.value = "";

    const taskDetailsInput = document.querySelector('#task-modal-details-input');
    taskDetailsInput.value = "";

    const taskDueDateInput = document.querySelector('#task-modal-duedate-input');
    taskDueDateInput.value = "2023-09-11"; //YYYY-MM-DD

    const taskPriorityInput = document.querySelector('#task-modal-priority-input');
    taskPriorityInput.value = "High";

    const projectTitleInput = document.querySelector('#project-modal-title-input');
    projectTitleInput.value = "";    

    const noteTitleInput = document.querySelector('#note-modal-title-input');
    noteTitleInput.value = "";

    const noteDetailsInput = document.querySelector('#note-modal-details-input');
    noteDetailsInput.value = "";
}

function createEditTaskModal() {
    const editTaskModal = document.createElement('dialog');
    editTaskModal.setAttribute('id', 'edit-task-modal');
    editTaskModal.innerHTML =   `<div class="modalTitle">Edit Task</div>
                                <form method="dialog" id='edit-task-form'>
                                    <div class="dialogRow">
                                        <label for="edit-task-modal-title-input">Title:</label>
                                        <input type="text" id="edit-task-modal-title-input">
                                    </div>
                                    <div class="dialogRow">
                                        <label for="edit-task-modal-details-input">Details:</label>
                                        <input type="text" id="edit-task-modal-details-input">
                                    </div>
                                    <div class="dialogRow">
                                        <label for="edit-task-modal-duedate-input">Due Date:</label>
                                        <input type="date" value="2023-09-08" id="edit-task-modal-duedate-input">
                                    </div>
                                    <div class="dialogRow">
                                        <label for="edit-task-modal-priority-input">Priority:</label>
                                        <select name="priority" id="edit-task-modal-priority-input">
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                        <label for="edit-task-modal-done-state-input">Done?</label>
                                        <input type="checkbox" id="edit-task-modal-done-state-input">
                                    </div>
                                    <div class="error"></div>
                                    <div class="dialogRow">
                                        <button class="submitButton" id="edit-task-modal-submit" type="submit">Submit</button>
                                    </div>
                                </form>`;

    
    return editTaskModal;
}

export { createAddTaskModal, clearModals, createAddProjectModal, createAddNoteModal, createTaskInfoModal, createEditTaskModal }