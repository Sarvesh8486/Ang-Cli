import { Component, OnChanges, SimpleChanges, Input, DoCheck, KeyValueDiffers, OnInit } from '@angular/core';
import { Templates } from './template-entity';
import { SharedService } from '../services/shared-services';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'change-template',
    templateUrl: './change.html',

})
export class ChangeComponent implements OnChanges {
    @Input() username: string;
    @Input() password: string;
    @Input() url: string;
    @Input() template: Templates[];
    visible: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shared: SharedService
  ) {}

    ngOnChanges(changes: SimpleChanges) {
        this.validateButton();
    }

    validateTemplate():boolean {
        console.log(this.template);
        this.template.forEach(element => {
             if(element['select']){
                 return true;
             }
        });
        return false;
    }

    validateButton() {
        if (this.username != undefined && this.username.trim().length != 0 &&
            this.password != undefined && this.password.trim().length != 0 &&
            this.url != undefined && this.url.trim().length != 0) {
            this.visible = true;
        } else {
            this.visible = false;
        }
    }

    onClickChange(){
        this.shared.setData(this.password, this.username, this.url, this.template);
        console.log(this.shared.getUrl());
        console.log("in click")
        this.router.navigate(['/exe']);
    }
}
