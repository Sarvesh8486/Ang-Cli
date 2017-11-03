import { Component } from '@angular/core';


@Component({
    selector: 'removeuser',
    templateUrl: './remove-user.html'
})

export class RemoveUserComponent {
        user:string;
    username:string;
    password:string;
    account:string;
    role:string;
    manager:string;
}
