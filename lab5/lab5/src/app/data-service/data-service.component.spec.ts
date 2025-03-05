import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ConfigService {
  constructor(private http: HttpClient) {
    let url = "https://jsonblob.com/api/jsonblob/1336347674273832960";
    this.http.get(url).subscribe((data) => {
      console.log(data);
    })
  }
}