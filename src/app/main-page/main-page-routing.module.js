"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_page_component_1 = require("./main-page.component");
var execution_component_1 = require("../execution/execution.component");
var mainPageRouter = [
    { path: 'main-page', component: main_page_component_1.MainPageComponent },
    { path: 'exe/:template', component: execution_component_1.ExecutionComponent },
];
var MainPageRoutingModule = (function () {
    function MainPageRoutingModule() {
    }
    return MainPageRoutingModule;
}());
MainPageRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(mainPageRouter)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], MainPageRoutingModule);
exports.MainPageRoutingModule = MainPageRoutingModule;
//# sourceMappingURL=main-page-routing.module.js.map
