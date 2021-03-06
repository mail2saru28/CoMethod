"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var DevTeamComponent = /** @class */ (function () {
    function DevTeamComponent(authService) {
        this.authService = authService;
    }
    DevTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getDevTeamResponsibilities('getDevTeamResponsibilities')
            .subscribe(function (responsibilities) {
            _this.responsibilities = responsibilities.collection;
            console.log(_this.responsibilities);
        });
    };
    DevTeamComponent = __decorate([
        core_1.Component({
            selector: 'app-devteam',
            templateUrl: './devteam.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], DevTeamComponent);
    return DevTeamComponent;
}());
exports.DevTeamComponent = DevTeamComponent;
//# sourceMappingURL=devteam.component.js.map