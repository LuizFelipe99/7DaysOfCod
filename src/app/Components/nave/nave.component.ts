import { Component} from '@angular/core';
import { Api } from 'src/app/api.service.';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesComponent } from '../detalhes/detalhes.component';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent {



  starships: any[]; // Certifique-se de que dadosDaApi está inicializado
  detail_starship: any;
  isLoad: boolean;
  isEmpty: boolean;
  nextBlocked: boolean;
  previousBlocked: boolean;
  total: 0;
  current: 1;
  next: '';
  previous: '';
  url: '';

  formData = {
    name: "",
  }

  constructor(private Api: Api, public dialog: MatDialog) {
      this.starships = [];
      // this.detail_starship = [];
      this.isLoad = true;
      this.isEmpty = false;
      this.total = 0;
      this.current = 1;
      this.next = '';
      this.previous = '';
      this.url = '';
      this.nextBlocked = false;
      this.previousBlocked = false;
    }

    // função para quando iniciar o componente ja carregar os dados
    ngOnInit(): void {
      this.getStarships();
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(DetalhesComponent, {
        data: this.detail_starship
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    getStarships() {
       this.Api.getStarships()
       .then(response => {
         this.starships = response.results;
         this.total = response.count;
         this.next = response.next;
         this.previous = response.previous;
         this.isLoad = false;
         if(this.starships.length > 0){
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
         console.error('Erro ao buscar naves:', error);
       });
    }

    paginate(url: string, page: number) {
      this.isLoad = true
      this.Api.paginate(url)
      .then(response => {
        this.starships = response.results;
        this.total = response.count;
        this.next = response.next;
        this.previous = response.previous;
        this.current += page;
        this.isLoad = false;
      })
      .catch(error => {
        console.error('Erro ao buscar naves:', error);
      });
   }

   getDetails(id: string){
    this.Api.getDetails(id)
    .then(response => {
      this.detail_starship = response
      console.log(this.detail_starship)
      this.isLoad = false;
      this.openDialog();
    })
    .catch(error => {
      console.error('Erro ao buscar naves:', error);
    })
    
   }


}
