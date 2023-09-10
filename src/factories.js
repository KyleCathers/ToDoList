
// projects master list module object
const projectList = (() => {
    let projectListArray = [];

    const add = (project) => {
        projectListArray.push(project);
    }

    const remove = (title) => {
        // array = [{title: "1", ...}, {title: "2", ...}, {title: "3"}], remove "1" object
        projectListArray = projectListArray.filter((project) => {
            return project.title !== title;
        });
    }

    const info = () => {
        const titleStringArray = [];
        projectListArray.forEach(project => {
            titleStringArray.push(project.title);
        })

        console.log(projectListArray);
        return titleStringArray;
    }

    return { add, remove, info }
})();


// project factory object
const project = (title) => {
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

export { projectList, project, task };