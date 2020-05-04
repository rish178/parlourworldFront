import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  public registerController:boolean
  constructor() { }

  changeToLogin(){
    this.registerController=true;
  }

  changeToSignup(){

    this.registerController=false;
  }
}
