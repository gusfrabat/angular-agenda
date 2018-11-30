import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaisesService {

    constructor(
        private Http: HttpClient
    ) { }

    getPaises(): Observable<any> {
        return this.Http.get('https://restcountries.eu/rest/v2');
    }

}
