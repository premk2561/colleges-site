import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { CollegedetailsComponent } from './collegedetails/collegedetails.component';
import { CollegelistComponent } from './collegelist/collegelist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"college",component:CollegelistComponent},
  {path:"cards2",component:CardsComponent},
  {path:"about",component:AboutComponent},
  {path:"college/:id",component:CollegedetailsComponent},
  {path: 'cards', loadChildren: () => import('./card/card.module').then(m => m.CardModule) },
  {path:'', redirectTo:'home', pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
