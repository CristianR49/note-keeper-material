import { HttpClient } from "@angular/common/http";
import { Nota } from "../models/nota";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";


@Injectable()
export class NotasService {
  private NOTAS_API_URL = `${environment.API_URL}/notas`;
  

  constructor(private http: HttpClient) {}

  criar(nota: Nota): Observable<Nota> {
    return this.http.post<Nota>(this.NOTAS_API_URL, nota);
  }

  editar(id: number, nota: Nota): Observable<Nota> {
    const url = `${this.NOTAS_API_URL}/${id}`;

    return this.http.put<Nota>(url, nota);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.NOTAS_API_URL}/${id}`;

    return this.http.delete<Nota>(url);
  }

  selecionarPorId(id: number): Observable<Nota> {
    const url = `${this.NOTAS_API_URL}/${id}`;

    return this.http.get<Nota>(url);
  }

  selecionarTodos(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.NOTAS_API_URL);
  }
}