import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { exhaustMap, map, take } from "rxjs/Operators";
import * as fromApp from '../store/app.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return this.store.select("login").pipe(
            take(1),
            map(loginState => {
                return loginState.user
            }),
            exhaustMap(user => {
                if(!user) {
                    console.log("user is null returning");
                    return next.handle(req);
                }
                console.log("Outside if loop");
                let authString = 'Basic ' + btoa(user.userId + ':' + user.token + ':' + user.familyName);
                //let headers = new HttpHeaders();
                //headers = req.clone().headers;
                //headers.append('Authorization', authString)
                const modReq = req.clone({
                    headers: new HttpHeaders().set('Authorization', authString)
                });
                console.log(modReq);
                return next.handle(modReq);
            })
        );

        
    }
}