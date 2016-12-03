import { Component } from '@angular/core';

@Component({
	selector: 'journal-view',
	template: `
		<h2>{{title}}</h2>
	`
})
export class JournalViewComponent {
	title = 'JOURNAL VIEW';
}