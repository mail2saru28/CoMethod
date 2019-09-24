import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RoleCategoriesComponent } from './role-categories/role-categories.component';
import { RoleCategoriesListComponent } from './role-categories-list/role-categories-list.component';
import { ArchitectComponent } from './architect/architect.component';
import { ManagerComponent } from './manager/manager.component';
import { DevTeamComponent } from './devteam/devteam.component';
import { QAComponent } from './qa/qa.component';
import { AppComponent } from './app.component';
import { ScrumMasterComponent } from './scrummaster/scrummaster.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatExpansionModule } from '@angular/material';
//import { MatListModule } from '@angular/material/list';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ProductOwnerComponent } from '../app/product-owner/product-owner.component';
import { RoleCategoriesFlowChartComponent } from './role-categories-list/role-categories-flowchart';
import { AuthGuard } from './auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, RouterModule.forRoot([
        { path: '', component: RoleCategoriesComponent },
        { path: 'jumpstart/:id/:name', component: RoleCategoriesFlowChartComponent },
        { path: 'jump-start/:id/:name', component: RoleCategoriesListComponent },
        { path: 'Product Owner', component: ProductOwnerComponent },
        { path: 'Architect', component: ArchitectComponent },
        { path: 'Manager', component: ManagerComponent },
        { path: 'Dev Team', component: DevTeamComponent },
        { path: 'QA', component: QAComponent },
        { path: 'Scrum Master', component: ScrumMasterComponent },

    ]),
        MaterialModule, HttpModule, HttpClientModule],
    declarations: [AppComponent, RoleCategoriesComponent, RoleCategoriesListComponent, ProductOwnerComponent, ArchitectComponent, ManagerComponent, DevTeamComponent, QAComponent, ScrumMasterComponent,RoleCategoriesFlowChartComponent],
    bootstrap: [AppComponent],
    providers: [AuthService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppModule { }
