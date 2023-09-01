"use strict";
(self["webpackChunkclinic_internship_app"] = self["webpackChunkclinic_internship_app"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/home-page/home-page.component */ 293);
/* harmony import */ var _core_shared_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/shared/auth.guard */ 8856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'homepage',
  component: _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}, {
  path: 'admin',
  canActivateChild: [_core_shared_auth_guard__WEBPACK_IMPORTED_MODULE_1__.adminAuthGuardChild, _core_shared_auth_guard__WEBPACK_IMPORTED_MODULE_1__.patientAuthGuardChild, _core_shared_auth_guard__WEBPACK_IMPORTED_MODULE_1__.doctorAuthGuardChild],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_clinic_service_ts-src_app_core_services_services_service_ts-src-4ee2e0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_modules_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/modules/admin/admin.module */ 8441)).then(m => m.AdminModule)
}, {
  path: 'patient',
  canActivateChild: [_core_shared_auth_guard__WEBPACK_IMPORTED_MODULE_1__.patientAuthGuardChild],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_appointment_service_ts-node_modules_angular_material_fesm2022_d-eef144"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_modules_patient_patient_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/modules/patient/patient.module */ 6914)).then(m => m.PatientModule)
}, {
  path: 'doctor',
  canActivateChild: [_core_shared_auth_guard__WEBPACK_IMPORTED_MODULE_1__.doctorAuthGuardChild],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_clinic_service_ts-src_app_core_services_services_service_ts-src-4ee2e0"), __webpack_require__.e("default-src_app_core_services_appointment_service_ts-node_modules_angular_material_fesm2022_d-eef144"), __webpack_require__.e("src_app_core_modules_doctor_doctor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/modules/doctor/doctor.module */ 6732)).then(m => m.DoctorModule)
}, {
  path: 'user',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_modules_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/modules/user/user.module */ 9825)).then(m => m.UserModule)
}, {
  path: '',
  component: _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/navigation-bar/navigation-bar.component */ 8381);



class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navigation-bar")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _core_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavigationBarComponent],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/app */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/auth */ 6075);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/auth.service */ 304);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 5281);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _core_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/doctor.service */ 2365);
/* harmony import */ var _core_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/confirmation-dialog/confirmation-dialog.component */ 9622);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/home-page/home-page.component */ 293);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _core_modules_user_user_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/modules/user/user-routing.module */ 9003);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _core_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/navigation-bar/navigation-bar.component */ 8381);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, _core_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__.DoctorService, {
    provide: _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_OPTIONS,
    useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_12__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_12__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.getAuth)()), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.getFirestore)()), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_19__.AngularFireAuthModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule, _core_modules_user_user_routing_module__WEBPACK_IMPORTED_MODULE_7__.UserRoutingModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _core_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogComponent, _core_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__.HomePageComponent, _core_components_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_8__.NavigationBarComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_12__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.FirestoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_19__.AngularFireAuthModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_27__.MatListModule, _core_modules_user_user_routing_module__WEBPACK_IMPORTED_MODULE_7__.UserRoutingModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule]
  });
})();

/***/ }),

