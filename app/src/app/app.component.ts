import { Component } from '@angular/core';
import {PromocaoService} from "./services/promocao.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private promocaoService : PromocaoService) {

  }
  criarPromocao($event: any) {
    this.promocaoService.adicionar($event);
  }
}
