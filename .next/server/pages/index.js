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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateTweetForm\", function() { return CreateTweetForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/fetcher */ \"./components/util/fetcher.tsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/hooks */ \"./components/util/hooks.tsx\");\n\nvar _jsxFileName = \"/Users/satoshi/twitter_clone/components/CreateTweetForm.tsx\";\n\n\n\n\n\nconst CreateTweetForm = () => {\n  const {\n    0: input,\n    1: setInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\");\n  const {\n    feed\n  } = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useFeed\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    style: {\n      padding: \"2rem\"\n    },\n    onSubmit: async e => {\n      e.preventDefault(); // we include \"false\" here to ask SWR not to revalidate the cache with\n      // the feed returned from the server. we'll remove this after the next section\n\n      Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(\"/api/feed\", [{\n        text: input,\n        author: {\n          username: \"Marshall Mathers\"\n        }\n      }, ...feed], false);\n      Object(_util_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"])(\"/api/tweet/create\", {\n        text: input\n      });\n      setInput(\"\");\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          value: input,\n          onChange: e => setInput(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          htmlType: \"submit\",\n          children: \"Tweet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZVR3ZWV0Rm9ybS50c3g/NGQzYSJdLCJuYW1lcyI6WyJDcmVhdGVUd2VldEZvcm0iLCJpbnB1dCIsInNldElucHV0IiwidXNlU3RhdGUiLCJmZWVkIiwidXNlRmVlZCIsInBhZGRpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJtdXRhdGUiLCJ0ZXh0IiwiYXV0aG9yIiwidXNlcm5hbWUiLCJmZXRjaGVyIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGVBQWUsR0FBRyxNQUFNO0FBQ25DLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdDLDJEQUFPLEVBQXhCO0FBRUEsc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FEVDtBQUVFLFlBQVEsRUFBRSxNQUFNQyxDQUFOLElBQVc7QUFDbkJBLE9BQUMsQ0FBQ0MsY0FBRixHQURtQixDQUduQjtBQUNBOztBQUNBQyx3REFBTSxDQUNKLFdBREksRUFFSixDQUFDO0FBQUVDLFlBQUksRUFBRVQsS0FBUjtBQUFlVSxjQUFNLEVBQUU7QUFBRUMsa0JBQVEsRUFBRTtBQUFaO0FBQXZCLE9BQUQsRUFBNEQsR0FBR1IsSUFBL0QsQ0FGSSxFQUdKLEtBSEksQ0FBTjtBQU1BUyxtRUFBTyxDQUFDLG1CQUFELEVBQXNCO0FBQzdCSCxZQUFJLEVBQUVUO0FBRHVCLE9BQXRCLENBQVA7QUFJQUMsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNELEtBbEJIO0FBQUEsMkJBb0JFLHFFQUFDLHdDQUFEO0FBQUEsOEJBQ0UscUVBQUMsd0NBQUQ7QUFBQSwrQkFDRSxxRUFBQywwQ0FBRDtBQUFPLGVBQUssRUFBRUQsS0FBZDtBQUFxQixrQkFBUSxFQUFFTSxDQUFDLElBQUlMLFFBQVEsQ0FBQ0ssQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVY7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSxxRUFBQyx3Q0FBRDtBQUFBLCtCQUNFLHFFQUFDLDJDQUFEO0FBQVEsa0JBQVEsRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdDRCxDQXBDTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3JlYXRlVHdlZXRGb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi91dGlsL2ZldGNoZXJcIlxuaW1wb3J0IHsgQnV0dG9uLCBtZXNzYWdlLCBSb3csIENvbCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUZlZWQgfSBmcm9tIFwiLi91dGlsL2hvb2tzXCJcblxuZXhwb3J0IGNvbnN0IENyZWF0ZVR3ZWV0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCB7IGZlZWQgfSA9IHVzZUZlZWQoKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMnJlbVwiIH19XG4gICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIC8vIHdlIGluY2x1ZGUgXCJmYWxzZVwiIGhlcmUgdG8gYXNrIFNXUiBub3QgdG8gcmV2YWxpZGF0ZSB0aGUgY2FjaGUgd2l0aFxuICAgICAgICAvLyB0aGUgZmVlZCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuIHdlJ2xsIHJlbW92ZSB0aGlzIGFmdGVyIHRoZSBuZXh0IHNlY3Rpb25cbiAgICAgICAgbXV0YXRlKFxuICAgICAgICAgIFwiL2FwaS9mZWVkXCIsXG4gICAgICAgICAgW3sgdGV4dDogaW5wdXQsIGF1dGhvcjogeyB1c2VybmFtZTogXCJNYXJzaGFsbCBNYXRoZXJzXCIgfSB9LCAuLi5mZWVkXSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApXG5cbiAgICAgICAgZmV0Y2hlcihcIi9hcGkvdHdlZXQvY3JlYXRlXCIsIHtcbiAgICAgICAgdGV4dDogaW5wdXQsXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0SW5wdXQoXCJcIilcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbD5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiPlR3ZWV0PC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9mb3JtPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CreateTweetForm.tsx\n");

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
/*! exports provided: useFeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useFeed\", function() { return useFeed; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ \"./components/util/fetcher.tsx\");\n\n\nfunction useFeed() {\n  const {\n    data: feed\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(\"/api/feed\", _fetcher__WEBPACK_IMPORTED_MODULE_1__[\"fetcher\"]);\n  return {\n    feed\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWwvaG9va3MudHN4PzE1MTkiXSwibmFtZXMiOlsidXNlRmVlZCIsImRhdGEiLCJmZWVkIiwidXNlU1dSIiwiZmV0Y2hlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTQSxPQUFULEdBQW1CO0FBQ3hCLFFBQU07QUFBRUMsUUFBSSxFQUFFQztBQUFSLE1BQWlCQywwQ0FBTSxDQUFDLFdBQUQsRUFBY0MsZ0RBQWQsQ0FBN0I7QUFDQSxTQUFPO0FBQUVGO0FBQUYsR0FBUDtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91dGlsL2hvb2tzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4vZmV0Y2hlclwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGZWVkKCkge1xuICBjb25zdCB7IGRhdGE6IGZlZWQgfSA9IHVzZVNXUihcIi9hcGkvZmVlZFwiLCBmZXRjaGVyKVxuICByZXR1cm4geyBmZWVkIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/util/hooks.tsx\n");

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