/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root,
body,
.page-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(0, 0%, 4%);
  --color-light: hsl(0, 0%, 96%);
  --color-dark: hsl(0, 0%, 21%);
  --color-primary: hsl(171, 100%, 41%);
  --color-link: hsl(217, 71%, 53%);
  --color-info: hsl(204, 86%, 53%);
  --color-success: hsl(141, 53%, 53%);
  --color-warning: hsl(48, 100%, 67%);
  --color-danger: hsl(348, 100%, 61%);
  --navbar-spacing: 20px;
  --sidebar-spacing: 10px;
  --card-spacing: 10px;
  --border-radius: 5px;
}

.section-header {
  margin: 0;
  padding: 0;
}

.hide {
  display: none;
}

.page-container {
  background-color: var(--color-light);
  display: grid;
  grid-template: 80px 1fr/350px 1fr;
}
.page-container .navbar {
  grid-column: 1/-1;
}

.crud-layout {
  display: grid;
  grid-template: min-content 1fr/1fr min-content;
  align-items: center;
}
.crud-layout > button {
  text-wrap: nowrap;
}
.crud-layout > .cards {
  grid-column: 1/-1;
  align-self: flex-start;
  margin-top: var(--sidebar-spacing);
  display: flex;
  flex-direction: column;
  gap: var(--card-spacing);
}

.todos .card {
  padding: var(--card-spacing) 0;
}

.card {
  padding: var(--card-spacing);
  background-color: var(--color-light);
  border-radius: var(--border-radius);
  display: grid;
  grid-template: 1fr/1fr min-content min-content;
  gap: 10px;
  align-items: center;
}
.card p {
  margin: 0;
  overflow: auto;
}
.card input {
  overflow: auto;
}

button {
  padding: 10px;
  background-color: var(--color-success);
  border: none;
  border-radius: var(--border-radius);
  color: white;
  font-weight: bold;
}
button.danger {
  background-color: var(--color-danger);
}

.navbar {
  padding: calc(var(--navbar-spacing) + var(--sidebar-spacing));
  background-color: var(--color-white);
  box-shadow: 0 0 3px var(--color-primary);
}

.sidebar {
  margin: var(--navbar-spacing);
  padding: var(--sidebar-spacing);
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
}

