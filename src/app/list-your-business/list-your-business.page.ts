import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormControl , FormArray, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import {PopoverComponent } from '../components/popover/popover.component';
import {ApiUrlService} from '../api-url.service';
@Component({
  selector: 'app-list-your-business',
  templateUrl: './list-your-business.page.html',
  styleUrls: ['./list-your-business.page.scss'],
})
export class ListYourBusinessPage implements OnInit {

  salonRegisterResponse:Observable<object> ; 
  time:any=""
  timingsData:any= ["12:00 Am","12:30 Am","1:00 Am","1:30 Am","2:00 Am","2:30 Am",
  "3:00 Am","3:30 Am","4:00 Am","4:30 Am","5:00 Am","5:30 Am",
  "6:00 Am","6:30 Am","7:00 Am","7:30 Am","8:00 Am","8:30 Am",
  "9:00 Am","9:30 Am","10:00 Am","10:30 Am","11:00 Am","11:30 Am",
  "12:00 Pm","12:30 Pm","1:00 Pm","1:30 Pm","2:00 Pm","2:30 Pm",
  "3:00 Pm","3:30 Pm","4:00 Pm","4:30 Pm","5:00 Pm","5:30 Pm",
  "6:00 Pm","6:30 Pm","7:00 Pm","7:30 Pm","8:00 Pm","8:30 Pm",
  "9:00 Pm","9:30 Pm","10:00 Pm","10:30 Pm","11:00 Pm","11:30 Pm"]
  servicesArr:any = [
    {
      name:"Hair Spa",
      value:"Hair Spa"
    },
   
    {
      name: "Facial",
      value:"Facial",
    },
    {
      name: "Waxing",
      value:"Waxing",
    },
    {
      name:"Mani/Pedi",
      value:"Mani/Pedi",
    },
    {
      name:"Hair color",
      value:"Hair color",
    },
    {
      name:"Make Up",
      value:"Make Up",
    },
    {
      name:"Hair Straightening",
      value:"Hair Straightening",
    },
    {
      name:"Haircut",
      value:"Haircut",
    },
    {
      name:"Shave",
      value:"Shave",
    },
]
timings = [
  {
    day:"monday",
    open:"",
    close:""
  },
  {
    day:"tuesday",
    open:"",
    close:""
  },
  {
    day:"wednesday",
    open:"",
    close:""
  },
  {
    day:"thursday",
    open:"",
    close:""
  },
  {
    day:"friday",
    open:"",
    close:""
  },
  {
    day:"saturday",
    open:"",
    close:""
  },
  {
    day:"sunday",
    open:"",
    close:""
  },
]
  constructor(private formBuilder : FormBuilder,private http : HttpClient , public popoverController: PopoverController,
    private apiService:ApiUrlService) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
 



   salonRegistration = this.formBuilder.group({
    mobile: ['', [Validators.required,
      Validators.maxLength(10)]],
    salon_title: ['',Validators.required],
    salon_description:['',Validators.required],
    email: ['',[Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
  
      address: this.formBuilder.group({
        state: [''],
        city: [''],
        street: [''],
        zip: ['']
      }),

      category:['',[Validators.required]],
      services_offered: this.formBuilder.array([], [Validators.required]),
      timings: this.createTiming(this.timings),
    
         
  });
  onCheckboxChange(e) {
    
  const serviceSelected: FormArray = this.salonRegistration.get('services_offered') as FormArray;
  console.log( serviceSelected);
  
  if (e.target.checked) {
    serviceSelected.push(new FormControl(e.target.value));
  } else {
     const index = serviceSelected.controls.findIndex(x => x.value === e.target.value);
     
     serviceSelected.removeAt(index);
  }
 }
  public createTiming(timings){
    const arr = timings.map(time=>{
      return this.formBuilder.group(time)
    })
    return new FormArray(arr);
  }
  
  public createServices(servicesinput){
     const arr = servicesinput.map(service=>{
       return new FormControl()
     })
     return new FormArray(arr);

  }
  public submit() {
   

    
 
    console.log(this.salonRegistration.value);
    
    const apiUrl = this.apiService.getUrl('/salon/add');
    console.log(apiUrl);
    
    this.salonRegisterResponse = this.http.post(apiUrl,this.salonRegistration.value);
    this.salonRegisterResponse.subscribe(data=>{
      console.log(data);
      
    })
    
  }  

  get service_offered(){
    return this.salonRegistration.get('services_offered')
  }
  get salon_title() {
    return this.salonRegistration.get("salon_title");
  }

  get email() {
    return this.salonRegistration.get("email");
  }
  get mobile() {
    return this.salonRegistration.get('mobile');
  }
  get street() {
    return this.salonRegistration.get('address.street');
  }
  get city() {
    return this.salonRegistration.get('address.city');
  }
  get state() {
    return this.salonRegistration.get('address.state');
  }
  get zip() {
    return this.salonRegistration.get('address.zip');
  }
  
  
  public errorMessages = {
    salon_title: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
    ],
   
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    mobile: [
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

}
