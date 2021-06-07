import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CollegedetailsComponent } from './collegedetails/collegedetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { SearchPipe } from './search.pipe';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    CollegelistComponent,
    HomeComponent,
    CollegedetailsComponent,
    AboutusComponent,
    LoginComponent,
    CardsComponent,
    SearchPipe,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
