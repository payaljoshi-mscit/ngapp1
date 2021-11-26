import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { ChatformComponent } from './chatform/chatform.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RformComponent } from './rform/rform.component';
import { TempformComponent } from './tempform/tempform.component';
import { BookComponent } from './book/book.component';
const routes: Routes = [
  {path:"bookform", component: BookComponent },
  {path:"rform", component: RformComponent },
  {path:"tempform", component: TempformComponent },
  {path:"chatform", component: ChatformComponent },
  {path:"heroes", component:HeroesComponent },
  {path:"comp1", component: C1Component },
  {path:"comp2", component: C2Component },
  {path: "", redirectTo: '/comp2', pathMatch: "full"}, //when blank
  {path: '**', component: C2Component } //when invalid
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
