import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBars, faChevronDown, faCodeCompare, faEllipsisVertical, faHeart, faSearch, faShoppingBag, faUserCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '../service/navigation.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    public downArrayIcon = faChevronDown;
    public userIcon = faUserCircle;
    public compareIcon = faCodeCompare;
    public likeIcon = faHeart;
    public bagIcon = faShoppingBag;
    public menuIcon = faBars;
    public ellipsisIcon = faEllipsisVertical;
    public searchIcon = faSearch;
    public closeIcon = faXmark;

    @ViewChild("menuOverlay")
    public menuOverlay!: ElementRef;

    @ViewChild("leftSlideMenu")
    public leftSlideMenu!: ElementRef;

    @ViewChild("logo")
    public logoElement!: ElementRef;

    @ViewChild("searchBar")
    public searchBar!: ElementRef;

    @ViewChild("searchIconButton")
    public searchButton!: ElementRef;

    private searchBarVisible = false;
    public showSearchCloseButton = false;

    constructor(public navigationService: NavigationService) { }

    public toggleLeftSideMenu(show: boolean): void {
        if (!this.leftSlideMenu) {
            return;
        }
        const display = show ? "block" : "none";
        this.leftSlideMenu.nativeElement.style.display = display;
        this.menuOverlay.nativeElement.style.display = display;
    }

    public toggleSearchBar(): void {
        if (!this.searchBar) {
            return;
        }
        this.logoElement.nativeElement.style.display = this.searchBarVisible ? "flex" : "none";
        this.searchButton.nativeElement.style.display = this.searchBarVisible ? "block" : "none";
        this.searchBar.nativeElement.style.display = this.searchBarVisible ? "none" : "flex";
        this.searchBarVisible = !this.searchBarVisible;
        this.showSearchCloseButton = this.searchBarVisible;
    }
}
