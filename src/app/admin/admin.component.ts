import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../services/shared-services';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'execute',
    templateUrl: './admin.component.html'
})
export class AdminComponent {
    user:string;
    username:string;
    password:string;
    account:string;
    role:string;
    manager:string;

    message_username:string;
    message_password:string;
    message_role:string;
    message_acc:string;
    message_manager:string;


    createUser(){

    }

    deleteUser(){

    }

    editUser(){

    }

    resetPassword(){

    }

    logout(){
        sessionStorage.removeItem('admin');
    }

}