/***/ 9622:
/*!**************************************************************************************!*\
  !*** ./src/app/core/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationDialogComponent: () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);




class ConfirmationDialogComponent {
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  cancel() {
    this.close(false);
  }
  close(value) {
    this.dialogRef.close(value);
  }
  confirm() {
    this.close(true);
  }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) {
  return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
ConfirmationDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmationDialogComponent,
  selectors: [["app-confirmation-dialog"]],
  decls: 11,
  vars: 4,
  consts: [[1, "header"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "dialog-message"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 3, "click"]],
  template: function ConfirmationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_7_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_9_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.cancelText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.confirmText);
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 293:
/*!******************************************************************!*\
  !*** ./src/app/core/components/home-page/home-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);





function HomePageComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_div_8_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onClickManageSite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Intr\u0103 in cont");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomePageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div")(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePageComponent_div_8_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onClickGetAppoinment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " F\u0103-\u021Bi o programare | + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePageComponent_div_8_div_4_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loggedUser || ctx_r0.isDoctor);
  }
}
class HomePageComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.loggedUser = user;
      this.isAdmin = this.loggedUser?.role === 'admin' ? true : false;
      this.isPatient = this.loggedUser?.role === 'patient' ? true : false;
      this.isDoctor = this.loggedUser?.role === 'doctor' ? true : false;
    });
  }
  onClickGetAppoinment() {
    this.router.navigate(['patient/appointment']);
  }
  onClickManageSite() {
    this.router.navigate(['doctor']);
  }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["app-home-page"]],
  decls: 11,
  vars: 1,
  consts: [[1, "sections-container"], [1, "first-section"], [1, "title-homepage"], [1, "lorem-homepage"], ["class", "btns", 4, "ngIf"], [1, "second-section"], ["src", "../../../../assets/Doctors-bro.png", "alt", "", "width", "500px", "height", "500px"], [1, "btns"], ["id", "firstBtn", "mat-flat-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["id", "secondBtn", "mat-flat-button", "", "color", "warn", 3, "click"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u00CEndrum\u0103m spre s\u0103n\u0103tate, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00CEndrum\u0103m spre via\u021B\u0103 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00CEnfiin\u021Bate cu grij\u0103 \u0219i dedicare, clinicile noastre se angajeaz\u0103 s\u0103 va ofere \u00EEngrijire medical\u0103 de calitate superioar\u0103 \u00EEntr-un mediu prietenos \u0219i modern. Profesioni\u0219ti medicali cu experien\u021B\u0103 combin\u0103 cuno\u0219tin\u021Bele avansate cu compasiunea pentru a asigura s\u0103n\u0103tatea \u0219i binele pacien\u021Bilor lor. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePageComponent_div_8_Template, 5, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedUser || ctx.isPatient);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
  styles: [".title-homepage[_ngcontent-%COMP%] {\n  font-size: 35px;\n  line-height: 45px;\n  color: gray;\n}\n\n.sections-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 5rem;\n}\n\n.lorem-homepage[_ngcontent-%COMP%] {\n  width: 70%;\n  line-height: 25px;\n}\n\n#firstBtn[_ngcontent-%COMP%], #secondBtn[_ngcontent-%COMP%] {\n  margin-right: 50px;\n  border-radius: 0;\n}\n\n.btns[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9pZWN0JTIwSW50ZXJuc2hpcFxcY3JhaW92YS1pbnRlcm5zaGlwXFxzcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtaG9tZXBhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnNlY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVyZW07XHJcbn1cclxuXHJcbi5sb3JlbS1ob21lcGFnZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbiNmaXJzdEJ0biwgI3NlY29uZEJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59IiwiLnRpdGxlLWhvbWVwYWdlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zZWN0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cmVtO1xufVxuXG4ubG9yZW0taG9tZXBhZ2Uge1xuICB3aWR0aDogNzAlO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuI2ZpcnN0QnRuLCAjc2Vjb25kQnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9Qcm9pZWN0JTIwSW50ZXJuc2hpcC9jcmFpb3ZhLWludGVybnNoaXAvc3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0Esb2xEQUFvbEQiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtaG9tZXBhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnNlY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVyZW07XHJcbn1cclxuXHJcbi5sb3JlbS1ob21lcGFnZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbiNmaXJzdEJ0biwgI3NlY29uZEJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59IiwiLnRpdGxlLWhvbWVwYWdlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zZWN0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cmVtO1xufVxuXG4ubG9yZW0taG9tZXBhZ2Uge1xuICB3aWR0aDogNzAlO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuI2ZpcnN0QnRuLCAjc2Vjb25kQnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8381:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/navigation-bar/navigation-bar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationBarComponent: () => (/* binding */ NavigationBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8128);








function NavigationBarComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigationBarComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Pacient");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigationBarComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Doctor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigationBarComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 7)(2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", null, 9)(6, "button", 10)(7, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 11)(11, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " SignUp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r5);
  }
}
function NavigationBarComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-menu", null, 15)(8, "a", 16)(9, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Contul meu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigationBarComponent_div_10_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onLogOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " LogOut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Bine ai venit, ", ctx_r4.loggedUser.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r4.isPatient ? "patient/dashboard/current" : ctx_r4.isDoctor ? "doctor/dashboard/current" : "admin");
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
class NavigationBarComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.loggedUser = user;
      this.isAdmin = this.loggedUser?.role === 'admin' ? true : false;
      this.isPatient = this.loggedUser?.role === 'patient' ? true : false;
      this.isDoctor = this.loggedUser?.role === 'doctor' ? true : false;
    });
  }
  onLogOut() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }
}
NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
  return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
NavigationBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigationBarComponent,
  selectors: [["app-navigation-bar"]],
  decls: 11,
  vars: 7,
  consts: [["routerLink", "", "routerLinkActive", "activeNav", 3, "routerLinkActiveOptions"], [4, "ngIf"], [1, "right-menu"], ["class", "user-profile", 4, "ngIf"], ["routerLink", "admin", "routerLinkActive", "activeNav"], ["routerLink", "patient/dashboard/current", "routerLinkActive", "activeNav"], ["routerLink", "doctor/dashboard/current", "routerLinkActive", "activeNav"], ["mat-button", "", 3, "matMenuTriggerFor"], ["clasa", "login-icon"], ["menu1", "matMenu"], ["mat-menu-item", "", "routerLink", "login"], ["mat-menu-item", "", "routerLink", "sign-up"], [1, "login-icon"], [1, "user-profile"], [1, "username"], ["menu2", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"]],
  template: function NavigationBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar")(1, "ul")(2, "li")(3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Acas\u0103");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NavigationBarComponent_li_5_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NavigationBarComponent_li_6_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavigationBarComponent_li_7_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavigationBarComponent_div_9_Template, 14, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavigationBarComponent_div_10_Template, 16, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedUser || ctx.isPatient);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedUser || ctx.isDoctor);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedUser);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger],
  styles: [".mat-mdc-button[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.125rem;\n  height: 2.125rem;\n  width: 2.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2llY3QlMjBJbnRlcm5zaGlwXFxjcmFpb3ZhLWludGVybnNoaXBcXHNyY1xcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uLWJhclxcbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6Im5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZGMtYnV0dG9uPi5tYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIuMTI1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjEyNXJlbTtcclxuICAgIHdpZHRoOiAyLjEyNXJlbTtcclxufSIsIi5tYXQtbWRjLWJ1dHRvbiA+IC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gIGhlaWdodDogMi4xMjVyZW07XG4gIHdpZHRoOiAyLjEyNXJlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUHJvaWVjdCUyMEludGVybnNoaXAvY3JhaW92YS1pbnRlcm5zaGlwL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENBLG93QkFBb3dCIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZGMtYnV0dG9uPi5tYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIuMTI1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjEyNXJlbTtcclxuICAgIHdpZHRoOiAyLjEyNXJlbTtcclxufSIsIi5tYXQtbWRjLWJ1dHRvbiA+IC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gIGhlaWdodDogMi4xMjVyZW07XG4gIHdpZHRoOiAyLjEyNXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8208:
/*!*****************************************************************************************************!*\
  !*** ./src/app/core/modules/user/components/user-forgot-password/user-forgot-password.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserForgotPasswordComponent: () => (/* binding */ UserForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);





