import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentbComponent } from './componentb/componentb.component';
import { NewComponentComponent } from './new-component/new-component.component';
//the imports name are from the class name of the comp being exported
@Component({
  selector: 'root-directive',
  //add the imports here because angular is a terrible framework
  imports: [RouterOutlet, ComponentbComponent,NewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vite-project';
  name = 'John Doe';
  age = 30;
}
