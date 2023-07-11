import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from 'src/app/models/produtos/produtos';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url = "http://localhost:3000/produtos"

  constructor(private httpClient: HttpClient) {}
    getProdutos():Observable<Produtos[]>{
      return this.httpClient.get<Produtos[]>(this.url)
  }

}



