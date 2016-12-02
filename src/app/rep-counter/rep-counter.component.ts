import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rep-counter',
  templateUrl: './rep-counter.component.html'
})
export class RepCounterComponent implements OnInit {
  repCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addRep() {
    this.repCount++;
  }

  subRep() {
    this.repCount--;
  }

}
