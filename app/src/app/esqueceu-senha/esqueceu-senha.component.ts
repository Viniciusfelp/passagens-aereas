import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl({ value: '', disabled: false}, [Validators.required, Validators.email])
  });

  constructor() { }

  ngOnInit(): void {
  }

  recuperar(): void{
    if(!this.formulario.valid){
      this.formulario.get('email')?.markAsTouched();
    }else{
      //logica login
    }
  }

}
