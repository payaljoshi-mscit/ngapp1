import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { SqrtPipe } from './sqrt.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ChatformComponent } from './chatform/chatform.component';
import { TempformComponent } from './tempform/tempform.component';
import { RformComponent } from './rform/rform.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    SqrtPipe,
    HeroesComponent,
    HeroDetailComponent,
    ChatformComponent,
    TempformComponent,
    RformComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
