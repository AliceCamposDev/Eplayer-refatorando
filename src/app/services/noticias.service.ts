import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

 url = "https://localhst:3000/noticias";

  constructor() { }
}
