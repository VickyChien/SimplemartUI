import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goodspricebatch-view',
  templateUrl: './goodspricebatch-view.component.html'
})
export class GoodsPriceBatchViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

}
