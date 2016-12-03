import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
	selector: 'task-item',
	template: `
	<li class="list-group-item">
	{{taskItem.name}}
	<span class="badge">{{taskItem.reps}}</span>
	</li>
	`,
	inputs: ['taskItem']
})
export class TaskComponent {
	taskItem: Task;
}