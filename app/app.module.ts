import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopnavComponent } from './my-container/topnav/topnav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { TextSec1Component } from './my-container/text-sec1/text-sec1.component';
import { TextSec2Component } from './my-container/text-sec2/text-sec2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import{FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { TvComponent } from './product/tv/tv.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule , Routes} from '@angular/router';
import { LaptopComponent } from './product/laptop/laptop.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CardComponent } from './card/card.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ParentComponent } from './parent/parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { Card2Component } from './card2/card2.component';
import { DesginutlityService } from './appServices/desginutlity.service';
import {HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { ContactComponent } from './contact/contact.component';
import { UxPipe } from './appPipes/ux.pipe';
import { FilterPipe } from './appPipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login", component:LoginPageComponent},
  {path:"about", component:AboutComponent},
  {path:'buy-products',component:ParentComponent},
  {path:'contact',component:ContactComponent},
  {path:"product",children:[
    {path:'',component:ProductComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    {path:'mobile',component:MobileComponent}
  ]}
  
]

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    TextSec1Component,
    TextSec2Component,
    LoginPageComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    LaptopComponent,
    TvComponent,
    MobileComponent,
    NgForComponent,
    CardComponent,
    BuyProductComponent,
    ParentComponent,
    ChildComponent,
    Card2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ContactComponent,
    UxPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterTestingModule ,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule 

  ],
  providers: [DesginutlityService],
  bootstrap: [AppComponent],
  exports:[RouterModule],
  schemas:   [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
export const RoutingComponent =[LoginPageComponent]


