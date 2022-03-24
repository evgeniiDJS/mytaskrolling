/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_cardInputControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/cardInputControl.js */ \"./src/js/cardInputControl.js\");\n/* harmony import */ var _js_cardInputControl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_cardInputControl_js__WEBPACK_IMPORTED_MODULE_1__);\n _js_slider_js__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n _js_cardInputControl_js__WEBPACK_IMPORTED_MODULE_1___default.a;\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/cardInputControl.js":
/*!************************************!*\
  !*** ./src/js/cardInputControl.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const priceCvv = document.querySelector('.price__cvv');\r\nconst priceInputText = document.querySelector('.price-input__text');\r\nconst priceCardHolder = document.querySelector('.price__card-holder');\r\nconst inputСardHolder = document.getElementById('input-card-holder');\r\n \r\n\r\npriceCvv.addEventListener('keydown', function(event) {  //CVV\r\n    if  ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||\r\n        (event.keyCode == 65 && event.ctrlKey === true) ||\r\n        (event.keyCode >= 35 && event.keyCode <= 39)) {\r\n        return;\r\n    } else {\r\n      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {\r\n        event.preventDefault();\r\n      }\r\n    }\r\n  });\r\n\r\n  \r\npriceInputText.addEventListener('keydown', function (event) { // CARD output\r\n    let value = this.value.replace(/\\s+/g, '');\r\n    let isBackspace = event.key === 'Backspace'; \r\n\r\n    if ((event.key.length === 1 && /^[^\\d\\s]+$/.test(event.key)) || (!isBackspace && value.length === 16)) {\r\n        event.preventDefault();\r\n        return false;\r\n    }\r\n    this.value = value.split('').reverse().join('').replace(/\\B(?=(\\d{4})+(?!\\d))/g, \" \").split('').reverse().join('').trim();\r\n});\r\n\r\n\r\ninputСardHolder.onkeypress = (event) => !/[a-z\\d]/i.test(event.key) ? false : true; // CARD is not number and not CYRILLIC\r\npriceCardHolder.addEventListener('keydown', function(e){\r\n    if( e.key.match(/[0-9]/) ) return e.preventDefault();\r\n}); \r\n\r\npriceCardHolder.addEventListener('input', function(e){\r\n    priceCardHolder.value = priceCardHolder.value.replace(/[0-9]/g, \"\");\r\n});\r\n\r\n      \r\n\n\n//# sourceURL=webpack:///./src/js/cardInputControl.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const prev = document.getElementById('btn-prev'),\r\n  next = document.getElementById('btn-next'),\r\n  slides = document.querySelectorAll('.slide'),\r\n  dots = document.querySelectorAll('.dot'),\r\n  slider_wrapper = document.querySelector('.slider-wrapper');\r\n\r\n\r\nlet index = 0; // текущий активный слайд\r\n\r\nconst activeSlide = (n) => {\r\n  for (slide of slides) {\r\n    slide.classList.remove('active');\r\n  }\r\n  slides[n].classList.add('active');\r\n};\r\nconst activeDot = (n) => {\r\n  for (dot of dots) {\r\n    dot.classList.remove('active');\r\n  }\r\n  dots[n].classList.add('active');\r\n};\r\nconst prepareCurrentSlide = (ind) => {\r\n  activeSlide(ind);\r\n  activeDot(ind);\r\n};\r\nconst nextSlide = () => {\r\n  if (index === slides.length - 1) {\r\n    index = 0;\r\n    prepareCurrentSlide(index);\r\n  } else {\r\n    index++;\r\n    prepareCurrentSlide(index);\r\n  }\r\n};\r\nconst prevSlide = () => {\r\n  if (index === 0) {\r\n    index = slides.length - 1;\r\n    prepareCurrentSlide(index);\r\n  } else {\r\n    index--;\r\n    prepareCurrentSlide(index);\r\n  }\r\n};\r\n\r\ndots.forEach((item, indexDot) => {\r\n  item.addEventListener('click', () => {\r\n    index = indexDot;\r\n    prepareCurrentSlide(index);\r\n  });\r\n});\r\n\r\nnext.addEventListener('click', nextSlide);\r\nprev.addEventListener('click', prevSlide);\r\n\r\nslider_wrapper.addEventListener('mousedown', nextSlide);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ });