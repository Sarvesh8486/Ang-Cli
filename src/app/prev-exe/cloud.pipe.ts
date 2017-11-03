import {  PipeTransform, Pipe } from '@angular/core';
import { LogsTemplate } from './log-entity'

@Pipe({
    name: 'cloudlog'
})
export class LogFilterByCloudPipe implements PipeTransform {

    transform(value: LogsTemplate[], filterBy: string): LogsTemplate[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        var item = filterBy ? value.filter((product: LogsTemplate) =>
            product.cloud.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
        
        return item;
    }
}
