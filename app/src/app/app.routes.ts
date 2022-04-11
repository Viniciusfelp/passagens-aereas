import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './login/login.component';
import { CheckInComponent} from './check-in/check-in.component';

export const ROUTES: Routes = [
    //{ path: '', component: HomeComponent },
    { path: 'check-in', component: CheckInComponent },
    { path: 'recuperar-senha', component: EsqueceuSenhaComponent },
    { path: 'login', component: LoginComponent },

];