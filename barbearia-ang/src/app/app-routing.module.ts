import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './componentes/contato/contato.component';
import { HomeComponent } from './componentes/home/home.component';
import { ModalComponent } from './componentes/modal/modal.component';
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
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
