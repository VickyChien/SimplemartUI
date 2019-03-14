import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quote-bargain-purchase',
  templateUrl: './quote-bargain-purchase.component.html'
})
export class QuoteBargainPurchaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

}
