const tasks : string[] = []

//adds tasks
const addTask =(task : string) : number => {
    tasks.push(task)
    console.log("Task has been added.")
    return tasks.length
}
//lists tasks
const listAllTasks =():void=> {
    for (const task of tasks) {
        console.log(task)
    }
}
//deletes a task
const deleteTask =(task : string) : number => {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    } 
    console.log("Task has been deleted.")
    return tasks.length
}