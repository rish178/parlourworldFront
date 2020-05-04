import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import {NavController, NavParams} from '@ionic/angular';
import {ApiUrlService} from '../api-url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  username:string = "";
  password:string = "";
  registerResponseData:Observable<Object>;


  constructor(private formBuilder : FormBuilder , public nav: NavParams,
    public common:CommonServiceService , private apiService:ApiUrlService, private http : HttpClient) { }

  data = this.nav.get("registerFlag");
  
  ngOnInit() {
    if(this.data==1)
    { 
      this.common.changeToSignup();
    }
    else
    {
      this.common.changeToLogin();
    }
  }

  loginForm = this.formBuilder.group({
    email: ['',[Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
      password:["", [Validators.required]]
  })
  
  registrationForm = this.formBuilder.group({
    name: this.formBuilder.group({
      firstName:"",
      lastName : ""
    }),
    email: ['',[Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
    password:["" , [Validators.required]],
    mobile: ['', [Validators.required,
    Validators.maxLength(10)
]],
      // address: this.formBuilder.group({
      //   street: [''],
      //   city: [''],
      //   state: [''],
      //   zip: ['']
      // })
  })
  public submit() {
    console.log(this.registrationForm.value);
    const apiUrl = this.apiService.getUrl('/user');
    console.log(apiUrl);
    
    this.registerResponseData = this.http.post(apiUrl,this.registrationForm.value);
    this.registerResponseData.subscribe(data=>{
      console.log(data);
      
    })
    
  }  

  public login(){

    console.log(this.loginForm.value);
    
    const apiUrl = this.apiService.getUrl('/users/login');
    console.log(apiUrl);
    
    this.registerResponseData = this.http.post(apiUrl,this.loginForm.value);
    this.registerResponseData.subscribe(data=>{
      console.log(data);
      
    })

  }
  get firstName() {
    return this.registrationForm.get("name.firstName");
  }
  get lastName() {
    return this.registrationForm.get("name.lastName");
  }
  get email() {
    return this.registrationForm.get("email");
  }
  get mobile() {
    return this.registrationForm.get('mobile');
  }
  get street() {
    return this.registrationForm.get('address.street');
  }
  get city() {
    return this.registrationForm.get('address.city');
  }
  get state() {
    return this.registrationForm.get('address.state');
  }
  get zip() {
    return this.registrationForm.get('address.zip');
  }
  
  
  public errorMessages = {
    firstName: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    lastName:[
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    phone: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' },
      {type: 'maxlength',message:"Please enter 10 digits of your mobile number"}
    ],
    street: [
      { type: 'required', message: 'Street name is required' },
      {
        type: 'maxlength',
        message: 'Street name cant be longer than 100 characters'
      }
    ],
    city: [
      { type: 'required', message: 'City name is required' },
      {
        type: 'maxlength',
        message: 'City name cant be longer than 100 characters'
      }
    ],
    state: [
      { type: 'required', message: 'State is required' },
      {
        type: 'maxlength',
        message: 'State cant be longer than 100 characters'
      }
    ],
    zip: [
      { type: 'required', message: 'Zip code is required' },
      {
        type: 'pattern',
        message: 'Please enter a valid zip code'
      }
    ]
  };
  goToSignUp(){
    this.common.changeToSignup();
  }

}
