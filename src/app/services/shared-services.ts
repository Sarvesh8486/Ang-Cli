import { Injectable } from '@angular/core';
import { Templates } from '../main-page/template-entity';

@Injectable()
export class SharedService {

    username: string;
    password: string;
    url: string;
    template: Templates[];

    getUsername(){
        return this.username;
    }
    getUrl(){
        return this.url;
    }
    getPassword(){
        return this.password;
    }
    getTemplate(){
        return this.template;
    }

    setData(password: string, username: string, url: string, template: Templates[]) {
        this.password = password;
        this.username = username;
        this.url = url;
        this.template = template;
    }
    
}
