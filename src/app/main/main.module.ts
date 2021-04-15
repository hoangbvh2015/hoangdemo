import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./login/signup/signup.component";

const router: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'signup' , component: SignupComponent},
    { path : 'product', loadChildren: "./product/product.module#ProductModule"}

]

@NgModule({
    declarations:[HomeComponent, LoginComponent , SignupComponent ],
    imports:[
         RouterModule.forChild(router),
         FormsModule,
         ReactiveFormsModule,
         CommonModule
        ],
    providers:[]
})
export class  MainModule {}