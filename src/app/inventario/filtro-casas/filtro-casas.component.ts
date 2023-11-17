import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtro-casas',
  templateUrl: './filtro-casas.component.html',
  styleUrls: ['./filtro-casas.component.scss']
})
export class FiltroCasasComponent {

  @Input() mensaje: string = '';

}
