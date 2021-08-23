import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  firstName = 'sange';
  constructor(private appService: AppService){

  }
  handleClick() {
    this.appService.save();
    console.log(this.firstName);
  }

  delete() {
    console.log("deleted")
  }
  
}
