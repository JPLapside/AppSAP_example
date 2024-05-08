import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  imagePath = "https://t4.ftcdn.net/jpg/04/54/09/83/360_F_454098330_toMElDiHxJKhtkJuKzlKzcxNeSmAmGum.jpg";

  public isUserLog: number;

  constructor(private appComponent: AppComponent, private route: ActivatedRoute, private router: Router) {
    this.isUserLog = this.appComponent.userId;
  }

  ngOnInit (){
    this.router.events.subscribe(()=>{
      this.isUserLog = this.appComponent.userId;
    });
    
  }

  logout(){
    this.appComponent.userId = 0;
    this.appComponent.userLog = '';
    this.isUserLog = this.appComponent.userId;
    this.router.navigate(['/home'], {relativeTo: this.route});
  }
}
