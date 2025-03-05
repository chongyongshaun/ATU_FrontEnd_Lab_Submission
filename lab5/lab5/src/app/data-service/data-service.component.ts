import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JsonBlobApiService } from '../json-blob-api.service';

// create a student interface to store the data from the api, keep ts happy and get intellisense
interface Student {
  name: string;
  age: number;
  id: string;
  address: string;
  course: string;
}

@Component({
  selector: 'app-data-service',
  imports: [CommonModule],
  templateUrl: './data-service.component.html',
  styleUrl: './data-service.component.css'
})
export class DataServiceComponent implements OnInit {
  // create a student array to store the data from the api
  students : Student[] = [];
  
  constructor(private jsonBlobApiService: JsonBlobApiService) { }
  // get the data from the api and store it in the students array that exist in the object
  ngOnInit(): void {
    this.jsonBlobApiService.fetchData().subscribe((data : any) => {
      this.students = data.students;
    });
  }

}
