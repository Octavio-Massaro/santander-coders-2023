import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecaoHamburguerComponent } from './secao-hamburguer/secao-hamburguer.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { SecaoDescricaoComponent } from './secao-descricao/secao-descricao.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SecaoHamburguerComponent,
    CardapioComponent,
    SecaoDescricaoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
