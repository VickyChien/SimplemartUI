import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'con-query',
  templateUrl: './con-query.component.html'
})
export class ConQueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
