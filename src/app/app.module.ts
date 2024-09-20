import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './nav-bar/search-bar/search-bar.component'; 
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { ShopByCategoriesComponent } from './home-page/shop-by-categories/shop-by-categories.component';
import { FooterComponent } from './footer/footer.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ClientTestimonialsComponent } from './home-page/client-testimonials/client-testimonials.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { PopularProductsComponent } from './home-page/popular-products/popular-products.component';
import { OtherProductsComponent } from './home-page/other-products/other-products.component';
import { TimesPipe } from './pipes/times.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsListComponent } from './products-list/products-list.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        NavBarComponent,
        SearchBarComponent,
        CarouselComponent,
        ShopByCategoriesComponent,
        FooterComponent,
        ProductThumbnailComponent,
        ClientTestimonialsComponent,
        BannerComponent,
        PopularProductsComponent,
        OtherProductsComponent,
        TimesPipe,
        ProductsListComponent,
        NavigationHeaderComponent,
        ProductDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
}) export class AppModule { }
