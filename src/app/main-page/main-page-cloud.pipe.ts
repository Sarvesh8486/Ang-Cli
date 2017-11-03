import {  PipeTransform, Pipe } from '@angular/core';
import { Templates } from './template-entity'

@Pipe({
    name: 'cloudFilter'
})
export class TemplateFilterByCloudPipe implements PipeTransform {

    transform(value: Templates[], filterBy: string): Templates[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        var item = filterBy ? value.filter((product: Templates) =>
            product.cloud.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
        return item;
    }
}
