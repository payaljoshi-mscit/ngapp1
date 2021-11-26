import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  s2="Hello";
  num1 :number=225;
  n1 :number=200;
  a: number = 0.259;
  b: number = 1.3495;
  collection: string[] = ['a', 'b', 'c', 'd'];
  str: string = 'abcdefghij';

  a1=["e1","e2","e3"];
  b1 :boolean=true;
  constructor() { }
  f1() 
  {
    alert("Hello");
  }
  ngOnInit(): void {
  }

}
