import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {
    username: string;
    password: string;
    message: string;
    returnUrl: string;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
        console.log(this.returnUrl);
        if (sessionStorage.getItem('currentUser') && this.returnUrl!='/admin') {
            console.log('user already logged in!!')
            this.returnUrl = 'main-page';
            this.router.navigate([this.returnUrl]);
        }
    }

    onLoginClick() {
        console.log(this.username + " " + this.password);
        if (this.username == 'a' && this.password == 'b' && this.returnUrl!='/admin') {
            sessionStorage.setItem('currentUser', this.username);
            this.router.navigate([this.returnUrl || 'main-page']);
        } else if(this.username == 'b' && this.password == 'b'){
            sessionStorage.setItem('admin', this.username);
            this.router.navigate(['admin']);
        }else{
            this.message = "Invalid Username or Password";
        }
    }

}