.content {
  margin: calc(var(--navbar-spacing) + var(--sidebar-spacing));
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA;;;EAIE,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EAGA,yCAAA;EACA,eAAA;EAGA,+BAAA;EACA,6BAAA;EACA,8BAAA;EACA,6BAAA;EACA,oCAAA;EACA,gCAAA;EACA,gCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EAGA,sBAAA;EACA,uBAAA;EACA,oBAAA;EAGA,oBAAA;AATF;;AAaA;EACE,SAAA;EACA,UAAA;AAVF;;AAcA;EACE,aAAA;AAXF;;AAgBA;EACE,oCAAA;EAEA,aAAA;EACA,iCAAA;AAdF;AAgBE;EACE,iBAAA;AAdJ;;AAmBA;EACE,aAAA;EACA,8CAAA;EACA,mBAAA;AAhBF;AAkBE;EACE,iBAAA;AAhBJ;AAmBE;EACE,iBAAA;EACA,sBAAA;EAEA,kCAAA;EAEA,aAAA;EACA,sBAAA;EACA,wBAAA;AAnBJ;;AAuBA;EACE,8BAAA;AApBF;;AAuBA;EACE,4BAAA;EACA,oCAAA;EACA,mCAAA;EAEA,aAAA;EACA,8CAAA;EACA,SAAA;EACA,mBAAA;AArBF;AAuBE;EACE,SAAA;EACA,cAAA;AArBJ;AAwBE;EACE,cAAA;AAtBJ;;AA0BA;EACE,aAAA;EACA,sCAAA;EACA,YAAA;EACA,mCAAA;EACA,YAAA;EACA,iBAAA;AAvBF;AAyBE;EACE,qCAAA;AAvBJ;;AA4BA;EACE,6DAAA;EACA,oCAAA;EACA,wCAAA;AAzBF;;AA6BA;EACE,6BAAA;EACA,+BAAA;EACA,oCAAA;EACA,kBAAA;EACA,0CAAA;AA1BF;;AA8BA;EACE,4DAAA;AA3BF","sourcesContent":["// ROOT STYLES\n:root,\nbody,\n.page-container {\n  // Layout\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n\n  // Typography\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n\n  // Color presets\n  --color-white: hsl(0, 0%, 100%);\n  --color-black: hsl(0, 0%, 4%);\n  --color-light: hsl(0, 0%, 96%);\n  --color-dark: hsl(0, 0%, 21%);\n  --color-primary: hsl(171, 100%, 41%);\n  --color-link: hsl(217, 71%, 53%);\n  --color-info: hsl(204, 86%, 53%);\n  --color-success: hsl(141, 53%, 53%);\n  --color-warning: hsl(48, 100%, 67%);\n  --color-danger: hsl(348, 100%, 61%);\n\n  // Spacing\n  --navbar-spacing: 20px;\n  --sidebar-spacing: 10px;\n  --card-spacing: 10px;\n\n  // Borders\n  --border-radius: 5px;\n}\n\n// TYPOGRAPHY\n.section-header {\n  margin: 0;\n  padding: 0;\n}\n\n// INTERACTIVITY\n.hide {\n  display: none;\n}\n\n// MAIN GRID LAYOUT\n\n.page-container {\n  background-color: var(--color-light);\n\n  display: grid;\n  grid-template: 80px 1fr / 350px 1fr;\n\n  .navbar {\n    grid-column: 1 / -1;\n  }\n}\n\n// SHARED LAYOUTS\n.crud-layout {\n  display: grid;\n  grid-template: min-content 1fr / 1fr min-content;\n  align-items: center;\n\n  > button {\n    text-wrap: nowrap;\n  }\n\n  > .cards {\n    grid-column: 1 / -1;\n    align-self: flex-start;\n\n    margin-top: var(--sidebar-spacing);\n\n    display: flex;\n    flex-direction: column;\n    gap: var(--card-spacing);\n  }\n}\n\n.todos .card {\n  padding: var(--card-spacing) 0;\n}\n\n.card {\n  padding: var(--card-spacing);\n  background-color: var(--color-light);\n  border-radius: var(--border-radius);\n\n  display: grid;\n  grid-template: 1fr / 1fr min-content min-content;\n  gap: 10px;\n  align-items: center;\n\n  p {\n    margin: 0;\n    overflow: auto;\n  }\n\n  input {\n    overflow: auto;\n  }\n}\n\nbutton {\n  padding: 10px;\n  background-color: var(--color-success);\n  border: none;\n  border-radius: var(--border-radius);\n  color: white;\n  font-weight: bold;\n\n  &.danger {\n    background-color: var(--color-danger);\n  }\n}\n\n// NAVBAR\n.navbar {\n  padding: calc(var(--navbar-spacing) + var(--sidebar-spacing));\n  background-color: var(--color-white);\n  box-shadow: 0 0 3px var(--color-primary);\n}\n\n// SIDEBAR (PROJECTS)\n.sidebar {\n  margin: var(--navbar-spacing);\n  padding: var(--sidebar-spacing);\n  background-color: var(--color-white);\n  border-radius: 5px;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);\n}\n\n// CONTENT (TASKS)\n.content {\n  margin: calc(var(--navbar-spacing) + var(--sidebar-spacing));\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChild: () => (/* binding */ appendChild),
/* harmony export */   prependChild: () => (/* binding */ prependChild)
/* harmony export */ });
const createChild = (parentObj, childType, childClass) => {
  const childObj = document.createElement(childType);

  let classes =
    typeof childClass === 'string' ? childClass.split(/\s+/) : childClass;

  classes.forEach((cls) => {
    if (cls.length > 0) {
      childObj.classList.add(cls);
    }
  });

  return childObj;
};

const prependChild = (parentObj, childType, childClass = '') => {
  const childObj = createChild(parentObj, childType, childClass);
  parentObj.prepend(childObj);
  return childObj;
};

const appendChild = (parentObj, childType, childClass = '') => {
  const childObj = createChild(parentObj, childType, childClass);
  parentObj.appendChild(childObj);
  return childObj;
};




/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
const Todo = (title) => {
  const getTitle = () => title;

  const setTitle = (newTitle) => (title = newTitle);

  return { getTitle, setTitle };
};

const Project = (title) => {
  const todos = [];

  const getTitle = () => title;
  const getTodos = () => todos;

  const setTitle = (newTitle) => (title = newTitle);

  const createTodo = (title) => {
    todos.push(Todo(title));
  };

  const deleteTodo = (index) => {
    return todos.splice(index, 1);
  };

  return { getTitle, getTodos, setTitle, createTodo, deleteTodo };
};




