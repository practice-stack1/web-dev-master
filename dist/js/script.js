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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/basic/anim-scroll.js":
/*!*************************************!*\
  !*** ./src/js/basic/anim-scroll.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener('scroll', animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 300);
}

/***/ }),

/***/ "./src/js/basic/ibg.js":
/*!*****************************!*\
  !*** ./src/js/basic/ibg.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ibg() {
  var ibgs = document.querySelectorAll('.ibg');
  ibgs.forEach(function (value) {
    if (value.querySelector('img')) {
      value.style.cssText = "background-image: url(".concat(value.querySelector('img').getAttribute('src'), ")");
    }
  });
}

ibg();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/ibg */ "./src/js/basic/ibg.js");
/* harmony import */ var _basic_ibg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_basic_ibg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basic_anim_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/anim-scroll */ "./src/js/basic/anim-scroll.js");
/* harmony import */ var _basic_anim_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_basic_anim_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_fix_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fix-navigation */ "./src/js/modules/fix-navigation.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");




window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_fix_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_3__["default"])('.menu__burger', '.menu__body');
});

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var burger = function burger(burgerSelector, menuSelector) {
  var burger = document.querySelector(burgerSelector),
      menu = document.querySelector(menuSelector);
  burger.addEventListener('click', function (e) {
    console.log(e.target);

    if (e.target.classList.contains('menu__burger') || e.target.parentElement.classList.contains('menu__burger')) {
      document.body.classList.toggle('_block');
      menu.classList.toggle('_active');
      burger.classList.toggle('_active');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/fix-navigation.js":
/*!******************************************!*\
  !*** ./src/js/modules/fix-navigation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var navPosition = function navPosition() {
  var mainSectionHeight = document.querySelector('.main').getBoundingClientRect().height,
      navigation = document.querySelector('.about__navigation');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= mainSectionHeight) {
      navigation.classList.add('_fix');
      navigation.classList.remove('_static');
    } else {
      navigation.classList.remove('_fix');
      navigation.classList.add('_static');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (navPosition);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map