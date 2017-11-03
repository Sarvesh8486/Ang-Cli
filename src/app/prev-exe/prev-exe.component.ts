import { Component } from '@angular/core'; 
import { LogsTemplate } from './log-entity'
@Component({
    selector:'prev-exe',
    templateUrl: './prev-exe.html'
})
export class PrevExeComponent{
    logs:LogsTemplate[];
    cloudSrch:string;
    wfSrch:string;
    dateSrch:string;
    
    constructor(){
        let date:Date = new Date();

        let date2 = new Date();
        date2.setDate(date.getDate()-1);

        let date3 = new Date();
        date3.setDate(date.getDate()+1);

        let date4 = new Date();
        date4.setDate(date.getDate()+5);

        this.logs = [
            { cloud:'Finance', exe:date, url:'FIN',workflow:'WF!' },
            { cloud:'SCM', exe:date2, url:'SCM',workflow:'WF2' },
            { cloud:'Finance', exe:date3, url:'FIN!',workflow:'WF3' },
            { cloud:'PPM', exe:date4, url:'PPM!',workflow:'WF4' },
        ];

    }
}
