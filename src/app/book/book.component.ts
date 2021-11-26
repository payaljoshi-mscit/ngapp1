import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  angForm: FormGroup;


  //constructor( ) 
  constructor(private fb: FormBuilder) 
  {
    // this.angForm=new FormGroup({
    //   name: new FormControl("",Validators.required),
    //   price: new FormControl("",Validators.required),
    //   quantity: new FormControl("",Validators.required)
    // });
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
      quantity: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
  }
  onsubmit(name :any,price :any,quantity :any)
  {
    alert("hi "+this.angForm.value.name )
  }

}