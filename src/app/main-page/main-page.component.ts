import { Component, ViewContainerRef, ViewEncapsulation, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';
import { Templates } from './template-entity';
import { PlatformLocation } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { ParamsPopupComponent } from '../params-popup/params-popup.component';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.html',


})
export class MainPageComponent implements OnInit {
    cloudSearch: string;
    username: string;
    password: string;
    url: string;
    selected: boolean;
    templates: Array<Templates>;
    user: string;
    scheduling: boolean;
    uploader: FileUploader;
    visible: boolean;
    selectedIndex: number = -1;
    schedule: string = null;

    onClickChange(){
        /*if(this.password=== undefined || this.password.length<=0){
            alert("Enter Password of Instance");
            return;
        }
        if(this.username=== undefined || this.username.length<=0){
            alert("Enter username of Instance");
            return;
        }
        if(this.url=== undefined || this.url.length<=0){
            alert("Enter url of Instance");
            return;
        }
        if(this.selectedIndex==-1){
            alert("Select One Interface");
            return;
        }
        if(this.schedule===null){
            alert("Select Scheduling");
            return;
        }*/
        console.log(this.schedule);
        let dayofExe: string;
        let timeofExe1: string;
        let dateofExe: string;
        let timeofExe: string;
        if(this.schedule === 'yes1' || this.schedule === 'yes'){
            console.log( document.getElementById('dayofexe').getAttribute('value'));
            dayofExe = document.getElementById('dayofexe').nodeValue;
            timeofExe1 = document.getElementById('timeofexe1').nodeValue;
            if(timeofExe1==null){
                alert('Enter time of scheduling');
            }
        }else if(this.schedule === 'yes2' || this.schedule === 'yes'){
            dateofExe = document.getElementById('timeofexe').nodeValue;
            timeofExe = document.getElementById('dateofexe').nodeValue;
            if(dateofExe==null){
                alert('Enter day of scheduling');
            }else if(timeofExe==null){
                alert('Enter time of scheduling');
            }
        }
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    ngOnInit() {
        this.user = sessionStorage.getItem('currentUser');
        this.location.onPopState(() => {
            sessionStorage.removeItem('currentUser');
        });
        this.uploader = new FileUploader({ url: 'http://localhost:3001/upload', autoUpload: true, });
        this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
        this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);   
    }

    setradio(state:string){
        this.schedule = state;
    }

    done(){
        console.log(this.values);
    }

    constructor(private location: PlatformLocation, private http: Http) {
        this.http.get("/assets/templates.json")
            .subscribe((success) => {
                this.templates = success.json();
            });
    }

    actionClick(index: number) {
        let element: HTMLElement = document.getElementById('myFileInput' + index);
        console.log(element.id);
        console.log(element.getAttribute('value'));
        element.click();
        console.log(element.getAttribute('value'));
    }
    
    selectItem(index: number) {
        if(this.selectedIndex!=-1 && this.templates[index].select){
            alert('You have already selected one interface, please unselect it first');
            setTimeout(()=>{
                this.templates[index].select = false;
              });
        }else if(!this.templates[index].select){
            this.selectedIndex=-1;
        }else{
            this.selectedIndex = index;
        }
        console.log(this.selectedIndex +" "+ index+" "+this.templates[index].select);
    }

    logout() {
        sessionStorage.removeItem('currentUser');
    }

    onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let data = JSON.parse(response); //success server response
        console.log(data.path);
    }

    onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
        let error = JSON.parse(response); //error server response
        console.log(error);
    }
    
    keys:string[];
    values:string[] = new Array();
    showPopup: boolean = false;
    onParamClick(template: Templates) {
        console.log(template.paramkey);
        this.showPopup = !this.showPopup;
        this.keys = template.paramkey;
        this.values = new Array();
    }


   

}
