import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { BlankpageComponent } from './Page/blankpage/blankpage.component';
import { Test1Component } from './Page/test1/test1.component';
import { Test2Component } from './Page/test2/test2.component';
import { HomeComponent } from './Page/home/home.component';
import { LoginComponent } from './Page/login/login.component';
import { RegisterComponent } from './Page/register/register.component';
import { SplashscreenComponent } from './Page/splashscreen/splashscreen.component';
import { ClaimDocumentComponent } from './Page/ClaimDocument/ClaimDocument.component';

export const appRoutes: Routes = [
    {path: '', component: LoginComponent},

    // {path: 'test',
    // component: Test1Component,
    // children: [
    //   {
    //     path: '',
    //     component: Test2Component
    //   },
    //   {
    //     path: ':id',
    //     component: BlankpageComponent
    //   }
    // ]},
    {path: 'home/:usercode', component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuardService], children: [
      {path: 'register', component: RegisterComponent, outlet: 'detailroute'},
      {path: 'ClaimDocument', component: ClaimDocumentComponent, outlet: 'detailroute'},
    ]},
    {path: 'blank', component: BlankpageComponent},
    {path: '**', redirectTo: 'blank', pathMatch: 'full'},
];
