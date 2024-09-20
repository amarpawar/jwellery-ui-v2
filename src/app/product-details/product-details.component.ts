import { Component } from '@angular/core';
import { faStar, faChevronDown, faCodeCompare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
    public starIcon = faStar;
    public downArrowIcon = faChevronDown;
    public compareIcon = faCodeCompare;
    public heartIcon = faHeart;
    public tickIcon = faSquareCheck;
}
