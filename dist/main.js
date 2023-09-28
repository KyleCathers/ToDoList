"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromLocal: () => (/* binding */ loadFromLocal),
/* harmony export */   pageInit: () => (/* binding */ pageInit),
/* harmony export */   updateContent: () => (/* binding */ updateContent),
/* harmony export */   updateMenu: () => (/* binding */ updateMenu)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var _images_checklist_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/checklist.png */ "./src/images/checklist.png");
/* harmony import */ var _images_addIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/addIcon.png */ "./src/images/addIcon.png");
/* harmony import */ var _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/deleteIcon.png */ "./src/images/deleteIcon.png");
/* harmony import */ var _images_editIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/editIcon.png */ "./src/images/editIcon.png");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals */ "./src/modals.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable no-use-before-define */







let selectedProject = "Home";
const currentTaskInfoModal = document.createElement("dialog");
currentTaskInfoModal.setAttribute("id", "current-task-info-modal");
const editTaskModal = (0,_modals__WEBPACK_IMPORTED_MODULE_4__.createEditTaskModal)();
let currentTaskObject = {};
function pageInit() {
  // initialize page layout
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  const headerLogo = document.createElement("a");
  headerLogo.setAttribute("href", "https://www.theodinproject.com/");
  headerLogo.setAttribute("target", "_blank");
  headerLogo.setAttribute("id", "header-logo");
  const headerLogoImg = new Image();
  headerLogoImg.setAttribute("id", "header-logo-img");
  headerLogoImg.src = _images_checklist_png__WEBPACK_IMPORTED_MODULE_0__;
  headerLogo.appendChild(headerLogoImg);
  const headerText = document.createElement("a");
  headerText.setAttribute("id", "header-text");
  headerText.setAttribute("href", "https://www.theodinproject.com/");
  headerText.setAttribute("target", "_blank");
  headerText.innerText = "To Do List";
  header.appendChild(headerLogo);
  header.appendChild(headerText);
  const main = document.createElement("div");
  main.setAttribute("id", "main");
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  const menuTopSection = document.createElement("div");
  menuTopSection.setAttribute("id", "menu-top-section");
  const HomeTask = document.createElement("div");
  HomeTask.setAttribute("id", "Home-task");
  HomeTask.setAttribute("class", "click");
  HomeTask.innerText = "Home";
  HomeTask.addEventListener("click", () => {
    selectedProject = "Home";
    updateMenu();
    updateContent();
  });
  const dueTodayTasks = document.createElement("div");
  dueTodayTasks.setAttribute("id", "due-today");
  dueTodayTasks.setAttribute("class", "click");
  dueTodayTasks.innerText = "Due Today";
  dueTodayTasks.addEventListener("click", () => {
    selectedProject = "Due Today";
    updateMenu();
    updateContent();
  });
  const dueThisWeekTasks = document.createElement("div");
  dueThisWeekTasks.setAttribute("id", "due-this-week");
  dueThisWeekTasks.setAttribute("class", "click");
  dueThisWeekTasks.innerText = "Due This Week";
  dueThisWeekTasks.addEventListener("click", () => {
    selectedProject = "Due This Week";
    updateMenu();
    updateContent();
  });
  const customProject = document.createElement("div");
  customProject.setAttribute("id", "custom-project");
  const taskSection = document.createElement("div");
  taskSection.setAttribute("id", "task-section");
  taskSection.appendChild(HomeTask);
  taskSection.appendChild(dueTodayTasks);
  taskSection.appendChild(dueThisWeekTasks);
  taskSection.appendChild(customProject);
  const addSection = document.createElement("div");
  addSection.setAttribute("id", "add-section");

  // add project button
  const addProjectDiv = document.createElement("div");
  addProjectDiv.setAttribute("id", "add-project");
  const addProjectButton = new Image();
  addProjectButton.setAttribute("id", "add-project-button");
  addProjectButton.setAttribute("class", "click");
  addProjectButton.src = _images_addIcon_png__WEBPACK_IMPORTED_MODULE_1__;
  const addProjectText = document.createElement("div");
  addProjectText.setAttribute("id", "add-project-text");
  addProjectText.innerText = "Add Project";
  addProjectDiv.appendChild(addProjectButton);
  addProjectDiv.appendChild(addProjectText);

  // add task button
  const addTaskDiv = document.createElement("div");
  addTaskDiv.setAttribute("id", "add-task");
  const addTaskButton = new Image();
  addTaskButton.setAttribute("id", "add-task-button");
  addTaskButton.setAttribute("class", "click");
  addTaskButton.src = _images_addIcon_png__WEBPACK_IMPORTED_MODULE_1__;
  const addTaskText = document.createElement("div");
  addTaskText.setAttribute("id", "add-task-text");
  addTaskText.innerText = "Add Task";
  addTaskDiv.appendChild(addTaskButton);
  addTaskDiv.appendChild(addTaskText);
  addSection.appendChild(addProjectDiv);
  addSection.appendChild(addTaskDiv);
  menuTopSection.appendChild(taskSection);
  menu.appendChild(menuTopSection);
  menu.appendChild(addSection);
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "main-content");
  main.appendChild(menu);
  main.appendChild(mainContent);
  container.appendChild(header);
  container.appendChild(main);
  const addTaskModal = (0,_modals__WEBPACK_IMPORTED_MODULE_4__.createAddTaskModal)();
  const addProjectModal = (0,_modals__WEBPACK_IMPORTED_MODULE_4__.createAddProjectModal)();
  container.appendChild(currentTaskInfoModal);
  container.appendChild(addTaskModal);
  container.appendChild(addProjectModal);
  container.appendChild(editTaskModal);

  // add listeners to buttons
  addTaskButton.addEventListener("click", () => {
    addTaskModal.showModal();
    (0,_modals__WEBPACK_IMPORTED_MODULE_4__.clearModals)();
    const addTaskSubmitButton = document.querySelector("#task-modal-submit");
    addTaskSubmitButton.addEventListener("click", addTask);
  });
  addProjectButton.addEventListener("click", () => {
    addProjectModal.showModal();
    (0,_modals__WEBPACK_IMPORTED_MODULE_4__.clearModals)();
    const addProjectSubmitButton = document.querySelector("#project-modal-submit");
    addProjectSubmitButton.addEventListener("click", addProject);
  });

  // add Home project
  const HomeProject = (0,_factories__WEBPACK_IMPORTED_MODULE_5__.project)("Home");
  _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.addProject(HomeProject);
  return container;
}

// display all tasks of selected project
function updateContent() {
  const mainContentTitle = document.createElement("div");
  mainContentTitle.setAttribute("id", "main-content-title");
  mainContentTitle.innerText = selectedProject;

  // clear any leftover DOM content
  const mainContent = document.querySelector("#main-content");
  mainContent.innerHTML = "";
  mainContent.appendChild(mainContentTitle);

  // if targetProject is home project, iterate through all projects on the list and append
  if (selectedProject === "Home" || selectedProject === "Due Today" || selectedProject === "Due This Week") {
    // iterate through all projects
    _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.info().forEach(title => {
      const targetProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject(title);
      // add target project tasks to the DOM
      appendTasks(targetProject);
    });
  } else {
    // go into currently selected project of project list array
    const targetProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject(selectedProject);

    // add target projects task to the DOM
    appendTasks(targetProject);
  }
}

// update menu with custom project
function updateMenu() {
  const customTasks = document.querySelector("#custom-project");
  customTasks.innerHTML = "";
  _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.info().forEach(title => {
    if (title === "Home") return; // skip adding Home project since it's a default

    const projectItem = document.createElement("div");
    projectItem.setAttribute("class", "custom-project-item");
    const projectText = document.createElement("div");
    projectText.setAttribute("id", title);
    projectText.setAttribute("class", "click");
    projectText.innerText = title;
    projectText.addEventListener("click", () => {
      selectedProject = title;
      updateContent();
    });
    const projectDelete = new Image();
    projectDelete.src = _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_2__;
    projectDelete.setAttribute("id", `delete${title}`);
    projectDelete.setAttribute("class", "delete click");
    projectDelete.addEventListener("click", () => {
      _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.removeProject(title);
      // TODO: if current project is the one deleted, display Home project in main content
      saveToLocal();
      updateMenu();
    });
    projectItem.appendChild(projectText);
    projectItem.appendChild(projectDelete);
    customTasks.appendChild(projectItem);
  });
}

// add a new task to selectedProject
// should update local storage
function addTask() {
  // get info from modal
  const titleInput = document.querySelector("#task-modal-title-input");
  const detailsInput = document.querySelector("#task-modal-details-input");
  const dueDateInput = document.querySelector("#task-modal-duedate-input");
  const priorityInput = document.querySelector("#task-modal-priority-input");
  if (titleInput.value === "") {
    return;
  }
  if (dueDateInput.value === "") {
    return;
  }

  // go into currently selected project of project list array
  let targetProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject(selectedProject);
  if (selectedProject === "Due Today" || selectedProject === "Due This Week") {
    targetProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject("Home");
  }

  // add modal details as task to selected project
  targetProject.addTask(titleInput.value, detailsInput.value, dueDateInput.value, priorityInput.value);

  // save changes to local storage
  saveToLocal();
  updateContent();

  // new listener added every time submit button is clicked, remove here
  const addTaskSubmitButton = document.querySelector("#task-modal-submit");
  addTaskSubmitButton.removeEventListener("click", addTask);
}

// add a new project to the master project list
// should update local storage
function addProject() {
  const titleInput = document.querySelector("#project-modal-title-input");
  if (titleInput.value === "") {
    return;
  }
  const newProject = (0,_factories__WEBPACK_IMPORTED_MODULE_5__.project)(titleInput.value);
  _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.addProject(newProject);

  // new listener added every time modal submit button is clicked, remove here
  const addProjectSubmitButton = document.querySelector("#project-modal-submit");
  addProjectSubmitButton.removeEventListener("click", addProject);

  // save changes to local storage
  saveToLocal();

  // refresh menu DOM since new project is added
  updateMenu();
}

