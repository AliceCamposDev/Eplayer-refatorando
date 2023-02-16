import { Component } from '@angular/core';

import { NoticiasService } from '../../services/noticias.service';
import { Noticias } from '../../models/noticias';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css']
})
export class CardNoticiasComponent {
  constructor(private noticiaService: NoticiasService) { }

  listaNoticias = [] as Noticias[];

  ngOnInit(): void {
    this.loadNoticias();
  }

  loadNoticias() {//TODO: estudar isso aqui também 🖊
    this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticias[]) => {
      this.listaNoticias = noticiasRecebidas
      console.log(this.listaNoticias);
    })
  }
}