class UserForgotPasswordComponent {
  constructor(authService) {
    this.authService = authService;
    this.email = '';
  }
  resetPassword() {
    this.authService.sendPasswordResetEmail(this.email).then(() => {
      console.log('Password reset email sent.');
    }).catch(error => {
      console.error('Error sending password reset email:', error);
    });
  }
}
UserForgotPasswordComponent.ɵfac = function UserForgotPasswordComponent_Factory(t) {
  return new (t || UserForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
UserForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UserForgotPasswordComponent,
  selectors: [["app-user-forgot-password"]],
  decls: 17,
  vars: 2,
  consts: [[1, "container"], [1, "authBlock"], [1, "text-center"], [3, "ngSubmit"], ["resetForm", "ngForm"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "matInput", "", "required", "", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "warn", 3, "disabled"]],
  template: function UserForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Ai uitat parola?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Introdu adresa de e-mail pe care ai folosit-o c\u00E2nd te-ai \u00EEnregistrat \u0219i \u00EE\u021Bi vom trimite instruc\u021Biuni pentru a-\u021Bi reseta parola. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Din motive de securitate, NU v\u0103 vom stoca parola. Prin urmare, fi\u021Bi siguri c\u0103 nu v\u0103 vom trimite niciodat\u0103 parola prin e-mail. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserForgotPasswordComponent_Template_form_ngSubmit_8_listener() {
        return ctx.resetPassword();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Adresa de email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserForgotPasswordComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Reseteaz\u0103");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.valid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: [".authBlock[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 36%;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 80%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n#email[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\np[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 30px;\n  border-radius: 7x;\n  border: none;\n  background-color: rgba(238, 237, 237, 0.868);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvaWVjdCUyMEludGVybnNoaXBcXGNyYWlvdmEtaW50ZXJuc2hpcFxcc3JjXFxhcHBcXGNvcmVcXG1vZHVsZXNcXHVzZXJcXGNvbXBvbmVudHNcXHVzZXItZm9yZ290LXBhc3N3b3JkXFx1c2VyLWZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FDQ0oiLCJmaWxlIjoidXNlci1mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aEJsb2Nre1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAzNiU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI2VtYWlse1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICB3aWR0aDo5OCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3eDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzcsIDIzNywgMC44NjgpO1xyXG59IiwiLmF1dGhCbG9jayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAzNiU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jZW1haWwge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogN3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzNywgMjM3LCAwLjg2OCk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyLWZvcmdvdC1wYXNzd29yZC91c2VyLWZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1Byb2llY3QlMjBJbnRlcm5zaGlwL2NyYWlvdmEtaW50ZXJuc2hpcC9zcmMvYXBwL2NvcmUvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvdXNlci1mb3Jnb3QtcGFzc3dvcmQvdXNlci1mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtBQ0NKO0FEQ0EsdzlEQUF3OUQiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aEJsb2Nre1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAzNiU7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI2VtYWlse1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICB3aWR0aDo5OCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3eDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzcsIDIzNywgMC44NjgpO1xyXG59IiwiLmF1dGhCbG9jayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAzNiU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jZW1haWwge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogN3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzNywgMjM3LCAwLjg2OCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3200:
/*!*********************************************************************************!*\
  !*** ./src/app/core/modules/user/components/user-login/user-login.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserLoginComponent: () => (/* binding */ UserLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);










function UserLoginComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email Invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class UserLoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.hide = true;
    this.users = [];
    this.email = '';
    this.password = '';
    this.error = {
      message: ''
    };
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required
      })
    });
  }
  onLogin() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.authService.signIn(email, password).then(() => {
      return this.authService.getCurrentUserUid().then(data => {
        this.authService.getUserRole(data).subscribe(role => {
          if (role === 'patient') {
            this.router.navigate(['patient/dashboard/current']);
          }
          if (role === 'doctor') {
            this.router.navigate(['doctor/dashboard/current']);
          }
          if (role === 'admin') {
            this.router.navigate(['admin']);
          }
        });
      });
    }).catch(error => {
      if (error.code === 'auth/user-not-found') {
        this.error.message = 'User-ul nu a fost găsit.';
      } else if (error.code === 'auth/invalid-email') {
        this.error.message = 'Email obligatoriu';
      } else if (error.code === 'auth/invalid-password') {
        this.error.message = 'Parolă obligatorie';
      } else if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
        this.error.message = 'Email sau parolă incorecte. Te rog să încerci din nou';
      } else if (error.code === 'auth/missing-password') {
        this.error.message = 'Parolă obligatorie';
      } else if (error.code === 'auth/too-many-requests') {
        this.error.message = 'Cont blocat, numărul de cereri depășite';
      } else {
        this.error.message = 'Eroare internă, te rog să încerci mai târziu';
      }
    });
  }
  onLoginWithGoogle() {
    this.authService.patientGoogleSignIn().then(() => {
      this.router.navigate(['patient/dashboard/current']);
    });
  }
  onRouterSignUp() {
    this.router.navigate(['sign-up']);
  }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) {
  return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
UserLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UserLoginComponent,
  selectors: [["app-user-login"]],
  decls: 34,
  vars: 7,
  consts: [[1, "page-container"], [1, "form-login-container"], ["id", "googleLogin", "mat-raised-button", "", "color", "warn", 3, "click"], [1, "divider", "sign-in"], [1, "example-form", 3, "formGroup"], ["id", "error"], [1, "login-full-width"], ["type", "email", "matInput", "", "placeholder", "nume@mail.com", "required", "", "formControlName", "email"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "forgotPassword"], ["routerLink", "/forgot-password"], ["mat-raised-button", "", "id", "loginBtn", "color", "primary", 3, "click"], ["id", "signUpLink"], ["routerLink", "/sign-up"]],
  template: function UserLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Conecteaz\u0103-te in contul t\u0103u");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_4_listener() {
        return ctx.onLoginWithGoogle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Google Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4)(8, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 6)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "alternate_email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserLoginComponent_mat_error_16_Template, 2, 0, "mat-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 6)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Parola");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_21_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12)(25, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Ai uitat parola?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_27_listener() {
        return ctx.onLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Nu ai un cont? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "router-outlet");
    }
    if (rf & 2) {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.error.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("pattern"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["#error[_ngcontent-%COMP%] {\n  text-align: center;\n  color: red;\n}\n\n.page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 80px 0 40px 0;\n}\n\nhr.divider.sign-in[_ngcontent-%COMP%]:after {\n  position: relative;\n  top: -10px;\n  padding-right: 8px;\n  padding-left: 8px;\n  background-color: white;\n  content: \"sau login cu email-ul\";\n}\n\nhr.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 30px 0;\n  overflow: visible;\n  border: none;\n  background-color: black;\n  color: #6e6d7a;\n  text-align: center;\n  width: 100%;\n}\n\n.form-login-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 30rem;\n}\n\n.login-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0px;\n}\n\n#googleLogin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.forgotPassword[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n#loginBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9naW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9pZWN0JTIwSW50ZXJuc2hpcFxcY3JhaW92YS1pbnRlcm5zaGlwXFxzcmNcXGFwcFxcY29yZVxcbW9kdWxlc1xcdXNlclxcY29tcG9uZW50c1xcdXNlci1sb2dpblxcdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InVzZXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJyb3J7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogODBweCAwIDQwcHggMDtcclxuXHJcbn1cclxuXHJcbmhyLmRpdmlkZXIuc2lnbi1pbjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbnRlbnQ6IFwic2F1IGxvZ2luIGN1IGVtYWlsLXVsXCI7XHJcbn1cclxuXHJcbmhyLmRpdmlkZXIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogIzZlNmQ3YTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1sb2dpbi1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAzMHJlbTtcclxufVxyXG5cclxuLmxvZ2luLWZ1bGwtd2lkdGh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuI2dvb2dsZUxvZ2lue1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3Jke1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNsb2dpbkJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiIsIiNlcnJvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDgwcHggMCA0MHB4IDA7XG59XG5cbmhyLmRpdmlkZXIuc2lnbi1pbjphZnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbnRlbnQ6IFwic2F1IGxvZ2luIGN1IGVtYWlsLXVsXCI7XG59XG5cbmhyLmRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogIzZlNmQ3YTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tbG9naW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMzByZW07XG59XG5cbi5sb2dpbi1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuI2dvb2dsZUxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3Jnb3RQYXNzd29yZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jbG9naW5CdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9Qcm9pZWN0JTIwSW50ZXJuc2hpcC9jcmFpb3ZhLWludGVybnNoaXAvc3JjL2FwcC9jb3JlL21vZHVsZXMvdXNlci9jb21wb25lbnRzL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0EsbzRIQUFvNEgiLCJzb3VyY2VzQ29udGVudCI6WyIjZXJyb3J7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogODBweCAwIDQwcHggMDtcclxuXHJcbn1cclxuXHJcbmhyLmRpdmlkZXIuc2lnbi1pbjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbnRlbnQ6IFwic2F1IGxvZ2luIGN1IGVtYWlsLXVsXCI7XHJcbn1cclxuXHJcbmhyLmRpdmlkZXIge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogIzZlNmQ3YTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1sb2dpbi1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAzMHJlbTtcclxufVxyXG5cclxuLmxvZ2luLWZ1bGwtd2lkdGh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuI2dvb2dsZUxvZ2lue1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmZvcmdvdFBhc3N3b3Jke1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNsb2dpbkJ0bntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiIsIiNlcnJvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDgwcHggMCA0MHB4IDA7XG59XG5cbmhyLmRpdmlkZXIuc2lnbi1pbjphZnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbnRlbnQ6IFwic2F1IGxvZ2luIGN1IGVtYWlsLXVsXCI7XG59XG5cbmhyLmRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogIzZlNmQ3YTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tbG9naW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMzByZW07XG59XG5cbi5sb2dpbi1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuI2dvb2dsZUxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3Jnb3RQYXNzd29yZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jbG9naW5CdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7971:
/*!*************************************************************************************!*\
  !*** ./src/app/core/modules/user/components/user-sign-up/user-sign-up.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSignUpComponent: () => (/* binding */ UserSignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 304);
/* harmony import */ var src_app_core_services_image_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/image-upload.service */ 498);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 2106);












function UserSignUpComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.patientImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function UserSignUpComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.error.message, " ");
  }
}
function UserSignUpComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Num\u0103r de telefon invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserSignUpComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Adres\u0103 de email invalid\u0103");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UserSignUpComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class UserSignUpComponent {
  constructor(authService, imageUploadService, router) {
    this.authService = authService;
    this.imageUploadService = imageUploadService;
    this.router = router;
    this.patientImage = '';
    this.hide = true;
    this.error = {
      message: ''
    };
    this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
        nonNullable: true,
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
      }),
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
        nonNullable: true,
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
      }),
      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
        nonNullable: true,
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
      }),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^((\\+91-?)|0)?[0-9]{3}( ?)[0-9]{3}( ?)[0-9]{4}$')]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
        nonNullable: true,
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
      }),
      imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
        nonNullable: true
      })
    });
  }
  onSignUp() {
    this.authService.pacientSignUp(this.signUpForm.controls.password.value, {
      ...this.signUpForm.getRawValue(),
      imageUrl: this.patientImage
    }).then(() => {
      this.router.navigate(['patient/dashboard/details']);
      this.signUpForm.reset();
    }).catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        this.error.message = 'Adresă de email deja înregistrată în baza noastra de date. Te rog încearcă cu alta.';
      } else if (error.code === 'auth/invalid-email') {
        this.error.message = 'Adresă de email invalidă.';
      } else if (error.code === 'auth/weak-password') {
        this.error.message = 'Parolă prea scurtă. Parola trebuie să aibă minim 6 caractere.';
      } else if (error.code === 'auth/invalid-photo-url') {
        this.error.message = 'URL-ul pozei este invalid. Încearcă alta te rog.';
      } else if (error.code === 'auth/invalid-phone-number') {
        this.error.message = 'Numarul de telefon intrudus este invalid. Formatul trebuie sa fie 07xx xxx xxx';
      } else if (error.code === 'auth/phone-number-already-exists') {
        this.error.message = 'Numărul de telefon este deja înregistrat. Te rog încearcă cu altul.';
      } else {
        this.error.message = 'Eroare internă, te rog sa încerci mai târziu';
      }
    });
  }
  uploadImage(event) {
    const file = (event?.target).files?.[0];
    if (!file) {
      return;
    }
    this.imageUploadService.uploadImage(file, 'doctors').subscribe(downloadURL => {
      this.patientImage = downloadURL;
    });
  }
}
UserSignUpComponent.ɵfac = function UserSignUpComponent_Factory(t) {
  return new (t || UserSignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_image_upload_service__WEBPACK_IMPORTED_MODULE_1__.ImageUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
UserSignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UserSignUpComponent,
  selectors: [["app-user-sign-up"]],
  decls: 55,
  vars: 11,
  consts: [[1, "form-container"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "imageContainer"], ["alt", "Imagine Doctor Neincarcata", "width", "50%", "height", "50%", 3, "src", 4, "ngIf"], ["for", "fileInput", 1, "fileLabel"], ["type", "file", "accept", ".png,.jpg", "formControlName", "imageUrl", "id", "fileInput", 3, "change"], ["class", "error-message", 4, "ngIf"], [1, "example-full-width"], ["matInput", "", "formControlName", "lastName", "placeholder", "Nume"], ["matSuffix", ""], ["matInput", "", "formControlName", "firstName", "placeholder", "Prenume"], ["formControlName", "gender"], ["value", "Masculin"], ["value", "Feminin"], ["value", "Altul"], ["type", "tel", "formControlName", "phone", "matInput", "", "placeholder", "0712 345 678"], [4, "ngIf"], ["type", "email", "formControlName", "email", "matInput", "", "placeholder", "nume@mail.com", "required", ""], ["email", ""], ["matInput", "", "formControlName", "password", 3, "type"], ["password", ""], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "actions"], ["id", "signUpBtn", "mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["alt", "Imagine Doctor Neincarcata", "width", "50%", "height", "50%", 3, "src"], [1, "error-message"]],
  template: function UserSignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UserSignUpComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UserSignUpComponent_img_3_Template, 1, 1, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Incarca o imagine ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UserSignUpComponent_Template_input_change_6_listener($event) {
        return ctx.uploadImage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, UserSignUpComponent_div_7_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 7)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Nume");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 7)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Prenume");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-radio-group", 11)(21, "mat-radio-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Masculin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-radio-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Feminin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-radio-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Altul");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 7)(28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Telefon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "mode_edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, UserSignUpComponent_mat_error_33_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-form-field", 7)(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, UserSignUpComponent_mat_error_39_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "alternate_email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, UserSignUpComponent_mat_error_42_Template, 2, 0, "mat-error", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-form-field", 7)(44, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Parol\u0103");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserSignUpComponent_Template_button_click_48_listener() {
        return ctx.hide = !ctx.hide;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 22)(52, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Sign-up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "router-outlet");
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signUpForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.patientImage);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.signUpForm.get("phone")) == null ? null : tmp_3_0.hasError("pattern"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.signUpForm.get("email")) == null ? null : tmp_4_0.hasError("pattern"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.signUpForm.get("email")) == null ? null : tmp_5_0.hasError("pattern"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.signUpForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioButton],
  styles: [".error-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: red;\n  padding-bottom: 15px;\n}\n\n#signUpBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2lnbi11cC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2llY3QlMjBJbnRlcm5zaGlwXFxjcmFpb3ZhLWludGVybnNoaXBcXHNyY1xcYXBwXFxjb3JlXFxtb2R1bGVzXFx1c2VyXFxjb21wb25lbnRzXFx1c2VyLXNpZ24tdXBcXHVzZXItc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VKIiwiZmlsZSI6InVzZXItc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmctYm90dG9tOjE1cHg7XHJcbn1cclxuI3NpZ25VcEJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuI3NpZ25VcEJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyLXNpZ24tdXAvdXNlci1zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUHJvaWVjdCUyMEludGVybnNoaXAvY3JhaW92YS1pbnRlcm5zaGlwL3NyYy9hcHAvY29yZS9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyLXNpZ24tdXAvdXNlci1zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7QURDQSx3aENBQXdoQyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmctYm90dG9tOjE1cHg7XHJcbn1cclxuI3NpZ25VcEJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuI3NpZ25VcEJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2642:
/*!***********************************************************************************************!*\
  !*** ./src/app/core/modules/user/components/user-verify-email/user-verify-email.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserVerifyEmailComponent: () => (/* binding */ UserVerifyEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);



