"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var shared_services_1 = require("../services/shared-services");
var router_1 = require("@angular/router");
var ChangeComponent = (function () {
    function ChangeComponent(route, router, shared) {
        this.route = route;
        this.router = router;
        this.shared = shared;
    }
    ChangeComponent.prototype.ngOnChanges = function (changes) {
        this.validateButton();
    };
    ChangeComponent.prototype.validateTemplate = function () {
        console.log(this.template);
        this.template.forEach(function (element) {
            if (element['select']) {
                return true;
            }
        });
        return false;
    };
    ChangeComponent.prototype.validateButton = function () {
        if (this.username != undefined && this.username.trim().length != 0 &&
            this.password != undefined && this.password.trim().length != 0 &&
            this.url != undefined && this.url.trim().length != 0) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    };
    ChangeComponent.prototype.onClickChange = function () {
        this.shared.setData(this.password, this.username, this.url, this.template);
        console.log(this.shared.getUrl());
        console.log("in click");
        this.router.navigate(['/exe']);
    };
    return ChangeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChangeComponent.prototype, "username", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChangeComponent.prototype, "password", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChangeComponent.prototype, "url", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ChangeComponent.prototype, "template", void 0);
ChangeComponent = __decorate([
    core_1.Component({
        selector: 'change-template',
        templateUrl: './change.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        shared_services_1.SharedService])
], ChangeComponent);
exports.ChangeComponent = ChangeComponent;
//# sourceMappingURL=change.component.js.map
