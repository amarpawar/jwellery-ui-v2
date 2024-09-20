import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { faStar, faCartPlus, faCreditCard, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrl: './other-products.component.css'
})
export class OtherProductsComponent {
    public starIcon = faStar;
    public carIcon = faCartPlus;
    public cardIcon = faCreditCard;
    public likeIcon = faHeart;

    @Input()
    public newProducts?: Product[];

    @Input()
    public bestSaleProducts?: Product[];

    @Input()
    public onSaleProducts?: Product[];
}
