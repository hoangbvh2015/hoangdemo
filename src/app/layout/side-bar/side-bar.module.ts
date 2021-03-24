import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar.component';


@NgModule({
    declarations: [
        SideBarComponent
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        SideBarComponent
    ]
})
export class SideBarModule {
}
