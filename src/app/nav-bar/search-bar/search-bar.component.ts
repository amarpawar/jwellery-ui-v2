import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

    @Input() public height: number = 0;
    @Input() public showCloseButton: boolean = false;
    @Output() public closeSearchBox = new EventEmitter<boolean>();

    public searchIcon = faMagnifyingGlass;
    public closeIcon = faXmark;

    public closeSearch(): void {
        this.closeSearchBox.next(true);
    }
}
 