class UserVerifyEmailComponent {
  constructor(router) {
    this.router = router;
  }
  onRouteLogin() {
    this.router.navigate(['login']);
  }
}
UserVerifyEmailComponent.ɵfac = function UserVerifyEmailComponent_Factory(t) {
  return new (t || UserVerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
UserVerifyEmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UserVerifyEmailComponent,
  selectors: [["app-user-verify-email"]],
  decls: 14,
  vars: 0,
  consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], [1, "formGroup"], [1, "text-center"], [1, "redirectToLogin"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
  template: function UserVerifyEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00CE\u021Bi mul\u021Bumim!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cerere \u00EEregistrata cu succes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "V\u0103 rug\u0103m s\u0103 v\u0103 verifica\u021Bi e-mailul pentru a v\u0103 reseta parola. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5)(11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserVerifyEmailComponent_Template_button_click_11_listener() {
        return ctx.onRouteLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00CEnapoi la Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: [".displayTable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvaWVjdCUyMEludGVybnNoaXBcXGNyYWlvdmEtaW50ZXJuc2hpcFxcc3JjXFxhcHBcXGNvcmVcXG1vZHVsZXNcXHVzZXJcXGNvbXBvbmVudHNcXHVzZXItdmVyaWZ5LWVtYWlsXFx1c2VyLXZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJ1c2VyLXZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59IiwiLmRpc3BsYXlUYWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyLXZlcmlmeS1lbWFpbC91c2VyLXZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1Byb2llY3QlMjBJbnRlcm5zaGlwL2NyYWlvdmEtaW50ZXJuc2hpcC9zcmMvYXBwL2NvcmUvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvdXNlci12ZXJpZnktZW1haWwvdXNlci12ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7QURDQSxvL0JBQW8vQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5VGFibGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59IiwiLmRpc3BsYXlUYWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2015:
/*!****************************************************************!*\
  !*** ./src/app/core/modules/user/components/user.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class UserComponent {}
UserComponent.ɵfac = function UserComponent_Factory(t) {
  return new (t || UserComponent)();
};
UserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UserComponent,
  selectors: [["app-user"]],
  decls: 1,
  vars: 0,
  template: function UserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9003:
/*!**********************************************************!*\
  !*** ./src/app/core/modules/user/user-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRoutingModule: () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user.component */ 2015);
/* harmony import */ var _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-login/user-login.component */ 3200);
/* harmony import */ var _components_user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-sign-up/user-sign-up.component */ 7971);
/* harmony import */ var _components_user_forgot_password_user_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-forgot-password/user-forgot-password.component */ 8208);
/* harmony import */ var _components_user_verify_email_user_verify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-verify-email/user-verify-email.component */ 2642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








