import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import Home from './Components/home/home.component';
import { FilmesComponent } from './Components/filmes/filmes.component';
import { NaveComponent } from './Components/nave/nave.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'naves', component: NaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
