import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
	selector: 'log-view',
	template: `
	<h2>{{title}}</h2>
	<task-list [taskList]="fullTaskList"></task-list>
	`
})
export class LogViewComponent implements OnInit {
	title = 'LOG VIEW';
	fullTaskList: Task[];

	constructor(private ts:TaskService){}
	
	ngOnInit() {
		this.fullTaskList = this.ts.getTasksFromDB();
	}

}