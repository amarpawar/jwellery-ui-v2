import { Component } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
    
    constructor(public navigationService: NavigationService) {}
}
