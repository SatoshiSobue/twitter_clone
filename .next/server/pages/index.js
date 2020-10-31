module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateTweetForm.tsx":
/*!****************************************!*\
  !*** ./components/CreateTweetForm.tsx ***!
  \****************************************/
/*! exports provided: CreateTweetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTweetForm\", function() { return CreateTweetForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n\nvar _jsxFileName = \"/Users/satoshi/twitter_clone/components/CreateTweetForm.tsx\";\n\n\n\n\n\nconst CreateTweetForm = () => {\n  const {\n    0: input,\n    1: setInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\");\n  const {\n    feed\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useFeed\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    style: {\n      padding: \"2rem\"\n    },\n    onSubmit: async e => {\n      e.preventDefault(); // we include \"false\" here to ask SWR not to revalidate the cache with\n      // the feed returned from the server. we'll remove this after the next section\n\n      console.log(feed);\n      Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(\"/api/feed\", [{\n        text: input,\n        author: {\n          username: \"Marshall Mathers\"\n        }\n      }, ...feed], false);\n      Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"])(\"/api/tweet/create\", {\n        text: input\n      });\n      setInput(\"\");\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          value: input,\n          onChange: e => setInput(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          htmlType: \"submit\",\n          children: \"Tweet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZVR3ZWV0Rm9ybS50c3g/NGQzYSJdLCJuYW1lcyI6WyJDcmVhdGVUd2VldEZvcm0iLCJpbnB1dCIsInNldElucHV0IiwidXNlU3RhdGUiLCJmZWVkIiwidXNlRmVlZCIsInBhZGRpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibXV0YXRlIiwidGV4dCIsImF1dGhvciIsInVzZXJuYW1lIiwiZmV0Y2hlciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxlQUFlLEdBQUcsTUFBTTtBQUNuQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXQywyREFBTyxFQUF4QjtBQUVBLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFQ7QUFFRSxZQUFRLEVBQUUsTUFBTUMsQ0FBTixJQUFXO0FBQ25CQSxPQUFDLENBQUNDLGNBQUYsR0FEbUIsQ0FHbkI7QUFDQTs7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFDQU8sd0RBQU0sQ0FDSixXQURJLEVBRUosQ0FBQztBQUFFQyxZQUFJLEVBQUVYLEtBQVI7QUFBZVksY0FBTSxFQUFFO0FBQUVDLGtCQUFRLEVBQUU7QUFBWjtBQUF2QixPQUFELEVBQTRELEdBQUdWLElBQS9ELENBRkksRUFHSixLQUhJLENBQU47QUFNQVcsbUVBQU8sQ0FBQyxtQkFBRCxFQUFzQjtBQUM3QkgsWUFBSSxFQUFFWDtBQUR1QixPQUF0QixDQUFQO0FBSUFDLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDRCxLQW5CSDtBQUFBLDJCQXFCRSxxRUFBQyx3Q0FBRDtBQUFBLDhCQUNFLHFFQUFDLHdDQUFEO0FBQUEsK0JBQ0UscUVBQUMsMENBQUQ7QUFBTyxlQUFLLEVBQUVELEtBQWQ7QUFBcUIsa0JBQVEsRUFBRU0sQ0FBQyxJQUFJTCxRQUFRLENBQUNLLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0UscUVBQUMsd0NBQUQ7QUFBQSwrQkFDRSxxRUFBQywyQ0FBRDtBQUFRLGtCQUFRLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQ0QsQ0FyQ00iLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVR3ZWV0Rm9ybS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4vdXRpbC9mZXRjaGVyXCJcbmltcG9ydCB7IEJ1dHRvbiwgbWVzc2FnZSwgUm93LCBDb2wsIElucHV0IH0gZnJvbSBcImFudGRcIlxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VGZWVkIH0gZnJvbSBcIi4vdXRpbC9ob29rc1wiXG5cbmV4cG9ydCBjb25zdCBDcmVhdGVUd2VldEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgeyBmZWVkIH0gPSB1c2VGZWVkKClcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjJyZW1cIiB9fVxuICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyB3ZSBpbmNsdWRlIFwiZmFsc2VcIiBoZXJlIHRvIGFzayBTV1Igbm90IHRvIHJldmFsaWRhdGUgdGhlIGNhY2hlIHdpdGhcbiAgICAgICAgLy8gdGhlIGZlZWQgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLiB3ZSdsbCByZW1vdmUgdGhpcyBhZnRlciB0aGUgbmV4dCBzZWN0aW9uXG4gICAgICAgIGNvbnNvbGUubG9nKGZlZWQpXG4gICAgICAgIG11dGF0ZShcbiAgICAgICAgICBcIi9hcGkvZmVlZFwiLFxuICAgICAgICAgIFt7IHRleHQ6IGlucHV0LCBhdXRob3I6IHsgdXNlcm5hbWU6IFwiTWFyc2hhbGwgTWF0aGVyc1wiIH0gfSwgLi4uZmVlZF0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuXG4gICAgICAgIGZldGNoZXIoXCIvYXBpL3R3ZWV0L2NyZWF0ZVwiLCB7XG4gICAgICAgIHRleHQ6IGlucHV0LFxuICAgICAgICB9KVxuXG4gICAgICAgIHNldElucHV0KFwiXCIpXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIj5Ud2VldDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZm9ybT5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CreateTweetForm.tsx\n");

/***/ }),