const ROUTES = [{
  path: '',
  component: _components_user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent
}, {
  path: 'login',
  component: _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_1__.UserLoginComponent
}, {
  path: 'sign-up',
  component: _components_user_sign_up_user_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.UserSignUpComponent
}, {
  path: 'forgot-password',
  component: _components_user_forgot_password_user_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.UserForgotPasswordComponent
}, {
  path: 'verify-email',
  component: _components_user_verify_email_user_verify_email_component__WEBPACK_IMPORTED_MODULE_4__.UserVerifyEmailComponent
}];
class UserRoutingModule {}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) {
  return new (t || UserRoutingModule)();
};
UserRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: UserRoutingModule
});
UserRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(ROUTES), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 304:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ 9193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/app */ 6140);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/auth */ 6075);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 4080);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);









class AuthService {
  constructor(afAuth, afs, router) {
    this.afAuth = afAuth;
    this.afs = afs;
    this.router = router;
    this.secondaryApp = (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebase, 'SecondaryApp');
    this.secondaryAppAuth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(this.secondaryApp);
    this.user$ = this.afAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(user => {
      if (user) {
        const patientDoc = this.afs.doc(`patients/${user.uid}`).valueChanges();
        const doctorDoc = this.afs.doc(`doctors/${user.uid}`).valueChanges();
        const adminDoc = this.afs.doc(`admin/${user.uid}`).valueChanges();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([patientDoc, doctorDoc, adminDoc]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([patientData, doctorData, adminData]) => {
          if (patientData) {
            return patientData;
          } else if (doctorData) {
            return doctorData;
          } else {
            return adminData || null;
          }
        }));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }
    }));
  }
  getUserRole(userId) {
    const patientDoc = this.afs.doc(`patients/${userId}`).valueChanges();
    const doctorDoc = this.afs.doc(`doctors/${userId}`).valueChanges();
    const adminDoc = this.afs.doc(`admin/${userId}`).valueChanges();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([patientDoc, doctorDoc, adminDoc]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([patientData, doctorData, adminData]) => {
      if (patientData && patientData.role === 'patient') {
        return 'patient';
      } else if (doctorData && doctorData.role === 'doctor') {
        return 'doctor';
      } else if (adminData && adminData.role === 'admin') {
        return 'admin';
      } else {
        return null;
      }
    }));
  }
  getCurrentUserUid() {
    return this.afAuth.currentUser.then(user => {
      return user ? user.uid : null;
    }).catch(() => null);
  }
  pacientSignUp(pass, patient) {
    return this.afAuth.createUserWithEmailAndPassword(patient.email, pass).then(result => {
      if (!result.user) {
        return;
      }
      const userRef = this.afs.doc(`patients/${result.user.uid}`);
      const patientData = {
        uid: result.user.uid,
        email: patient.email,
        imageUrl: patient.imageUrl,
        displayName: patient.lastName + ' ' + patient.firstName,
        gender: patient.gender,
        phone: patient.phone,
        role: 'patient'
      };
      return userRef.set(patientData, {
        merge: true
      });
    }).catch(err => Promise.reject(err));
  }
  doctorSignUp(pass, doctor) {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(this.secondaryAppAuth, doctor.email, pass).then(result => {
      if (!result.user) {
        return;
      }
      const userRef = this.afs.doc(`doctors/${result.user.uid}`);
      const doctorData = {
        uid: result.user.uid,
        email: doctor.email,
        password: doctor.password,
        imageUrl: doctor.imageUrl,
        lastName: doctor.lastName,
        firstName: doctor.firstName,
        displayName: doctor.firstName + ' ' + doctor.lastName,
        phone: doctor.phone,
        adress: doctor.adress,
        gender: doctor.gender,
        description: doctor.description,
        specialtyIds: doctor.specialtyIds,
        role: 'doctor'
      };
      return userRef.set(doctorData, {
        merge: true
      });
    }).catch(err => Promise.reject(err)).finally(() => {
      this.secondaryAppAuth.signOut();
    });
  }
  signIn(email, pass) {
    return this.afAuth.signInWithEmailAndPassword(email, pass).catch(err => Promise.reject(err));
  }
  patientGoogleSignIn() {
    return this.afAuth.signInWithPopup(new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__.GoogleAuthProvider()).then(result => {
      if (!result.user) {
        return;
      }
      const userRef = this.afs.doc(`patients/${result.user.uid}`);
      const patientData = {
        uid: result.user.uid,
        email: result.user.email,
        imageUrl: result.user.photoURL,
        displayName: result.user.displayName,
        gender: null,
        phone: result.user.phoneNumber,
        role: 'patient'
      };
      return userRef.set(patientData, {
        merge: true
      });
    }).catch(err => Promise.reject(err));
  }
  signOut() {
    return this.afAuth.signOut();
  }
  sendPasswordResetEmail(email) {
    return this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['verify-email']);
    }).catch(error => {
      console.error('Error sending password reset email:', error);
    });
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2365:
/*!*************************************************!*\
  !*** ./src/app/core/services/doctor.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorService: () => (/* binding */ DoctorService)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 3285);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 304);





