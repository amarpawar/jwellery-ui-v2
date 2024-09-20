import { Component, Input } from '@angular/core';
import { faHeart, faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag, faCodeCompare } from '@fortawesome/free-solid-svg-icons'
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrl: './product-thumbnail.component.css'
})
export class ProductThumbnailComponent {
    @Input()
    public name?: String;

    @Input()
    public thumbnailUrl?: String;

    @Input()
    public price?: number;

    public likeIcon = faHeart;
    public cartIcon = faShoppingBag;
    public compareIcon = faCodeCompare;
    public checkoutIcon = faCreditCard;

    constructor(public navigationService: NavigationService) { }
}
