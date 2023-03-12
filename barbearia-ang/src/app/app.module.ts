import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ContatoComponent } from './componentes/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
