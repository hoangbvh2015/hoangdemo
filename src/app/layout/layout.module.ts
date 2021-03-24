import { NgModule } from '@angular/core';
import { SideBarModule } from './side-bar/side-bar.module';
import { ToolbarModule } from './tool-bar/tool-bar.module';



@NgModule({
    imports: [
        ToolbarModule,
        SideBarModule
    ],
    exports: [
        
    ]
})
export class LayoutModule
{
}
