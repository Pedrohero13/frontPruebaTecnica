import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Region } from '../modelos/region';
import { Pokemon } from '../modelos/pokemon';
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getRegiones(): Observable<Region> {
    return this.http
      .get<Region>(
        this.apiURL+"/mi-pokedex" ,
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  getPokemon(nombre:string): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(
        this.apiURL+"/pokemon/"+ nombre,
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  buscarRegion (listaRegiones:any[], nombre:string){
    const elementoEncontrado = listaRegiones.find(item => item.name === nombre);

  if (elementoEncontrado) {
    return elementoEncontrado;
  } else {
    return undefined; // Elemento no encontrado
  }
    
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
