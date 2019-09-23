import { Component } from '@angular/core';
import { Role } from '../app/role-categories/role-component';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    name = 'Angular';

    constructor(private router: Router, private authService: AuthService) {

    }
    ngOnInit() {  this.getLinks(); }
    //roles: Role[];
    //roles = Roles;
    selectedRole: Role;
    roles: Role[];
    links: any[];
    selectedCategory: Role;

    isHidden: boolean = true;

    onSelect(role: Role): void {

        this.selectedRole = role;

    }
    OnSelectCategory(roleCategory: Role): void {
        this.selectedCategory = roleCategory;

    }
  
    getLinks(): void {
        this.authService.getLinks('getAllLinks').subscribe(links => { this.links = links.collection });
    }
}
