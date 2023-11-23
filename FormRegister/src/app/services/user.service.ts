import { Injectable } from '@angular/core';
import { Auth, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth'
import { IRegister } from '../interface/IRegister.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth: Auth
  ) { }

  register ({ email, password }:IRegister): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login({ email, password }:IRegister): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password)
  }
}
