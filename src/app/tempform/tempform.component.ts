import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  onsubmit(data :any) :void
  {
    console.log(data);
    alert(data.username.length +"   "+data.email);
  }

}
