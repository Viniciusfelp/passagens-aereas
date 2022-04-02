import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formularioLogin: FormGroup = new FormGroup({
    'cpf': new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
    'senha': new FormControl({ value: '', disabled: false},  [Validators.required])
  });

  public formularioCadastro: FormGroup = new FormGroup({
    'nome': new FormControl({ value: '', disabled: false }, [Validators.required]),
    'email': new FormControl({ value: '', disabled: false}, [Validators.required, Validators.email]),
    'senha': new FormControl({ value: '', disabled: false}, [Validators.required, Validators.minLength(8)]),
    'cpf': new FormControl({ value: '', disabled: false}, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
    'telefone': new FormControl({values: '', disabled: false}, [Validators.required])
  });


  constructor() { }

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

  public login(): void{
    if(!this.formularioLogin.valid){
      this.formularioLogin.get('cpf')?.markAsTouched();
      this.formularioLogin.get('senha')?.markAsTouched();
    }else{
      //logica login
    }
  }

  public cadastro(): void{
    if(!this.formularioCadastro.valid){
      this.formularioCadastro.get('nome')?.markAsTouched();
      this.formularioCadastro.get('cpf')?.markAsTouched();
      this.formularioCadastro.get('email')?.markAsTouched();
      this.formularioCadastro.get('senha')?.markAsTouched();
      this.formularioCadastro.get('telefone')?.markAsTouched();
    }else{
      //logica cadastro
    }
  }


}