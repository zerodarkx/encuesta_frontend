import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEncuesta, IResponseApi } from '../interfaces/encuesta';
import { Observable } from 'rxjs';
import { IResultados } from '../interfaces/resultado';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private url: string = 'http://localhost:3000/api/encuestas'

  constructor(
    private http: HttpClient
  ) { }

  guardarEncuesta(encuesta: IEncuesta): Observable<IResponseApi> {
    const urls = `${this.url}/save`
    return this.http.post<IResponseApi>(urls, encuesta);
  }

  mostrarResultados(): Observable<IResultados> {
    const urls = `${this.url}/resultado`
    return this.http.get<IResultados>(urls);
  }
}
