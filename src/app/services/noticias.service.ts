import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Noticias } from '../models/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

 url = "https://localhst:3000/noticias";

  constructor(private httpcliente: HttpClient){ }
//TODO: estudar injeção de dependências 🖊
    getNoticias():Observable<Noticias[]>{
      return this.httpcliente.get<Noticias[]>(this.url)
    }
  
}
