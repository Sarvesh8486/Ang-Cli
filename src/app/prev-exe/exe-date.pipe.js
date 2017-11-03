"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LogFilterByDatePipe = (function () {
    function LogFilterByDatePipe() {
    }
    LogFilterByDatePipe.prototype.transform = function (value, filterBy) {
        console.log(filterBy);
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        var newDate = new Date(filterBy);
        console.log(newDate);
        var item = filterBy ? value.filter(function (product) {
            return new Date(product.exe.getFullYear(), product.exe.getMonth(), product.exe.getDate(), 5, 30, 0, 0).getTime() == newDate.getTime();
        }) : value;
        console.log("item: " + item);
        return item;
    };
    return LogFilterByDatePipe;
}());
LogFilterByDatePipe = __decorate([
    core_1.Pipe({
        name: 'datelog'
    })
], LogFilterByDatePipe);
exports.LogFilterByDatePipe = LogFilterByDatePipe;
//# sourceMappingURL=exe-date.pipe.js.map
