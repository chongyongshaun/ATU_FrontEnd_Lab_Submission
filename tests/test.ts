import {ToDoList} from "../lab2/ex2";

describe('ToDoList Class', () => {
  
    let toDoList: ToDoList;
  
    beforeEach(() => {
      toDoList = new ToDoList();
    });
  
    // Test case 1: Add a task
    it('should add a task to the list', () => {
      const initialLength = toDoList.tasks.length;
      toDoList.addTask('Learn TypeScript');
      expect(toDoList.tasks.length).toBe(initialLength + 1);
      expect(toDoList.tasks).toContain('Learn TypeScript');
    });
  
    // Test case 2: List all tasks
    it('should list all tasks', () => {
      toDoList.addTask('Learn TypeScript');
      toDoList.addTask('Build a project');
      console.log = jest.fn(); // Mock console.log
  
      toDoList.listAllTasks();
      expect(console.log).toHaveBeenCalledWith('Learn TypeScript');
      expect(console.log).toHaveBeenCalledWith('Build a project');
    });
  
    // Test case 3: Delete a task
    it('should delete a task from the list', () => {
      toDoList.addTask('Learn TypeScript');
      const initialLength = toDoList.tasks.length;
  
      toDoList.deleteTask('Learn TypeScript');
      expect(toDoList.tasks.length).toBe(initialLength - 1);
      expect(toDoList.tasks).not.toContain('Learn TypeScript');
    });
  
    // Test case 4: Delete a non-existing task
    it('should not delete a task that does not exist', () => {
      toDoList.addTask('Learn TypeScript');
      const initialLength = toDoList.tasks.length;
  
      const result = toDoList.deleteTask('Non-existing task');
      expect(result).toBe(initialLength);
      expect(console.log).toHaveBeenCalledWith("Task has been deleted.");
    });
  
    // Test case 5: Adding multiple tasks
    it('should correctly add multiple tasks', () => {
      toDoList.addTask('Learn TypeScript');
      toDoList.addTask('Build a project');
      expect(toDoList.tasks.length).toBe(2);
      expect(toDoList.tasks).toContain('Learn TypeScript');
      expect(toDoList.tasks).toContain('Build a project');
    });
  
  });