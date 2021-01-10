(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\trist\Documents\Projects\portfolio-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0PS2":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _particle_background_particle_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../particle-background/particle-background.component */ "7yHG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title-card/title-card.component */ "3tRm");
/* harmony import */ var _about_myself_text_about_myself_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about-myself-text/about-myself-text.component */ "2Otx");
/* harmony import */ var _skills_map_skills_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills-map/skills-map.component */ "Lfyo");
/* harmony import */ var _carrer_timeline_carrer_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../carrer-timeline/carrer-timeline.component */ "gfGN");
/* harmony import */ var _misc_list_misc_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../misc-list/misc-list.component */ "DAdy");









class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 13, vars: 0, consts: [[1, "background"], [1, "content"], ["rowHeight", "100vh", "cols", "1", 1, "main-grid"], ["data-aos", "zoom-in-up"], [1, "title-card"], ["cols", "1", 1, "main-grid"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-particle-background", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-title-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about-myself-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-skills-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-carrer-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-misc-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_particle_background_particle_background_component__WEBPACK_IMPORTED_MODULE_1__["ParticleBackgroundComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_3__["TitleCardComponent"], _about_myself_text_about_myself_text_component__WEBPACK_IMPORTED_MODULE_4__["AboutMyselfTextComponent"], _skills_map_skills_map_component__WEBPACK_IMPORTED_MODULE_5__["SkillsMapComponent"], _carrer_timeline_carrer_timeline_component__WEBPACK_IMPORTED_MODULE_6__["CarrerTimelineComponent"], _misc_list_misc_list_component__WEBPACK_IMPORTED_MODULE_7__["MiscListComponent"]], styles: [".background[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 0;\n  overflow: hidden;\n  top: 0;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  align-content: center;\n  justify-content: center;\n}\n.main-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 150px;\n}\n.title-card[_ngcontent-%COMP%] {\n  max-width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQURGO0FBSUE7RUFDRSxjQUFBO0FBRkYiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMDtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn1cblxuLnRpdGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDk1JTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2Otx":
/*!******************************************************************!*\
  !*** ./src/app/about-myself-text/about-myself-text.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutMyselfTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMyselfTextComponent", function() { return AboutMyselfTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutMyselfTextComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMyselfTextComponent.ɵfac = function AboutMyselfTextComponent_Factory(t) { return new (t || AboutMyselfTextComponent)(); };
AboutMyselfTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMyselfTextComponent, selectors: [["app-about-myself-text"]], decls: 22, vars: 0, consts: [["data-aos", "fade-up", 1, "section-title", "extra-space"], ["data-aos", "fade-up", 1, "text-container"], [1, "text-content"], [2, "font-weight", "bold"]], template: function AboutMyselfTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About Myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hey hey !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I am happy that you have found my personal webpage. I hope you like the first impression!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I should introduce myself. My name is Tristan Marsell, just call me Tristan, Tris, whatsoever. I'm 21 year old software developer, living in Frankfurt am Main (the best city in my opinion).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My hobbies are travelling, dealing with sociology, politics and mental-health, relaxing on the couch with Netflix and of course my great passion: software development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "When I was 11 years old, I was already sure that I wanted to work in software development in the future. Since then I started to acquire knowledge about software development and a few years later I started to write my first Java programs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Immediately afterwards, I became familiar with Android development for the first time and also wrote my first apps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "But all this was not enough for my curiosity. That's why I also took a closer look at embedded development and others and ended up gaining a lot of experience in many areas of software development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nowadays, I am active in many areas. Mainly in the full-stack area, creating websites, setting up and managing shop systems and sometimes also developing apps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "If I've caught your interest, or you just want to chat, there are several ways to contact me listed at the bottom of this webpage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".extra-space[_ngcontent-%COMP%] {\n  padding-top: 300px;\n}\n.text-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.text-content[_ngcontent-%COMP%] {\n  color: white;\n  width: 65%;\n  margin-left: auto;\n  margin-right: auto;\n  border: 2px solid grey;\n  border-radius: 20px;\n}\n.text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n@media screen and (max-width: 599px) {\n  .text-content[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW15c2VsZi10ZXh0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFMQTtFQVNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUtBO0VBQ0U7SUFDRSxVQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJhYm91dC1teXNlbGYtdGV4dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYS1zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAzMDBweDtcbn1cblxuLnRleHQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC50ZXh0LWNvbnRlbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMyselfTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-myself-text',
                templateUrl: './about-myself-text.component.html',
                styleUrls: ['./about-myself-text.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3tRm":
/*!****************************************************!*\
  !*** ./src/app/title-card/title-card.component.ts ***!
  \****************************************************/
/*! exports provided: TitleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCardComponent", function() { return TitleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class TitleCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
TitleCardComponent.ɵfac = function TitleCardComponent_Factory(t) { return new (t || TitleCardComponent)(); };
TitleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleCardComponent, selectors: [["app-title-card"]], decls: 13, vars: 0, consts: [[1, "header-card"], [1, "card-container"], ["alt", "Tristan Marsell", "src", "https://avatars1.githubusercontent.com/u/20514588?s=460&u=ece8cfb85d84ffe7b4766a97f5a1eed0215f991a&v=4", 1, "avatar"], ["id", "spacer"], [1, "title", "fading"], ["id", "nameElement", 1, "name"], [1, "subtitle"], [1, "down-button"], ["icon", "arrow-alt-circle-down"]], template: function TitleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tristan Marsell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Scroll down for more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".header-card[_ngcontent-%COMP%] {\n  margin-top: 150px;\n  background-color: rgba(50, 50, 50, 0.5);\n  animation: wait 300ms, fade-in 800ms 300ms;\n}\n.header-card[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  object-fit: cover;\n  max-height: 100px;\n  animation: wait 800ms, fade-in 800ms 800ms;\n}\n.title[_ngcontent-%COMP%] {\n  align-self: center;\n  height: 100%;\n  display: block;\n}\n.title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-weight: bold;\n  color: #ffffff;\n  text-align: center;\n  font-size: 26px;\n}\n.title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: lighter;\n  font-size: 16px;\n  text-align: center;\n}\n.fading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  animation: wait 1000ms, fade-in 800ms 1000ms;\n}\n.fading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  animation: wait 1200ms, fade-in 800ms 1200ms;\n}\n.down-button[_ngcontent-%COMP%] {\n  color: white;\n  width: 200px;\n  height: 200px;\n  text-align: center;\n  padding-top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  animation: wait 1700ms, fade-in 800ms 1700ms;\n}\nfa-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n#spacer[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLWNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHVDQUFBO0VBb0ZBLDBDQUFBO0FBbEZGO0FBRUE7RUFDRSxhQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQXlFQSwwQ0FBQTtBQXpFRjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUZGO0FBREE7RUFNSSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBUkE7RUFjSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU9BO0VBZ0RFLDRDQUFBO0FBcERGO0FBSUE7RUFnREUsNENBQUE7QUFqREY7QUFVQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBZ0NBLDRDQUFBO0FBdkNGO0FBV0E7RUFDRSxlQUFBO0FBVEY7QUFhQTtFQUNFLFlBQUE7QUFYRjtBQWdCQTtFQUNFO0lBQ0UsVUFBQTtFQWRGO0VBZ0JBO0lBQ0UsVUFBQTtFQWRGO0FBQ0Y7QUFpQkE7RUFDRTtJQUFLLFVBQUE7RUFkTDtFQWVBO0lBQU8sVUFBQTtFQVpQO0FBQ0YiLCJmaWxlIjoidGl0bGUtY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XG4gIC5mYWRlLWluKDMwMG1zKVxufVxuXG4uaGVhZGVyLWNhcmQgLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgLmZhZGUtaW4oODAwbXMpXG59XG5cbi50aXRsZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICAubmFtZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cblxuICAuc3VidGl0bGUge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uZmFkaW5nIHtcbiAgaDEge1xuICAgIC5mYWRlLWluKDEwMDBtcyk7XG4gIH1cbiAgaDIge1xuICAgIC5mYWRlLWluKDEyMDBtcylcbiAgfVxufVxuXG4uZG93bi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIC5mYWRlLWluKDE3MDBtcylcbn1cblxuZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLy8gSUQgRWxlbWVudHNcbiNzcGFjZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi8vIEtleWZyYW1lc1xuXG5Aa2V5ZnJhbWVzIHdhaXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHsgb3BhY2l0eTogMDsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vLyBNaXhpbnNcblxuLmZhZGUtaW4oQHdhaXRUaW1lKSB7XG4gIGFuaW1hdGlvbjpcbiAgICB3YWl0IEB3YWl0VGltZSxcbiAgICBmYWRlLWluIDgwMG1zIEB3YWl0VGltZVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-card',
                templateUrl: './title-card.component.html',
                styleUrls: ['./title-card.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7yHG":
/*!**********************************************************************!*\
  !*** ./src/app/particle-background/particle-background.component.ts ***!
  \**********************************************************************/
/*! exports provided: ParticleBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleBackgroundComponent", function() { return ParticleBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ParticleBackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
}
ParticleBackgroundComponent.ɵfac = function ParticleBackgroundComponent_Factory(t) { return new (t || ParticleBackgroundComponent)(); };
ParticleBackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParticleBackgroundComponent, selectors: [["app-particle-background"]], decls: 1, vars: 0, consts: [["id", "particles-js"]], template: function ParticleBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#particles-js[_ngcontent-%COMP%] {\n  background-color: #000000;\n  height: 100%;\n  width: 100%;\n  animation: wait 150ms, fade-in 800ms 150ms;\n}\n@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY2xlLWJhY2tncm91bmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBdUJBLDBDQUFBO0FBckJGO0FBSUE7RUFDRTtJQUNFLFVBQUE7RUFGRjtFQUlBO0lBQ0UsVUFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFO0lBQUssVUFBQTtFQUZMO0VBR0E7SUFBTyxVQUFBO0VBQVA7QUFDRiIsImZpbGUiOiJwYXJ0aWNsZS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhcnRpY2xlcy1qc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLmZhZGUtaW4oMTUwbXMpO1xufVxuXG4vLyBLZXlmcmFtZXNcblxuQGtleWZyYW1lcyB3YWl0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLy8gTWl4aW5zXG5cbi5mYWRlLWluKEB3YWl0VGltZSkge1xuICBhbmltYXRpb246XG4gICAgd2FpdCBAd2FpdFRpbWUsXG4gICAgZmFkZS1pbiA4MDBtcyBAd2FpdFRpbWVcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticleBackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-particle-background',
                templateUrl: './particle-background.component.html',
                styleUrls: ['./particle-background.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DAdy":
/*!**************************************************!*\
  !*** ./src/app/misc-list/misc-list.component.ts ***!
  \**************************************************/
/*! exports provided: MiscListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscListComponent", function() { return MiscListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class MiscListComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.cols = 2;
        this.gridByBreakpoint = {
            xl: 2,
            lg: 2,
            md: 2,
            sm: 2,
            xs: 1
        };
        // Source: https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
        ]).subscribe(result => {
            if (result.matches) {
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
                    this.cols = this.gridByBreakpoint.xs;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
                    this.cols = this.gridByBreakpoint.sm;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                    this.cols = this.gridByBreakpoint.md;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                    this.cols = this.gridByBreakpoint.lg;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                    this.cols = this.gridByBreakpoint.xl;
                }
            }
        });
    }
    ngOnInit() {
    }
}
MiscListComponent.ɵfac = function MiscListComponent_Factory(t) { return new (t || MiscListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MiscListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiscListComponent, selectors: [["app-misc-list"]], decls: 16, vars: 0, consts: [["data-aos", "zoom-in-up", 1, "section-title"], ["data-aos", "zoom-in-up", 1, "button-container"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://github.com/PDesire", "mat-raised-button", "", 1, "button-style", "github"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://gitlab.com/PDesire", "mat-raised-button", "", 1, "button-style", "gitlab"], ["data-aos", "zoom-in-up", 1, "section-title", "extra-space"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://twitter.com/PDesireDev", "mat-raised-button", "", 1, "button-style", "twitter"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://www.xing.com/profile/Tristan_Marsell2", "mat-raised-button", "", 1, "button-style", "xing"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:tristan.marsell@axitera.de", "mat-raised-button", "", 1, "button-style", "mail"]], template: function MiscListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "GitLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact / Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Xing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], styles: [".extra-space[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n.button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: table;\n  text-align: center;\n}\n.button-style[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  margin: 5px;\n}\n.github[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n}\n.gitlab[_ngcontent-%COMP%] {\n  color: white;\n  background-color: orange;\n}\n.twitter[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #00b4e3;\n}\n.xing[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #89c625;\n}\n.mail[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #255bc6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc2MtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFMRjtBQVFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBTkYiLCJmaWxlIjoibWlzYy1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhLXNwYWNlIHtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24tc3R5bGUge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5naXRodWIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZ2l0bGFiIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi50d2l0dGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiNGUzO1xufVxuXG4ueGluZyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5YzYyNTtcbn1cblxuLm1haWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTViYzY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-misc-list',
                templateUrl: './misc-list.component.html',
                styleUrls: ['./misc-list.component.less']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "Lfyo":
/*!****************************************************!*\
  !*** ./src/app/skills-map/skills-map.component.ts ***!
  \****************************************************/
/*! exports provided: SkillsMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsMapComponent", function() { return SkillsMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






class SkillsMapComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.cols = 3;
        this.gridByBreakpoint = {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 2,
            xs: 1
        };
        // Source: https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge,
        ]).subscribe(result => {
            if (result.matches) {
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall]) {
                    this.cols = this.gridByBreakpoint.xs;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small]) {
                    this.cols = this.gridByBreakpoint.sm;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium]) {
                    this.cols = this.gridByBreakpoint.md;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large]) {
                    this.cols = this.gridByBreakpoint.lg;
                }
                if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge]) {
                    this.cols = this.gridByBreakpoint.xl;
                }
            }
        });
    }
    ngOnInit() { }
}
SkillsMapComponent.ɵfac = function SkillsMapComponent_Factory(t) { return new (t || SkillsMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
SkillsMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsMapComponent, selectors: [["app-skills-map"]], decls: 59, vars: 1, consts: [["data-aos", "fade-up", 1, "section-title"], ["gutterSize", "-100px", 3, "cols"], ["data-aos", "zoom-in"], [1, "skill-card"], [1, "inner-content"], ["alt", "angular", "src", "assets/logos/angular.webp", 1, "inner-image"], [1, "inner-text"], ["alt", "flutter", "src", "assets/logos/flutter.webp", 1, "inner-image"], ["alt", "kotlin", "src", "assets/logos/kotlin.webp", 1, "inner-image"], ["alt", "typescript", "src", "assets/logos/typescript.webp", 1, "inner-image"], ["alt", "android", "src", "assets/logos/android.webp", 1, "inner-image"], ["alt", "nodejs", "src", "assets/logos/nodejs.webp", 1, "inner-image"], ["alt", "android", "src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/640px-Ionic_Logo.svg.png", 1, "inner-image"], ["alt", "java", "src", "assets/logos/java.webp", 1, "inner-image"], ["alt", "golang", "src", "assets/logos/golang.webp", 1, "inner-image"], ["data-aos", "fade-up", 1, "bottom-title"]], template: function SkillsMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Flutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Kotlin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Golang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "And more...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]], styles: [".skill-card[_ngcontent-%COMP%] {\n  background-color: rgba(50, 50, 50, 0.5);\n  width: 50%;\n  height: 50%;\n  min-width: 250px;\n  min-height: 250px;\n}\n.inner-content[_ngcontent-%COMP%] {\n  padding-top: 20%;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.inner-image[_ngcontent-%COMP%] {\n  height: 70%;\n  max-width: 50%;\n  max-height: 50%;\n  object-fit: contain;\n  transition: all 0.2s ease-in-out;\n}\n.inner-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.inner-text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: 'Raleway', sans-serif;\n}\n.bottom-title[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  padding-top: -40px;\n  padding-bottom: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy1tYXAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQURGO0FBSUE7RUFDRSxxQkFBQTtBQUZGO0FBS0E7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7QUFIRjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUpGIiwiZmlsZSI6InNraWxscy1tYXAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xufVxuXG4uaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlubmVyLWltYWdlIHtcbiAgaGVpZ2h0OiA3MCU7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbm5lci1pbWFnZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmlubmVyLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbi5ib3R0b20tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IC00MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-map',
                templateUrl: './skills-map.component.html',
                styleUrls: ['./skills-map.component.less']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(library) {
        this.library = library;
        this.title = 'portfolio-app';
        // Chrome hack
        window.scrollTo(0, document.body.scrollHeight);
        // Fontawesome library load
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBriefcase"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowAltCircleDown"]);
    }
    // tslint:disable-next-line:typedef use-lifecycle-interface
    ngOnInit() {
        // tslint:disable-next-line:only-arrow-functions typedef
        particlesJS.load('particles-js', 'assets/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
        AOS.init({
            easing: 'ease',
            mirror: true
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _particle_background_particle_background_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./particle-background/particle-background.component */ "7yHG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./title-card/title-card.component */ "3tRm");
/* harmony import */ var ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mzd-timeline */ "VKMx");
/* harmony import */ var _carrer_timeline_carrer_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carrer-timeline/carrer-timeline.component */ "gfGN");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _about_myself_text_about_myself_text_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-myself-text/about-myself-text.component */ "2Otx");
/* harmony import */ var _skills_map_skills_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./skills-map/skills-map.component */ "Lfyo");
/* harmony import */ var _misc_list_misc_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./misc-list/misc-list.component */ "DAdy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_10__["MzdTimelineModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        _particle_background_particle_background_component__WEBPACK_IMPORTED_MODULE_5__["ParticleBackgroundComponent"],
        _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__["TitleCardComponent"],
        _carrer_timeline_carrer_timeline_component__WEBPACK_IMPORTED_MODULE_11__["CarrerTimelineComponent"],
        _about_myself_text_about_myself_text_component__WEBPACK_IMPORTED_MODULE_14__["AboutMyselfTextComponent"],
        _skills_map_skills_map_component__WEBPACK_IMPORTED_MODULE_15__["SkillsMapComponent"],
        _misc_list_misc_list_component__WEBPACK_IMPORTED_MODULE_16__["MiscListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_10__["MzdTimelineModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                    _particle_background_particle_background_component__WEBPACK_IMPORTED_MODULE_5__["ParticleBackgroundComponent"],
                    _title_card_title_card_component__WEBPACK_IMPORTED_MODULE_9__["TitleCardComponent"],
                    _carrer_timeline_carrer_timeline_component__WEBPACK_IMPORTED_MODULE_11__["CarrerTimelineComponent"],
                    _about_myself_text_about_myself_text_component__WEBPACK_IMPORTED_MODULE_14__["AboutMyselfTextComponent"],
                    _skills_map_skills_map_component__WEBPACK_IMPORTED_MODULE_15__["SkillsMapComponent"],
                    _misc_list_misc_list_component__WEBPACK_IMPORTED_MODULE_16__["MiscListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_10__["MzdTimelineModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gfGN":
/*!**************************************************************!*\
  !*** ./src/app/carrer-timeline/carrer-timeline.component.ts ***!
  \**************************************************************/
/*! exports provided: CarrerTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrerTimelineComponent", function() { return CarrerTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-mzd-timeline */ "VKMx");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





class CarrerTimelineComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarrerTimelineComponent.ɵfac = function CarrerTimelineComponent_Factory(t) { return new (t || CarrerTimelineComponent)(); };
CarrerTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarrerTimelineComponent, selectors: [["app-carrer-timeline"]], decls: 82, vars: 5, consts: [[1, "section-title"], ["data-aos", "zoom-in-right", 1, "expander", 3, "card"], ["icon", "briefcase"], [1, "exp-card"], [1, "company-highlight"], [1, "job-highlight"], ["data-aos", "zoom-in-left", 1, "expander", 3, "card"]], template: function CarrerTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Carrer Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mzd-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mzd-timeline-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mzd-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Axitera GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | Frankfurt am Main (now) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Trainee & Junior Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " | Dec. 2019 \u2192 now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Axitera GmbH gave me the opportunity to start an apprenticeship (in german \"Ausbildung\") with them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Working now on Angular Projects, e-Invoice systems, Java Spring applications, E-Commerce platforms (Gambio) and Flutter Projects for many business segments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mzd-timeline-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mzd-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Axitera GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " | Frankfurt am Main ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Junior Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " | Feb. 2019 \u2192 Dec. 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Due to the takeover of the SQRL Solutions UG, I could still work on the Angular projects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Began to write microservices based on Golang and TypeScript with the Express Framework. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mzd-timeline-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mzd-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "SQRL Solutions UG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " | Frankfurt am Main ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Junior Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " | Sep. 2018 \u2192 Feb. 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Continued working on Angular projects for mobility business segments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mzd-timeline-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mzd-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "SQRL Solutions UG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " | Frankfurt am Main ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Internship / Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " | Aug. 2018 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Worked on Angular based webpages for mobility business segments and could take a look inside the carrer of a software developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mzd-timeline-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mzd-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "PHYTEC Messtechnik GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " | Mainz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Internship / Embedded Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " | June. 2017 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Created audio applications based on PulseAudio and sndfile for the phyBOARD-Wega in C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", false);
    } }, directives: [ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_1__["MzdTimelineComponent"], ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_1__["MzdTimelineContentComponent"], ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_1__["MzdIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: [".exp-card[_ngcontent-%COMP%] {\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n}\n.exp-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  color: grey;\n  font-weight: 300;\n}\n.exp-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n}\n.exp-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.company-highlight[_ngcontent-%COMP%] {\n  font-family: 'Raleway', sans-serif;\n  font-weight: bold;\n}\n.job-highlight[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.expander[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\nmzd-icon[_ngcontent-%COMP%] {\n  top: 19px;\n  right: -6px;\n}\n@media screen and (max-width: 599px) {\n  mzd-icon[_ngcontent-%COMP%] {\n    left: 22px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJlci10aW1lbGluZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtBQUNGO0FBSEE7RUFLSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQVBBO0VBVUksa0NBQUE7RUFDQSxnQkFBQTtBQUFKO0FBWEE7RUFlSSxrQkFBQTtBQURKO0FBS0E7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0FBSEY7QUFNQTtFQUNFLG1CQUFBO0FBSkY7QUFPQTtFQUNFLG9CQUFBO0FBTEY7QUFRQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBTkY7QUFTQTtFQUNFO0lBQ0UscUJBQUE7RUFQRjtBQUNGIiwiZmlsZSI6ImNhcnJlci10aW1lbGluZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG5cbiAgbWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgfVxufVxuXG4uY29tcGFueS1oaWdobGlnaHQge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmpvYi1oaWdobGlnaHQge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZXhwYW5kZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxubXpkLWljb24ge1xuICB0b3A6IDE5cHg7XG4gIHJpZ2h0OiAtNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICBtemQtaWNvbiB7XG4gICAgbGVmdDogMjJweCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrerTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carrer-timeline',
                templateUrl: './carrer-timeline.component.html',
                styleUrls: ['./carrer-timeline.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");





const routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map