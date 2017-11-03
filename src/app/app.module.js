"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var ng2_file_upload_1 = require("ng2-file-upload");
//components
var main_page_component_1 = require("./main-page/main-page.component");
var change_component_1 = require("./main-page/change.component");
var execution_component_1 = require("./execution/execution.component");
var login_component_1 = require("./login/login.component");
var admin_component_1 = require("./admin/admin.component");
var add_user_component_1 = require("./admin/adduser/add-user.component");
var edit_user_component_1 = require("./admin/edituser/edit-user.component");
var remove_user_component_1 = require("./admin/removeuser/remove-user.component");
var reset_pass_component_1 = require("./admin/resetpass/reset-pass.component");
var prev_exe_component_1 = require("./prev-exe/prev-exe.component");
//pipes
var main_page_cloud_pipe_1 = require("./main-page/main-page-cloud.pipe");
var cloud_pipe_1 = require("./prev-exe/cloud.pipe");
var workflow_pipe_1 = require("./prev-exe/workflow.pipe");
var exe_date_pipe_1 = require("./prev-exe/exe-date.pipe");
// app Compo
var app_component_1 = require("./app.component");
//service
var shared_services_1 = require("./services/shared-services");
//guard
var auth_guard_1 = require("./login/auth.guard");
var admin_auth_guard_1 = require("./admin/admin-auth.guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', component: login_component_1.LoginComponent },
                { path: 'main-page', component: main_page_component_1.MainPageComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: 'exe', component: execution_component_1.ExecutionComponent, canActivate: [auth_guard_1.AuthGuard] },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [admin_auth_guard_1.AdminAuthGuard], children: [
                        { path: 'adduser', component: add_user_component_1.AddUserComponent },
                        { path: 'edituser', component: edit_user_component_1.EditUserComponent },
                        { path: 'removeuser', component: remove_user_component_1.RemoveUserComponent },
                        { path: 'resetpass', component: reset_pass_component_1.RemovePassComponent },
                    ] },
                { path: 'prev', component: prev_exe_component_1.PrevExeComponent, canActivate: [auth_guard_1.AuthGuard] },
            ])
        ],
        declarations: [app_component_1.AppComponent,
            main_page_component_1.MainPageComponent,
            ng2_file_upload_1.FileSelectDirective,
            login_component_1.LoginComponent,
            change_component_1.ChangeComponent,
            execution_component_1.ExecutionComponent,
            add_user_component_1.AddUserComponent,
            admin_component_1.AdminComponent,
            cloud_pipe_1.LogFilterByCloudPipe,
            workflow_pipe_1.LogFilterByWfPipe,
            exe_date_pipe_1.LogFilterByDatePipe,
            prev_exe_component_1.PrevExeComponent,
            edit_user_component_1.EditUserComponent,
            remove_user_component_1.RemoveUserComponent,
            reset_pass_component_1.RemovePassComponent,
            main_page_cloud_pipe_1.TemplateFilterByCloudPipe,],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [app_component_1.AppComponent],
        providers: [shared_services_1.SharedService, auth_guard_1.AuthGuard, admin_auth_guard_1.AdminAuthGuard],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
