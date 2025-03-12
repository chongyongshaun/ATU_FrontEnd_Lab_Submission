import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonButton,IonBackButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LeinsterPage implements OnInit {
  constructor(private router: Router) { }

  openCountiesPage() {
    this.router.navigate(['/leinster-counties']);
  }

  ngOnInit() {
  }

}
