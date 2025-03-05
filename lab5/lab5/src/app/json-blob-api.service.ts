import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonBlobApiService {
  // This is the constructor for the JsonBlobApiService class
  constructor(private http: HttpClient) { 
  }
  // This function is used to get the data from the API
  fetchData() {
    const url = "https://jsonblob.com/api/jsonblob/1336347674273832960";
    return this.http.get(url);
  }
}