/***/ "./components/Feed.tsx":
/*!*****************************!*\
  !*** ./components/Feed.tsx ***!
  \*****************************/
/*! exports provided: Feed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Feed\", function() { return Feed; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n\n\nvar _jsxFileName = \"/Users/satoshi/twitter_clone/components/Feed.tsx\";\n\n\nconst Feed = () => {\n  const {\n    feed\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useFeed\"])();\n  return feed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: feed.map(({\n      id,\n      text,\n      author\n    }, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, undefined)\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false) : null;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlZWQudHN4PzAzYmYiXSwibmFtZXMiOlsiRmVlZCIsImZlZWQiLCJ1c2VGZWVkIiwibWFwIiwiaWQiLCJ0ZXh0IiwiYXV0aG9yIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUN4QixRQUFNO0FBQUVDO0FBQUYsTUFBV0MsMkRBQU8sRUFBeEI7QUFDQSxTQUFPRCxJQUFJLGdCQUNUO0FBQUEsY0FDR0EsSUFBSSxDQUFDRSxHQUFMLENBQVMsQ0FBQztBQUFFQyxRQUFGO0FBQU1DLFVBQU47QUFBWUM7QUFBWixLQUFELEVBQXVCQyxDQUF2QixrQkFDUixxRUFBQyx5Q0FBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVdFLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQURILG1CQURTLEdBUVAsSUFSSjtBQVNELENBWE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlZWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJhbnRkXCJcbmltcG9ydCB7IHVzZUZlZWQgfSBmcm9tIFwiLi91dGlsL2hvb2tzXCJcblxuZXhwb3J0IGNvbnN0IEZlZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZmVlZCB9ID0gdXNlRmVlZCgpXG4gIHJldHVybiBmZWVkID8gKFxuICAgIDw+XG4gICAgICB7ZmVlZC5tYXAoKHsgaWQsIHRleHQsIGF1dGhvciB9LCBpKSA9PiAoXG4gICAgICAgIDxDYXJkIGtleT17aX0+XG4gICAgICAgICAgPGg0Pnt0ZXh0fTwvaDQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICkpfVxuICAgIDwvPlxuICApIDogbnVsbFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Feed.tsx\n");

/***/ }),

/***/ "./components/util/fetcher.tsx":
/*!*************************************!*\
  !*** ./components/util/fetcher.tsx ***!
  \*************************************/
/*! exports provided: fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetcher\", function() { return fetcher; });\nconst fetcher = (url, data = undefined) => fetch(window.location.origin + url, {\n  method: data ? \"POST\" : \"GET\",\n  credentials: \"include\",\n  headers: {\n    \"Content-Type\": \"application/json\"\n  },\n  body: JSON.stringify(data)\n}).then(r => r.json());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWwvZmV0Y2hlci50c3g/YWM2MSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZGF0YSIsInVuZGVmaW5lZCIsImZldGNoIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxHQUFELEVBQU1DLElBQUksR0FBR0MsU0FBYixLQUNyQkMsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEdBQXlCTixHQUExQixFQUErQjtBQUNsQ08sUUFBTSxFQUFFTixJQUFJLEdBQUcsTUFBSCxHQUFZLEtBRFU7QUFFbENPLGFBQVcsRUFBRSxTQUZxQjtBQUdsQ0MsU0FBTyxFQUFFO0FBQ1Asb0JBQWdCO0FBRFQsR0FIeUI7QUFNbENDLE1BQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVYLElBQWY7QUFONEIsQ0FBL0IsQ0FBTCxDQU9HWSxJQVBILENBT1FDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBUGIsQ0FESyIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXRpbC9mZXRjaGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaGVyID0gKHVybCwgZGF0YSA9IHVuZGVmaW5lZCkgPT5cbiAgZmV0Y2god2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHVybCwge1xuICAgIG1ldGhvZDogZGF0YSA/IFwiUE9TVFwiIDogXCJHRVRcIixcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgfSkudGhlbihyID0+IHIuanNvbigpKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/util/fetcher.tsx\n");

/***/ }),

