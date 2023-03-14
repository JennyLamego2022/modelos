import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './componentes/contato/contato.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'contatos',
    component: ContatoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
