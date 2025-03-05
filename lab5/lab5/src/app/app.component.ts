import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataServiceComponent } from './data-service/data-service.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataServiceComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab5';
}