/***/ "./components/util/hooks.tsx":
/*!***********************************!*\
  !*** ./components/util/hooks.tsx ***!
  \***********************************/
/*! exports provided: useFeed, useMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFeed\", function() { return useFeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMe\", function() { return useMe; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ \"./components/util/fetcher.tsx\");\n\n\nfunction useFeed() {\n  const {\n    data: feed\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(\"/api/feed\", _fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"]);\n  return {\n    feed\n  };\n}\nfunction useMe() {\n  const {\n    data: me\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(\"/api/me\", _fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"]);\n  return {\n    me\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWwvaG9va3MudHN4PzE1MTkiXSwibmFtZXMiOlsidXNlRmVlZCIsImRhdGEiLCJmZWVkIiwidXNlU1dSIiwiZmV0Y2hlciIsInVzZU1lIiwibWUiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTQSxPQUFULEdBQW1CO0FBQ3hCLFFBQU07QUFBRUMsUUFBSSxFQUFFQztBQUFSLE1BQTBEQywwQ0FBTSxDQUNwRSxXQURvRSxFQUVwRUMsZ0RBRm9FLENBQXRFO0FBSUEsU0FBTztBQUFFRjtBQUFGLEdBQVA7QUFDRDtBQUNNLFNBQVNHLEtBQVQsR0FBaUI7QUFDdEIsUUFBTTtBQUFFSixRQUFJLEVBQUVLO0FBQVIsTUFBZ0NILDBDQUFNLENBQUMsU0FBRCxFQUFZQyxnREFBWixDQUE1QztBQUNBLFNBQU87QUFBRUU7QUFBRixHQUFQO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWwvaG9va3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHdlZXQsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi9mZXRjaGVyXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZlZWQoKSB7XG4gIGNvbnN0IHsgZGF0YTogZmVlZCB9OiB7IGRhdGE/OiAoVHdlZXQgJiB7IGF1dGhvcjogVXNlciB9KVtdIH0gPSB1c2VTV1IoXG4gICAgXCIvYXBpL2ZlZWRcIixcbiAgICBmZXRjaGVyXG4gIClcbiAgcmV0dXJuIHsgZmVlZCB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlTWUoKSB7XG4gIGNvbnN0IHsgZGF0YTogbWUgfTogeyBkYXRhPzogVXNlciB9ID0gdXNlU1dSKFwiL2FwaS9tZVwiLCBmZXRjaGVyKVxuICByZXR1cm4geyBtZSB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/util/hooks.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Feed */ \"./components/Feed.tsx\");\n/* harmony import */ var _components_CreateTweetForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreateTweetForm */ \"./components/CreateTweetForm.tsx\");\n\nvar _jsxFileName = \"/Users/satoshi/twitter_clone/pages/index.tsx\";\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: {\n      span: 10,\n      offset: 8\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_CreateTweetForm__WEBPACK_IMPORTED_MODULE_3__[\"CreateTweetForm\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Feed__WEBPACK_IMPORTED_MODULE_2__[\"Feed\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 6,\n  columnNumber: 3\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJzcGFuIiwib2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxrRkFDYixxRUFBQyx3Q0FBRDtBQUFBLHlCQUNFLHFFQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFO0FBQUVBLFVBQUksRUFBRSxFQUFSO0FBQVlDLFlBQU0sRUFBRTtBQUFwQixLQUFUO0FBQUEsNEJBQ0UscUVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwiYW50ZFwiXG5pbXBvcnQgeyBGZWVkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRmVlZFwiXG5pbXBvcnQgeyBDcmVhdGVUd2VldEZvcm0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcmVhdGVUd2VldEZvcm1cIlxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxSb3c+XG4gICAgPENvbCBtZD17eyBzcGFuOiAxMCwgb2Zmc2V0OiA4IH19PlxuICAgICAgPENyZWF0ZVR3ZWV0Rm9ybSAvPlxuICAgICAgPEZlZWQgLz5cbiAgICA8L0NvbD5cbiAgPC9Sb3c+XG4pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });