import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://202.182.111.45:8081/v1/auth/login', { username: username, password: password })
            .pipe(map(data => {
                // login successful if there's a jwt token in the response
                console.log(data);
                
                if (data && data.data && data.data.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data.data));
                }

                return data.data;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}