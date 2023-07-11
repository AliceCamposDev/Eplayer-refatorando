import { Component } from '@angular/core';
import { Produtos } from 'src/app/models/produtos/produtos';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';


@Component({
  selector: 'app-card-produtos',
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.css']
})
export class CardProdutosComponent {
  constructor(private ProdutosService: ProdutosService) { }
  listaProdutos = [] as Produtos[];
  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos() {
    this.ProdutosService.getProdutos().subscribe((produtosRecebidos: Produtos[]) => {
      this.listaProdutos = produtosRecebidos
      console.log(this.listaProdutos);
    })

  }

}




 

 
