import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public userShowName: string;

  constructor(private appComponent: AppComponent, private router: Router) { 
    this.userShowName = this.appComponent.userLog;
  }

  ngOnInit (){
    this.router.events.subscribe(()=>{
      this.userShowName = this.appComponent.userLog;
    });
    
  }
 
}
