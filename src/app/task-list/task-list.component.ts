import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  private taskList: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.taskList = this.tasksService.getTasksFromDB();
  }

  addToJournal(item: Task) {
    console.log('Adding to Journal...');
    this.tasksService.addTaskToList(item);
  }

}