class DoctorService {
  constructor(firestore, authService) {
    this.firestore = firestore;
    this.authService = authService;
  }
  addDoctor(pass, doctor) {
    this.authService.doctorSignUp(pass, doctor);
  }
  queryDoctors(id) {
    const doctorsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'doctors');
    const queryResponse = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(doctorsRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('specialtyIds', 'array-contains', id));
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(queryResponse, {
      idField: 'id'
    });
  }
  getDoctors() {
    const doctorCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'doctors');
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(doctorCollection, {
      idField: 'id'
    });
  }
  getDoctor(id) {
    const selectedDoctor = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, 'doctors', id);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(selectedDoctor));
  }
  updateDoctor(id, updatedData) {
    const selectedDoctor = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, 'doctors', id);
    if (!updatedData['imageUrl']) {
      delete updatedData['imageUrl'];
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(selectedDoctor, updatedData));
  }
  deleteDoctor(id) {
    const selectedDoctor = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, 'doctors', id);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(selectedDoctor));
  }
  updateImage(id, imageUrl) {
    if (!imageUrl) {
      console.error('Image URL is undefined or empty');
      return;
    }
    const docInstance = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, 'doctors', id);
    (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docInstance, {
      imageUrl: imageUrl
    });
  }
}
DoctorService.ɵfac = function DoctorService_Factory(t) {
  return new (t || DoctorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
DoctorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DoctorService,
  factory: DoctorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 498:
/*!*******************************************************!*\
  !*** ./src/app/core/services/image-upload.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUploadService: () => (/* binding */ ImageUploadService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/storage */ 9664);




class ImageUploadService {
  constructor(afStorage) {
    this.afStorage = afStorage;
  }
  uploadImage(file, pathName) {
    const filePath = `${pathName}/` + file.name;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => fileRef.getDownloadURL()));
  }
}
ImageUploadService.ɵfac = function ImageUploadService_Factory(t) {
  return new (t || ImageUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_3__.AngularFireStorage));
};
ImageUploadService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ImageUploadService,
  factory: ImageUploadService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8856:
