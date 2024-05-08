import { Injectable } from '@angular/core';
import { AuthModule } from '../models/auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: AuthModule[] = [

    new AuthModule(
      1,
      'Joao Lopes',
      'JP',
      '1234'
    ),
    new AuthModule(
      2,
      'User test',
      'test',
      'qwerty'
    ),

  ]

  session: any;

  constructor() { }

  login(username: string, password: string)  {

    let user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user){
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session))
    }

    return user;
  }
}
