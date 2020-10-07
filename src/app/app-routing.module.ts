import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path:'body',
    component:BodyComponent
  },
  {
    path:'nav',
    component:NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
