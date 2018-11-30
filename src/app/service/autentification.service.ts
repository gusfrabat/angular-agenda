import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { LogIn } from '../models/login';
import { Registro } from '../models/registo';

@Injectable()
export class AutentificationService {

    url: string;

    constructor(
        private Http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    LogIn(Log: LogIn): Observable<any> {
        const json = JSON.stringify(Log);
        const params = 'json=' + json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this.Http.post(this.url + 'login', params, { headers: headers });
    }

    Registro(Reg: Registro): Observable<any> {
        const json = JSON.stringify(Reg);
        const params = 'json=' + json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this.Http.post(this.url + 'usuario', params, { headers: headers });
    }

}
