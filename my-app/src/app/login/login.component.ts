import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
import { MustMatch } from '../../helper/must-match.validator';
import { UsersService } from '../../services/users.service';
import { CommonService } from '../../services/common.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 	registerForm: FormGroup;
	loginForm: FormGroup;
    submitted = false;
    submittedLogin = false;
    allUsers : any;
    found = true;
  constructor(private formBuilder: FormBuilder,private usersService: UsersService,private  commonService: CommonService, private router: Router) { }

  ngOnInit() {
  	
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  
  }

 

    onLogin() {
        this.submittedLogin = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // display form values on success
        this.usersService.getDetail(this.loginForm.value.username)
	    .subscribe(data => {
	    	this.allUsers = data["response"];
	    	setTimeout(()=>{
			    if(this.allUsers != undefined && this.allUsers != null && this.allUsers != "")
			    {
			    	
			    	if(this.allUsers[0]["user_name"] == this.loginForm.value.username && this.allUsers[0]["user_password"] == this.loginForm.value.password)
			    		{
			    			this.found = true;
			    			this.commonService.set(this.allUsers[0]);
			    					    			
			    		}
			    		else
			    		{
			    			this.found = false;
			    		}
			    }
	    	},300);
		    
	    });
        // console.log(this.usersService.get());
    }

    get f() { return this.loginForm.controls; }


}
