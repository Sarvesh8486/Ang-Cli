"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LogFilterByWfPipe = (function () {
    function LogFilterByWfPipe() {
    }
    LogFilterByWfPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        var item = filterBy ? value.filter(function (product) {
            return product.workflow.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
        return item;
    };
    return LogFilterByWfPipe;
}());
LogFilterByWfPipe = __decorate([
    core_1.Pipe({
        name: 'wflog'
    })
], LogFilterByWfPipe);
exports.LogFilterByWfPipe = LogFilterByWfPipe;
//# sourceMappingURL=workflow.pipe.js.map
