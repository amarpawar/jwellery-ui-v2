import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css'
})
export class PopularProductsComponent {
    @Input()
    public products?: Product[];

    constructor(public navigationService: NavigationService) { }
}
