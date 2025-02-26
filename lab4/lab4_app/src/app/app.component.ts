import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ListcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4_app';
  count = 0;
  showStarText = false;
  increment() {
    this.count++;
  }
  onStarDblClick() {
    this.showStarText = !this.showStarText
  }

}
