import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ContactosService {

    url: string;

    constructor(
        private Http: HttpClient
    ) {
        this.url = GLOBAL.url;
    }

    RegistroU(Usu: Contacto): Observable<any> {
        const json = JSON.stringify(Usu);
        const params = 'json=' + json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this.Http.post(this.url + 'contacto', params, { headers: headers });
    }

    getUsuarios(Usu: Contacto): Observable<any> {
        const json = JSON.stringify(Usu);
        const params = 'json=' + json;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this.Http.post(this.url + 'contactos', params, { headers: headers });
    }
}
