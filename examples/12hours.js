webpackJsonp([7],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"rc-time-picker/assets/index.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
throw new Error("Cannot find module \"moment\"");
throw new Error("Cannot find module \"rc-time-picker\"");
/* eslint no-console:0 */










var format = 'h:mm a';

var now = __WEBPACK_IMPORTED_MODULE_3_moment___default()().hour(0).minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_rc_time_picker___default.a, {
  showSecond: false,
  defaultValue: now,
  className: 'xxx',
  onChange: onChange,
  format: format,
  use12Hours: true
}), document.getElementById('__react-content'));

/***/ })

},[115]);
//# sourceMappingURL=12hours.js.map