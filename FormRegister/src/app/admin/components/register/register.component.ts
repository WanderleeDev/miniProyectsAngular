import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//  interface
import { IRegister } from 'src/app/interface/IRegister.interface';
import { IPersonalDataDto } from 'src/app/interface/IPersonalDta.interface';
//  services
import { UserService } from 'src/app/services/user.service';
import { DataUserService } from 'src/app/services/data-user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  myForm: FormGroup = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7)]],
  });

  constructor (
    private user : UserService,
    private router: Router,
    private fb: FormBuilder,
    private localStorageSvc: LocalStorageService,
    private dataUserSvc: DataUserService
  ) { }

  async registerUser () {
    try {
      const dataForm = this.obtainData();

      if (dataForm === false) {
        console.log(dataForm);

        throw new Error('Datos incompletos');
      } else {
        const newUser = await this.user.register(dataForm);
        this.localStorageSvc.saveLocalStorage('dataUser',dataForm);
        const updateData: IPersonalDataDto = dataForm as IPersonalDataDto
        this.dataUserSvc.updatePersonalData(updateData);
        
        console.log(newUser);
        this.router.navigate(['login']);
      }

    } catch (err) {
      console.log(`Ha ocurrido un error: ${err}`);
    }
  }

  private obtainData (): IRegister | false {
    const dataNewUser:IRegister = this.myForm.value;

    for (const data in dataNewUser) {
      if (!dataNewUser[data]) {
        return false;
      }
    }

    return dataNewUser
  }
}
