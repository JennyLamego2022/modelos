import { ModalModule } from './componentes/modal/modal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    ContatoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    FormsModule

  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