// iterate all tasks of target project and add to DOM
function appendTasks(targetProject) {
  // get todays date, format to YYYY-MM-DD
  const today = new Date();
  let todayString = "";
  todayString = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}-${today.getDate()}`;
  const mainContent = document.querySelector("#main-content");
  targetProject.getTaskObjects().forEach(task => {
    if (selectedProject === "Due Today") {
      if (task.dueDate !== todayString) {
        return;
      }
    } else if (selectedProject === "Due This Week") {
      const taskYear = task.dueDate.substr(0, 4);
      let taskMonth = task.dueDate.substr(5, 2);
      const taskDay = task.dueDate.substr(8, 2);
      taskMonth = taskMonth[0] === "0" ? taskMonth[1] : taskMonth;
      const taskDate = new Date(taskYear, taskMonth - 1, taskDay);
      const nextWeekDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(), 6); // 1 week from today

      // skip if task.dueDate > nextWeekString e.g. now until sep 18
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(taskDate, nextWeekDate)) {
        return;
      }
    }
    const currentTask = document.createElement("div");
    currentTask.setAttribute("id", task.title);
    currentTask.setAttribute("class", `task ${task.priority}`);

    // (title, details, dueDate, priority, doneState)
    const taskTitle = document.createElement("div");
    taskTitle.setAttribute("class", "task-title");
    taskTitle.setAttribute("id", `${task.title}-title`);
    taskTitle.innerText = `${task.title}`;
    taskTitle.addEventListener("click", () => {
      currentTaskInfoModal.innerHTML = "";
      currentTaskInfoModal.appendChild((0,_modals__WEBPACK_IMPORTED_MODULE_4__.createTaskInfoModal)(task));
      currentTaskInfoModal.showModal();
    });
    const taskRight = document.createElement("div");
    taskRight.setAttribute("class", "task-right");
    const taskDetails = document.createElement("div");
    taskDetails.setAttribute("id", `${task.title}-details`);
    taskDetails.innerText = "Details";
    // when clicked pull up module with title, details, due date, done sate, priority

    const taskDueDate = document.createElement("div");
    taskDueDate.setAttribute("class", "task-due-date");
    taskDueDate.innerText = `Due: ${task.dueDate}`;
    const taskDoneState = document.createElement("div");
    taskDoneState.setAttribute("class", "task-done-state");
    taskDoneState.setAttribute("id", `${task.title}-done-state`);
    taskDoneState.innerText = task.doneState ? "Done" : "Not Done";
    taskDoneState.addEventListener("click", () => {
      // eslint-disable-next-line no-param-reassign
      task.doneState = !task.doneState;
      // save changes to local storage
      saveToLocal();
      updateContent();
    });
    const editContainer = document.createElement("div");
    editContainer.setAttribute("class", "button-container");
    const editButton = new Image();
    editButton.src = _images_editIcon_png__WEBPACK_IMPORTED_MODULE_3__;
    editButton.setAttribute("id", `${task.title}-edit`);
    editButton.setAttribute("class", "edit click");
    // when clicked pull up module to edit title, details, due date, done sate, priority
    editButton.addEventListener("click", () => {
      editTaskModal.showModal();
      (0,_modals__WEBPACK_IMPORTED_MODULE_4__.clearModals)();
      currentTaskObject = task;
      const editTaskSubmitButton = document.querySelector("#edit-task-modal-submit");
      editTaskSubmitButton.addEventListener("click", editTask);
    });
    editContainer.append(editButton);
    const deleteContainer = document.createElement("div");
    deleteContainer.setAttribute("class", "button-container");
    const deleteButton = new Image();
    deleteButton.src = _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_2__;
    deleteButton.setAttribute("id", `${task.title}-delete`);
    deleteButton.setAttribute("class", "delete click");
    // when clicked pull up module with title, details, due date, done state, priority
    deleteButton.addEventListener("click", () => {
      targetProject.removeTask(task.title);
      saveToLocal();
      updateContent();
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
  const titleInput = document.querySelector("#edit-task-modal-title-input");
  const detailsInput = document.querySelector("#edit-task-modal-details-input");
  const dueDateInput = document.querySelector("#edit-task-modal-duedate-input");
  const priorityInput = document.querySelector("#edit-task-modal-priority-input");
  const doneInput = document.querySelector("#edit-task-modal-done-state-input");
  if (titleInput.value === "") {
    return;
  }
  if (dueDateInput.value === "") {
    return;
  }

  // add modal details as task to selected project
  currentTaskObject.title = titleInput.value;
  currentTaskObject.details = detailsInput.value;
  currentTaskObject.dueDate = dueDateInput.value;
  currentTaskObject.priority = priorityInput.value;
  currentTaskObject.doneState = doneInput.checked;

  // save changes to local storage
  saveToLocal();
  updateContent();
}
function saveToLocal() {
  const data = [];
  const projectTitlesArray = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.info();
  projectTitlesArray.forEach(title => {
    const currentProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject(title);
    const projectTasksArray = [];
    const projectTasks = currentProject.getTaskObjects();
    projectTasks.forEach(task => {
      const taskString = JSON.stringify(task);
      projectTasksArray.push(taskString);
    });
    const prodObj = {
      "projectTitle": title,
      "data": projectTasksArray
    };
    data.push(prodObj);
  });
  const dataString = JSON.stringify(data);
  localStorage.setItem('projectList', dataString);
}
function loadFromLocal() {
  const data = localStorage.getItem('projectList');
  if (data === null) {
    return;
  }
  const dataString = JSON.parse(data);
  dataString.forEach(projectItem => {
    let currentProject = _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.getProject('Home'); // default home

    // add current project to project list array
    if (projectItem.projectTitle !== 'Home') {
      currentProject = (0,_factories__WEBPACK_IMPORTED_MODULE_5__.project)(projectItem.projectTitle);
      _factories__WEBPACK_IMPORTED_MODULE_5__.projectList.addProject(currentProject);
    }

    // add tasks to current project
    projectItem.data.forEach(task => {
      const taskObject = JSON.parse(task); // convert string to obj

      // create task out of retrieved task object
      currentProject.addTask(taskObject.title, taskObject.details, taskObject.dueDate, taskObject.priority, taskObject.doneState);
    });
  });
}


/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
// projects master list module object
const projectList = (() => {
  let projectListArray = [];

  // add new project
  const addProject = project => {
    projectListArray.push(project);
  };

  // remove specified project
  const removeProject = title => {
    // array = [{title: "1", ...}, {title: "2", ...}, {title: "3"}], remove "1" object
    projectListArray = projectListArray.filter(project => project.title !== title);
  };

  // returns titles of each project in an array
  const info = () => {
    const projectTitlesArray = [];
    projectListArray.forEach(project => {
      projectTitlesArray.push(project.title);
    });
    return projectTitlesArray;
  };

  // returns project object of specified title from list
  const getProject = title => {
    const targetProject = projectListArray.find(project => project.title === title);
    return targetProject;
  };
  return {
    addProject,
    removeProject,
    info,
    getProject
  };
})();

// project factory object
const project = title => {
  let tasksList = [];
  const addTask = (title, details, dueDate, priority, doneState) => {
    tasksList.push(task(title, details, dueDate, priority, doneState));
  };
  const removeTask = title => {
    tasksList = tasksList.filter(task => task.title !== title);
  };
  const getTask = title => {
    const targetTask = tasksList.find(task => task.title === title);
    return targetTask;
  };
  const getTaskObjects = () => tasksList;
  return {
    addTask,
    removeTask,
    getTask,
    getTaskObjects,
    title
  };
};

// task factory object
const task = function (title, details, dueDate, priority) {
  let doneState = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  return {
    title,
    details,
    dueDate,
    priority,
    doneState
  };
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./src/container.js");


document.body.appendChild((0,_container__WEBPACK_IMPORTED_MODULE_1__.pageInit)());

// grab any exisitng local storage
(0,_container__WEBPACK_IMPORTED_MODULE_1__.loadFromLocal)();

// update DOM with exisitng data
(0,_container__WEBPACK_IMPORTED_MODULE_1__.updateContent)();
(0,_container__WEBPACK_IMPORTED_MODULE_1__.updateMenu)();

/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearModals: () => (/* binding */ clearModals),
/* harmony export */   createAddProjectModal: () => (/* binding */ createAddProjectModal),
/* harmony export */   createAddTaskModal: () => (/* binding */ createAddTaskModal),
/* harmony export */   createEditTaskModal: () => (/* binding */ createEditTaskModal),
/* harmony export */   createTaskInfoModal: () => (/* binding */ createTaskInfoModal)
/* harmony export */ });
/* harmony import */ var _images_exitButton_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/exitButton.png */ "./src/images/exitButton.png");

function createAddTaskModal() {
  const addTaskModal = document.createElement("dialog");
  addTaskModal.setAttribute("id", "add-task-modal");
  const title = document.createElement("div");
  title.setAttribute("class", "modalTitle");
  title.innerText = "Add Task";
  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "add-task-form");
  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "dialogRow");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "task-modal-title-input");
  titleLabel.innerText = "Title:";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "task-modal-title-input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("maxlength", "17");
  titleInput.required = true;
  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);
  const detailsRow = document.createElement("div");
  detailsRow.setAttribute("class", "dialogRow");
  const detailsLabel = document.createElement("label");
  detailsLabel.setAttribute("for", "task-modal-details-input");
  detailsLabel.innerText = "Details:";
  const detailsInput = document.createElement("input");
  detailsInput.setAttribute("id", "task-modal-details-input");
  detailsInput.setAttribute("type", "text");
  detailsRow.appendChild(detailsLabel);
  detailsRow.appendChild(detailsInput);
  const dueDateRow = document.createElement("div");
  dueDateRow.setAttribute("class", "dialogRow");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "task-modal-duedate-input");
  dueDateLabel.innerText = "Due Date:";
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "task-modal-duedate-input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.required = true;
  dueDateRow.appendChild(dueDateLabel);
  dueDateRow.appendChild(dueDateInput);
  const priorityRow = document.createElement("div");
  priorityRow.setAttribute("class", "dialogRow");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "task-modal-priority-input");
  priorityLabel.innerText = "Priority:";
  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("id", "task-modal-priority-input");
  priorityInput.setAttribute("name", "priority");
  const highOption = document.createElement("option");
  highOption.setAttribute("value", "High");
  highOption.innerText = "High";
  const mediumOption = document.createElement("option");
  mediumOption.setAttribute("value", "Medium");
  mediumOption.innerText = "Medium";
  const lowOption = document.createElement("option");
  lowOption.setAttribute("value", "Low");
  lowOption.innerText = "Low";
  priorityInput.appendChild(highOption);
  priorityInput.appendChild(mediumOption);
  priorityInput.appendChild(lowOption);
  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);
  const error = document.createElement("div");
  error.setAttribute("class", "error");
  const submitRow = document.createElement("div");
  submitRow.setAttribute("class", "dialogRow");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "task-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerHTML = "submit";
  submitRow.appendChild(submitButton);
  form.appendChild(titleRow);
  form.appendChild(detailsRow);
  form.appendChild(dueDateRow);
  form.appendChild(priorityRow);
  form.appendChild(error);
  form.appendChild(submitRow);
  addTaskModal.appendChild(title);
  addTaskModal.appendChild(form);
  return addTaskModal;
}
function createAddProjectModal() {
  const addProjectModal = document.createElement("dialog");
  addProjectModal.setAttribute("id", "add-project-modal");
  const modalTitle = document.createElement("div");
  modalTitle.setAttribute("class", "modalTitle");
  modalTitle.innerText = "Add Project";
  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "add-project-form");
  const row1 = document.createElement("div");
  row1.setAttribute("class", "dialogRow");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "project-modal-title-input");
  titleLabel.innerText = "Title:";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "project-modal-title-input");
  titleInput.required = true;
  row1.appendChild(titleLabel);
  row1.appendChild(titleInput);
  const error = document.createElement("div");
  error.setAttribute("class", "error");
  error.setAttribute("id", "project-modal-error");
  const row2 = document.createElement("div");
  row2.setAttribute("class", "dialogRow");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "project-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Submit";
  row2.appendChild(submitButton);
  form.appendChild(row1);
  form.appendChild(error);
  form.appendChild(row2);
  addProjectModal.appendChild(modalTitle);
  addProjectModal.appendChild(form);

  // validate form inputs ~~~~~~~~~~~~~~~~~~~~~ DO LATER
  form.addEventListener("submit", e => {
    // also check if it already exists

    if (titleInput.value === "") {
      // error.innerText = "ERROR: Title can not be blank";
      e.preventDefault();
    }
  });
  return addProjectModal;
}
function createTaskInfoModal(task) {
  const container = document.createElement("form");
  container.setAttribute("id", "task-info-form");
  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "title-row");
  const title = document.createElement("div");
  title.setAttribute("id", "task-info-modal-title");
  title.innerText = task.title;
  const exitContainer = document.createElement("button");
  exitContainer.setAttribute("id", "exit-button-container");
  exitContainer.setAttribute("formmethod", "dialog");
  const exit = new Image();
  exit.setAttribute("id", "exit-button");
  exit.src = _images_exitButton_png__WEBPACK_IMPORTED_MODULE_0__;
  exitContainer.appendChild(exit);
  titleRow.appendChild(title);
  titleRow.appendChild(exitContainer);
  const dueDate = document.createElement("div");
  dueDate.setAttribute("id", "task-info-modal-due-date");
  dueDate.innerText = `Due Date: ${task.dueDate}`;
  const details = document.createElement("div");
  details.setAttribute("id", "task-info-modal-details");
  details.innerText = `Details: ${task.details}`;
  const priority = document.createElement("div");
  priority.setAttribute("id", "task-info-modal-priority");
  priority.innerText = `Priority: ${task.priority}`;
  const doneState = document.createElement("div");
  doneState.setAttribute("id", "task-info-modal-done-state");
  doneState.innerText = task.doneState ? "Done" : "Not Done";
  container.appendChild(titleRow);
  container.appendChild(dueDate);
  container.appendChild(details);
  container.appendChild(priority);
  container.appendChild(doneState);
  return container;
}
function clearModals() {
  // add project modal
  const projectTitleInput = document.querySelector("#project-modal-title-input");
  projectTitleInput.value = "";

  // add task modal
  const addTaskTitleInput = document.querySelector("#task-modal-title-input");
  addTaskTitleInput.value = "";
  const addTaskDetailsInput = document.querySelector("#task-modal-details-input");
  addTaskDetailsInput.value = "";

  // get todays date, format to YYYY-MM-DD
  const today = new Date();
  let todayString = "";
  todayString = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}-${today.getDate()}`;
  const addTaskDueDateInput = document.querySelector("#task-modal-duedate-input");
  addTaskDueDateInput.value = todayString;
  const addTaskPriorityInput = document.querySelector("#task-modal-priority-input");
  addTaskPriorityInput.value = "Low";

  // edit task modal
  const editTaskTitleInput = document.querySelector("#edit-task-modal-title-input");
  editTaskTitleInput.value = "";
  const editTaskDetailsInput = document.querySelector("#edit-task-modal-details-input");
  editTaskDetailsInput.value = "";
  const editTaskDueDateInput = document.querySelector("#edit-task-modal-duedate-input");
  // YYYY-MM-DD
  editTaskDueDateInput.value = todayString;
  const editTaskPriorityInput = document.querySelector("#edit-task-modal-priority-input");
  editTaskPriorityInput.value = "Low";
  const editTaskDoneStateInput = document.querySelector("#edit-task-modal-priority-input");
  editTaskDoneStateInput.checked = "false";
}
function createEditTaskModal() {
  const editTaskModal = document.createElement("dialog");
  editTaskModal.setAttribute("id", "edit-task-modal");
  const title = document.createElement("div");
  title.setAttribute("class", "modalTitle");
  title.innerText = "Edit Task";
  const form = document.createElement("form");
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "edit-task-form");
  const titleRow = document.createElement("div");
  titleRow.setAttribute("class", "dialogRow");
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "edit-task-modal-title-input");
  titleLabel.innerText = "Title:";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "edit-task-modal-title-input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("maxlength", "17");
  titleInput.required = true;
  titleRow.appendChild(titleLabel);
  titleRow.appendChild(titleInput);
  const detailsRow = document.createElement("div");
  detailsRow.setAttribute("class", "dialogRow");
  const detailsLabel = document.createElement("label");
  detailsLabel.setAttribute("for", "edit-task-modal-details-input");
  detailsLabel.innerText = "Details:";
  const detailsInput = document.createElement("input");
  detailsInput.setAttribute("id", "edit-task-modal-details-input");
  detailsInput.setAttribute("type", "text");
  detailsRow.appendChild(detailsLabel);
  detailsRow.appendChild(detailsInput);
  const dueDateRow = document.createElement("div");
  dueDateRow.setAttribute("class", "dialogRow");
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "edit-task-modal-duedate-input");
  dueDateLabel.innerText = "Due Date:";
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "edit-task-modal-duedate-input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.required = true;
  dueDateRow.appendChild(dueDateLabel);
  dueDateRow.appendChild(dueDateInput);
  const priorityRow = document.createElement("div");
  priorityRow.setAttribute("class", "dialogRow");
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "edit-task-modal-priority-input");
  priorityLabel.innerText = "Priority:";
  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("id", "edit-task-modal-priority-input");
  priorityInput.setAttribute("name", "priority");
  const highOption = document.createElement("option");
  highOption.setAttribute("value", "High");
  highOption.innerText = "High";
  const mediumOption = document.createElement("option");
  mediumOption.setAttribute("value", "Medium");
  mediumOption.innerText = "Medium";
  const lowOption = document.createElement("option");
  lowOption.setAttribute("value", "Low");
  lowOption.innerText = "Low";
  priorityInput.appendChild(highOption);
  priorityInput.appendChild(mediumOption);
  priorityInput.appendChild(lowOption);
  const doneStateLabel = document.createElement("label");
  doneStateLabel.setAttribute("for", "edit-task-modal-done-state-input");
  doneStateLabel.innerText = "Done?";
  const doneStateInput = document.createElement("input");
  doneStateInput.setAttribute("id", "edit-task-modal-done-state-input");
  doneStateInput.setAttribute("type", "checkbox");
  priorityRow.appendChild(priorityLabel);
  priorityRow.appendChild(priorityInput);
  priorityRow.appendChild(doneStateLabel);
  priorityRow.appendChild(doneStateInput);
  const error = document.createElement("div");
  error.setAttribute("class", "error");
  const submitRow = document.createElement("div");
  submitRow.setAttribute("class", "dialogRow");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submitButton");
  submitButton.setAttribute("id", "edit-task-modal-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.innerHTML = "submit";
  submitRow.appendChild(submitButton);
  form.appendChild(titleRow);
  form.appendChild(detailsRow);
  form.appendChild(dueDateRow);
  form.appendChild(priorityRow);
  form.appendChild(error);
  form.appendChild(submitRow);
  editTaskModal.appendChild(title);
  editTaskModal.appendChild(form);
  return editTaskModal;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CedarvilleCursive-Regular.ttf */ "./src/fonts/CedarvilleCursive-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --menu-width: 300px;
}

