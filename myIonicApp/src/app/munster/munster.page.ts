import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-munster',
  templateUrl: './munster.page.html',
  styleUrls: ['./munster.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBackButton]
})
export class MunsterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
