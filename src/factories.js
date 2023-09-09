
// taskGroups master list module object
const taskGroupList = (() => {
    let taskGroupListArray = [];

    const add = (taskGroup) => {
        taskGroupListArray.push(taskGroup);
    }

    const remove = (title) => {
        // array = [{title: "1", ...}, {title: "2", ...}, {title: "3"}], remove "1" object
        taskGroupListArray = taskGroupListArray.filter((taskGroup) => {
            return taskGroup.title !== title;
        });
    }

    const info = () => {
        const titleStringArray = [];
        taskGroupListArray.forEach(taskGroup => {
            titleStringArray.push(taskGroup.title);
        })

        console.log(taskGroupListArray);
        return titleStringArray;
    }

    return { add, remove, info }
})();


// taskgroup factory object
const taskGroup = (title) => {
    const tasksList = [];

    const add = (title, details, dueDate, priority) => {
        tasksList.push(task(title, details, dueDate, priority))
    }

    const remove = (title) => {

    }

    const edit = () => {

    }

    const toggleDone = () => {
        
    }

    return { add, remove, edit, toggleDone, title }
}

// task factory object
const task = (title, details, dueDate, priority) => {
    return { title, details, dueDate, priority, doneState }
}

export { taskGroupList, taskGroup, task };