webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_GradientBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GradientBar */ "./components/GradientBar.js");
/* harmony import */ var _components_Subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Subtitle */ "./components/Subtitle.js");
/* harmony import */ var _components_PortfolioCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PortfolioCard */ "./components/PortfolioCard.js");
/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArticleCard */ "./components/ArticleCard.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ivansandoya/Documents/lukelab/joseivansandoya/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      showPopup: false
    };
    _this.togglePopup = _this.togglePopup.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
    key: "togglePopup",
    value: function togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  }, {
    key: "scroll",
    value: function scroll(elementId) {
      var element = window.document.querySelector("#".concat(elementId));
      element.scrollIntoView({
        behavior: "smooth"
      });
    } //<li><a onClick={this.togglePopup}>CONTACT ME</a></li>

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Jos\xE9 Iv\xE1n Sandoya",
        showPopup: this.state.showPopup,
        togglePopup: this.togglePopup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "JOSE ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "SANDOYA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Software Engineer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Seven years of progressive experience. Looking for permanently learning about new tools and techniques. I consider myself an active fan of trending technologies like machine learning, IoT and mobile."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "https://www.linkedin.com/in/joseivansandoya/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/in.svg",
        alt: "LinkedIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "https://github.com/joseivansandoya",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/gh.svg",
        alt: "GitHub",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "https://twitter.com/joseivansandoya",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/tw.svg",
        alt: "Twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/jose-ivan-sandoya.jpg",
        alt: "Jose Ivan Sandoya",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GradientBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "mailto:jisandoya@gmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "CONTACT ME"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.scroll('portfolio');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "PORTFOLIO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.scroll('blog');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "BLOG"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "portfolio",
        id: "portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: "PORTFOLIO",
        complementaryText: "Lorem ipsum dolor sit amet",
        titleColor: "#FFFFFF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        link: "https://github.com/joseivansandoya/drpie",
        title: "Doctor Pie Ecuador (Bridged mobile application)",
        stack: "React | React Native | LAMP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        link: "https://github.com/joseivansandoya/styled",
        title: "Styled components POC",
        stack: "React | Styled Components",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        link: "https://github.com/joseivansandoya/redaxa",
        title: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "blog",
        id: "blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Subtitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: "BLOG",
        complementaryText: "Lorem ipsum dolor sit amet",
        titleColor: "#212121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "\n          .header .wrapper {\n            display: flex;\n            flex-wrap: nowrap\n          }\n  \n          .item {\n            width: 50%;\n          }\n  \n          .item.text {\n            align-self: center;\n          }\n  \n          .item.text h1 {\n            font-weight: normal;\n            font-size: 38px;\n          }\n  \n          .item.text h1 span {\n            font-weight: bold;\n          }\n  \n          .item.text h2 {\n            font-weight: lighter;\n            color: #212121;\n            margin-top: 10px;\n            margin-bottom: 40px;\n          }\n  \n          .item.text p {\n            color: #212121;\n            width: 80%;\n            line-height: 21px;\n          }\n  \n          .social {\n            margin-top: 20px;\n          }\n  \n          .social a {\n            margin-right: 10px;\n          }\n  \n          .social img {\n            width: 22px;\n          }\n  \n          .item img {\n            max-width: 100%;\n            position: relative;\n            top: 3px;\n          }\n  \n          .menu {\n            list-style: none;\n            display: flex;\n            width: 100%;\n            padding: 30px 0;\n          }\n  \n          .menu li {\n            flex-grow: 1;\n            text-align: center;\n          }\n  \n          .menu li a {\n            color: #FFFFFF;\n            cursor: pointer;\n            opacity: 0.8;\n            text-decoration: none;\n          }\n  \n          .menu li a:hover {\n            opacity: 1;\n          }\n  \n          .portfolio {\n            background-color: #282828;\n          }\n  \n          .portfolio .wrapper {\n            padding-top: 30px;\n            padding-bottom: 30px;\n          }\n  \n          .blog {\n            background-color: #ededed;\n            padding-bottom: 40px;\n          }\n  \n          .portfolio .collection, .blog .collection {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n            grid-gap: 20px;\n          }\n          \n          .blog .wrapper {\n            padding-top: 30px;\n            padding-bottom: 30px;\n          }\n  \n          @media all and (max-width: 1200px) {\n            .wrapper {\n              padding: 0 20px;\n            }\n  \n            .item.text p {\n              width: 90%;\n            }\n          }\n  \n          @media all and (max-width: 720px) {\n            .item.text p {\n              width: 100%;\n            }\n          }\n  \n          @media all and (max-width: 680px) {\n            .wrapper {\n              flex-direction: column;\n            }\n  \n            .item {\n              width: 100%;\n            }\n  \n            .item.text {\n              text-align: center;\n              padding-top: 40px;\n            }\n          }\n  \n          @media all and (max-width: 420px) {\n            .menu {\n              display: block;\n              padding: 15px 0 !important;\n            }\n  \n            .menu li {\n              margin: 15px 0;\n            }\n          }\n  \n          @media all and (max-width: 340px) {\n            .collection {\n              grid-template-columns: auto;\n            }\n  \n            .collection .horizontal-card {\n              height: auto !important;\n            }\n  \n            .horizontal-card .image {\n              display: none;\n            }\n  \n            .horizontal-card .description {\n              width: 100%;\n            }\n          }\n        "));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4d8c8f388853d568ac2a.hot-update.js.map