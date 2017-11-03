import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Templates } from '../main-page/template-entity';

@Component({
  selector: 'app-params-popup',
  templateUrl: './params-popup.component.html',
  styleUrls: ['./params-popup.component.css']
})
export class ParamsPopupComponent implements OnInit {

  @Input() paramkey: Templates;
  keys: string[];
  values: string[];
  @Output() paramValues: EventEmitter<String[]> = new EventEmitter<String[]>();

  ngOnInit() {

    this.keys = this.paramkey.paramkey;
    this.values = new Array(this.keys.length);
  }

  constructor() {

  }

  ClickButton() {
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
