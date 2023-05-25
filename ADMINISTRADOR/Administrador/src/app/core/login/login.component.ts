import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  url = 'http://localhost:4200'
  login = false
  token = ''

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userService: ServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  usuario : User = {
    username: '',
    password: ''
  }
  username:string = ''
  password:string = ''

  onSubmit(){
    this.userService.authentication(new User(this.username, this.password)).subscribe(data => {
      this.login = false
      localStorage.setItem('IdAministrador', data);
      this.router.navigate(['/home'])
    }),(error:any) => {
      console.log(error)
    }
    this.login = true
  }
}