import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html'
})
export class JournalComponent implements OnInit {
  private taskList: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.taskList = this.tasksService.getTaskList();
  }

  removeFromJournal(item: Task) {
    console.log('Removing task...');
    this.tasksService.removeTaskFromList(item);
  }

}
