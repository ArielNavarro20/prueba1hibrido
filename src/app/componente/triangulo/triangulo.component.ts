// triangulo.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class TrianguloComponent {
  ladoA: number | null = null;
  ladoB: number | null = null;
  ladoC: number | null = null;
  perimetro: number = 0;
  area: number = 0;

  constructor() { }

  calcularDatos() {
    if (this.ladoA !== null && this.ladoB !== null && this.ladoC !== null &&
        !isNaN(this.ladoA) && !isNaN(this.ladoB) && !isNaN(this.ladoC) &&
        this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0) {
        
      this.perimetro = this.ladoA + this.ladoB + this.ladoC;

      // Fórmula 
      const s = this.perimetro / 2;
      this.area = Math.sqrt(s * (s - this.ladoA) * (s - this.ladoB) * (s - this.ladoC));
    } else {
      this.perimetro = 0;
      this.area = 0;
    }
  }

  datosValido(): boolean {
    return this.perimetro > 0 && this.area > 0;
  }
};
