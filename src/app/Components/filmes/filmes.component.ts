import { Component } from '@angular/core';
import { Api } from 'src/app/api.service.';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  films: any[]; // Certifique-se de que dadosDaApi está inicializado
  isLoad: boolean;
  isEmpty: boolean;

  formData = {
    name: "",
  }

  constructor(private Api: Api) {
      this.films = [];
      this.isLoad = true;
      this.isEmpty = false;
    }

    // função para quando iniciar o componente ja carregar os dados
    ngOnInit(): void {
      this.getFilms();
    }

    getFilms() {
       this.Api.getFilms(this.formData)
       .then(response => {
         this.films = response.results;
         this.isLoad = false;
         if(this.films.length > 0){
          // se veio algo ele seta vazio  como falso
          // variavel para exibir no front uma msg de nada encontrado
          this.isEmpty = false;
         }else{ 
          // se nao veio nada na requisção nao tem nada e ser exibido
          // mostra msg no front
          this.isEmpty = true;
         }
       })
       .catch(error => {
         console.error('Erro ao buscar filmes:', error);
       });
    }
}
