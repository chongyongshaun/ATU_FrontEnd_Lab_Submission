import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import WeatherData from './weatherDataType';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
// oninit is a lifecycle hook that is called after angular has initialized all data-bound properties of a directive
export class WeatherComponent implements OnInit {
  constructor(private weatherApiService: WeatherApiService) { }
  //create a weatherdata type to keep ts happy
  weatherData : WeatherData = {} as WeatherData;
  // get the weather data from the api
  ngOnInit(): void {
    this.weatherApiService.getWeather().subscribe((data : any) => {
      this.weatherData = data;
    });
  }

}


