import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-services/auth-service.service';

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
   
  }
  loginObj:any={
    Email:'',
    Password:''
  }
  constructor(private authService:AuthServiceService ,private route:Router){ }
  ngOnInit(): void {
    const localData= localStorage.getItem('signUpUsers');
    debugger
    if(localData!=null)
    {
      this.signupUsers=JSON.parse(localData);
    }
    
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:'',
      email:'',
      password:'',
      
    };
  }
  onLogin(){
    debugger 
    this.authService.onLogin(this.loginObj).subscribe((res:any)=>{
      console.log('res',res)
      localStorage.setItem('token',res.token);
      this.route.navigateByUrl('/admin/categories')

    })
    // debugger
    // const isUserExist= this.signupUsers.find(m=>m.email==this.loginObj.email && m.password==this.loginObj.password);

    //    if(isUserExist!=undefined){
    //       alert('User Login Successfully');
    //    }else{
    //     alert('Wrong Email or PassWord');
    //    }

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

}
