import { Component } from '@angular/core';
import { faList, faTableCells, faChevronDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
    public listIcon = faList;
    public gridIcon = faTableCells;
    public downArrowIcon = faChevronDown;
    public filterIcon = faFilter;

    public products: Product[] = [];

    constructor() {
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0));
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0));
        this.products.push(new Product("Long Earings Women", "https://i.postimg.cc/6QPb4JNX/13.jpg", 100.0));
        this.products.push(new Product("Dissent Collar Earings", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0));
        this.products.push(new Product("Long Earings Women", "https://i.postimg.cc/6QPb4JNX/13.jpg", 100.0));
        this.products.push(new Product("Dissent Collar Earings", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0));
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0));
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0));

        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/5NcckzTV/7.jpg", 100.0, 4));
        this.products.push(new Product("Diamon Band Ring", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0, 5));
        this.products.push(new Product("Long Earings Women", "https://i.postimg.cc/6QPb4JNX/13.jpg", 100.0, 5));
        this.products.push(new Product("Dissent Collar Earings", "https://i.postimg.cc/ncf51J9V/2.jpg", 100.0, 3));
    }
}
