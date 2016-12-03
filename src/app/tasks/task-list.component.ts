import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
	selector: 'task-list',
	template: `
	<h3>Full List</h3>
	<ul class="list-group">
		<task-item *ngFor="let task of taskList"
			[taskItem]="task">
		</task-item>
	</ul>
	`,
	inputs: ['taskList']
})
export class TaskListComponent implements OnInit {
	taskList: Task[];

	ngOnInit() {

	}
}