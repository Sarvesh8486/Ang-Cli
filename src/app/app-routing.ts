import { Routes, RouterModule } from '@angular/router';

//components
import { MainPageComponent } from './main-page/main-page.component';
import { ChangeComponent } from './main-page/change.component';
import { ExecutionComponent } from './execution/execution.component';
import { LoginComponent } from './login/login.component';

//guard
import {AuthGuard} from './login/auth.guard';

const appRoute:Routes = [
    {path:'',component:MainPageComponent, canActivate:[AuthGuard]},
];
