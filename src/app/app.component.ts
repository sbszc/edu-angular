import { Component, Input } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user = new User('sbszcc', 'mydir 0-0', [111, 222])
  inputText = 'two way binding'

  constructor() {
  }
}
