import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { ModelsComponent } from './models/models.component';
import { DetailsComponent } from './details/details.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const AppRoutes: Routes = [{ path: '', component: BrandsComponent },
{ path: 'models', component: ModelsComponent },
{ path: 'details/:id', component: DetailsComponent },
{ path: 'cart', component: CartComponent }];

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    ModelsComponent,
    DetailsComponent,
    NavComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
