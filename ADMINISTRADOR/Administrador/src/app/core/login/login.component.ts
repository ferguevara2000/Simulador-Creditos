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
  login = false
  token = ''
  datos = 'No'

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
      const admin = data
      const id = admin.id
      const keys = Object.keys(admin)
      localStorage.setItem('IdAministrador', data);
      console.log(admin)
      if(keys.length > 0){
        this.router.navigate(['/home'])
      }
    }),(error:any) => {
      console.log(error)
    }
    if(this.datos == 'No'){
      this.login = true
    }
  }
}