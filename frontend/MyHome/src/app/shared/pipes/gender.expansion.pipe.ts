import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'gender'
})
export class GenderExpansionPipe implements PipeTransform {
    transform(value: string) {
        if(value == 'F') return 'Female';
        return 'Male';
    }

}