/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Screen: () => (/* binding */ Screen)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


const Screen = (app) => {
  const renderLayout = () => {
    // Create navbar, sidebar and content divs
    const body = document.querySelector('body');
    const container = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.prependChild)(body, 'div', 'page-container');

    const navbar = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, 'div', 'navbar');
    const sidebar = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, 'div', 'sidebar crud-layout');
    const content = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(container, 'div', 'content crud-layout');

    // Create headers in each section
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(navbar, 'h2', 'section-header').textContent = 'Things To Do';
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(sidebar, 'h2', 'section-header').textContent = 'Projects';
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(content, 'h2', 'section-header').textContent = 'Todos';

    // Create buttons in project and todo sections
    const addProjectButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(sidebar, 'button', 'add-project');
    addProjectButton.textContent = 'New Project';
    addProjectButton.addEventListener('click', () => {
      app.createProject('test');
      app.activateProject(app.getProjects().length - 1);
      renderProjects();
    });

    const addTodoButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(content, 'button', 'add-todo');
    addTodoButton.textContent = 'New Todo';
    addTodoButton.addEventListener('click', () => {
      if (app.getActiveProject() === null) return;
      app.getProjects()[app.getActiveProject()].createTodo('test todo');
      renderTodos();
    });

    // Create div for cards in project and todo sections
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(sidebar, 'div', 'projects cards');
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(content, 'div', 'todos cards');
  };

  const renderProjects = () => {
    const projectsDiv = document.querySelector('.projects');
    projectsDiv.replaceChildren();

    app.getProjects().forEach((project, index) => {
      const card = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(projectsDiv, 'div', 'card');

      const title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(card, 'p', 'title');
      title.textContent = project.getTitle();
      title.addEventListener('click', () => {
        app.activateProject(index);
        renderTodos();
      });

      const editButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(card, 'button');
      editButton.textContent = 'Edit';
      editButton.addEventListener(
        'click',
        () => {
          editTextEventHandler(project, title, editButton);
        },
        { once: true }
      );

      const deleteButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(card, 'button');
      deleteButton.classList.add('danger');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        app.deleteProject(index);
        renderProjects();
        renderTodos();
      });
    });
  };

  const renderTodos = () => {
    const todosDiv = document.querySelector('.todos');
    todosDiv.replaceChildren();

    const project = app.getProjects()[app.getActiveProject()];
    if (!project) return;

    project.getTodos().forEach((todo, index) => {
      const card = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(todosDiv, 'div', 'card');

      const title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(card, 'p', 'title');
      title.textContent = todo.getTitle();

      const editButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(card, 'button');
      editButton.textContent = 'Edit';

      editButton.addEventListener(
        'click',
        () => {
          editTextEventHandler(todo, title, editButton);
        },
        { once: true }
      );

      const deleteButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(card, 'button');
      deleteButton.classList.add('danger');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        project.deleteTodo(index);
        renderTodos();
      });
    });
  };

  // Event handlers
  const editTextEventHandler = (object, title, editButton) => {
    const input = document.createElement('input');
    input.value = object.getTitle();

    title.classList.add('hide');
    title.insertAdjacentElement('afterend', input);

    editButton.textContent = 'Save';

    editButton.addEventListener(
      'click',
      () => {
        saveTextEventHandler(object, title, input, editButton);
      },
      { once: true }
    );
  };

  const saveTextEventHandler = (object, title, input, editButton) => {
    object.setTitle(input.value);
    title.textContent = object.getTitle();

    input.remove();
    title.classList.remove('hide');
    editButton.textContent = 'Edit';

    editButton.addEventListener(
      'click',
      () => {
        editTextEventHandler(object, title, editButton);
      },
      { once: true }
    );
  };

  return { renderLayout };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen */ "./src/screen.js");




const App = (() => {
  let screen = null;
  const projects = [];
  let activeProject = null;

  const getScreen = () => screen;
  const getProjects = () => projects;
  const getActiveProject = () => activeProject;

  const createProject = (title) => {
    projects.push((0,_model__WEBPACK_IMPORTED_MODULE_1__.Project)(title));
  };

  const deleteProject = (index) => {
    const removedProject = projects.splice(index, 1);

    if (projects.length === 0) {
      activeProject = null;
    } else if (index <= activeProject) {
      activeProject--;
    }

    return removedProject;
  };

  const activateProject = (index) => {
    activeProject = index;
  };

  const init = (app) => {
    screen = (0,_screen__WEBPACK_IMPORTED_MODULE_2__.Screen)(app);
  };

  return {
    getScreen,
    getProjects,
    getActiveProject,
    createProject,
    deleteProject,
    activateProject,
    init,
  };
})();

