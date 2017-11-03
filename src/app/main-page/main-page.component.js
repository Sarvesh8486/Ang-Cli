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
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var ng2_file_upload_1 = require("ng2-file-upload");
var MainPageComponent = (function () {
    function MainPageComponent(location, http) {
        var _this = this;
        this.location = location;
        this.http = http;
        this.http.get("/app/assets/templates.json")
            .subscribe(function (success) {
            _this.templates = success.json();
        });
    }
    MainPageComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = sessionStorage.getItem('currentUser');
        this.location.onPopState(function () {
            sessionStorage.removeItem('currentUser');
        });
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:3001/upload', autoUpload: true, });
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
    };
    MainPageComponent.prototype.actionClick = function (index) {
        var element = document.getElementById('myFileInput' + index);
        console.log(element.id);
        console.log(element.getAttribute('value'));
        element.click();
        console.log(element.getAttribute('value'));
    };
    MainPageComponent.prototype.selectItem = function (index) {
        var select = this.templates[index].select;
        if (select) {
        }
    };
    MainPageComponent.prototype.logout = function () {
        sessionStorage.removeItem('currentUser');
    };
    MainPageComponent.prototype.onParamClick = function (template) {
    };
    MainPageComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        var data = JSON.parse(response); //success server response
        console.log(data.path);
    };
    MainPageComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); //error server response
        console.log(error);
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    core_1.Component({
        selector: 'main-page',
        templateUrl: './main-page.html'
    }),
    __metadata("design:paramtypes", [common_1.PlatformLocation, http_1.Http])
], MainPageComponent);
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=main-page.component.js.map
