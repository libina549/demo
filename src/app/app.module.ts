import { TemplateFormComponent } from './template-form/template-form.component';
import { ServicedemoService } from './servicedemo.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ModifyDirective } from './modify.directive';
import { SquarePipe } from './square.pipe';
import { ProductComponent } from './product/product.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';







@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModifyDirective,
    SquarePipe,
    ProductComponent,
    BodyComponent,
    TemplateFormComponent,
    ReactiveFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    


  

   
  ],
  providers: [ServicedemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
