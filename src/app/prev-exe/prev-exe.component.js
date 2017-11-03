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
var PrevExeComponent = (function () {
    function PrevExeComponent() {
        var date = new Date();
        var date2 = new Date();
        date2.setDate(date.getDate() - 1);
        var date3 = new Date();
        date3.setDate(date.getDate() + 1);
        var date4 = new Date();
        date4.setDate(date.getDate() + 5);
        this.logs = [
            { cloud: 'Finance', exe: date, url: 'FIN', workflow: 'WF!' },
            { cloud: 'SCM', exe: date2, url: 'SCM', workflow: 'WF2' },
            { cloud: 'Finance', exe: date3, url: 'FIN!', workflow: 'WF3' },
            { cloud: 'PPM', exe: date4, url: 'PPM!', workflow: 'WF4' },
        ];
    }
    return PrevExeComponent;
}());
PrevExeComponent = __decorate([
    core_1.Component({
        selector: 'prev-exe',
        templateUrl: './prev-exe.html'
    }),
    __metadata("design:paramtypes", [])
], PrevExeComponent);
exports.PrevExeComponent = PrevExeComponent;
//# sourceMappingURL=prev-exe.component.js.map
