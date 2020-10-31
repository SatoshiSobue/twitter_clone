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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/tweet/create.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/tweet/create.ts":
/*!***********************************!*\
  !*** ./pages/api/tweet/create.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n  const {\n    token\n  } = req.cookies;\n\n  if (token) {\n    // Get authenticated user\n    const {\n      _id,\n      username\n    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token, process.env.JWT_SECRET);\n    const {\n      text\n    } = req.body;\n    const tweet = await prisma.tweet.create({\n      data: {\n        text,\n        author: {\n          connect: {\n            username\n          }\n        }\n      }\n    });\n    res.json(tweet);\n  } else {\n    res.json({\n      error: \"You must be logged in to tweet.\"\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdHdlZXQvY3JlYXRlLnRzP2UzNDIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwicHJpc21hIiwiUHJpc21hQ2xpZW50IiwidG9rZW4iLCJjb29raWVzIiwiX2lkIiwidXNlcm5hbWUiLCJqd3QiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInRleHQiLCJib2R5IiwidHdlZXQiLCJjcmVhdGUiLCJkYXRhIiwiYXV0aG9yIiwiY29ubmVjdCIsImpzb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDZSxzRUFBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU1DLE1BQU0sR0FBRyxJQUFJQywyREFBSixFQUFmO0FBRUEsUUFBTTtBQUFFQztBQUFGLE1BQVlKLEdBQUcsQ0FBQ0ssT0FBdEI7O0FBRUEsTUFBSUQsS0FBSixFQUFXO0FBQ1Q7QUFDQSxVQUFNO0FBQUVFLFNBQUY7QUFBT0M7QUFBUCxRQUFvQkMsbURBQUcsQ0FBQ0MsTUFBSixDQUFXTCxLQUFYLEVBQWtCTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBOUIsQ0FBMUI7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBV2IsR0FBRyxDQUFDYyxJQUFyQjtBQUVBLFVBQU1DLEtBQUssR0FBRyxNQUFNYixNQUFNLENBQUNhLEtBQVAsQ0FBYUMsTUFBYixDQUFvQjtBQUN0Q0MsVUFBSSxFQUFFO0FBQUVKLFlBQUY7QUFBUUssY0FBTSxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBRVo7QUFBRjtBQUFYO0FBQWhCO0FBRGdDLEtBQXBCLENBQXBCO0FBR0FOLE9BQUcsQ0FBQ21CLElBQUosQ0FBU0wsS0FBVDtBQUNELEdBVEQsTUFTTztBQUNMZCxPQUFHLENBQUNtQixJQUFKLENBQVM7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBVDtBQUNEO0FBQ0YsQ0FqQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdHdlZXQvY3JlYXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbiAgY29uc3QgeyB0b2tlbiB9ID0gcmVxLmNvb2tpZXNcblxuICBpZiAodG9rZW4pIHtcbiAgICAvLyBHZXQgYXV0aGVudGljYXRlZCB1c2VyXG4gICAgY29uc3QgeyBfaWQsIHVzZXJuYW1lIH0gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICAgIGNvbnN0IHsgdGV4dCB9ID0gcmVxLmJvZHlcblxuICAgIGNvbnN0IHR3ZWV0ID0gYXdhaXQgcHJpc21hLnR3ZWV0LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7IHRleHQsIGF1dGhvcjogeyBjb25uZWN0OiB7IHVzZXJuYW1lIH0gfSB9LFxuICAgIH0pXG4gICAgcmVzLmpzb24odHdlZXQpXG4gIH0gZWxzZSB7XG4gICAgcmVzLmpzb24oeyBlcnJvcjogXCJZb3UgbXVzdCBiZSBsb2dnZWQgaW4gdG8gdHdlZXQuXCIgfSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/tweet/create.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ })

/******/ });