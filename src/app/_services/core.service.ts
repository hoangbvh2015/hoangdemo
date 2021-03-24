import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CoreService {
    constructor(private http : HttpClient){}
    get(url){
        let currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
        return this.http.get(url , {
            headers:  new HttpHeaders().set('Authorization', currentUser.access_token),
        });
    }
    post(url,body:Object){
        let currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
        return this.http.post(url ,body ,  {
            headers:  new HttpHeaders()
        });
    }
    put(url,body:Object){
        let currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
        return this.http.put(url ,body ,  {
            headers:  new HttpHeaders().set('Authorization', currentUser.access_token),
        });
    }
    del(url,body:Object){
        let currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
        return this.http.delete(url ,  {
            headers:  new HttpHeaders().set('Authorization', currentUser.access_token),
        });
    }
}
