import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

const routes: Routes = [
    {
      path: 'users',
      component: LoginComponent,
    }
    
  ];
@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
  })
  export class LoginModule { }