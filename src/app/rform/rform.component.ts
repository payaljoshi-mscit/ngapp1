import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import ReactiveFormsModule from @angular/forms in app.module.js 
// and add ReactiveFormsModule in imports array
@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  userform :FormGroup;
  constructor() { 
    this.userform=new FormGroup({
    username: new FormControl('',Validators.required),
    email: new FormControl('',Validators.compose([Validators.required,Validators.email]))
  });
}

  ngOnInit(): void {    
  }
  submit() :void{
    console.log(this.userform);
    alert(this.userform.value.email);
  }
}