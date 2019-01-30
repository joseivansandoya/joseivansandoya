module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GradientBar.js":
/*!***********************************!*\
  !*** ./components/GradientBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ivansandoya/Documents/lukelab/joseivansandoya/components/GradientBar.js";


function GradientBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gradientBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\n        .gradientBar {\n          background-image: linear-gradient(to right, #9c6efd , #80c6fb);\n        }\n      "));
}

/* harmony default export */ __webpack_exports__["default"] = (GradientBar);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GradientBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradientBar */ "./components/GradientBar.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./components/Popup.js");
var _jsxFileName = "/Users/ivansandoya/Documents/lukelab/joseivansandoya/components/Layout.js";





function Layout(props) {
  var title = props.title,
      children = props.children,
      showPopup = props.showPopup,
      togglePopup = props.togglePopup;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GradientBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), showPopup && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    togglePopup: togglePopup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\n        * {\n          padding: 0;\n          margin: 0;\n          font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        }\n\n        .wrapper {\n          max-width: 1200px;\n          margin: 0 auto;\n        }\n\n        .footer .gradientBar {\n          padding: 3px 0;\n        }\n      "));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Popup.js":
/*!*****************************!*\
  !*** ./components/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GradientBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradientBar */ "./components/GradientBar.js");
var _jsxFileName = "/Users/ivansandoya/Documents/lukelab/joseivansandoya/components/Popup.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Popup =
/*#__PURE__*/
function (_Component) {
  _inherits(Popup, _Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this, props));
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "popup-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "popup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GradientBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Lorem ipsum dolor sit", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.props.togglePopup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/close.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "popup-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        for: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        for: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-control-full",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        for: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        id: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-control-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "SUBMIT"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\n          .popup-background {\n            position: fixed;\n            top: 0;\n            left: 0;\n            z-index: 5;\n            background-color: rgb(0,0,0);\n            background-color: rgba(0,0,0,0.4);\n            width: 100%;\n            height: 100%;\n          }\n\n          .popup {\n            background-color: #FFFFFF;\n            margin: 10% auto;\n            width: 50%;\n            border-radius: 7px;\n            overflow: hidden;\n            box-shadow: 0px 0px 10px #4F4F4F;\n          }\n\n          .popup .gradientBar {\n            padding: 20px !important;\n            color: #FFFFFF;\n            position: relative;\n            font-weight: lighter;\n          }\n\n          .popup .gradientBar span {\n            position: absolute;\n            top: 20px;\n            right: 20px;\n            display: block;\n            width: 20px;\n            height: 20px;\n            cursor: pointer;\n            opacity: 0.7;\n          }\n\n          .popup .gradientBar span:hover {\n            opacity: 1;\n          }\n\n          .popup .gradientBar span img {\n            max-width: 100%;\n          }\n\n          .popup-body {\n            background: #FFFFFF;\n            padding: 15px;\n            display: flex;\n            flex-wrap: wrap;\n          }\n\n          .form-control {\n            width: 50%;\n            margin-bottom: 5px;\n            padding: 5px;\n            box-sizing: border-box;\n          }\n\n          .form-control-full, .form-control-button {\n            width: 100%;\n            padding: 5px;\n            box-sizing: border-box;\n          }\n\n          .form-control label, .form-control-full label {\n            display: block;\n            font-size: 14px;\n            margin-bottom: 10px;\n            color: #212121;\n          }\n\n          .form-control input,\n          .form-control-full textarea {\n            width: 100%;\n            height: 35px;\n            background: #F7F7F7;\n            border: none;\n            padding: 7px;\n            box-sizing: border-box;\n            border-radius: 5px;\n            font-size: 14px;\n          }\n\n          .form-control-full textarea {\n            height: 100px;\n            resize: none;\n          }\n\n          .form-control-button button {\n            background: #9c6efd;\n            padding: 10px 40px;\n            border: none;\n            border-radius: 5px;\n            font-size: 14px;\n            font-weight: bold;\n            color: #FFFFFF;\n            cursor: pointer;\n          }\n\n          .form-control-button button:hover {\n            background: #8357e0;\n          }\n        "));
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./components/Subtitle.js":
/*!********************************!*\
  !*** ./components/Subtitle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GradientBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradientBar */ "./components/GradientBar.js");
var _jsxFileName = "/Users/ivansandoya/Documents/lukelab/joseivansandoya/components/Subtitle.js";




