import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductComponent } from "./product.component";

const router : Routes = [ 
    {
        path : '', component: ProductComponent
    },
    {
        path : ':id', component: ProductDetailComponent
    }
]
@NgModule({
    providers: [],
    imports: [
        RouterModule.forChild(router)
    ],
    declarations: [ProductComponent , ProductDetailComponent],
})
export class ProductModule {}
 
