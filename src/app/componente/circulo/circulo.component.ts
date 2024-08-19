import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Circulo } from 'src/app/clases/figuras';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class CirculoComponent {
  txtRadio: number | null = null;
  perimetro: number = 0;
  circulo = new Circulo("circulo", 0);

  constructor() { }

  calcularPerimetro() {
    if (this.txtRadio !== null && !isNaN(this.txtRadio)) {
      this.circulo.radio = this.txtRadio;
      this.perimetro = this.circulo.calcularPerimetro();
    } else {
      this.perimetro = 0; // en caso de error del ingeso
    }
  }

  perimetroValida(): boolean {
    return this.perimetro > 0;
  }
}
