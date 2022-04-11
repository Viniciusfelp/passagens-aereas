import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CancelarVooComponent } from './cancelar-voo/cancelar-voo.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    //{ path: '', component: HomeComponent },
    
    { path: 'recuperar-senha', component: EsqueceuSenhaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cancelar-voo', component: CancelarVooComponent}

];