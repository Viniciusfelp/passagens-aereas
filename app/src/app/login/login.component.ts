import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDB } from 'src/app/services/user-db.service';
import { Autenticacao } from '../services/auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserDB]
})
export class LoginComponent implements OnInit {

  public formularioLogin: FormGroup = new FormGroup({
    'cpf': new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
    'senha': new FormControl({ value: '', disabled: false }, [Validators.required])
  });

  public formularioCadastro: FormGroup = new FormGroup({
    'nome': new FormControl({ value: '', disabled: false }, [Validators.required]),
    'email': new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
    'senha': new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(8)]),
    'cpf': new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
    'telefone': new FormControl({ values: '', disabled: false }, [Validators.required])
  });

  public btn_cadastro: boolean = false;
  public errorMessage: string = '';

  constructor(
    private userDB: UserDB,
    private autenticacao: Autenticacao
  ) { }

  ngOnInit(): void {
  }

  activeSingUp(): void {
    let container: any = document.getElementById('container');
    container.className = container.className.concat(" right-panel-active");
    this.formularioCadastro.reset();
  }

  activeSingIn(): void {
    let container: any = document.getElementById('container');
    container.className = container.className.replace(" right-panel-active", "");
    this.formularioLogin.reset();
  }

  public login(): void {
    if (!this.formularioLogin.valid) {
      this.formularioLogin.get('cpf')?.markAsTouched();
      this.formularioLogin.get('senha')?.markAsTouched();
    } else {
      let cpfOuEmail = this.formularioLogin.get('cpf')?.value.replace(/\D/g, '');
      let senha = this.formularioLogin.get('senha')?.value;
      this.autenticacao.autenticar(cpfOuEmail, senha);
    }
  }

  public cadastro(): void {
    if (!this.formularioCadastro.valid) {
      this.btn_cadastro = false;
      this.formularioCadastro.get('nome')?.markAsTouched();
      this.formularioCadastro.get('cpf')?.markAsTouched();
      this.formularioCadastro.get('email')?.markAsTouched();
      this.formularioCadastro.get('senha')?.markAsTouched();
      this.formularioCadastro.get('telefone')?.markAsTouched();
    } else {
      this.btn_cadastro = true;

      let user: User = new User();
      user.nome = this.formularioCadastro.get('nome')?.value;
      user.cpf = this.formularioCadastro.get('cpf')?.value.replace(/\D/g, '');
      user.email = this.formularioCadastro.get('email')?.value;
      user.senha = this.formularioCadastro.get('senha')?.value;
      user.telefone = this.formularioCadastro.get('telefone')?.value;

      this.userDB.cadastroUser(user)
        .then(() => {
          if(this.userDB.errorMessage === 'Firebase: Error (auth/email-already-in-use).'){
            this.errorMessage = "ERRO: Email já cadastrado";
          }else if (this.userDB.errorMessage === 'Firebase: Error (auth/invalid-email).'){
            this.errorMessage = "Formato de email inválido."
          }
        },
          (error: any) => console.log(error))
        
        .finally(()=>this.btn_cadastro=false);
    }
    
  }


}