function Subtitle(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1112955817", [props.titleColor, props.titleColor]]]) + " " + "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1112955817", [props.titleColor, props.titleColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GradientBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1112955817", [props.titleColor, props.titleColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.complementaryText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1112955817",
    css: ".subtitle.__jsx-style-dynamic-selector{display:inline-block;margin-bottom:40px;}h2.__jsx-style-dynamic-selector{color:".concat(props.titleColor, ";padding-bottom:7px;font-weight:normal;}p.__jsx-style-dynamic-selector{color:").concat(props.titleColor, ";padding-top:7px;font-weight:lighter;}.subtitle.__jsx-style-dynamic-selector .gradientBar{width:100%;padding:3px 0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuc2FuZG95YS9Eb2N1bWVudHMvbHVrZWxhYi9qb3NlaXZhbnNhbmRveWEvY29tcG9uZW50cy9TdWJ0aXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHZ0MsQUFLYyxBQU1BLEFBTXhCLFdBQ2MsVUFqQk4sY0FLQSxBQU1ILENBT2xCLElBakJBLFdBV3NCLEdBTkQsaUJBT3JCLEVBTkEiLCJmaWxlIjoiL1VzZXJzL2l2YW5zYW5kb3lhL0RvY3VtZW50cy9sdWtlbGFiL2pvc2VpdmFuc2FuZG95YS9jb21wb25lbnRzL1N1YnRpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmFkaWVudEJhciBmcm9tICcuL0dyYWRpZW50QmFyJ1xuXG5mdW5jdGlvbiBTdWJ0aXRsZSAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICA8aDI+e3Byb3BzLmNvbnRlbnR9PC9oMj5cblxuICAgICAgPEdyYWRpZW50QmFyIC8+XG5cbiAgICAgIDxwPntwcm9wcy5jb21wbGVtZW50YXJ5VGV4dH08L3A+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBjb2xvcjogJHtwcm9wcy50aXRsZUNvbG9yfTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogJHtwcm9wcy50aXRsZUNvbG9yfTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIDpnbG9iYWwoLmdyYWRpZW50QmFyKSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRpdGxlO1xuIl19 */\n/*@ sourceURL=/Users/ivansandoya/Documents/lukelab/joseivansandoya/components/Subtitle.js */"),
    dynamic: [props.titleColor, props.titleColor],
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Subtitle);

/***/ }),

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_GradientBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GradientBar */ "./components/GradientBar.js");
/* harmony import */ var _components_Subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Subtitle */ "./components/Subtitle.js");
var _jsxFileName = "/Users/ivansandoya/Documents/lukelab/joseivansandoya/pages/article.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Article =
/*#__PURE__*/
function (_Component) {
  _inherits(Article, _Component);

  function Article(props) {
    var _this;

    _classCallCheck(this, Article);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Article).call(this, props));
    _this.state = {
      showPopup: false
    };
    _this.togglePopup = _this.togglePopup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Article, [{
    key: "togglePopup",
    value: function togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Article",
        showPopup: this.state.showPopup,
        togglePopup: this.togglePopup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GradientBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.togglePopup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "CONTACT ME"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "article-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "This is article title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Published: 2019-01-31"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/myimage.jpg",
        alt: "myimage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "article-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales diam at leo ultricies feugiat. Integer augue ipsum, faucibus in ultricies non, ornare eu urna. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pretium justo eu ex aliquet, at ultricies enim semper. Aliquam ac elit at ante eleifend faucibus a non quam. Donec aliquet venenatis augue. Suspendisse at erat placerat, egestas magna id, dignissim nulla. Nulla at neque tempus, porta eros mattis, ullamcorper neque."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Integer dapibus, arcu vitae porta posuere, neque augue rutrum mi, eu malesuada lacus leo id lorem. Vestibulum interdum elit non arcu luctus, a euismod tortor lacinia. Pellentesque pellentesque mi ut nunc blandit, non porttitor nisl auctor. Nulla et sapien sit amet diam ullamcorper sodales sit amet eu nisl. Fusce imperdiet gravida ante, pulvinar pretium justo gravida non. Curabitur scelerisque massa nec interdum dapibus. Etiam tristique sodales risus, at efficitur justo bibendum et. Suspendisse sit amet est neque. Mauris at luctus urna. Donec vitae elementum mi."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\n          .article-content h2 {\n            margin-top: 50px;\n            margin-bottom: 20px;\n            font-size: 32px;\n          }\n\n          .article-content .date {\n            font-size: 12px;\n            color: #212121;\n            display: block;\n            margin-bottom: 50px;\n          }\n\n          .article-content img {\n            max-width: 100%;\n          }\n\n          .article-body {\n            margin: 40px 0;\n          }\n\n          .article-body p {\n            margin: 0 auto;\n            margin-bottom: 20px;\n            line-height: 25px;\n            width: 80%;\n            color: #212121;\n          }\n\n          .menu {\n            list-style: none;\n            display: flex;\n            width: 100%;\n            padding: 30px 0;\n          }\n  \n          .menu li {\n            flex-grow: 1;\n            text-align: center;\n          }\n  \n          .menu li a {\n            color: #FFFFFF;\n            cursor: pointer;\n            opacity: 0.8;\n          }\n  \n          .menu li a:hover {\n            opacity: 1;\n          }\n\n          @media all and (max-width: 1200px) {\n            .wrapper {\n              padding: 0 20px;\n            }\n          }\n\n          @media all and (max-width: 420px) {\n            .menu {\n              display: block;\n              padding: 15px 0 !important;\n            }\n  \n            .menu li {\n              margin: 15px 0;\n            }\n          }\n        "));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/article.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/article.js */"./pages/article.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=article.js.map