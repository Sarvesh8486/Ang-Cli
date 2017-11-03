// imports
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


//components
import { MainPageComponent } from './main-page/main-page.component';
import { ChangeComponent } from './main-page/change.component';
import { ExecutionComponent } from './execution/execution.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './admin/adduser/add-user.component';
import { EditUserComponent } from './admin/edituser/edit-user.component';
import { RemoveUserComponent } from './admin/removeuser/remove-user.component';
import { RemovePassComponent } from './admin/resetpass/reset-pass.component';
import { PrevExeComponent } from './prev-exe/prev-exe.component';

//pipes
import { TemplateFilterByCloudPipe } from './main-page/main-page-cloud.pipe';
import { LogFilterByCloudPipe } from './prev-exe/cloud.pipe';
import { LogFilterByWfPipe } from './prev-exe/workflow.pipe';
import { LogFilterByDatePipe } from './prev-exe/exe-date.pipe';

// app Compo
import { AppComponent } from './app.component';

//service
import { SharedService } from './services/shared-services';

//guard
import {AuthGuard} from './login/auth.guard';
import { AdminAuthGuard } from './admin/admin-auth.guard';
import { ParamsPopupComponent } from './params-popup/params-popup.component';
 

@NgModule({

  imports: [BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'main-page', component: MainPageComponent, canActivate:[AuthGuard]},
      { path: 'exe', component: ExecutionComponent, canActivate:[AuthGuard] },
      { path: 'login', component: LoginComponent},
      { path: 'admin', component: AdminComponent, canActivate:[AdminAuthGuard], children:[
          {path:'adduser', component:AddUserComponent},
          {path:'edituser', component:EditUserComponent},
          {path:'removeuser', component:RemoveUserComponent},
          {path:'resetpass', component:RemovePassComponent},
        ] },
        
      { path: 'prev', component: PrevExeComponent, canActivate:[AuthGuard], children:[
        {path:'param', component:ParamsPopupComponent}
      ] },
    ])
  ],
  declarations: [AppComponent,
    MainPageComponent,
    FileSelectDirective,
    LoginComponent,
    ChangeComponent,
    ExecutionComponent,
    AddUserComponent,
    AdminComponent,
    LogFilterByCloudPipe, 
    LogFilterByWfPipe, 
    LogFilterByDatePipe, 
    PrevExeComponent,
    EditUserComponent,
    RemoveUserComponent,
    RemovePassComponent,
    TemplateFilterByCloudPipe,
    ParamsPopupComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers:[SharedService, AuthGuard, AdminAuthGuard],
})
export class AppModule { }
