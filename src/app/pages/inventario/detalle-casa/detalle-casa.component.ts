import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Casa } from 'src/app/models/casa';

@Component({
  selector: 'app-detalle-casa',
  templateUrl: './detalle-casa.component.html',
  styleUrls: ['./detalle-casa.component.scss']
})
export class DetalleCasaComponent {

  @Input() casa: Casa | null = null;

  @Output() close: EventEmitter<void> = new EventEmitter();


  onCloseModal() {
    this.close.emit();
  }

}
