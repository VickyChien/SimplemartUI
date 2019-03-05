import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ann-edit',
  templateUrl: './ann-edit.component.html'
})
export class AnnEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

}