html,
body {
  margin: 0px;
  height: 100%;
  padding: 0px;
}

#container {
  margin: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#header {
  width: 100%;
  height: 100px;
  background-color: #c0ceff;
  border-bottom: solid 3px #a4b7fa;
  display: flex;
}

#main {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;
}

#menu {
  background-color: #f4f4f4;
  width: var(--menu-width);
  height: 100%;
  border-right: solid #e3e3e3 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 50px 20px;
  font-size: 2rem;
}

#header-logo {
  display: flex;
  height: 100%;
  padding: 0px 20px 0px 20px;
  align-items: center;
}

#header-logo-img {
  height: 80px;
}

#header-text {
  font-size: 3rem;
  font-family: "MyCursive";
  align-self: center;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

@font-face {
  font-family: "MyCursive";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}

#add-project,
#add-task {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 75px;
}

#add-project-button,
#add-task-button {
  height: 65px;
}

#task-info-modal,
#add-task-modal,
#add-project-modal {
  font-size: 2rem;
  border: solid #002aff 5px;
  border-radius: 5px;
}

.modalTitle {
  font-size: 2.5rem;
  text-align: center;
  padding-bottom: 30px;
}

.dialogRow {
  display: flex;
  gap: 10px;
  justify-content: center;
}

label,
.submitButton,
input {
  font-size: 1.5rem;
}

button {
  background-color: #002aff;
  color: white;
  border: 0;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#task-section {
  padding: 50px 0px 50px 0px;
  gap: 10px;
  display: flex;
  flex-direction: column;
}

.delete,
.edit {
  height: 35px;
  cursor: pointer;
  box-sizing: border-box;
}

.button-container {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
}

.custom-project-item {
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  align-items: center;
}

.click {
  transition: all 0.2s ease-in-out;
  transform-origin: 0%;
  cursor: pointer;
}

.click:hover {
  transform: scale(1.2);
  padding-right: 5px;
}

#main-content {
  height: 100%;
  width: calc(100vw - var(--menu-width));
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
}

#main-content-title {
  font-size: 2rem;
}

.task {
  border-radius: 15px;
  border: solid black 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  font-size: 1.3rem;
  min-width: 600px;
}

.High {
  background-color: #ffbfbf;
}

.Medium {
  background-color: #bfccff;
}

.Low {
  background-color: #bfffc6;
}

.task:hover {
  transform: scale(1.01);
}

.task-title {
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.task-title:hover {
  transform: scale(1.2);
}

.task-done-state {
  cursor: pointer;
  padding: 0px 10px 0px 10px;
  transition: all 0.2s ease-in-out;
  width: 82px;
}

.task-done-state:hover {
  transform: scale(1.1);
}

.task-right {
  display: flex;
  gap: 10px;
  align-items: center;
  white-space: nowrap;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.error {
  color: red;
  font-size: 1.5rem;
}

.error:after {
  content: " ";
  white-space: pre;
}

#current-task-info-modal {
  width: 500px;
  border: solid #002aff 5px;
  border-radius: 5px;
  font-size: 1.5rem;
  padding-top: 0px;
  padding-right: 10px;
}

#current-task-info-modal form {
  align-items: flex-start;
  gap: 5px;
}

.title-row {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
}

#task-info-modal-title {
  font-size: 3rem;
  padding-top: 20px;
}

#exit-button {
  cursor: pointer;
  padding-top: 10px;
  height: 30px;
  transition: all 0.2s ease-in-out;
}

#exit-button:hover {
  transform: scale(1.2);
}

#exit-button-container {
  background-color: white;
  width: auto;
}

input {
  padding-left: 8px;
  border-radius: 10px;
  color: #484848;
}

#edit-task-modal {
  border: solid blue 5px;
  border-radius: 10px;
}

