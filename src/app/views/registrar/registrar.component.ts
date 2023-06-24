import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerModel = new User();

  mensagem = "";

  registrado = "";

  onSubmit() {
    console.log(this.registerModel)

    let erroEncontrado = 0;

    if (this.registerModel.email !== this.registerModel.confEmail) {
      this.mensagem = "Os endereços de e-mail não correspondem.";

      erroEncontrado = 1;
    }

    

    const listaPalavras: string[] = ["select", "from", "drop", "or ", "having ", "group", "insert", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {

      if (this.registerModel.email.toLowerCase().includes(palavra)) {
        console.log("Palavra Encontrada: ", palavra)
        this.mensagem = "Dados Inválidos: " + palavra;

        erroEncontrado = 1;
      }
    })

    if (erroEncontrado == 0) {

      this.authService.registrar(this.registerModel).subscribe((response) => {
        console.log("Sucesso!");
        this.router.navigate(['/']);

      }, (respostaErro) => {
        this.mensagem = respostaErro.error;
      })
    }
  }
}
