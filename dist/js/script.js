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

/***/ "./src/js/basic/checkMobile.js":
/*!*************************************!*\
  !*** ./src/js/basic/checkMobile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (isMobile);

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
/* harmony import */ var _modules_isotope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/isotope */ "./src/js/modules/isotope.js");
/* harmony import */ var _modules_isotope__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_isotope__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/isMobile */ "./src/js/modules/isMobile.js");
/* harmony import */ var _modules_popup_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/popup-portfolio */ "./src/js/modules/popup-portfolio.js");
/* harmony import */ var _modules_hoverChangeImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/hoverChangeImg */ "./src/js/modules/hoverChangeImg.js");








window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_fix_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_3__["default"])('.menu__burger', '.menu__body', '.menu__item a');
  Object(_modules_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])('.portfolio__item');
  Object(_modules_popup_portfolio__WEBPACK_IMPORTED_MODULE_6__["default"])('.portfolio__item', '.modal-portfolio', '.overlay', '.modal-portfolio__close');
  Object(_modules_hoverChangeImg__WEBPACK_IMPORTED_MODULE_7__["default"])('.portfolio__item');
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
var burger = function burger(burgerSelector, menuSelector, menuItemSelector) {
  var burger = document.querySelector(burgerSelector),
      menu = document.querySelector(menuSelector),
      items = document.querySelectorAll(menuItemSelector);
  burger.addEventListener('click', function (e) {
    if (e.target.classList.contains('menu__burger') || e.target.parentElement.classList.contains('menu__burger')) {
      if (document.querySelector('.about__navigation').classList.contains('_fix')) {
        document.body.classList.toggle('_block');
      }

      burger.classList.toggle('_active');
      menu.classList.toggle('_active');
    }
  });
  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      menu.classList.remove('_active');
      burger.classList.remove('_active');
    });
  });
  window.addEventListener('scroll', function () {
    if (burger.classList.contains('_active') && document.querySelector('.about__navigation').classList.contains('_fix')) {
      document.body.classList.add('_block');
    } else {
      document.body.classList.remove('_block');
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
  listenScroll();
  window.addEventListener('orientationchange', function () {
    listenScroll();
  });
};

function listenScroll() {
  var navigation = document.querySelector('.about__navigation');
  window.addEventListener('scroll', function () {
    var mainSectionHeight = document.querySelector('.main').getBoundingClientRect().height;

    if (window.pageYOffset >= mainSectionHeight) {
      navigation.classList.add('_fix');
      navigation.classList.remove('_static');
    } else {
      navigation.classList.remove('_fix');
      navigation.classList.add('_static');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (navPosition);

/***/ }),

/***/ "./src/js/modules/getModalData.js":
/*!****************************************!*\
  !*** ./src/js/modules/getModalData.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getDataModal = function getDataModal(getSelector) {
  var title = getSelector.querySelector('.hover__title').textContent,
      categories = getSelector.querySelector('.hover__categories').textContent,
      view = getSelector.querySelector('.hover__view').getAttribute('href'),
      code = getSelector.querySelector('.hover__code').getAttribute('href'),
      src = getSelector.querySelector('.portfolio__img').getAttribute('data-src');
  return {
    title: title,
    categories: categories,
    view: view,
    code: code,
    src: src
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getDataModal);

/***/ }),

/***/ "./src/js/modules/hoverChangeImg.js":
/*!******************************************!*\
  !*** ./src/js/modules/hoverChangeImg.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile */ "./src/js/basic/checkMobile.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import ibg from '../basic/ibg';


var hoverImg = function hoverImg(hoverSelector) {
  if (!_basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__["default"].any()) {
    (function () {
      var changeImg = function changeImg(target) {
        var img = target.querySelector('.portfolio__img');
        var dataSrc = img.dataset.src;
        img.setAttribute('data-src', "".concat(img.getAttribute('src')));
        img.setAttribute('src', "".concat(dataSrc));
      };

      var hoverSelectors = document.querySelectorAll(hoverSelector);

      var _iterator = _createForOfIteratorHelper(hoverSelectors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          item.addEventListener('mouseenter', function (_ref) {
            var target = _ref.target;
            changeImg(target);
          });
          item.addEventListener('mouseleave', function (_ref2) {
            var target = _ref2.target;
            changeImg(target);
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    })();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (hoverImg);

/***/ }),

/***/ "./src/js/modules/isMobile.js":
/*!************************************!*\
  !*** ./src/js/modules/isMobile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile */ "./src/js/basic/checkMobile.js");


var isMobile = function isMobile(selector) {
  var elements = document.querySelectorAll(selector);

  if (_basic_checkMobile__WEBPACK_IMPORTED_MODULE_0__["default"].any()) {
    elements.forEach(function (element) {
      element.classList.add('mobile');
    });
  } else {
    elements.forEach(function (element) {
      element.classList.remove('mobile');
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (isMobile);

/***/ }),

/***/ "./src/js/modules/isotope.js":
/*!***********************************!*\
  !*** ./src/js/modules/isotope.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

init();

function init() {
  var items = document.querySelector('.portfolio__items');
  var iso = new Isotope(items, {
    itemSelector: '.portfolio__item-wrapper',
    masonry: {
      columnWidth: '.portfolio-sizer'
    },
    layoutMode: 'fitRows',
    transitionDuration: '0.4s'
  });
  var filterBtn = document.querySelectorAll('.portfolio__categories .categories__item a');
  filterBtn.forEach(function (filter) {
    filter.addEventListener('click', function (e) {
      e.preventDefault();
      removerActive();
      e.target.classList.add('active');
      var filterData = e.target.getAttribute('data-filter');
      iso.arrange({
        filter: filterData
      });
    });
  });

  function removerActive() {
    filterBtn.forEach(function (a) {
      a.classList.remove('active');
    });
  }
}

/***/ }),

/***/ "./src/js/modules/popup-portfolio.js":
/*!*******************************************!*\
  !*** ./src/js/modules/popup-portfolio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getModalData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getModalData */ "./src/js/modules/getModalData.js");
/* harmony import */ var _setDatModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setDatModal */ "./src/js/modules/setDatModal.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var popup = function popup(triggerSelector, modalSelector, overlaySelector, closeSelector) {
  var triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      overlay = document.querySelector(overlaySelector),
      closes = document.querySelectorAll(closeSelector);

  var _iterator = _createForOfIteratorHelper(triggers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var trigger = _step.value;
      trigger.addEventListener('click', function (e) {
        if (e.target.closest('.mobile') || e.target.querySelector('.mobile')) {
          visibleModal();
          Object(_setDatModal__WEBPACK_IMPORTED_MODULE_1__["default"])(modal, Object(_getModalData__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.closest('.portfolio__item')));
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(closes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var close = _step2.value;
      close.addEventListener('click', function (e) {
        unvisibleModal();
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  overlay.addEventListener('click', function (e) {
    if (!e.target.closest('.modal')) {
      unvisibleModal();
    }
  });

  function visibleModal() {
    modal.classList.add('_visible');
    overlay.classList.add('_visible');
    document.body.style.overflow = 'hidden';
  }

  function unvisibleModal() {
    modal.classList.remove('_visible');
    overlay.classList.remove('_visible');
    document.body.style.overflow = '';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (popup);

/***/ }),

/***/ "./src/js/modules/setDatModal.js":
/*!***************************************!*\
  !*** ./src/js/modules/setDatModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setData = function setData(modal, _ref) {
  var title = _ref.title,
      categories = _ref.categories,
      view = _ref.view,
      code = _ref.code,
      src = _ref.src;
  modal.querySelector('.modal-portfolio__title span').textContent = title;
  modal.querySelector('.modal-portfolio__categories span').textContent = categories;
  modal.querySelector('.modal-portfolio__view').setAttribute('href', "".concat(view));
  modal.querySelector('.modal-portfolio__code').setAttribute('href', "".concat(code));
  modal.querySelector('.modal-portfolio__bg').setAttribute('src', "".concat(src));
};

/* harmony default export */ __webpack_exports__["default"] = (setData);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map