#edit-task-modal-done-state-input {
  width: 20px;
  height: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --menu-width: 300px;\n}\n\nhtml,\nbody {\n  margin: 0px;\n  height: 100%;\n  padding: 0px;\n}\n\n#container {\n  margin: 0px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  width: 100%;\n  height: 100px;\n  background-color: #c0ceff;\n  border-bottom: solid 3px #a4b7fa;\n  display: flex;\n}\n\n#main {\n  width: 100%;\n  height: calc(100vh - 100px);\n  display: flex;\n  flex-direction: row;\n}\n\n#menu {\n  background-color: #f4f4f4;\n  width: var(--menu-width);\n  height: 100%;\n  border-right: solid #e3e3e3 3px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0px 0px 50px 20px;\n  font-size: 2rem;\n}\n\n#header-logo {\n  display: flex;\n  height: 100%;\n  padding: 0px 20px 0px 20px;\n  align-items: center;\n}\n\n#header-logo-img {\n  height: 80px;\n}\n\n#header-text {\n  font-size: 3rem;\n  font-family: \"MyCursive\";\n  align-self: center;\n  font-weight: bold;\n  color: white;\n  text-decoration: none;\n}\n\n@font-face {\n  font-family: \"MyCursive\";\n  src: url(\"./fonts/CedarvilleCursive-Regular.ttf\") format(\"truetype\");\n}\n\n#add-project,\n#add-task {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  height: 75px;\n}\n\n#add-project-button,\n#add-task-button {\n  height: 65px;\n}\n\n#task-info-modal,\n#add-task-modal,\n#add-project-modal {\n  font-size: 2rem;\n  border: solid #002aff 5px;\n  border-radius: 5px;\n}\n\n.modalTitle {\n  font-size: 2.5rem;\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n.dialogRow {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\nlabel,\n.submitButton,\ninput {\n  font-size: 1.5rem;\n}\n\nbutton {\n  background-color: #002aff;\n  color: white;\n  border: 0;\n  width: 100px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#task-section {\n  padding: 50px 0px 50px 0px;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.delete,\n.edit {\n  height: 35px;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.button-container {\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.custom-project-item {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 20px;\n  align-items: center;\n}\n\n.click {\n  transition: all 0.2s ease-in-out;\n  transform-origin: 0%;\n  cursor: pointer;\n}\n\n.click:hover {\n  transform: scale(1.2);\n  padding-right: 5px;\n}\n\n#main-content {\n  height: 100%;\n  width: calc(100vw - var(--menu-width));\n  box-sizing: border-box;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  overflow: auto;\n}\n\n#main-content-title {\n  font-size: 2rem;\n}\n\n.task {\n  border-radius: 15px;\n  border: solid black 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  gap: 20px;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  font-size: 1.3rem;\n  min-width: 600px;\n}\n\n.High {\n  background-color: #ffbfbf;\n}\n\n.Medium {\n  background-color: #bfccff;\n}\n\n.Low {\n  background-color: #bfffc6;\n}\n\n.task:hover {\n  transform: scale(1.01);\n}\n\n.task-title {\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.task-title:hover {\n  transform: scale(1.2);\n}\n\n.task-done-state {\n  cursor: pointer;\n  padding: 0px 10px 0px 10px;\n  transition: all 0.2s ease-in-out;\n  width: 82px;\n}\n\n.task-done-state:hover {\n  transform: scale(1.1);\n}\n\n.task-right {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  white-space: nowrap;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n\n.error {\n  color: red;\n  font-size: 1.5rem;\n}\n\n.error:after {\n  content: \" \";\n  white-space: pre;\n}\n\n#current-task-info-modal {\n  width: 500px;\n  border: solid #002aff 5px;\n  border-radius: 5px;\n  font-size: 1.5rem;\n  padding-top: 0px;\n  padding-right: 10px;\n}\n\n#current-task-info-modal form {\n  align-items: flex-start;\n  gap: 5px;\n}\n\n.title-row {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n#task-info-modal-title {\n  font-size: 3rem;\n  padding-top: 20px;\n}\n\n#exit-button {\n  cursor: pointer;\n  padding-top: 10px;\n  height: 30px;\n  transition: all 0.2s ease-in-out;\n}\n\n#exit-button:hover {\n  transform: scale(1.2);\n}\n\n#exit-button-container {\n  background-color: white;\n  width: auto;\n}\n\ninput {\n  padding-left: 8px;\n  border-radius: 10px;\n  color: #484848;\n}\n\n#edit-task-modal {\n  border: solid blue 5px;\n  border-radius: 10px;\n}\n\n#edit-task-modal-done-state-input {\n  width: 20px;\n  height: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/CedarvilleCursive-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/CedarvilleCursive-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a669593f51bb81ad0cc1.ttf";

/***/ }),

/***/ "./src/images/addIcon.png":
/*!********************************!*\
  !*** ./src/images/addIcon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2532e874c7c2fd77538.png";

/***/ }),

/***/ "./src/images/checklist.png":
/*!**********************************!*\
  !*** ./src/images/checklist.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30c38b95ae25a4707b5d.png";

/***/ }),

/***/ "./src/images/deleteIcon.png":
/*!***********************************!*\
  !*** ./src/images/deleteIcon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4337fee049e551e11b33.png";

/***/ }),

/***/ "./src/images/editIcon.png":
/*!*********************************!*\
  !*** ./src/images/editIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd4f95d12d2c542ecdcb.png";

/***/ }),

