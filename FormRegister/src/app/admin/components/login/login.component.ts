import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//  interfaces
import { IRegister } from 'src/app/interface/IRegister.interface';
//  service
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  constructor (
    private fb: FormBuilder,
    private user: UserService,
    private route: Router
  ) {}

  async loginUser(){
    try {
      console.log(this.formLogin.value);
      const prevData: IRegister = this.formLogin.value as IRegister;
      await this.user.login(prevData)
      this.route.navigate(['main'])

    } catch (err) {
      console.error(`Ha ocurrido un error a intentar ingresar: ${err}`);
    }
  }
}
