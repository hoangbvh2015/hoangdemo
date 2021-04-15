import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './compoment/sidebar/sidebar.component';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compoment/header/header.component';
import { FooterComponent } from './compoment/footer/footer.component';

const routes : Routes=[
  {path:'main' , loadChildren: ('./main/main.module#MainModule')}
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