/*!*******************************************!*\
  !*** ./src/app/core/shared/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminAuthGuard: () => (/* binding */ adminAuthGuard),
/* harmony export */   adminAuthGuardChild: () => (/* binding */ adminAuthGuardChild),
/* harmony export */   doctorAuthGuard: () => (/* binding */ doctorAuthGuard),
/* harmony export */   doctorAuthGuardChild: () => (/* binding */ doctorAuthGuardChild),
/* harmony export */   patientAuthGuard: () => (/* binding */ patientAuthGuard),
/* harmony export */   patientAuthGuardChild: () => (/* binding */ patientAuthGuardChild)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 304);




const patientAuthGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return authService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
    if (!user) {
      router.navigate(['login']);
    }
    if (user?.role === 'doctor') {
      router.navigate(['']);
    }
    return user?.role === 'patient' || user?.role === 'admin';
  }));
};
const patientAuthGuardChild = (route, state) => patientAuthGuard(route, state);
const doctorAuthGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return authService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
    if (!user) {
      router.navigate(['login']);
    }
    if (user?.role === 'patient') {
      router.navigate(['homepage']);
    }
    return user?.role === 'doctor' || user?.role === 'admin';
  }));
};
const doctorAuthGuardChild = (route, state) => doctorAuthGuard(route, state);
const adminAuthGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return authService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
    if (!user) {
      router.navigate(['login']);
    }
    if (user?.role === 'doctor' || user?.role === 'patient') {
      router.navigate(['homepage']);
    }
    return user?.role === 'admin';
  }));
};
const adminAuthGuardChild = (route, state) => adminAuthGuard(route, state);

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  firebase: {
    projectId: 'int-clinic',
    appId: '1:981743238567:web:4d762ad80a0a1aef760a82',
    storageBucket: 'int-clinic.appspot.com',
    apiKey: 'AIzaSyDT6naFYtKTQupxrzWdb315TvM00aOpZvE',
    authDomain: 'int-clinic.firebaseapp.com',
    messagingSenderId: '981743238567'
  }
  // firebase: {
  //   apiKey: 'AIzaSyDxj2Ck2tJZE_0XPa6ir5Jja5Sxqjlhbb8',
  //   authDomain: 'int-clinic2.firebaseapp.com',
  //   projectId: 'int-clinic2',
  //   storageBucket: 'int-clinic2.appspot.com',
  //   messagingSenderId: '631089025506',
  //   appId: '1:631089025506:web:6cf1079bc6b9d89c6069bb',
  // },
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map