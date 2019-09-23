import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatSidenavModule
    
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MDBBootstrapModule.forRoot(),
        MatCardModule,
        MatNativeDateModule,
        MatSidenavModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MDBBootstrapModule,
        MatCardModule,
        MatNativeDateModule,
        MatSidenavModule
    ]
})

export class MaterialModule { }