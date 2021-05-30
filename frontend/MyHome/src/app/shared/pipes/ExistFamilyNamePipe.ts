import { HttpClient } from "@angular/common/http";
import { Pipe, PipeTransform } from "@angular/core";
import { of } from "rxjs";
import { catchError, tap } from "rxjs/Operators";

import * as env from '../../../environments/environment';

@Pipe({
    name: 'familyExist'
})
export class ExistFamilyName implements PipeTransform {
    transform(familyName: string) {
        
        this.http.get(`${env.environment.baseUrl}/families/${familyName}`)
            .pipe(
                tap((_) => {
                    return true;
                }),
                catchError((err) => {
                    return of(false);
                })
            );
            return false;
    }



    constructor(private http: HttpClient){}
}