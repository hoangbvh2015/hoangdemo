import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form : FormGroup;

  constructor( private formBuilder : FormBuilder) { 
    this.form = formBuilder.group( {
      email : ['', [Validators.required, Validators.email]],
      password : ['',Validators.required]
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    if(!this.form.valid){
      (<any>Object).values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return true;
    }
  }

}
