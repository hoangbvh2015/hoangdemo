import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home';
import { HomeEditComponent } from './main/homedetail/home-edit.component';
import { AuthGuard } from './_guards/auth.guard';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
        
     {path:'home/:id',component:HomeEditComponent},
        
    
    { path: '', redirectTo: 'login' ,pathMatch: 'full'},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);