import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  //atributos
  produtos : any[] = []; //estou diezendo que produtos é uma array de objetos 

  //declarando um objeto HttpClient
  constructor(private httpClient: HttpClient) {}


  ngOnInit(): void {    
   
    //fazendo uma requisição para o serviço de consulta de produtos
    this.httpClient.get('http://localhost:8081/api/produtos')
      .subscribe({ //aguardando a resposta
        next: (data) => { //capturando o retorno de sucesso da API
          //armazenando os dados dos produtos obtidos na API
          this.produtos = data as any[];
        },
        error: (e) => { //capturando o retorno de erro da API
          console.log(e.error);
        }
      })
  }
}