App.init(App);
App.getScreen().renderLayout();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1k7QUFDQTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLCtDQUFPO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSwrQ0FBTTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LFxuYm9keSxcbi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1jb2xvci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcbiAgLS1jb2xvci1ibGFjazogaHNsKDAsIDAlLCA0JSk7XG4gIC0tY29sb3ItbGlnaHQ6IGhzbCgwLCAwJSwgOTYlKTtcbiAgLS1jb2xvci1kYXJrOiBoc2woMCwgMCUsIDIxJSk7XG4gIC0tY29sb3ItcHJpbWFyeTogaHNsKDE3MSwgMTAwJSwgNDElKTtcbiAgLS1jb2xvci1saW5rOiBoc2woMjE3LCA3MSUsIDUzJSk7XG4gIC0tY29sb3ItaW5mbzogaHNsKDIwNCwgODYlLCA1MyUpO1xuICAtLWNvbG9yLXN1Y2Nlc3M6IGhzbCgxNDEsIDUzJSwgNTMlKTtcbiAgLS1jb2xvci13YXJuaW5nOiBoc2woNDgsIDEwMCUsIDY3JSk7XG4gIC0tY29sb3ItZGFuZ2VyOiBoc2woMzQ4LCAxMDAlLCA2MSUpO1xuICAtLW5hdmJhci1zcGFjaW5nOiAyMHB4O1xuICAtLXNpZGViYXItc3BhY2luZzogMTBweDtcbiAgLS1jYXJkLXNwYWNpbmc6IDEwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiA4MHB4IDFmci8zNTBweCAxZnI7XG59XG4ucGFnZS1jb250YWluZXIgLm5hdmJhciB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xufVxuXG4uY3J1ZC1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiBtaW4tY29udGVudCAxZnIvMWZyIG1pbi1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNydWQtbGF5b3V0ID4gYnV0dG9uIHtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG59XG4uY3J1ZC1sYXlvdXQgPiAuY2FyZHMge1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiB2YXIoLS1jYXJkLXNwYWNpbmcpO1xufVxuXG4udG9kb3MgLmNhcmQge1xuICBwYWRkaW5nOiB2YXIoLS1jYXJkLXNwYWNpbmcpIDA7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogdmFyKC0tY2FyZC1zcGFjaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLzFmciBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY2FyZCBpbnB1dCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmJ1dHRvbi5kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xufVxuXG4ubmF2YmFyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1uYXZiYXItc3BhY2luZykgKyB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2lkZWJhciB7XG4gIG1hcmdpbjogdmFyKC0tbmF2YmFyLXNwYWNpbmcpO1xuICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1uYXZiYXItc3BhY2luZykgKyB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBOzs7RUFJRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBR0EseUNBQUE7RUFDQSxlQUFBO0VBR0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFHQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFHQSxvQkFBQTtBQVRGOztBQWFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFWRjs7QUFjQTtFQUNFLGFBQUE7QUFYRjs7QUFnQkE7RUFDRSxvQ0FBQTtFQUVBLGFBQUE7RUFDQSxpQ0FBQTtBQWRGO0FBZ0JFO0VBQ0UsaUJBQUE7QUFkSjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtBQWhCRjtBQWtCRTtFQUNFLGlCQUFBO0FBaEJKO0FBbUJFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLGtDQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFuQko7O0FBdUJBO0VBQ0UsOEJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsYUFBQTtFQUNBLDhDQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBckJGO0FBdUJFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFyQko7QUF3QkU7RUFDRSxjQUFBO0FBdEJKOztBQTBCQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXZCRjtBQXlCRTtFQUNFLHFDQUFBO0FBdkJKOztBQTRCQTtFQUNFLDZEQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtBQXpCRjs7QUE2QkE7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBMUJGOztBQThCQTtFQUNFLDREQUFBO0FBM0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFJPT1QgU1RZTEVTXFxuOnJvb3QsXFxuYm9keSxcXG4ucGFnZS1jb250YWluZXIge1xcbiAgLy8gTGF5b3V0XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICAvLyBUeXBvZ3JhcGh5XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIC8vIENvbG9yIHByZXNldHNcXG4gIC0tY29sb3Itd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNvbG9yLWJsYWNrOiBoc2woMCwgMCUsIDQlKTtcXG4gIC0tY29sb3ItbGlnaHQ6IGhzbCgwLCAwJSwgOTYlKTtcXG4gIC0tY29sb3ItZGFyazogaHNsKDAsIDAlLCAyMSUpO1xcbiAgLS1jb2xvci1wcmltYXJ5OiBoc2woMTcxLCAxMDAlLCA0MSUpO1xcbiAgLS1jb2xvci1saW5rOiBoc2woMjE3LCA3MSUsIDUzJSk7XFxuICAtLWNvbG9yLWluZm86IGhzbCgyMDQsIDg2JSwgNTMlKTtcXG4gIC0tY29sb3Itc3VjY2VzczogaHNsKDE0MSwgNTMlLCA1MyUpO1xcbiAgLS1jb2xvci13YXJuaW5nOiBoc2woNDgsIDEwMCUsIDY3JSk7XFxuICAtLWNvbG9yLWRhbmdlcjogaHNsKDM0OCwgMTAwJSwgNjElKTtcXG5cXG4gIC8vIFNwYWNpbmdcXG4gIC0tbmF2YmFyLXNwYWNpbmc6IDIwcHg7XFxuICAtLXNpZGViYXItc3BhY2luZzogMTBweDtcXG4gIC0tY2FyZC1zcGFjaW5nOiAxMHB4O1xcblxcbiAgLy8gQm9yZGVyc1xcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8vIFRZUE9HUkFQSFlcXG4uc2VjdGlvbi1oZWFkZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLy8gSU5URVJBQ1RJVklUWVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8vIE1BSU4gR1JJRCBMQVlPVVRcXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDgwcHggMWZyIC8gMzUwcHggMWZyO1xcblxcbiAgLm5hdmJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICB9XFxufVxcblxcbi8vIFNIQVJFRCBMQVlPVVRTXFxuLmNydWQtbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBtaW4tY29udGVudCAxZnIgLyAxZnIgbWluLWNvbnRlbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgPiBidXR0b24ge1xcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG4gIH1cXG5cXG4gID4gLmNhcmRzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1jYXJkLXNwYWNpbmcpO1xcbiAgfVxcbn1cXG5cXG4udG9kb3MgLmNhcmQge1xcbiAgcGFkZGluZzogdmFyKC0tY2FyZC1zcGFjaW5nKSAwO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1jYXJkLXNwYWNpbmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAmLmRhbmdlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICB9XFxufVxcblxcbi8vIE5BVkJBUlxcbi5uYXZiYXIge1xcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1uYXZiYXItc3BhY2luZykgKyB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbi8vIFNJREVCQVIgKFBST0pFQ1RTKVxcbi5zaWRlYmFyIHtcXG4gIG1hcmdpbjogdmFyKC0tbmF2YmFyLXNwYWNpbmcpO1xcbiAgcGFkZGluZzogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLy8gQ09OVEVOVCAoVEFTS1MpXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luOiBjYWxjKHZhcigtLW5hdmJhci1zcGFjaW5nKSArIHZhcigtLXNpZGViYXItc3BhY2luZykpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUNoaWxkID0gKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzKSA9PiB7XG4gIGNvbnN0IGNoaWxkT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZFR5cGUpO1xuXG4gIGxldCBjbGFzc2VzID1cbiAgICB0eXBlb2YgY2hpbGRDbGFzcyA9PT0gJ3N0cmluZycgPyBjaGlsZENsYXNzLnNwbGl0KC9cXHMrLykgOiBjaGlsZENsYXNzO1xuXG4gIGNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgaWYgKGNscy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZE9iai5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGRPYmo7XG59O1xuXG5jb25zdCBwcmVwZW5kQ2hpbGQgPSAocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MgPSAnJykgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGNyZWF0ZUNoaWxkKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzKTtcbiAgcGFyZW50T2JqLnByZXBlbmQoY2hpbGRPYmopO1xuICByZXR1cm4gY2hpbGRPYmo7XG59O1xuXG5jb25zdCBhcHBlbmRDaGlsZCA9IChwYXJlbnRPYmosIGNoaWxkVHlwZSwgY2hpbGRDbGFzcyA9ICcnKSA9PiB7XG4gIGNvbnN0IGNoaWxkT2JqID0gY3JlYXRlQ2hpbGQocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MpO1xuICBwYXJlbnRPYmouYXBwZW5kQ2hpbGQoY2hpbGRPYmopO1xuICByZXR1cm4gY2hpbGRPYmo7XG59O1xuXG5leHBvcnQgeyBwcmVwZW5kQ2hpbGQsIGFwcGVuZENoaWxkIH07XG4iLCJjb25zdCBUb2RvID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+ICh0aXRsZSA9IG5ld1RpdGxlKTtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgc2V0VGl0bGUgfTtcbn07XG5cbmNvbnN0IFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgdG9kb3MgPSBbXTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiAodGl0bGUgPSBuZXdUaXRsZSk7XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSkgPT4ge1xuICAgIHRvZG9zLnB1c2goVG9kbyh0aXRsZSkpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICByZXR1cm4gdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0VG9kb3MsIHNldFRpdGxlLCBjcmVhdGVUb2RvLCBkZWxldGVUb2RvIH07XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBhcHBlbmRDaGlsZCwgcHJlcGVuZENoaWxkIH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCBTY3JlZW4gPSAoYXBwKSA9PiB7XG4gIGNvbnN0IHJlbmRlckxheW91dCA9ICgpID0+IHtcbiAgICAvLyBDcmVhdGUgbmF2YmFyLCBzaWRlYmFyIGFuZCBjb250ZW50IGRpdnNcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHByZXBlbmRDaGlsZChib2R5LCAnZGl2JywgJ3BhZ2UtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBuYXZiYXIgPSBhcHBlbmRDaGlsZChjb250YWluZXIsICdkaXYnLCAnbmF2YmFyJyk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGFwcGVuZENoaWxkKGNvbnRhaW5lciwgJ2RpdicsICdzaWRlYmFyIGNydWQtbGF5b3V0Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGFwcGVuZENoaWxkKGNvbnRhaW5lciwgJ2RpdicsICdjb250ZW50IGNydWQtbGF5b3V0Jyk7XG5cbiAgICAvLyBDcmVhdGUgaGVhZGVycyBpbiBlYWNoIHNlY3Rpb25cbiAgICBhcHBlbmRDaGlsZChuYXZiYXIsICdoMicsICdzZWN0aW9uLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ1RoaW5ncyBUbyBEbyc7XG4gICAgYXBwZW5kQ2hpbGQoc2lkZWJhciwgJ2gyJywgJ3NlY3Rpb24taGVhZGVyJykudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIGFwcGVuZENoaWxkKGNvbnRlbnQsICdoMicsICdzZWN0aW9uLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ1RvZG9zJztcblxuICAgIC8vIENyZWF0ZSBidXR0b25zIGluIHByb2plY3QgYW5kIHRvZG8gc2VjdGlvbnNcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gYXBwZW5kQ2hpbGQoc2lkZWJhciwgJ2J1dHRvbicsICdhZGQtcHJvamVjdCcpO1xuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhcHAuY3JlYXRlUHJvamVjdCgndGVzdCcpO1xuICAgICAgYXBwLmFjdGl2YXRlUHJvamVjdChhcHAuZ2V0UHJvamVjdHMoKS5sZW5ndGggLSAxKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gYXBwZW5kQ2hpbGQoY29udGVudCwgJ2J1dHRvbicsICdhZGQtdG9kbycpO1xuICAgIGFkZFRvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuICAgIGFkZFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoYXBwLmdldEFjdGl2ZVByb2plY3QoKSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgYXBwLmdldFByb2plY3RzKClbYXBwLmdldEFjdGl2ZVByb2plY3QoKV0uY3JlYXRlVG9kbygndGVzdCB0b2RvJyk7XG4gICAgICByZW5kZXJUb2RvcygpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGRpdiBmb3IgY2FyZHMgaW4gcHJvamVjdCBhbmQgdG9kbyBzZWN0aW9uc1xuICAgIGFwcGVuZENoaWxkKHNpZGViYXIsICdkaXYnLCAncHJvamVjdHMgY2FyZHMnKTtcbiAgICBhcHBlbmRDaGlsZChjb250ZW50LCAnZGl2JywgJ3RvZG9zIGNhcmRzJyk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBwcm9qZWN0c0Rpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGFwcC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYsICdkaXYnLCAnY2FyZCcpO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGFwcGVuZENoaWxkKGNhcmQsICdwJywgJ3RpdGxlJyk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhcHAuYWN0aXZhdGVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgcmVuZGVyVG9kb3MoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gYXBwZW5kQ2hpbGQoY2FyZCwgJ2J1dHRvbicpO1xuICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGVkaXRUZXh0RXZlbnRIYW5kbGVyKHByb2plY3QsIHRpdGxlLCBlZGl0QnV0dG9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGFwcGVuZENoaWxkKGNhcmQsICdidXR0b24nKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYW5nZXInKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhcHAuZGVsZXRlUHJvamVjdChpbmRleCk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICAgIHJlbmRlclRvZG9zKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuICAgIHRvZG9zRGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGFwcC5nZXRQcm9qZWN0cygpW2FwcC5nZXRBY3RpdmVQcm9qZWN0KCldO1xuICAgIGlmICghcHJvamVjdCkgcmV0dXJuO1xuXG4gICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjYXJkID0gYXBwZW5kQ2hpbGQodG9kb3NEaXYsICdkaXYnLCAnY2FyZCcpO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGFwcGVuZENoaWxkKGNhcmQsICdwJywgJ3RpdGxlJyk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGl0bGUoKTtcblxuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGFwcGVuZENoaWxkKGNhcmQsICdidXR0b24nKTtcbiAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cbiAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGVkaXRUZXh0RXZlbnRIYW5kbGVyKHRvZG8sIHRpdGxlLCBlZGl0QnV0dG9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGFwcGVuZENoaWxkKGNhcmQsICdidXR0b24nKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkYW5nZXInKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmRlbGV0ZVRvZG8oaW5kZXgpO1xuICAgICAgICByZW5kZXJUb2RvcygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gRXZlbnQgaGFuZGxlcnNcbiAgY29uc3QgZWRpdFRleHRFdmVudEhhbmRsZXIgPSAob2JqZWN0LCB0aXRsZSwgZWRpdEJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC52YWx1ZSA9IG9iamVjdC5nZXRUaXRsZSgpO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIHRpdGxlLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBpbnB1dCk7XG5cbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2F2ZVRleHRFdmVudEhhbmRsZXIob2JqZWN0LCB0aXRsZSwgaW5wdXQsIGVkaXRCdXR0b24pO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBzYXZlVGV4dEV2ZW50SGFuZGxlciA9IChvYmplY3QsIHRpdGxlLCBpbnB1dCwgZWRpdEJ1dHRvbikgPT4ge1xuICAgIG9iamVjdC5zZXRUaXRsZShpbnB1dC52YWx1ZSk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmplY3QuZ2V0VGl0bGUoKTtcblxuICAgIGlucHV0LnJlbW92ZSgpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgZWRpdFRleHRFdmVudEhhbmRsZXIob2JqZWN0LCB0aXRsZSwgZWRpdEJ1dHRvbik7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlckxheW91dCB9O1xufTtcblxuZXhwb3J0IHsgU2NyZWVuIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuL3NjcmVlbic7XG5cbmNvbnN0IEFwcCA9ICgoKSA9PiB7XG4gIGxldCBzY3JlZW4gPSBudWxsO1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG5cbiAgY29uc3QgZ2V0U2NyZWVuID0gKCkgPT4gc2NyZWVuO1xuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gYWN0aXZlUHJvamVjdDtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChQcm9qZWN0KHRpdGxlKSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZWRQcm9qZWN0ID0gcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGFjdGl2ZVByb2plY3QgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPD0gYWN0aXZlUHJvamVjdCkge1xuICAgICAgYWN0aXZlUHJvamVjdC0tO1xuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVkUHJvamVjdDtcbiAgfTtcblxuICBjb25zdCBhY3RpdmF0ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBhY3RpdmVQcm9qZWN0ID0gaW5kZXg7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9IChhcHApID0+IHtcbiAgICBzY3JlZW4gPSBTY3JlZW4oYXBwKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFNjcmVlbixcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBhY3RpdmF0ZVByb2plY3QsXG4gICAgaW5pdCxcbiAgfTtcbn0pKCk7XG5cbkFwcC5pbml0KEFwcCk7XG5BcHAuZ2V0U2NyZWVuKCkucmVuZGVyTGF5b3V0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=