import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarProfileComponent } from './car-profile/car-profile.component';
import { CarInquiryComponent } from './car-inquiry/car-inquiry.component';
import { HttpClientModule } from '@angular/common/http';
import { ResolverComponent } from './resolver/resolver.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ResolveService } from './resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent,
    CarProfileComponent,
    CarInquiryComponent,
    ResolverComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'', component: DashboardComponent, resolve:{
        data:ResolveService
      }
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
