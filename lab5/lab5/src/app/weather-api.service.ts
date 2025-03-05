import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  // This is the constructor for the WeatherApiService class
  constructor(private http: HttpClient) {

   }
   // This function is used to get the weather data from the API
  getWeather() {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=46b3c391234673b64fb7cdaf7e60dde7"
    return this.http.get(url);
  }
}
