import { Component } from '@angular/core';
import { Noticias } from 'src/app/models/noticias/noticias';
import { NoticiasService } from 'src/app/services/noticias/noticias.service';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.css']
})
export class CardNoticiasComponent {
  constructor(private noticiaService: NoticiasService) { }

  listaNoticias = [] as Noticias[]

  ngOnInit(): void {
    this.carregarNoticias()
  }

  carregarNoticias() {
    this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticias[]) => {
      this.listaNoticias = noticiasRecebidas
      console.log(this.listaNoticias);
    })

  }
}