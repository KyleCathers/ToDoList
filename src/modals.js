function createAddTaskModal() {
    const addTaskModal = document.createElement('dialog');
    addTaskModal.setAttribute('id', 'add-task-modal');
    addTaskModal.innerHTML =   `<div class="modalTitle">Add Task</div>
                                <form method="dialog">
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
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>
                                    <div class="error"></div>
                                    <div class="dialogRow">
                                        <button class="submitButton" id="task-modal-submit" type="submit">Submit</button>
                                    </div>
                                </form>`;
    return addTaskModal;
}


function createAddTaskGroupModal() {
    const addTaskGroupModal = document.createElement('dialog');
    addTaskGroupModal.setAttribute('id', 'add-taskgroup-modal');
    addTaskGroupModal.innerHTML =  `<div class="modalTitle">Add Task Group</div>
                                    <form method="dialog">
                                        <div class="dialogRow">
                                            <label for="taskgroup-modal-title-input">Title:</label>
                                            <input type="text" id="taskgroup-modal-title-input">
                                        </div>
                                        <div class="error"></div>
                                        <div class="dialogRow">
                                            <button class="submitButton" id="taskgroup-modal-submit" type="submit">Submit</button>
                                        </div>
                                    </form>`;
    return addTaskGroupModal;
}

function createAddNoteModal() {
    const addNoteModal = document.createElement('dialog');
    addNoteModal.setAttribute('id', 'add-note-modal');
    addNoteModal.innerHTML =  `<div class="modalTitle">Add Note</div>
                                    <form method="dialog">
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

function clearAddTaskModal() {
    const titleInput = document.querySelector('#task-modal-title-input');
    titleInput.value = "";

    const detailsInput = document.querySelector('#task-modal-details-input');
    detailsInput.value = "";

    const dueDateInput = document.querySelector('#task-modal-duedate-input');
    dueDateInput.value = "";

    const priorityInput = document.querySelector('#task-modal-priority-input');
    priorityInput.value = "";
}

function clearAddTaskGroupModal() {
    const titleInput = document.querySelector('#taskgroup-modal-title-input');
    titleInput.value = "";    
}

function clearAddNoteModal() {
    const titleInput = document.querySelector('#note-modal-title-input');
    titleInput.value = "";

    const detailsInput = document.querySelector('#note-modal-details-input');
    detailsInput.value = "";
}

export { createAddTaskModal, clearAddTaskModal, createAddTaskGroupModal,
         clearAddTaskGroupModal, createAddNoteModal, clearAddNoteModal }