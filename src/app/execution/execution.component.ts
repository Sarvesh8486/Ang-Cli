import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../services/shared-services';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'execute',
    template: '<p>Hello All...</p>',
})
export class ExecutionComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private shared: SharedService
    ) {}

    ngOnInit() {
        console.log(this.shared.getPassword());
        console.log(this.shared.getUrl());
        console.log(this.shared.getUsername());
        console.log(this.shared.getTemplate());
    }
} 
