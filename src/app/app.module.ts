import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TasksService } from './services/tasks.service';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { JournalComponent } from './journal/journal.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
