import { Task } from '../models/task.model';

export class TaskService {

  private taskData: Task[] = [
    {name: 'bench press', reps: 3},
    {name: 'sit ups', reps: 10},
    {name: 'barbell curls', reps: 5},
    {name: 'overhead press', reps: 7}
  ];

  private taskList: Task[] = [];
  private currenTask: Task;

  getTasksFromDB() {
    return this.taskData;
  }

  getTaskList() {
    return this.taskList;
  }

  addTaskToList(item: Task) {
    if(this.taskList.indexOf(item) !== -1) {
      return;
    }
    this.taskList.push(item);
  }

  removeTaskFromList(item: Task) {
    this.taskList.splice(this.taskList.indexOf(item), 1);
  }
}