/***/ "./src/images/exitButton.png":
/*!***********************************!*\
  !*** ./src/images/exitButton.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fa730e8460456e465da.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZGFscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNBZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBhZGREYXlzLCBpc0FmdGVyIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgaGVhZGVySWNvbiBmcm9tIFwiLi9pbWFnZXMvY2hlY2tsaXN0LnBuZ1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vaW1hZ2VzL2FkZEljb24ucG5nXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlSWNvbi5wbmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi9pbWFnZXMvZWRpdEljb24ucG5nXCI7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZUFkZFRhc2tNb2RhbCxcbiAgY2xlYXJNb2RhbHMsXG4gIGNyZWF0ZUFkZFByb2plY3RNb2RhbCxcbiAgY3JlYXRlVGFza0luZm9Nb2RhbCxcbiAgY3JlYXRlRWRpdFRhc2tNb2RhbCxcbn0gZnJvbSBcIi4vbW9kYWxzXCI7XG5cbmltcG9ydCB7IHByb2plY3RMaXN0LCBwcm9qZWN0IH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5cbmxldCBzZWxlY3RlZFByb2plY3QgPSBcIkhvbWVcIjtcblxuY29uc3QgY3VycmVudFRhc2tJbmZvTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuY3VycmVudFRhc2tJbmZvTW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW50LXRhc2staW5mby1tb2RhbFwiKTtcblxuY29uc3QgZWRpdFRhc2tNb2RhbCA9IGNyZWF0ZUVkaXRUYXNrTW9kYWwoKTtcblxubGV0IGN1cnJlbnRUYXNrT2JqZWN0ID0ge307XG5cbmZ1bmN0aW9uIHBhZ2VJbml0KCkge1xuICAvLyBpbml0aWFsaXplIHBhZ2UgbGF5b3V0XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBoZWFkZXJMb2dvLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIpO1xuICBoZWFkZXJMb2dvLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgaGVhZGVyTG9nby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1sb2dvXCIpO1xuXG4gIGNvbnN0IGhlYWRlckxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaGVhZGVyTG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1sb2dvLWltZ1wiKTtcbiAgaGVhZGVyTG9nb0ltZy5zcmMgPSBoZWFkZXJJY29uO1xuXG4gIGhlYWRlckxvZ28uYXBwZW5kQ2hpbGQoaGVhZGVyTG9nb0ltZyk7XG5cbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRleHRcIik7XG4gIGhlYWRlclRleHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIik7XG4gIGhlYWRlclRleHQuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBoZWFkZXJUZXh0LmlubmVyVGV4dCA9IFwiVG8gRG8gTGlzdFwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG5cbiAgY29uc3QgbWVudVRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51VG9wU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtdG9wLXNlY3Rpb25cIik7XG5cbiAgY29uc3QgSG9tZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBIb21lVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkhvbWUtdGFza1wiKTtcbiAgSG9tZVRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbGlja1wiKTtcbiAgSG9tZVRhc2suaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gIEhvbWVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gXCJIb21lXCI7XG4gICAgdXBkYXRlTWVudSgpO1xuICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgY29uc3QgZHVlVG9kYXlUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZVRvZGF5VGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtdG9kYXlcIik7XG4gIGR1ZVRvZGF5VGFza3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbGlja1wiKTtcbiAgZHVlVG9kYXlUYXNrcy5pbm5lclRleHQgPSBcIkR1ZSBUb2RheVwiO1xuICBkdWVUb2RheVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gXCJEdWUgVG9kYXlcIjtcbiAgICB1cGRhdGVNZW51KCk7XG4gICAgdXBkYXRlQ29udGVudCgpO1xuICB9KTtcblxuICBjb25zdCBkdWVUaGlzV2Vla1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHVlVGhpc1dlZWtUYXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS10aGlzLXdlZWtcIik7XG4gIGR1ZVRoaXNXZWVrVGFza3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbGlja1wiKTtcbiAgZHVlVGhpc1dlZWtUYXNrcy5pbm5lclRleHQgPSBcIkR1ZSBUaGlzIFdlZWtcIjtcbiAgZHVlVGhpc1dlZWtUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNlbGVjdGVkUHJvamVjdCA9IFwiRHVlIFRoaXMgV2Vla1wiO1xuICAgIHVwZGF0ZU1lbnUoKTtcbiAgICB1cGRhdGVDb250ZW50KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGN1c3RvbVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXN0b21Qcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VzdG9tLXByb2plY3RcIik7XG5cbiAgY29uc3QgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stc2VjdGlvblwiKTtcblxuICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChIb21lVGFzayk7XG4gIHRhc2tTZWN0aW9uLmFwcGVuZENoaWxkKGR1ZVRvZGF5VGFza3MpO1xuICB0YXNrU2VjdGlvbi5hcHBlbmRDaGlsZChkdWVUaGlzV2Vla1Rhc2tzKTtcbiAgdGFza1NlY3Rpb24uYXBwZW5kQ2hpbGQoY3VzdG9tUHJvamVjdCk7XG5cbiAgY29uc3QgYWRkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtc2VjdGlvblwiKTtcblxuICAvLyBhZGQgcHJvamVjdCBidXR0b25cbiAgY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gbmV3IEltYWdlKCk7XG4gIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdC1idXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbGlja1wiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5zcmMgPSBhZGRJY29uO1xuXG4gIGNvbnN0IGFkZFByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkUHJvamVjdFRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdC10ZXh0XCIpO1xuICBhZGRQcm9qZWN0VGV4dC5pbm5lclRleHQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGV4dCk7XG5cbiAgLy8gYWRkIHRhc2sgYnV0dG9uXG4gIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRUYXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2tcIik7XG5cbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xpY2tcIik7XG4gIGFkZFRhc2tCdXR0b24uc3JjID0gYWRkSWNvbjtcblxuICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFRhc2tUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stdGV4dFwiKTtcbiAgYWRkVGFza1RleHQuaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuXG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuXG4gIGFkZFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdik7XG4gIGFkZFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XG5cbiAgbWVudVRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza1NlY3Rpb24pO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRvcFNlY3Rpb24pO1xuICBtZW51LmFwcGVuZENoaWxkKGFkZFNlY3Rpb24pO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcblxuICBjb25zdCBhZGRUYXNrTW9kYWwgPSBjcmVhdGVBZGRUYXNrTW9kYWwoKTtcbiAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gY3JlYXRlQWRkUHJvamVjdE1vZGFsKCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUYXNrSW5mb01vZGFsKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tNb2RhbCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0TW9kYWwpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFRhc2tNb2RhbCk7XG5cbiAgLy8gYWRkIGxpc3RlbmVycyB0byBidXR0b25zXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRUYXNrTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY2xlYXJNb2RhbHMoKTtcblxuICAgIGNvbnN0IGFkZFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWwtc3VibWl0XCIpO1xuICAgIGFkZFRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2spO1xuICB9KTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xuICAgIGNsZWFyTW9kYWxzKCk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3Byb2plY3QtbW9kYWwtc3VibWl0XCIsXG4gICAgKTtcbiAgICBhZGRQcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcbiAgfSk7XG5cbiAgLy8gYWRkIEhvbWUgcHJvamVjdFxuICBjb25zdCBIb21lUHJvamVjdCA9IHByb2plY3QoXCJIb21lXCIpO1xuICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KEhvbWVQcm9qZWN0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBkaXNwbGF5IGFsbCB0YXNrcyBvZiBzZWxlY3RlZCBwcm9qZWN0XG5mdW5jdGlvbiB1cGRhdGVDb250ZW50KCkge1xuICBjb25zdCBtYWluQ29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tY29udGVudC10aXRsZVwiKTtcbiAgbWFpbkNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSBzZWxlY3RlZFByb2plY3Q7XG5cbiAgLy8gY2xlYXIgYW55IGxlZnRvdmVyIERPTSBjb250ZW50XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRlbnRcIik7XG4gIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50VGl0bGUpO1xuXG4gIC8vIGlmIHRhcmdldFByb2plY3QgaXMgaG9tZSBwcm9qZWN0LCBpdGVyYXRlIHRocm91Z2ggYWxsIHByb2plY3RzIG9uIHRoZSBsaXN0IGFuZCBhcHBlbmRcbiAgaWYgKFxuICAgIHNlbGVjdGVkUHJvamVjdCA9PT0gXCJIb21lXCIgfHxcbiAgICBzZWxlY3RlZFByb2plY3QgPT09IFwiRHVlIFRvZGF5XCIgfHxcbiAgICBzZWxlY3RlZFByb2plY3QgPT09IFwiRHVlIFRoaXMgV2Vla1wiXG4gICkge1xuICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgcHJvamVjdHNcbiAgICBwcm9qZWN0TGlzdC5pbmZvKCkuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHRpdGxlKTtcbiAgICAgIC8vIGFkZCB0YXJnZXQgcHJvamVjdCB0YXNrcyB0byB0aGUgRE9NXG4gICAgICBhcHBlbmRUYXNrcyh0YXJnZXRQcm9qZWN0KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBnbyBpbnRvIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0IG9mIHByb2plY3QgbGlzdCBhcnJheVxuICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG5cbiAgICAvLyBhZGQgdGFyZ2V0IHByb2plY3RzIHRhc2sgdG8gdGhlIERPTVxuICAgIGFwcGVuZFRhc2tzKHRhcmdldFByb2plY3QpO1xuICB9XG59XG5cbi8vIHVwZGF0ZSBtZW51IHdpdGggY3VzdG9tIHByb2plY3RcbmZ1bmN0aW9uIHVwZGF0ZU1lbnUoKSB7XG4gIGNvbnN0IGN1c3RvbVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b20tcHJvamVjdFwiKTtcbiAgY3VzdG9tVGFza3MuaW5uZXJIVE1MID0gXCJcIjtcblxuICBwcm9qZWN0TGlzdC5pbmZvKCkuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICBpZiAodGl0bGUgPT09IFwiSG9tZVwiKSByZXR1cm47IC8vIHNraXAgYWRkaW5nIEhvbWUgcHJvamVjdCBzaW5jZSBpdCdzIGEgZGVmYXVsdFxuXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY3VzdG9tLXByb2plY3QtaXRlbVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0VGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aXRsZSk7XG4gICAgcHJvamVjdFRleHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbGlja1wiKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBwcm9qZWN0VGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gdGl0bGU7XG4gICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVsZXRlID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdERlbGV0ZS5zcmMgPSBkZWxldGVJY29uO1xuICAgIHByb2plY3REZWxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZSR7dGl0bGV9YCk7XG4gICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZSBjbGlja1wiKTtcbiAgICBwcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0TGlzdC5yZW1vdmVQcm9qZWN0KHRpdGxlKTtcbiAgICAgIC8vIFRPRE86IGlmIGN1cnJlbnQgcHJvamVjdCBpcyB0aGUgb25lIGRlbGV0ZWQsIGRpc3BsYXkgSG9tZSBwcm9qZWN0IGluIG1haW4gY29udGVudFxuICAgICAgc2F2ZVRvTG9jYWwoKTtcbiAgICAgIHVwZGF0ZU1lbnUoKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlKTtcblxuICAgIGN1c3RvbVRhc2tzLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgfSk7XG59XG5cbi8vIGFkZCBhIG5ldyB0YXNrIHRvIHNlbGVjdGVkUHJvamVjdFxuLy8gc2hvdWxkIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICAvLyBnZXQgaW5mbyBmcm9tIG1vZGFsXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWwtdGl0bGUtaW5wdXRcIik7XG4gIGNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1tb2RhbC1kZXRhaWxzLWlucHV0XCIpO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWwtZHVlZGF0ZS1pbnB1dFwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1tb2RhbC1wcmlvcml0eS1pbnB1dFwiKTtcblxuICBpZih0aXRsZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgcmV0dXJuO1xuICB9IGlmKGR1ZURhdGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGdvIGludG8gY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3Qgb2YgcHJvamVjdCBsaXN0IGFycmF5XG4gIGxldCB0YXJnZXRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuXG4gIGlmIChzZWxlY3RlZFByb2plY3QgPT09IFwiRHVlIFRvZGF5XCIgfHwgc2VsZWN0ZWRQcm9qZWN0ID09PSBcIkR1ZSBUaGlzIFdlZWtcIikge1xuICAgIHRhcmdldFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KFwiSG9tZVwiKTtcbiAgfVxuXG4gIC8vIGFkZCBtb2RhbCBkZXRhaWxzIGFzIHRhc2sgdG8gc2VsZWN0ZWQgcHJvamVjdFxuICB0YXJnZXRQcm9qZWN0LmFkZFRhc2soXG4gICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICBkZXRhaWxzSW5wdXQudmFsdWUsXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgIHByaW9yaXR5SW5wdXQudmFsdWUsXG4gICk7XG5cbiAgLy8gc2F2ZSBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgc2F2ZVRvTG9jYWwoKTtcblxuICB1cGRhdGVDb250ZW50KCk7XG5cbiAgLy8gbmV3IGxpc3RlbmVyIGFkZGVkIGV2ZXJ5IHRpbWUgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkLCByZW1vdmUgaGVyZVxuICBjb25zdCBhZGRUYXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsLXN1Ym1pdFwiKTtcbiAgYWRkVGFza1N1Ym1pdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFzayk7XG59XG5cbi8vIGFkZCBhIG5ldyBwcm9qZWN0IHRvIHRoZSBtYXN0ZXIgcHJvamVjdCBsaXN0XG4vLyBzaG91bGQgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbW9kYWwtdGl0bGUtaW5wdXRcIik7XG4gIGlmICh0aXRsZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuXG4gIHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgLy8gbmV3IGxpc3RlbmVyIGFkZGVkIGV2ZXJ5IHRpbWUgbW9kYWwgc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkLCByZW1vdmUgaGVyZVxuICBjb25zdCBhZGRQcm9qZWN0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNwcm9qZWN0LW1vZGFsLXN1Ym1pdFwiLFxuICApO1xuICBhZGRQcm9qZWN0U3VibWl0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcblxuICAvLyBzYXZlIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZVxuICBzYXZlVG9Mb2NhbCgpO1xuXG4gIC8vIHJlZnJlc2ggbWVudSBET00gc2luY2UgbmV3IHByb2plY3QgaXMgYWRkZWRcbiAgdXBkYXRlTWVudSgpO1xufVxuXG4vLyBpdGVyYXRlIGFsbCB0YXNrcyBvZiB0YXJnZXQgcHJvamVjdCBhbmQgYWRkIHRvIERPTVxuZnVuY3Rpb24gYXBwZW5kVGFza3ModGFyZ2V0UHJvamVjdCkge1xuICAvLyBnZXQgdG9kYXlzIGRhdGUsIGZvcm1hdCB0byBZWVlZLU1NLUREXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgbGV0IHRvZGF5U3RyaW5nID0gXCJcIjtcbiAgdG9kYXlTdHJpbmcgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke1xuICAgIHRvZGF5LmdldE1vbnRoKCkgKyAxIDwgMTAgPyBcIjBcIiA6IFwiXCJcbiAgfSR7dG9kYXkuZ2V0TW9udGgoKSArIDF9LSR7dG9kYXkuZ2V0RGF0ZSgpfWA7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGVudFwiKTtcblxuICB0YXJnZXRQcm9qZWN0LmdldFRhc2tPYmplY3RzKCkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmIChzZWxlY3RlZFByb2plY3QgPT09IFwiRHVlIFRvZGF5XCIpIHtcbiAgICAgIGlmICh0YXNrLmR1ZURhdGUgIT09IHRvZGF5U3RyaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkUHJvamVjdCA9PT0gXCJEdWUgVGhpcyBXZWVrXCIpIHtcbiAgICAgIGNvbnN0IHRhc2tZZWFyID0gdGFzay5kdWVEYXRlLnN1YnN0cigwLCA0KTtcbiAgICAgIGxldCB0YXNrTW9udGggPSB0YXNrLmR1ZURhdGUuc3Vic3RyKDUsIDIpO1xuICAgICAgY29uc3QgdGFza0RheSA9IHRhc2suZHVlRGF0ZS5zdWJzdHIoOCwgMik7XG4gICAgICB0YXNrTW9udGggPSB0YXNrTW9udGhbMF0gPT09IFwiMFwiID8gdGFza01vbnRoWzFdIDogdGFza01vbnRoO1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrWWVhciwgdGFza01vbnRoIC0gMSwgdGFza0RheSk7XG4gICAgICBjb25zdCBuZXh0V2Vla0RhdGUgPSBhZGREYXlzKG5ldyBEYXRlKCksIDYpOyAvLyAxIHdlZWsgZnJvbSB0b2RheVxuXG4gICAgICAvLyBza2lwIGlmIHRhc2suZHVlRGF0ZSA+IG5leHRXZWVrU3RyaW5nIGUuZy4gbm93IHVudGlsIHNlcCAxOFxuICAgICAgaWYgKGlzQWZ0ZXIodGFza0RhdGUsIG5leHRXZWVrRGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50VGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLnRpdGxlKTtcbiAgICBjdXJyZW50VGFzay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgdGFzayAke3Rhc2sucHJpb3JpdHl9YCk7XG5cbiAgICAvLyAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lU3RhdGUpXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHt0YXNrLnRpdGxlfS10aXRsZWApO1xuICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSBgJHt0YXNrLnRpdGxlfWA7XG4gICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjdXJyZW50VGFza0luZm9Nb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY3VycmVudFRhc2tJbmZvTW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0luZm9Nb2RhbCh0YXNrKSk7XG4gICAgICBjdXJyZW50VGFza0luZm9Nb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1JpZ2h0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1yaWdodFwiKTtcblxuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHt0YXNrLnRpdGxlfS1kZXRhaWxzYCk7XG4gICAgdGFza0RldGFpbHMuaW5uZXJUZXh0ID0gXCJEZXRhaWxzXCI7XG4gICAgLy8gd2hlbiBjbGlja2VkIHB1bGwgdXAgbW9kdWxlIHdpdGggdGl0bGUsIGRldGFpbHMsIGR1ZSBkYXRlLCBkb25lIHNhdGUsIHByaW9yaXR5XG5cbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWR1ZS1kYXRlXCIpO1xuICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9IGBEdWU6ICR7dGFzay5kdWVEYXRlfWA7XG5cbiAgICBjb25zdCB0YXNrRG9uZVN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRG9uZVN0YXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1kb25lLXN0YXRlXCIpO1xuICAgIHRhc2tEb25lU3RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGFzay50aXRsZX0tZG9uZS1zdGF0ZWApO1xuICAgIHRhc2tEb25lU3RhdGUuaW5uZXJUZXh0ID0gdGFzay5kb25lU3RhdGUgPyBcIkRvbmVcIiA6IFwiTm90IERvbmVcIjtcbiAgICB0YXNrRG9uZVN0YXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHRhc2suZG9uZVN0YXRlID0gIXRhc2suZG9uZVN0YXRlO1xuICAgICAgLy8gc2F2ZSBjaGFuZ2VzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIHNhdmVUb0xvY2FsKCk7XG4gICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRJY29uO1xuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGFzay50aXRsZX0tZWRpdGApO1xuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0IGNsaWNrXCIpO1xuICAgIC8vIHdoZW4gY2xpY2tlZCBwdWxsIHVwIG1vZHVsZSB0byBlZGl0IHRpdGxlLCBkZXRhaWxzLCBkdWUgZGF0ZSwgZG9uZSBzYXRlLCBwcmlvcml0eVxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRUYXNrTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICBjbGVhck1vZGFscygpO1xuXG4gICAgICBjdXJyZW50VGFza09iamVjdCA9IHRhc2s7XG5cbiAgICAgIGNvbnN0IGVkaXRUYXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjZWRpdC10YXNrLW1vZGFsLXN1Ym1pdFwiLFxuICAgICAgKTtcbiAgICAgIGVkaXRUYXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XG4gICAgfSk7XG5cbiAgICBlZGl0Q29udGFpbmVyLmFwcGVuZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHt0YXNrLnRpdGxlfS1kZWxldGVgKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGUgY2xpY2tcIik7XG4gICAgLy8gd2hlbiBjbGlja2VkIHB1bGwgdXAgbW9kdWxlIHdpdGggdGl0bGUsIGRldGFpbHMsIGR1ZSBkYXRlLCBkb25lIHN0YXRlLCBwcmlvcml0eVxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGFyZ2V0UHJvamVjdC5yZW1vdmVUYXNrKHRhc2sudGl0bGUpO1xuICAgICAgc2F2ZVRvTG9jYWwoKTtcbiAgICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcblxuICAgIHRhc2tSaWdodC5hcHBlbmQodGFza0R1ZURhdGUpO1xuICAgIHRhc2tSaWdodC5hcHBlbmQodGFza0RvbmVTdGF0ZSk7XG4gICAgdGFza1JpZ2h0LmFwcGVuZChlZGl0Q29udGFpbmVyKTtcbiAgICB0YXNrUmlnaHQuYXBwZW5kKGRlbGV0ZUNvbnRhaW5lcik7XG5cbiAgICBjdXJyZW50VGFzay5hcHBlbmQodGFza1RpdGxlKTtcbiAgICBjdXJyZW50VGFzay5hcHBlbmQodGFza1JpZ2h0KTtcblxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGN1cnJlbnRUYXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKCkge1xuICAvLyBnZXQgaW5mbyBmcm9tIG1vZGFsXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1tb2RhbC10aXRsZS1pbnB1dFwiKTtcbiAgY29uc3QgZGV0YWlsc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stbW9kYWwtZGV0YWlscy1pbnB1dFwiKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stbW9kYWwtZHVlZGF0ZS1pbnB1dFwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjZWRpdC10YXNrLW1vZGFsLXByaW9yaXR5LWlucHV0XCIsXG4gICk7XG4gIGNvbnN0IGRvbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLW1vZGFsLWRvbmUtc3RhdGUtaW5wdXRcIik7XG5cbiAgaWYodGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgaWYoZHVlRGF0ZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gYWRkIG1vZGFsIGRldGFpbHMgYXMgdGFzayB0byBzZWxlY3RlZCBwcm9qZWN0XG4gIGN1cnJlbnRUYXNrT2JqZWN0LnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgY3VycmVudFRhc2tPYmplY3QuZGV0YWlscyA9IGRldGFpbHNJbnB1dC52YWx1ZTtcbiAgY3VycmVudFRhc2tPYmplY3QuZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgY3VycmVudFRhc2tPYmplY3QucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICBjdXJyZW50VGFza09iamVjdC5kb25lU3RhdGUgPSBkb25lSW5wdXQuY2hlY2tlZDtcblxuICAvLyBzYXZlIGNoYW5nZXMgdG8gbG9jYWwgc3RvcmFnZVxuICBzYXZlVG9Mb2NhbCgpO1xuXG4gIHVwZGF0ZUNvbnRlbnQoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRvTG9jYWwoKSB7XG4gIGNvbnN0IGRhdGEgPSBbXTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGVzQXJyYXkgPSBwcm9qZWN0TGlzdC5pbmZvKCk7XG5cbiAgcHJvamVjdFRpdGxlc0FycmF5LmZvckVhY2godGl0bGUgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdCh0aXRsZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGFza3NBcnJheSA9IFtdO1xuXG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza09iamVjdHMoKTtcblxuICAgIHByb2plY3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgdGFza1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRhc2spO1xuICAgICAgcHJvamVjdFRhc2tzQXJyYXkucHVzaCh0YXNrU3RyaW5nKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2RPYmogPSB7XCJwcm9qZWN0VGl0bGVcIjp0aXRsZSxcImRhdGFcIjpwcm9qZWN0VGFza3NBcnJheX07XG5cbiAgICBkYXRhLnB1c2gocHJvZE9iaik7XG4gIH0pO1xuXG4gIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBkYXRhU3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gbG9hZEZyb21Mb2NhbCgpIHtcbiAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpO1xuXG4gIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGF0YVN0cmluZyA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgZGF0YVN0cmluZy5mb3JFYWNoKHByb2plY3RJdGVtID0+IHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KCdIb21lJyk7ICAvLyBkZWZhdWx0IGhvbWVcblxuICAgIC8vIGFkZCBjdXJyZW50IHByb2plY3QgdG8gcHJvamVjdCBsaXN0IGFycmF5XG4gICAgaWYocHJvamVjdEl0ZW0ucHJvamVjdFRpdGxlICE9PSAnSG9tZScpIHtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdChwcm9qZWN0SXRlbS5wcm9qZWN0VGl0bGUpO1xuXG4gICAgICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdGFza3MgdG8gY3VycmVudCBwcm9qZWN0XG4gICAgcHJvamVjdEl0ZW0uZGF0YS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgY29uc3QgdGFza09iamVjdCA9IEpTT04ucGFyc2UodGFzayk7ICAvLyBjb252ZXJ0IHN0cmluZyB0byBvYmpcblxuICAgICAgLy8gY3JlYXRlIHRhc2sgb3V0IG9mIHJldHJpZXZlZCB0YXNrIG9iamVjdFxuICAgICAgY3VycmVudFByb2plY3QuYWRkVGFzayh0YXNrT2JqZWN0LnRpdGxlLCB0YXNrT2JqZWN0LmRldGFpbHMsIHRhc2tPYmplY3QuZHVlRGF0ZSwgXG4gICAgICAgIHRhc2tPYmplY3QucHJpb3JpdHksIHRhc2tPYmplY3QuZG9uZVN0YXRlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHBhZ2VJbml0LCB1cGRhdGVDb250ZW50LCB1cGRhdGVNZW51LCBsb2FkRnJvbUxvY2FsIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXG4vLyBwcm9qZWN0cyBtYXN0ZXIgbGlzdCBtb2R1bGUgb2JqZWN0XG5jb25zdCBwcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0TGlzdEFycmF5ID0gW107XG5cbiAgLy8gYWRkIG5ldyBwcm9qZWN0XG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RMaXN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICAvLyByZW1vdmUgc3BlY2lmaWVkIHByb2plY3RcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIC8vIGFycmF5ID0gW3t0aXRsZTogXCIxXCIsIC4uLn0sIHt0aXRsZTogXCIyXCIsIC4uLn0sIHt0aXRsZTogXCIzXCJ9XSwgcmVtb3ZlIFwiMVwiIG9iamVjdFxuICAgIHByb2plY3RMaXN0QXJyYXkgPSBwcm9qZWN0TGlzdEFycmF5LmZpbHRlcihcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlICE9PSB0aXRsZSxcbiAgICApO1xuICB9O1xuXG4gIC8vIHJldHVybnMgdGl0bGVzIG9mIGVhY2ggcHJvamVjdCBpbiBhbiBhcnJheVxuICBjb25zdCBpbmZvID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZXNBcnJheSA9IFtdO1xuICAgIHByb2plY3RMaXN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdFRpdGxlc0FycmF5LnB1c2gocHJvamVjdC50aXRsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdFRpdGxlc0FycmF5O1xuICB9O1xuXG4gIC8vIHJldHVybnMgcHJvamVjdCBvYmplY3Qgb2Ygc3BlY2lmaWVkIHRpdGxlIGZyb20gbGlzdFxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHByb2plY3RMaXN0QXJyYXkuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSB0aXRsZSxcbiAgICApO1xuICAgIHJldHVybiB0YXJnZXRQcm9qZWN0O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGluZm8sXG4gICAgZ2V0UHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbi8vIHByb2plY3QgZmFjdG9yeSBvYmplY3RcbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgbGV0IHRhc2tzTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lU3RhdGUpID0+IHtcbiAgICB0YXNrc0xpc3QucHVzaCh0YXNrKHRpdGxlLCBkZXRhaWxzLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZVN0YXRlKSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9ICh0aXRsZSkgPT4ge1xuICAgIHRhc2tzTGlzdCA9IHRhc2tzTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgIT09IHRpdGxlKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VGFzayA9IHRhc2tzTGlzdC5maW5kKCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0aXRsZSk7XG4gICAgcmV0dXJuIHRhcmdldFRhc2s7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza09iamVjdHMgPSAoKSA9PiB0YXNrc0xpc3Q7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgZ2V0VGFzayxcbiAgICBnZXRUYXNrT2JqZWN0cyxcbiAgICB0aXRsZSxcbiAgfTtcbn07XG5cbi8vIHRhc2sgZmFjdG9yeSBvYmplY3RcbmNvbnN0IHRhc2sgPSAodGl0bGUsIGRldGFpbHMsIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lU3RhdGUgPSBmYWxzZSkgPT4gKHtcbiAgICB0aXRsZSxcbiAgICBkZXRhaWxzLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgZG9uZVN0YXRlLFxuICB9KTtcblxuZXhwb3J0IHsgcHJvamVjdExpc3QsIHByb2plY3QgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7IHBhZ2VJbml0LCB1cGRhdGVDb250ZW50LCB1cGRhdGVNZW51LCBsb2FkRnJvbUxvY2FsIH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZUluaXQoKSk7XG5cbi8vIGdyYWIgYW55IGV4aXNpdG5nIGxvY2FsIHN0b3JhZ2VcbmxvYWRGcm9tTG9jYWwoKTtcblxuLy8gdXBkYXRlIERPTSB3aXRoIGV4aXNpdG5nIGRhdGFcbnVwZGF0ZUNvbnRlbnQoKTtcbnVwZGF0ZU1lbnUoKTsiLCJpbXBvcnQgZXhpdE1vZGFsIGZyb20gXCIuL2ltYWdlcy9leGl0QnV0dG9uLnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrTW9kYWwoKSB7XG4gIGNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGFkZFRhc2tNb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLW1vZGFsXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbFRpdGxlXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbW9kYWwtdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJUaXRsZTpcIjtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1tb2RhbC10aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxN1wiKTtcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRldGFpbHNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzUm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nUm93XCIpO1xuXG4gIGNvbnN0IGRldGFpbHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGV0YWlsc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbW9kYWwtZGV0YWlscy1pbnB1dFwiKTtcbiAgZGV0YWlsc0xhYmVsLmlubmVyVGV4dCA9IFwiRGV0YWlsczpcIjtcblxuICBjb25zdCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbW9kYWwtZGV0YWlscy1pbnB1dFwiKTtcbiAgZGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gIGRldGFpbHNSb3cuYXBwZW5kQ2hpbGQoZGV0YWlsc0xhYmVsKTtcbiAgZGV0YWlsc1Jvdy5hcHBlbmRDaGlsZChkZXRhaWxzSW5wdXQpO1xuXG4gIGNvbnN0IGR1ZURhdGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkdWVEYXRlUm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nUm93XCIpO1xuXG4gIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stbW9kYWwtZHVlZGF0ZS1pbnB1dFwiKTtcbiAgZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6XCI7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLW1vZGFsLWR1ZWRhdGUtaW5wdXRcIik7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBkdWVEYXRlUm93LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGR1ZURhdGVSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5Um93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nUm93XCIpO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1tb2RhbC1wcmlvcml0eS1pbnB1dFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBcIlByaW9yaXR5OlwiO1xuXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1tb2RhbC1wcmlvcml0eS1pbnB1dFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG5cbiAgY29uc3QgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpO1xuICBoaWdoT3B0aW9uLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuXG4gIGNvbnN0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1lZGl1bVwiKTtcbiAgbWVkaXVtT3B0aW9uLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG5cbiAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICBsb3dPcHRpb24uaW5uZXJUZXh0ID0gXCJMb3dcIjtcblxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZGl1bU9wdGlvbik7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcblxuICBwcmlvcml0eVJvdy5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVycm9yXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdFJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdWJtaXRCdXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stbW9kYWwtc3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdFJvdy5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVSb3cpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHNSb3cpO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVSb3cpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Um93KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChlcnJvcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Um93KTtcblxuICBhZGRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBhZGRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgcmV0dXJuIGFkZFRhc2tNb2RhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkUHJvamVjdE1vZGFsKCkge1xuICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBhZGRQcm9qZWN0TW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdC1tb2RhbFwiKTtcblxuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsVGl0bGVcIik7XG4gIG1vZGFsVGl0bGUuaW5uZXJUZXh0ID0gXCJBZGQgUHJvamVjdFwiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdC1mb3JtXCIpO1xuXG4gIGNvbnN0IHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3cxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nUm93XCIpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC1tb2RhbC10aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlOlwiO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LW1vZGFsLXRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICByb3cxLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICByb3cxLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXJyb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlcnJvclwiKTtcbiAgZXJyb3Iuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LW1vZGFsLWVycm9yXCIpO1xuXG4gIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3cyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nUm93XCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN1Ym1pdEJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1tb2RhbC1zdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcblxuICByb3cyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChyb3cxKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChlcnJvcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocm93Mik7XG5cbiAgYWRkUHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xuICBhZGRQcm9qZWN0TW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgLy8gdmFsaWRhdGUgZm9ybSBpbnB1dHMgfn5+fn5+fn5+fn5+fn5+fn5+fn5+IERPIExBVEVSXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIC8vIGFsc28gY2hlY2sgaWYgaXQgYWxyZWFkeSBleGlzdHNcblxuICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAvLyBlcnJvci5pbm5lclRleHQgPSBcIkVSUk9SOiBUaXRsZSBjYW4gbm90IGJlIGJsYW5rXCI7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYWRkUHJvamVjdE1vZGFsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrSW5mb01vZGFsKHRhc2spIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2staW5mby1mb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVSb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZS1yb3dcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2staW5mby1tb2RhbC10aXRsZVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcblxuICBjb25zdCBleGl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZXhpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV4aXQtYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgZXhpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gIGNvbnN0IGV4aXQgPSBuZXcgSW1hZ2UoKTtcbiAgZXhpdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImV4aXQtYnV0dG9uXCIpO1xuICBleGl0LnNyYyA9IGV4aXRNb2RhbDtcblxuICBleGl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGV4aXQpO1xuXG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQoZXhpdENvbnRhaW5lcik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWluZm8tbW9kYWwtZHVlLWRhdGVcIik7XG4gIGR1ZURhdGUuaW5uZXJUZXh0ID0gYER1ZSBEYXRlOiAke3Rhc2suZHVlRGF0ZX1gO1xuXG4gIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1pbmZvLW1vZGFsLWRldGFpbHNcIik7XG4gIGRldGFpbHMuaW5uZXJUZXh0ID0gYERldGFpbHM6ICR7dGFzay5kZXRhaWxzfWA7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2staW5mby1tb2RhbC1wcmlvcml0eVwiKTtcbiAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gYFByaW9yaXR5OiAke3Rhc2sucHJpb3JpdHl9YDtcblxuICBjb25zdCBkb25lU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkb25lU3RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWluZm8tbW9kYWwtZG9uZS1zdGF0ZVwiKTtcbiAgZG9uZVN0YXRlLmlubmVyVGV4dCA9IHRhc2suZG9uZVN0YXRlID8gXCJEb25lXCIgOiBcIk5vdCBEb25lXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlUm93KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lU3RhdGUpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTW9kYWxzKCkge1xuICAvLyBhZGQgcHJvamVjdCBtb2RhbFxuICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjcHJvamVjdC1tb2RhbC10aXRsZS1pbnB1dFwiLFxuICApO1xuICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgLy8gYWRkIHRhc2sgbW9kYWxcbiAgY29uc3QgYWRkVGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWwtdGl0bGUtaW5wdXRcIik7XG4gIGFkZFRhc2tUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcblxuICBjb25zdCBhZGRUYXNrRGV0YWlsc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLW1vZGFsLWRldGFpbHMtaW5wdXRcIixcbiAgKTtcbiAgYWRkVGFza0RldGFpbHNJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgLy8gZ2V0IHRvZGF5cyBkYXRlLCBmb3JtYXQgdG8gWVlZWS1NTS1ERFxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCB0b2RheVN0cmluZyA9IFwiXCI7XG4gIHRvZGF5U3RyaW5nID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtcbiAgICB0b2RheS5nZXRNb250aCgpICsgMSA8IDEwID8gXCIwXCIgOiBcIlwiXG4gIH0ke3RvZGF5LmdldE1vbnRoKCkgKyAxfS0ke3RvZGF5LmdldERhdGUoKX1gO1xuXG4gIGNvbnN0IGFkZFRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stbW9kYWwtZHVlZGF0ZS1pbnB1dFwiLFxuICApO1xuICBhZGRUYXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kYXlTdHJpbmc7XG5cbiAgY29uc3QgYWRkVGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stbW9kYWwtcHJpb3JpdHktaW5wdXRcIixcbiAgKTtcbiAgYWRkVGFza1ByaW9yaXR5SW5wdXQudmFsdWUgPSBcIkxvd1wiO1xuXG4gIC8vIGVkaXQgdGFzayBtb2RhbFxuICBjb25zdCBlZGl0VGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXQtdGFzay1tb2RhbC10aXRsZS1pbnB1dFwiLFxuICApO1xuICBlZGl0VGFza1RpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gIGNvbnN0IGVkaXRUYXNrRGV0YWlsc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0LXRhc2stbW9kYWwtZGV0YWlscy1pbnB1dFwiLFxuICApO1xuICBlZGl0VGFza0RldGFpbHNJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgY29uc3QgZWRpdFRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXQtdGFzay1tb2RhbC1kdWVkYXRlLWlucHV0XCIsXG4gICk7XG4gIC8vIFlZWVktTU0tRERcbiAgZWRpdFRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSB0b2RheVN0cmluZztcblxuICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXQtdGFzay1tb2RhbC1wcmlvcml0eS1pbnB1dFwiLFxuICApO1xuICBlZGl0VGFza1ByaW9yaXR5SW5wdXQudmFsdWUgPSBcIkxvd1wiO1xuXG4gIGNvbnN0IGVkaXRUYXNrRG9uZVN0YXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXQtdGFzay1tb2RhbC1wcmlvcml0eS1pbnB1dFwiLFxuICApO1xuICBlZGl0VGFza0RvbmVTdGF0ZUlucHV0LmNoZWNrZWQgPSBcImZhbHNlXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRUYXNrTW9kYWwoKSB7XG4gIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICBlZGl0VGFza01vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrLW1vZGFsXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbFRpdGxlXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIkVkaXQgVGFza1wiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stZm9ybVwiKTtcblxuICBjb25zdCB0aXRsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlUm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nUm93XCIpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdC10YXNrLW1vZGFsLXRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1tb2RhbC10aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxN1wiKTtcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRldGFpbHNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzUm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlhbG9nUm93XCIpO1xuXG4gIGNvbnN0IGRldGFpbHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGV0YWlsc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXQtdGFzay1tb2RhbC1kZXRhaWxzLWlucHV0XCIpO1xuICBkZXRhaWxzTGFiZWwuaW5uZXJUZXh0ID0gXCJEZXRhaWxzOlwiO1xuXG4gIGNvbnN0IGRldGFpbHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC10YXNrLW1vZGFsLWRldGFpbHMtaW5wdXRcIik7XG4gIGRldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICBkZXRhaWxzUm93LmFwcGVuZENoaWxkKGRldGFpbHNMYWJlbCk7XG4gIGRldGFpbHNSb3cuYXBwZW5kQ2hpbGQoZGV0YWlsc0lucHV0KTtcblxuICBjb25zdCBkdWVEYXRlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHVlRGF0ZVJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0LXRhc2stbW9kYWwtZHVlZGF0ZS1pbnB1dFwiKTtcbiAgZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6XCI7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stbW9kYWwtZHVlZGF0ZS1pbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGR1ZURhdGVSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgZHVlRGF0ZVJvdy5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gIGNvbnN0IHByaW9yaXR5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlSb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaWFsb2dSb3dcIik7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0LXRhc2stbW9kYWwtcHJpb3JpdHktaW5wdXRcIik7XG4gIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTpcIjtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1tb2RhbC1wcmlvcml0eS1pbnB1dFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG5cbiAgY29uc3QgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpO1xuICBoaWdoT3B0aW9uLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuXG4gIGNvbnN0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1lZGl1bVwiKTtcbiAgbWVkaXVtT3B0aW9uLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG5cbiAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICBsb3dPcHRpb24uaW5uZXJUZXh0ID0gXCJMb3dcIjtcblxuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZGl1bU9wdGlvbik7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcblxuICBjb25zdCBkb25lU3RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZG9uZVN0YXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdC10YXNrLW1vZGFsLWRvbmUtc3RhdGUtaW5wdXRcIik7XG4gIGRvbmVTdGF0ZUxhYmVsLmlubmVyVGV4dCA9IFwiRG9uZT9cIjtcblxuICBjb25zdCBkb25lU3RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZG9uZVN0YXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXRhc2stbW9kYWwtZG9uZS1zdGF0ZS1pbnB1dFwiKTtcbiAgZG9uZVN0YXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gIHByaW9yaXR5Um93LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eVJvdy5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgcHJpb3JpdHlSb3cuYXBwZW5kQ2hpbGQoZG9uZVN0YXRlTGFiZWwpO1xuICBwcmlvcml0eVJvdy5hcHBlbmRDaGlsZChkb25lU3RhdGVJbnB1dCk7XG5cbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVycm9yXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdFJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpYWxvZ1Jvd1wiKTtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdWJtaXRCdXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdGFzay1tb2RhbC1zdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gXCJzdWJtaXRcIjtcbiAgc3VibWl0Um93LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZVJvdyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlsc1Jvdyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZVJvdyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlSb3cpO1xuICBmb3JtLmFwcGVuZENoaWxkKGVycm9yKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRSb3cpO1xuXG4gIGVkaXRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBlZGl0VGFza01vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJldHVybiBlZGl0VGFza01vZGFsO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBZGRUYXNrTW9kYWwsXG4gIGNsZWFyTW9kYWxzLFxuICBjcmVhdGVBZGRQcm9qZWN0TW9kYWwsXG4gIGNyZWF0ZVRhc2tJbmZvTW9kYWwsXG4gIGNyZWF0ZUVkaXRUYXNrTW9kYWwsXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1tZW51LXdpZHRoOiAzMDBweDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNjb250YWluZXIge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjZWZmO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2E0YjdmYTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI21haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4jbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHdpZHRoOiB2YXIoLS1tZW51LXdpZHRoKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICNlM2UzZTMgM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAwcHggNTBweCAyMHB4O1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbiNoZWFkZXItbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNoZWFkZXItbG9nby1pbWcge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbiNoZWFkZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1mYW1pbHk6IFwiTXlDdXJzaXZlXCI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlDdXJzaXZlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG4jYWRkLXByb2plY3QsXG4jYWRkLXRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGhlaWdodDogNzVweDtcbn1cblxuI2FkZC1wcm9qZWN0LWJ1dHRvbixcbiNhZGQtdGFzay1idXR0b24ge1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbiN0YXNrLWluZm8tbW9kYWwsXG4jYWRkLXRhc2stbW9kYWwsXG4jYWRkLXByb2plY3QtbW9kYWwge1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogc29saWQgIzAwMmFmZiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vZGFsVGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmRpYWxvZ1JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmxhYmVsLFxuLnN1Ym1pdEJ1dHRvbixcbmlucHV0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJhZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0YXNrLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcbiAgZ2FwOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGVsZXRlLFxuLmVkaXQge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3VzdG9tLXByb2plY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsaWNrIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGljazpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4jbWFpbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLW1lbnUtd2lkdGgpKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuI21haW4tY29udGVudC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhc2sge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IHNvbGlkIGJsYWNrIDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xuICBnYXA6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWluLXdpZHRoOiA2MDBweDtcbn1cblxuLkhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZmJmO1xufVxuXG4uTWVkaXVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2NmZjtcbn1cblxuLkxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmZmYzY7XG59XG5cbi50YXNrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLnRhc2stdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnRhc2stdGl0bGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi50YXNrLWRvbmUtc3RhdGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDgycHg7XG59XG5cbi50YXNrLWRvbmUtc3RhdGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi50YXNrLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmVycm9yOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbiNjdXJyZW50LXRhc2staW5mby1tb2RhbCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyOiBzb2xpZCAjMDAyYWZmIDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuI2N1cnJlbnQtdGFzay1pbmZvLW1vZGFsIGZvcm0ge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiA1cHg7XG59XG5cbi50aXRsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3Rhc2staW5mby1tb2RhbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbiNleGl0LWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbiNleGl0LWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuI2V4aXQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbn1cblxuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbiNlZGl0LXRhc2stbW9kYWwge1xuICBib3JkZXI6IHNvbGlkIGJsdWUgNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jZWRpdC10YXNrLW1vZGFsLWRvbmUtc3RhdGUtaW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFB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bUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbWVudS13aWR0aDogMzAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwY2VmZjtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjYTRiN2ZhO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI21lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG4gIHdpZHRoOiB2YXIoLS1tZW51LXdpZHRoKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yaWdodDogc29saWQgI2UzZTNlMyAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggMHB4IDUwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2hlYWRlci1sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXItbG9nby1pbWcge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jaGVhZGVyLXRleHQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUN1cnNpdmVcXFwiO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUN1cnNpdmVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvQ2VkYXJ2aWxsZUN1cnNpdmUtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbiNhZGQtcHJvamVjdCxcXG4jYWRkLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24sXFxuI2FkZC10YXNrLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDY1cHg7XFxufVxcblxcbiN0YXNrLWluZm8tbW9kYWwsXFxuI2FkZC10YXNrLW1vZGFsLFxcbiNhZGQtcHJvamVjdC1tb2RhbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IHNvbGlkICMwMDJhZmYgNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubW9kYWxUaXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZGlhbG9nUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubGFiZWwsXFxuLnN1Ym1pdEJ1dHRvbixcXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJhZmY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Rhc2stc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcXG4gIGdhcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGVsZXRlLFxcbi5lZGl0IHtcXG4gIGhlaWdodDogMzVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jdXN0b20tcHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsaWNrIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGljazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1tZW51LXdpZHRoKSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNtYWluLWNvbnRlbnQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFzayB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1pbi13aWR0aDogNjAwcHg7XFxufVxcblxcbi5IaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmYmY7XFxufVxcblxcbi5NZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2NmZjtcXG59XFxuXFxuLkxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZmZmM2O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay10aXRsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50YXNrLWRvbmUtc3RhdGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHdpZHRoOiA4MnB4O1xcbn1cXG5cXG4udGFzay1kb25lLXN0YXRlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhc2stcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmVycm9yOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbiNjdXJyZW50LXRhc2staW5mby1tb2RhbCB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBib3JkZXI6IHNvbGlkICMwMDJhZmYgNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuI2N1cnJlbnQtdGFzay1pbmZvLW1vZGFsIGZvcm0ge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRpdGxlLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3Rhc2staW5mby1tb2RhbC10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuI2V4aXQtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNleGl0LWJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbiNleGl0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxufVxcblxcbiNlZGl0LXRhc2stbW9kYWwge1xcbiAgYm9yZGVyOiBzb2xpZCBibHVlIDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNlZGl0LXRhc2stbW9kYWwtZG9uZS1zdGF0ZS1pbnB1dCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzQWZ0ZXJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSJdLCJuYW1lcyI6WyJhZGREYXlzIiwiaXNBZnRlciIsImhlYWRlckljb24iLCJhZGRJY29uIiwiZGVsZXRlSWNvbiIsImVkaXRJY29uIiwiY3JlYXRlQWRkVGFza01vZGFsIiwiY2xlYXJNb2RhbHMiLCJjcmVhdGVBZGRQcm9qZWN0TW9kYWwiLCJjcmVhdGVUYXNrSW5mb01vZGFsIiwiY3JlYXRlRWRpdFRhc2tNb2RhbCIsInByb2plY3RMaXN0IiwicHJvamVjdCIsInNlbGVjdGVkUHJvamVjdCIsImN1cnJlbnRUYXNrSW5mb01vZGFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZWRpdFRhc2tNb2RhbCIsImN1cnJlbnRUYXNrT2JqZWN0IiwicGFnZUluaXQiLCJjb250YWluZXIiLCJoZWFkZXIiLCJoZWFkZXJMb2dvIiwiaGVhZGVyTG9nb0ltZyIsIkltYWdlIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJoZWFkZXJUZXh0IiwiaW5uZXJUZXh0IiwibWFpbiIsIm1lbnUiLCJtZW51VG9wU2VjdGlvbiIsIkhvbWVUYXNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZU1lbnUiLCJ1cGRhdGVDb250ZW50IiwiZHVlVG9kYXlUYXNrcyIsImR1ZVRoaXNXZWVrVGFza3MiLCJjdXN0b21Qcm9qZWN0IiwidGFza1NlY3Rpb24iLCJhZGRTZWN0aW9uIiwiYWRkUHJvamVjdERpdiIsImFkZFByb2plY3RCdXR0b24iLCJhZGRQcm9qZWN0VGV4dCIsImFkZFRhc2tEaXYiLCJhZGRUYXNrQnV0dG9uIiwiYWRkVGFza1RleHQiLCJtYWluQ29udGVudCIsImFkZFRhc2tNb2RhbCIsImFkZFByb2plY3RNb2RhbCIsInNob3dNb2RhbCIsImFkZFRhc2tTdWJtaXRCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkVGFzayIsImFkZFByb2plY3RTdWJtaXRCdXR0b24iLCJhZGRQcm9qZWN0IiwiSG9tZVByb2plY3QiLCJtYWluQ29udGVudFRpdGxlIiwiaW5uZXJIVE1MIiwiaW5mbyIsImZvckVhY2giLCJ0aXRsZSIsInRhcmdldFByb2plY3QiLCJnZXRQcm9qZWN0IiwiYXBwZW5kVGFza3MiLCJjdXN0b21UYXNrcyIsInByb2plY3RJdGVtIiwicHJvamVjdFRleHQiLCJwcm9qZWN0RGVsZXRlIiwicmVtb3ZlUHJvamVjdCIsInNhdmVUb0xvY2FsIiwidGl0bGVJbnB1dCIsImRldGFpbHNJbnB1dCIsImR1ZURhdGVJbnB1dCIsInByaW9yaXR5SW5wdXQiLCJ2YWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXdQcm9qZWN0IiwidG9kYXkiLCJEYXRlIiwidG9kYXlTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldFRhc2tPYmplY3RzIiwidGFzayIsImR1ZURhdGUiLCJ0YXNrWWVhciIsInN1YnN0ciIsInRhc2tNb250aCIsInRhc2tEYXkiLCJ0YXNrRGF0ZSIsIm5leHRXZWVrRGF0ZSIsImN1cnJlbnRUYXNrIiwicHJpb3JpdHkiLCJ0YXNrVGl0bGUiLCJ0YXNrUmlnaHQiLCJ0YXNrRGV0YWlscyIsInRhc2tEdWVEYXRlIiwidGFza0RvbmVTdGF0ZSIsImRvbmVTdGF0ZSIsImVkaXRDb250YWluZXIiLCJlZGl0QnV0dG9uIiwiZWRpdFRhc2tTdWJtaXRCdXR0b24iLCJlZGl0VGFzayIsImFwcGVuZCIsImRlbGV0ZUNvbnRhaW5lciIsImRlbGV0ZUJ1dHRvbiIsInJlbW92ZVRhc2siLCJkb25lSW5wdXQiLCJkZXRhaWxzIiwiY2hlY2tlZCIsImRhdGEiLCJwcm9qZWN0VGl0bGVzQXJyYXkiLCJjdXJyZW50UHJvamVjdCIsInByb2plY3RUYXNrc0FycmF5IiwicHJvamVjdFRhc2tzIiwidGFza1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwicHJvZE9iaiIsImRhdGFTdHJpbmciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9hZEZyb21Mb2NhbCIsImdldEl0ZW0iLCJwYXJzZSIsInByb2plY3RUaXRsZSIsInRhc2tPYmplY3QiLCJwcm9qZWN0TGlzdEFycmF5IiwiZmlsdGVyIiwiZmluZCIsInRhc2tzTGlzdCIsImdldFRhc2siLCJ0YXJnZXRUYXNrIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYm9keSIsImV4aXRNb2RhbCIsImZvcm0iLCJ0aXRsZVJvdyIsInRpdGxlTGFiZWwiLCJyZXF1aXJlZCIsImRldGFpbHNSb3ciLCJkZXRhaWxzTGFiZWwiLCJkdWVEYXRlUm93IiwiZHVlRGF0ZUxhYmVsIiwicHJpb3JpdHlSb3ciLCJwcmlvcml0eUxhYmVsIiwiaGlnaE9wdGlvbiIsIm1lZGl1bU9wdGlvbiIsImxvd09wdGlvbiIsImVycm9yIiwic3VibWl0Um93Iiwic3VibWl0QnV0dG9uIiwibW9kYWxUaXRsZSIsInJvdzEiLCJyb3cyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXhpdENvbnRhaW5lciIsImV4aXQiLCJwcm9qZWN0VGl0bGVJbnB1dCIsImFkZFRhc2tUaXRsZUlucHV0IiwiYWRkVGFza0RldGFpbHNJbnB1dCIsImFkZFRhc2tEdWVEYXRlSW5wdXQiLCJhZGRUYXNrUHJpb3JpdHlJbnB1dCIsImVkaXRUYXNrVGl0bGVJbnB1dCIsImVkaXRUYXNrRGV0YWlsc0lucHV0IiwiZWRpdFRhc2tEdWVEYXRlSW5wdXQiLCJlZGl0VGFza1ByaW9yaXR5SW5wdXQiLCJlZGl0VGFza0RvbmVTdGF0ZUlucHV0IiwiZG9uZVN0YXRlTGFiZWwiLCJkb25lU3RhdGVJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=