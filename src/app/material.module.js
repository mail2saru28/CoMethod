"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var material_1 = require("@angular/material");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatExpansionModule,
                material_1.MatListModule,
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot(),
                material_1.MatCardModule,
                material_1.MatNativeDateModule,
                material_1.MatSidenavModule
            ],
            exports: [
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatExpansionModule,
                material_1.MatListModule,
                angular_bootstrap_md_1.MDBBootstrapModule,
                material_1.MatCardModule,
                material_1.MatNativeDateModule,
                material_1.MatSidenavModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=material.module.js.map