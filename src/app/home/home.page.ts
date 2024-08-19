import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton, IonItem, IonLabel, IonInput, IonText } from '@ionic/angular/standalone';
import { CirculoComponent } from '../componente/circulo/circulo.component';
import { TrianguloComponent } from '../componente/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonInput, IonLabel, IonItem, IonButton, IonImg, IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent],
})
export class HomePage {
  constructor() {}
}
