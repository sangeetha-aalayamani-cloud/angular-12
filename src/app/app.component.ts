import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  firstName = 'sange';
  handleClick() {
    console.log(this.firstName);
  }

  delete() {
    console.log("deleted")
  }
  
}
