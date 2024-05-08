import { AppComponent } from './../app.component';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

    constructor(private authService: AuthService, private fb: FormBuilder, private _snackBar: MatSnackBar, 
              private route: ActivatedRoute, private router: Router, private appComp: AppComponent){}
  
  login(){

    let user = this.authService.login(
      this.form.value.username,
      this.form.value.password
    );
    
    if (!user){
      this._snackBar.open("Error! Invalid username or password.", "Close!");      
    }
    else
    {
      this.appComp.userLog = user.name;
      this.appComp.userId = user.id;      
      this._snackBar.open("Success!", "Close!"); 
      this.router.navigate(['/home'], {relativeTo: this.route});      
    }

  }

}
