import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppSAP Example';
  
  public userLog: string;
  public userId: number;

  constructor() { 
    this.userLog = '';
    this.userId = 0;
  }
}
