import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes
import { routerModule } from './app.routing';
// Views
import { LogViewComponent } from './views/log-view.component';
import { HistoryViewComponent } from './views/history-view.component';
import { JournalViewComponent } from './views/journal-view.component';
// Services
import { TaskService } from './services/task.service';
// Root App
import { AppComponent } from './app.component';
// Components
import { RepCounterComponent } from './rep-counter/rep-counter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskComponent } from './tasks/task.component';

@NgModule({
  declarations: [
    AppComponent,
    LogViewComponent,
    HistoryViewComponent,
    JournalViewComponent,
    RepCounterComponent,
    NavbarComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
