import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent {
    public products: Product[] = [];
    public newProducts: Product[] = [];
    public bestSaleProducts: Product[] = [];
    public onSaleProducts: Product[] = [];

    constructor() {
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0));
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0));
        this.products.push(new Product("Long Earings Women", "https://i.postimg.cc/6QPb4JNX/13.jpg", 100.0));
        this.products.push(new Product("Dissent Collar Earings", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0));
        this.products.push(new Product("Long Earings Women", "https://i.postimg.cc/6QPb4JNX/13.jpg", 100.0));
        this.products.push(new Product("Dissent Collar Earings", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0));
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0));
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0));

        this.newProducts.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0, 4));
        this.newProducts.push(new Product("Diamon Band Ring", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0, 5));
        this.newProducts.push(new Product("Long Earings Women", "https://i.postimg.cc/6QPb4JNX/13.jpg", 100.0, 5));
        this.newProducts.push(new Product("Dissent Collar Earings", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0, 3));

        this.bestSaleProducts.push(new Product("Long Earings Women", "https://i.postimg.cc/6QPb4JNX/13.jpg", 100.0, 4));
        this.bestSaleProducts.push(new Product("Dissent Collar Earings", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0, 3));
        this.bestSaleProducts.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0, 2));
        this.bestSaleProducts.push(new Product("Diamon Band Ring", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0, 5));

        this.onSaleProducts.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0, 4));
        this.onSaleProducts.push(new Product("Long Earings Women", "https://i.postimg.cc/6QPb4JNX/13.jpg", 100.0, 3));
        this.onSaleProducts.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0, 2));
        this.onSaleProducts.push(new Product("Dissent Collar Earings", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0, 5));
    }
}
