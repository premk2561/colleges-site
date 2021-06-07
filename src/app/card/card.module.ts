import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class CardModule { }
