import { Routes, RouterModule } from '@angular/router';
// Views
import { LogViewComponent } from './views/log-view.component';
import { HistoryViewComponent } from './views/history-view.component';
import { JournalViewComponent } from './views/journal-view.component';

const APP_ROUTES: Routes = [
	{path: '', redirectTo: '/log', pathMatch: 'full'},
	{path: 'log', component: LogViewComponent},
	{path: 'history', component: HistoryViewComponent},
	{path: 'journal', component: JournalViewComponent},
	{path: '**', redirectTo: '/log', pathMatch: 'full'}
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);