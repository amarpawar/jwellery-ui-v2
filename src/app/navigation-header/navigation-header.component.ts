import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.css'
})
export class NavigationHeaderComponent {
    public path: string[] = ['Home', 'Women\'s', 'Hot Categories', 'Rings'];
    public rightArrowIcon = faChevronRight;
}
