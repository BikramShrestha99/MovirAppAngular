import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Auth/login/auth-services/auth-service.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth-guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupUsers:any[]=[];
  signupObj:any={
    UserName:'',
    Email:'',
    Password:'',
    FirstName:'',
    LastName:''
   
  }
  loginObj:any={
    Email:'',
    Password:''
  }
  constructor(private authService:AuthServiceService ,public authguardService:AuthService,
    private route:Router,
    private toastr: ToastrService){ }
  ngOnInit(): void {
    const localData= localStorage.getItem('signUpUsers');
    debugger
    if(localData!=null)
    {
      this.signupUsers=JSON.parse(localData);
    }
  }
  formSubmitted: boolean = false;

  validateForm(): boolean {
    if (!this.signupObj.Email || !this.signupObj.Password || !this.signupObj.ConfirmPassword || 
    !this.signupObj.FirstName ||!this.signupObj.LastName || !this.signupObj.ConfirmPassword) {
      return false;
    }

    if (this.signupObj.Password !== this.signupObj.ConfirmPassword) {
      return false;
    }

    return true;
  }


  onSignUp() {
    debugger
    if (this.validateForm()) {
    this.authService.onSignUp(this.signupObj).subscribe((res: any) => {
      console.log('res', res);
      // this.signupObj = {
      //   // UserName: '',
      //   // Email: '',
      //   // Password: '',
      //   // FirstName:'',
      //   // LastName:''
      // };
      this.formSubmitted = true;
    });
  }
  }

  xonLogin():void{ 
    this.authguardService.authenticate();
    this.authService.onLogin(this.loginObj).subscribe((res:any)=>{
      console.log('res',res)
      localStorage.setItem('token',res.token);
      this.route.navigateByUrl('/home/dashboard')
      setTimeout(() => {
        localStorage.removeItem('token');
        console.log('Token has expired and removed.');
        this.route.navigateByUrl('');
      }, 2400000 );  
    })
  }
}

  // formGroup!: FormGroup;
  // constructor(private authService: AuthServiceService ){}
  // ngOnInit() { 
  //   this.initForm;
  // }
  // initForm(){
  //   this.formGroup=new FormGroup({
  //     email: new FormControl('',[Validators.required]),
  //     Password: new FormControl('',[Validators.required])
  //   })
  // }
  // loginProcess(){
  //   if(this.formGroup.valid){
  //     this.authService.login(this.formGroup.value).subscribe((result=>{
  //       if(result.success){
  //         console.log("Done it");     
  //       }
  //       else{
  //         console.log(" error"); 
  //       }
  //     }))
  //   }
  // }


