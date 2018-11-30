import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Documento } from '../models/Docuemento';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentoService {
  url: string;

  constructor(
    private Http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  AddDocumento(documento: Documento): Observable<any> {
    const json = JSON.stringify(documento);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.Http.post(this.url + 'documento', params, { headers: headers });
}

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
        const formData: any = new FormData();
        const xhr = new XMLHttpRequest();

        for (let i = 0; i < files.length; i++) {
            formData.append('uploads[]', files[i], files[i].name);
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        };

        xhr.open('POST', url, true);
        xhr.send(formData);

    });
}


}
