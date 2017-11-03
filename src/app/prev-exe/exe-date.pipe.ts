import { PipeTransform, Pipe } from '@angular/core';
import { LogsTemplate } from './log-entity'

@Pipe({
    name: 'datelog'
})
export class LogFilterByDatePipe implements PipeTransform {

    transform(value: LogsTemplate[], filterBy: string): LogsTemplate[] {
        console.log(filterBy);
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        let newDate = new Date(filterBy);
        console.log(newDate);
        var item = filterBy ? value.filter((product: LogsTemplate) =>
            new Date(product.exe.getFullYear(), product.exe.getMonth(), product.exe.getDate(), 5, 30, 0, 0).getTime() == newDate.getTime()) : value;
        console.log("item: "+item);
        return item;
    }
}
