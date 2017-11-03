import { Component } from '@angular/core';


@Component({
    selector: 'edituser',
    templateUrl: './edit-user.html'
})

export class EditUserComponent {
        user:string;
    username:string;
    password:string;
    account:string;
    role:string;
    manager:string;
}
