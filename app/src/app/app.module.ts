import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgxMaskModule } from 'ngx-mask';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { PagPromocaoComponent } from './pag-promocao/pag-promocao.component';
import { ExtratoPromocoesComponent } from './extrato-promocoes/extrato-promocoes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueceuSenhaComponent,
    NotificacaoComponent,
    PagPromocaoComponent,
    ExtratoPromocoesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
