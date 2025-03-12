import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //add imports here for the ionic stuff
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, IonImg],
})
export class HomePage {
  constructor() {}
}
