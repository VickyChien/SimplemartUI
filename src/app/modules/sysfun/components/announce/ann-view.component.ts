import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ann-view',
  templateUrl: './ann-view.component.html'
})
export class AnnViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

}
