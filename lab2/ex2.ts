interface TaskManager {
    tasks: string[];  
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
} //an interface for the todolist class im about to create

class ToDoList implements TaskManager {
    tasks: string[] = [];  
    //adds tasks
    addTask =(task : string) : number => {
        tasks.push(task)
        console.log("Task has been added.")
        return tasks.length
    }
    //lists tasks
    listAllTasks =():void=> {
        for (const task of tasks) {
            console.log(task)
        }
    }
    //deletes a task
    deleteTask =(task : string) : number => {
        var index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        } 
        console.log("Task has been deleted.")
        return tasks.length
    }
  }
  