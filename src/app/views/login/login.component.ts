import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginModel = new User();

  mensagem = "";

  usuarioLogado = "";

  onSubmit() {
    console.log(this.loginModel)

    let erroEncontrado = 0;

    const listaPalavras: string[] = ["select", "from", "drop", "or ", "having ", "group", "insert", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      //console.log("palavra atual: ", palavra)

      if (this.loginModel.email.toLowerCase().includes(palavra)) {
        console.log("Palavra Encontrada: ", palavra)
        this.mensagem = "Dados Inválidos: " + palavra;

        erroEncontrado = 1;
      }
    })

    if (erroEncontrado == 0) {

      this.authService.login(this.loginModel).subscribe((response) => {
        console.log("Sucesso!");
      }, (respostaErro) => {
        this.mensagem = respostaErro.error;
      })
    }
  }
}