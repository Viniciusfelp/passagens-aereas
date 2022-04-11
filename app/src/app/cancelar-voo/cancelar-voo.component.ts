import { Component, OnInit } from '@angular/core';
// import { Senha } from 'localOndeFicaraSenha';

@Component({
  selector: 'app-cancelar-voo',
  templateUrl: './cancelar-voo.component.html',
  styleUrls: ['./cancelar-voo.component.css']
})

export class CancelarVooComponent implements OnInit {
  campoSenha: string;

  constructor() { 
    this.campoSenha = "";
  }

  limparCampoSenha(){
    this.campoSenha = "";
  }

  ngOnInit(): void {
  }

  // senhaParaCancelar(senha: Senha): void {

  //}

}
