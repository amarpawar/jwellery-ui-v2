import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public navigatorSubject: Subject<string> = new Subject();
    
    constructor(private router: Router) {
        this.navigatorSubject.subscribe(path => this.navigateTo(path));
    }

    public navigateTo(path: string): void {
        this.router.navigate([path]);
    }
}
