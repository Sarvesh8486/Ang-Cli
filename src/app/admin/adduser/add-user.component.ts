import { Component } from '@angular/core';


@Component({
    selector: 'adduser',
    templateUrl: './add-user.html'
})

export class AddUserComponent {
        user:string;
    username:string;
    password:string;
    account:string;
    role:string;
    manager:string;
}
