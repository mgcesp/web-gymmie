import { Component } from '@angular/core';

@Component({
	selector: 'history-view',
	template: `
		<h2>{{title}}</h2>
	`
})
export class HistoryViewComponent {
	title = 'HISTORY VIEW';
}