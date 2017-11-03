"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
//components
var main_page_component_1 = require("./main-page.component");
var change_component_1 = require("./change.component");
var main_page_cloud_pipe_1 = require("./main-page-cloud.pipe");
var main_page_routing_module_1 = require("./main-page-routing.module");
var MainPageRouting = (function () {
    function MainPageRouting() {
    }
    return MainPageRouting;
}());
MainPageRouting = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            main_page_routing_module_1.MainPageRoutingModule
        ],
        declarations: [
            main_page_component_1.MainPageComponent,
            change_component_1.ChangeComponent,
            main_page_cloud_pipe_1.TemplateFilterByCloudPipe,
        ],
    })
], MainPageRouting);
exports.MainPageRouting = MainPageRouting;
//# sourceMappingURL=main-page.module.js.map
