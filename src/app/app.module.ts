import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorInterceptorProvider } from './services/error.interceptor';

import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './Page/home/home.component';
import { LoginComponent } from './Page/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { BlankpageComponent } from './Page/blankpage/blankpage.component';
import { Test1Component } from './Page/test1/test1.component';
import { Test2Component } from './Page/test2/test2.component';
import { SplashscreenComponent } from './Page/splashscreen/splashscreen.component';
import { RegisterComponent } from './Page/register/register.component';
import { ClaimDocumentComponent } from './Page/ClaimDocument/ClaimDocument.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      BlankpageComponent,
      Test1Component,
      Test2Component,
      SplashscreenComponent,
      RegisterComponent,
      ClaimDocumentComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ClarityModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
