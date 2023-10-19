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
html,
body {
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
  --border-radius: 5px;
  --container-padding: 10%;
  --card-padding: 10px;
  --card-spacing: 20px;
}

.container {
  --container-height: 100%;
  --navbar-height: 80px;
  height: var(--container-height);
  display: flex;
  flex-direction: column;
}
.container .navbar {
  padding: 0 var(--container-padding);
  height: var(--navbar-height);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  z-index: 1;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: default;
  user-select: none;
}
.container .navbar .back-btn,
.container .navbar .site-name {
  cursor: pointer;
}
.container .navbar .back-btn {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 0 none;
  transition: all 0.1s ease-in-out;
}
.container .navbar .back-btn.hide {
  display: none;
}
.container .navbar .back-btn:hover {
  box-shadow: 0 0 5px var(--color-primary);
}
.container .navbar .title {
  flex: 1;
}
.container .content {
  height: calc(var(--container-height) - var(--navbar-height));
  padding: var(--card-spacing) var(--container-padding);
  background-color: var(--color-light);
}

.buttons {
  display: flex;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-weight: bold;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius);
}
button.delete {
  color: var(--color-white);
  background-color: var(--color-danger);
}

.card {
  padding: var(--card-padding);
  border: var(--color-primary) solid 2px;
  border-radius: calc(2 * var(--border-radius));
  display: flex;
  flex-direction: row;
  align-items: center;
}
.card .left {
  cursor: pointer;
}
.card .right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.card:not(:last-child) {
  margin-bottom: 20px;
}
.card .title {
  font-size: 1.5rem;
  font-weight: bold;
}
.card .todo-count {
  display: flex;
  flex-direction: row;
}
.card .todo-count .uom {
  margin-left: 5px;
  width: 45px;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;EAIE,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EAGA,yCAAA;EACA,eAAA;EAGA,+BAAA;EACA,6BAAA;EACA,8BAAA;EACA,6BAAA;EACA,oCAAA;EACA,gCAAA;EACA,gCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EAGA,oBAAA;EAGA,wBAAA;EACA,oBAAA;EAGA,oBAAA;AAZF;;AAiBA;EACE,wBAAA;EACA,qBAAA;EAEA,+BAAA;EAEA,aAAA;EACA,sBAAA;AAhBF;AAkBE;EACE,mCAAA;EACA,4BAAA;EACA,0CAAA;EACA,UAAA;EAEA,eAAA;EACA,iBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EAEA,eAAA;EACA,iBAAA;AAnBJ;AAqBI;;EAEE,eAAA;AAnBN;AAsBI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EAMA,sBAAA;EACA,gCAAA;AA1BN;AAqBM;EACE,aAAA;AAnBR;AAyBM;EACE,wCAAA;AAvBR;AA2BI;EACE,OAAA;AAzBN;AA6BE;EACE,4DAAA;EACA,qDAAA;EACA,oCAAA;AA3BJ;;AAiCA;EACE,aAAA;EACA,SAAA;AA9BF;;AAiCA;EACE,kBAAA;EACA,iBAAA;EACA,sCAAA;EACA,YAAA;EACA,mCAAA;AA9BF;AAgCE;EACE,yBAAA;EACA,qCAAA;AA9BJ;;AAoCA;EACE,4BAAA;EACA,sCAAA;EACA,6CAAA;EAEA,aAAA;EACA,mBAAA;EACA,mBAAA;AAlCF;AAoCE;EACE,eAAA;AAlCJ;AAqCE;EACE,OAAA;EACA,aAAA;EACA,yBAAA;AAnCJ;AAsCE;EACE,mBAAA;AApCJ;AAuCE;EACE,iBAAA;EACA,iBAAA;AArCJ;AAwCE;EACE,aAAA;EACA,mBAAA;AAtCJ;AAwCI;EACE,gBAAA;EACA,WAAA;AAtCN","sourcesContent":["// BASE CONFIG AND VARIABLES\n\n:root,\nhtml,\nbody {\n  // Layout\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n\n  // Typography\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n\n  // Color presets\n  --color-white: hsl(0, 0%, 100%);\n  --color-black: hsl(0, 0%, 4%);\n  --color-light: hsl(0, 0%, 96%);\n  --color-dark: hsl(0, 0%, 21%);\n  --color-primary: hsl(171, 100%, 41%);\n  --color-link: hsl(217, 71%, 53%);\n  --color-info: hsl(204, 86%, 53%);\n  --color-success: hsl(141, 53%, 53%);\n  --color-warning: hsl(48, 100%, 67%);\n  --color-danger: hsl(348, 100%, 61%);\n\n  // Borders\n  --border-radius: 5px;\n\n  // Padding\n  --container-padding: 10%;\n  --card-padding: 10px;\n\n  // Spacing\n  --card-spacing: 20px;\n}\n\n// BASE SCREEN (NAVBAR, CONTENT)\n\n.container {\n  --container-height: 100%;\n  --navbar-height: 80px;\n\n  height: var(--container-height);\n\n  display: flex;\n  flex-direction: column;\n\n  .navbar {\n    padding: 0 var(--container-padding);\n    height: var(--navbar-height);\n    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);\n    z-index: 1;\n\n    font-size: 2rem;\n    font-weight: bold;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\n    cursor: default;\n    user-select: none;\n\n    .back-btn,\n    .site-name {\n      cursor: pointer;\n    }\n\n    .back-btn {\n      width: 30px;\n      height: 30px;\n      margin-right: 10px;\n\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 15px;\n\n      &.hide {\n        display: none;\n      }\n\n      box-shadow: 0 0 0 none;\n      transition: all 0.1s ease-in-out;\n\n      &:hover {\n        box-shadow: 0 0 5px var(--color-primary);\n      }\n    }\n\n    .title {\n      flex: 1;\n    }\n  }\n\n  .content {\n    height: calc(var(--container-height) - var(--navbar-height));\n    padding: var(--card-spacing) var(--container-padding);\n    background-color: var(--color-light);\n  }\n}\n\n// BUTTONS\n\n.buttons {\n  display: flex;\n  gap: 10px;\n}\n\nbutton {\n  padding: 10px 20px;\n  font-weight: bold;\n  background-color: var(--color-primary);\n  border: none;\n  border-radius: var(--border-radius);\n\n  &.delete {\n    color: var(--color-white);\n    background-color: var(--color-danger);\n  }\n}\n\n// CARDS\n\n.card {\n  padding: var(--card-padding);\n  border: var(--color-primary) solid 2px;\n  border-radius: calc(2 * var(--border-radius));\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  .left {\n    cursor: pointer;\n  }\n\n  .right {\n    flex: 1;\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  .title {\n    font-size: 1.5rem;\n    font-weight: bold;\n  }\n\n  .todo-count {\n    display: flex;\n    flex-direction: row;\n\n    .uom {\n      margin-left: 5px;\n      width: 45px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/models/checklist.js":
/*!*********************************!*\
  !*** ./src/models/checklist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checklist: () => (/* binding */ Checklist)
/* harmony export */ });
const Checklist = () => {
  const tasks = [];

  const createTask = (taskDescription) => {
    tasks.push({ description: taskDescription, completed: false });
  };

  const getTasks = () => tasks;
  const getTaskCompleted = (index) => tasks[index].completed;

  const setTaskCompleted = (index, state) => {
    tasks[index].completed = state;
  };

  const toggleTaskCompleted = (index) => {
    setTaskCompleted(index, !getTaskCompleted(index));
  };

  const deleteTask = (index) => tasks.splice(index, 1);

  return { createTask, getTasks, toggleTaskCompleted, deleteTask };
};




/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/models/todo.js");


const Project = (title) => {
  // Props
  const todos = [];

  //Getters
  const getTitle = () => title;
  const getTodos = () => todos;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);

  // Todo operations
  const createTodo = (title, description, dueDate, priority, note) => {
    todos.push((0,_todo__WEBPACK_IMPORTED_MODULE_0__.Todo)(title, description, dueDate, priority, note));
  };

  const moveTodoPrev = (index) => {
    if (index > 0) {
      [todos[index - 1], todos[index]] = [todos[index], todos[index - 1]];
    }
  };

  const moveTodoNext = (index) => {
    if (index < todos.length - 1) {
      [todos[index], todos[index + 1]] = [todos[index + 1], todos[index]];
    }
  };

  const deleteTodo = (index) => {
    return todos.splice(index, 1);
  };

  return {
    getTitle,
    getTodos,
    setTitle,

    createTodo,
    moveTodoPrev,
    moveTodoNext,
    deleteTodo,
  };
};




/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist */ "./src/models/checklist.js");


const Todo = (title, description, dueDate, priority, note) => {
  // Props
  const checklist = (0,_checklist__WEBPACK_IMPORTED_MODULE_0__.Checklist)();

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNote = () => note;
  const getChecklist = () => checklist;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newFescription) => (description = newFescription);
  const setDueDate = (newFueDate) => (dueDate = newFueDate);
  const setPriority = (newPriority) => (priority = newPriority);
  const setNote = (newNote) => (note = newNote);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNote,
    getChecklist,

    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setNote,
  };
};




/***/ }),

/***/ "./src/screens/base.js":
/*!*****************************!*\
  !*** ./src/screens/base.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseScreen: () => (/* binding */ BaseScreen)
/* harmony export */ });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/screens/navbar.js");



const BaseScreen = (() => {
  const render = (app) => {
    const containerDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.prependChild)(
      document.querySelector('body'),
      'div',
      'container'
    );

    // Navbar
    _navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar.render(app, containerDiv);

    // Content
    (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(containerDiv, 'div', 'content');
  };

  return { render };
})();




/***/ }),

/***/ "./src/screens/navbar.js":
/*!*******************************!*\
  !*** ./src/screens/navbar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navbar: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");


// Screen for all projects
const Navbar = (() => {
  let initialised = false;

  const render = (app, parent) => {
    if (initialised) {
      console.log('Navbar already initialised');
      return;
    }

    const navbarDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(parent, 'div', 'navbar');
    const backButtonDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(navbarDiv, 'div', 'back-btn');
    backButtonDiv.textContent = '<';
    (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(navbarDiv, 'div', 'title');

    const siteNameDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(navbarDiv, 'div', 'site-name');
    siteNameDiv.textContent = 'Things To Do';

    // Event listeners
    siteNameDiv.addEventListener('click', () => {
      app.getHomeScreen().render(app);
    });

    initialised = true;
  };

  const setTitle = (title) => {
    const siteNameDiv = document.querySelector('.title');
    siteNameDiv.textContent = title;
  };

  const showBackButton = (callback) => {
    const backButtonDiv = document.querySelector('.back-btn');
    backButtonDiv.classList.remove('hide');

    backButtonDiv.addEventListener('click', callback);
  };

  const hideBackButton = () => {
    const backButtonDiv = document.querySelector('.back-btn');
    backButtonDiv.classList.add('hide');
  };

  return { render, setTitle, showBackButton, hideBackButton };
})();




/***/ }),

/***/ "./src/screens/project.js":
/*!********************************!*\
  !*** ./src/screens/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectScreen: () => (/* binding */ ProjectScreen)
/* harmony export */ });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/screens/navbar.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/screens/projects.js");




// Screen for single project
const ProjectScreen = (() => {
  const render = (app, project) => {
    // Navbar
    _navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar.setTitle(project.getTitle());
    _navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar.showBackButton(() => {
      _projects__WEBPACK_IMPORTED_MODULE_2__.ProjectsScreen.render(app);
    });

    // Content
    const contentDiv = document.querySelector('.content');
    contentDiv.replaceChildren();
  };

  return { render };
})();




/***/ }),

/***/ "./src/screens/projects.js":
/*!*********************************!*\
  !*** ./src/screens/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsScreen: () => (/* binding */ ProjectsScreen)
/* harmony export */ });
/* harmony import */ var _util_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helper */ "./src/util/helper.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/screens/navbar.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/screens/project.js");




// Screen for all projects
const ProjectsScreen = (() => {
  const render = (app) => {
    // Navbar
    _navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar.setTitle('Projects');
    _navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar.hideBackButton();

    // Content
    const contentDiv = document.querySelector('.content');
    contentDiv.replaceChildren();

    const projectsDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(contentDiv, 'div', 'projects');

    app.getProjects().forEach((project, index) => {
      const projectDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(projectsDiv, 'div', 'project card');

      const leftDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(projectDiv, 'div', 'left');
      const rightDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(projectDiv, 'div', 'right');

      // Left half of card
      const titleDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(leftDiv, 'div', 'title');
      titleDiv.textContent = project.getTitle();

      const todoCountDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(leftDiv, 'div', 'todo-count');
      const countValueDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(todoCountDiv, 'div', 'value');
      countValueDiv.textContent = project.getTodos().length;

      const countUomDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(todoCountDiv, 'div', 'uom');
      countUomDiv.textContent =
        project.getTodos().length !== 1 ? 'todos' : 'todo';

      // Right half of card
      const buttonsDiv = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(rightDiv, 'div', 'buttons');
      const editButton = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(buttonsDiv, 'button');
      editButton.textContent = 'Edit';
      const deleteButton = (0,_util_helper__WEBPACK_IMPORTED_MODULE_0__.appendChild)(buttonsDiv, 'button', 'delete');
      deleteButton.textContent = 'Delete';

      // Event listeners
      leftDiv.addEventListener('click', () => {
        _project__WEBPACK_IMPORTED_MODULE_2__.ProjectScreen.render(app, project);
      });

      editButton.addEventListener('click', () => {});

      deleteButton.addEventListener('click', () => {
        app.deleteProject(index);
        render(app);
      });
    });
  };

  return { render };
})();




/***/ }),

/***/ "./src/util/helper.js":
/*!****************************!*\
  !*** ./src/util/helper.js ***!
  \****************************/
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/project */ "./src/models/project.js");
/* harmony import */ var _screens_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/base */ "./src/screens/base.js");
/* harmony import */ var _screens_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/projects */ "./src/screens/projects.js");





const App = (() => {
  const projects = [];
  const homeScreen = _screens_projects__WEBPACK_IMPORTED_MODULE_3__.ProjectsScreen;

  // Getters
  const getProjects = () => projects;
  const getHomeScreen = () => homeScreen;

  // Projects
  const createProject = (title) => {
    projects.push((0,_models_project__WEBPACK_IMPORTED_MODULE_1__.Project)(title));
  };

  const deleteProject = (index) => projects.splice(index, 1);

  // Screens

  return { getProjects, createProject, deleteProject, getHomeScreen };
})();

App.createProject('Test Project');
App.createProject('Test Project 2');

_screens_base__WEBPACK_IMPORTED_MODULE_2__.BaseScreen.render(App);
App.getHomeScreen().render(App);

// TODO: Remove in production
window.app = App;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNxQjtBQUNDO0FBQ1E7O0FBRXBEO0FBQ0E7QUFDQSxxQkFBcUIsNkRBQWM7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFPO0FBQ3pCOztBQUVBOztBQUVBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVEO0FBQ0E7O0FBRUEscURBQVU7QUFDVjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvLy4vc3JjL21vZGVscy9jaGVja2xpc3QuanMiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvLy4vc3JjL21vZGVscy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL3NyYy9tb2RlbHMvdG9kby5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9zcmMvc2NyZWVucy9iYXNlLmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL3NyYy9zY3JlZW5zL25hdmJhci5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9zcmMvc2NyZWVucy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL3NyYy9zY3JlZW5zL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RoaW5ncy10by1kby8uL3NyYy91dGlsL2hlbHBlci5qcyIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoaW5ncy10by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhpbmdzLXRvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90aGluZ3MtdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LFxuaHRtbCxcbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tY29sb3Itd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIC0tY29sb3ItYmxhY2s6IGhzbCgwLCAwJSwgNCUpO1xuICAtLWNvbG9yLWxpZ2h0OiBoc2woMCwgMCUsIDk2JSk7XG4gIC0tY29sb3ItZGFyazogaHNsKDAsIDAlLCAyMSUpO1xuICAtLWNvbG9yLXByaW1hcnk6IGhzbCgxNzEsIDEwMCUsIDQxJSk7XG4gIC0tY29sb3ItbGluazogaHNsKDIxNywgNzElLCA1MyUpO1xuICAtLWNvbG9yLWluZm86IGhzbCgyMDQsIDg2JSwgNTMlKTtcbiAgLS1jb2xvci1zdWNjZXNzOiBoc2woMTQxLCA1MyUsIDUzJSk7XG4gIC0tY29sb3Itd2FybmluZzogaHNsKDQ4LCAxMDAlLCA2NyUpO1xuICAtLWNvbG9yLWRhbmdlcjogaHNsKDM0OCwgMTAwJSwgNjElKTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29udGFpbmVyLXBhZGRpbmc6IDEwJTtcbiAgLS1jYXJkLXBhZGRpbmc6IDEwcHg7XG4gIC0tY2FyZC1zcGFjaW5nOiAyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgLS1jb250YWluZXItaGVpZ2h0OiAxMDAlO1xuICAtLW5hdmJhci1oZWlnaHQ6IDgwcHg7XG4gIGhlaWdodDogdmFyKC0tY29udGFpbmVyLWhlaWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIC5uYXZiYXIge1xuICBwYWRkaW5nOiAwIHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKTtcbiAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5jb250YWluZXIgLm5hdmJhciAuYmFjay1idG4sXG4uY29udGFpbmVyIC5uYXZiYXIgLnNpdGUtbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLm5hdmJhciAuYmFjay1idG4ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMCBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cbi5jb250YWluZXIgLm5hdmJhciAuYmFjay1idG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGFpbmVyIC5uYXZiYXIgLmJhY2stYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5jb250YWluZXIgLm5hdmJhciAudGl0bGUge1xuICBmbGV4OiAxO1xufVxuLmNvbnRhaW5lciAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1jb250YWluZXItaGVpZ2h0KSAtIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcbiAgcGFkZGluZzogdmFyKC0tY2FyZC1zcGFjaW5nKSB2YXIoLS1jb250YWluZXItcGFkZGluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuYnV0dG9uLmRlbGV0ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nKTtcbiAgYm9yZGVyOiB2YXIoLS1jb2xvci1wcmltYXJ5KSBzb2xpZCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMiAqIHZhcigtLWJvcmRlci1yYWRpdXMpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkIC5sZWZ0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQgLnJpZ2h0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQgLnRvZG8tY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmNhcmQgLnRvZG8tY291bnQgLnVvbSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA0NXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUlFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFHQSx5Q0FBQTtFQUNBLGVBQUE7RUFHQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUdBLG9CQUFBO0VBR0Esd0JBQUE7RUFDQSxvQkFBQTtFQUdBLG9CQUFBO0FBWkY7O0FBaUJBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUVBLCtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBaEJGO0FBa0JFO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7QUFuQko7QUFxQkk7O0VBRUUsZUFBQTtBQW5CTjtBQXNCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBTUEsc0JBQUE7RUFDQSxnQ0FBQTtBQTFCTjtBQXFCTTtFQUNFLGFBQUE7QUFuQlI7QUF5Qk07RUFDRSx3Q0FBQTtBQXZCUjtBQTJCSTtFQUNFLE9BQUE7QUF6Qk47QUE2QkU7RUFDRSw0REFBQTtFQUNBLHFEQUFBO0VBQ0Esb0NBQUE7QUEzQko7O0FBaUNBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUE5QkY7O0FBaUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FBOUJGO0FBZ0NFO0VBQ0UseUJBQUE7RUFDQSxxQ0FBQTtBQTlCSjs7QUFvQ0E7RUFDRSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWxDRjtBQW9DRTtFQUNFLGVBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBbkNKO0FBc0NFO0VBQ0UsbUJBQUE7QUFwQ0o7QUF1Q0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBckNKO0FBd0NFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBdENKO0FBd0NJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBdENOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEJBU0UgQ09ORklHIEFORCBWQVJJQUJMRVNcXG5cXG46cm9vdCxcXG5odG1sLFxcbmJvZHkge1xcbiAgLy8gTGF5b3V0XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICAvLyBUeXBvZ3JhcGh5XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gIC8vIENvbG9yIHByZXNldHNcXG4gIC0tY29sb3Itd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNvbG9yLWJsYWNrOiBoc2woMCwgMCUsIDQlKTtcXG4gIC0tY29sb3ItbGlnaHQ6IGhzbCgwLCAwJSwgOTYlKTtcXG4gIC0tY29sb3ItZGFyazogaHNsKDAsIDAlLCAyMSUpO1xcbiAgLS1jb2xvci1wcmltYXJ5OiBoc2woMTcxLCAxMDAlLCA0MSUpO1xcbiAgLS1jb2xvci1saW5rOiBoc2woMjE3LCA3MSUsIDUzJSk7XFxuICAtLWNvbG9yLWluZm86IGhzbCgyMDQsIDg2JSwgNTMlKTtcXG4gIC0tY29sb3Itc3VjY2VzczogaHNsKDE0MSwgNTMlLCA1MyUpO1xcbiAgLS1jb2xvci13YXJuaW5nOiBoc2woNDgsIDEwMCUsIDY3JSk7XFxuICAtLWNvbG9yLWRhbmdlcjogaHNsKDM0OCwgMTAwJSwgNjElKTtcXG5cXG4gIC8vIEJvcmRlcnNcXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgLy8gUGFkZGluZ1xcbiAgLS1jb250YWluZXItcGFkZGluZzogMTAlO1xcbiAgLS1jYXJkLXBhZGRpbmc6IDEwcHg7XFxuXFxuICAvLyBTcGFjaW5nXFxuICAtLWNhcmQtc3BhY2luZzogMjBweDtcXG59XFxuXFxuLy8gQkFTRSBTQ1JFRU4gKE5BVkJBUiwgQ09OVEVOVClcXG5cXG4uY29udGFpbmVyIHtcXG4gIC0tY29udGFpbmVyLWhlaWdodDogMTAwJTtcXG4gIC0tbmF2YmFyLWhlaWdodDogODBweDtcXG5cXG4gIGhlaWdodDogdmFyKC0tY29udGFpbmVyLWhlaWdodCk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC5uYXZiYXIge1xcbiAgICBwYWRkaW5nOiAwIHZhcigtLWNvbnRhaW5lci1wYWRkaW5nKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXZiYXItaGVpZ2h0KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gICAgLmJhY2stYnRuLFxcbiAgICAuc2l0ZS1uYW1lIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmJhY2stYnRuIHtcXG4gICAgICB3aWR0aDogMzBweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgICAgICYuaGlkZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCBub25lO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICBmbGV4OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1jb250YWluZXItaGVpZ2h0KSAtIHZhcigtLW5hdmJhci1oZWlnaHQpKTtcXG4gICAgcGFkZGluZzogdmFyKC0tY2FyZC1zcGFjaW5nKSB2YXIoLS1jb250YWluZXItcGFkZGluZyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXG4gIH1cXG59XFxuXFxuLy8gQlVUVE9OU1xcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAmLmRlbGV0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XFxuICB9XFxufVxcblxcbi8vIENBUkRTXFxuXFxuLmNhcmQge1xcbiAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nKTtcXG4gIGJvcmRlcjogdmFyKC0tY29sb3ItcHJpbWFyeSkgc29saWQgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygyICogdmFyKC0tYm9yZGVyLXJhZGl1cykpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLmxlZnQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAucmlnaHQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC50b2RvLWNvdW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgLnVvbSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgICB3aWR0aDogNDVweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IENoZWNrbGlzdCA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKHRhc2tEZXNjcmlwdGlvbikgPT4ge1xuICAgIHRhc2tzLnB1c2goeyBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLCBjb21wbGV0ZWQ6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XG4gIGNvbnN0IGdldFRhc2tDb21wbGV0ZWQgPSAoaW5kZXgpID0+IHRhc2tzW2luZGV4XS5jb21wbGV0ZWQ7XG5cbiAgY29uc3Qgc2V0VGFza0NvbXBsZXRlZCA9IChpbmRleCwgc3RhdGUpID0+IHtcbiAgICB0YXNrc1tpbmRleF0uY29tcGxldGVkID0gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlVGFza0NvbXBsZXRlZCA9IChpbmRleCkgPT4ge1xuICAgIHNldFRhc2tDb21wbGV0ZWQoaW5kZXgsICFnZXRUYXNrQ29tcGxldGVkKGluZGV4KSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4gdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICByZXR1cm4geyBjcmVhdGVUYXNrLCBnZXRUYXNrcywgdG9nZ2xlVGFza0NvbXBsZXRlZCwgZGVsZXRlVGFzayB9O1xufTtcblxuZXhwb3J0IHsgQ2hlY2tsaXN0IH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcblxuY29uc3QgUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAvLyBQcm9wc1xuICBjb25zdCB0b2RvcyA9IFtdO1xuXG4gIC8vR2V0dGVyc1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuXG4gIC8vIFNldHRlcnNcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+ICh0aXRsZSA9IG5ld1RpdGxlKTtcblxuICAvLyBUb2RvIG9wZXJhdGlvbnNcbiAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlKSA9PiB7XG4gICAgdG9kb3MucHVzaChUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGUpKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlVG9kb1ByZXYgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICBbdG9kb3NbaW5kZXggLSAxXSwgdG9kb3NbaW5kZXhdXSA9IFt0b2Rvc1tpbmRleF0sIHRvZG9zW2luZGV4IC0gMV1dO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb3ZlVG9kb05leHQgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPCB0b2Rvcy5sZW5ndGggLSAxKSB7XG4gICAgICBbdG9kb3NbaW5kZXhdLCB0b2Rvc1tpbmRleCArIDFdXSA9IFt0b2Rvc1tpbmRleCArIDFdLCB0b2Rvc1tpbmRleF1dO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXRUb2RvcyxcbiAgICBzZXRUaXRsZSxcblxuICAgIGNyZWF0ZVRvZG8sXG4gICAgbW92ZVRvZG9QcmV2LFxuICAgIG1vdmVUb2RvTmV4dCxcbiAgICBkZWxldGVUb2RvLFxuICB9O1xufTtcblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgQ2hlY2tsaXN0IH0gZnJvbSAnLi9jaGVja2xpc3QnO1xuXG5jb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGUpID0+IHtcbiAgLy8gUHJvcHNcbiAgY29uc3QgY2hlY2tsaXN0ID0gQ2hlY2tsaXN0KCk7XG5cbiAgLy8gR2V0dGVyc1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3QgZ2V0Tm90ZSA9ICgpID0+IG5vdGU7XG4gIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IGNoZWNrbGlzdDtcblxuICAvLyBTZXR0ZXJzXG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiAodGl0bGUgPSBuZXdUaXRsZSk7XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Zlc2NyaXB0aW9uKSA9PiAoZGVzY3JpcHRpb24gPSBuZXdGZXNjcmlwdGlvbik7XG4gIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RnVlRGF0ZSkgPT4gKGR1ZURhdGUgPSBuZXdGdWVEYXRlKTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IChwcmlvcml0eSA9IG5ld1ByaW9yaXR5KTtcbiAgY29uc3Qgc2V0Tm90ZSA9IChuZXdOb3RlKSA9PiAobm90ZSA9IG5ld05vdGUpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXROb3RlLFxuICAgIGdldENoZWNrbGlzdCxcblxuICAgIHNldFRpdGxlLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIHNldER1ZURhdGUsXG4gICAgc2V0UHJpb3JpdHksXG4gICAgc2V0Tm90ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsImltcG9ydCB7IGFwcGVuZENoaWxkLCBwcmVwZW5kQ2hpbGQgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL25hdmJhcic7XG5cbmNvbnN0IEJhc2VTY3JlZW4gPSAoKCkgPT4ge1xuICBjb25zdCByZW5kZXIgPSAoYXBwKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gcHJlcGVuZENoaWxkKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgICAgJ2RpdicsXG4gICAgICAnY29udGFpbmVyJ1xuICAgICk7XG5cbiAgICAvLyBOYXZiYXJcbiAgICBOYXZiYXIucmVuZGVyKGFwcCwgY29udGFpbmVyRGl2KTtcblxuICAgIC8vIENvbnRlbnRcbiAgICBhcHBlbmRDaGlsZChjb250YWluZXJEaXYsICdkaXYnLCAnY29udGVudCcpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlciB9O1xufSkoKTtcblxuZXhwb3J0IHsgQmFzZVNjcmVlbiB9O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG5cbi8vIFNjcmVlbiBmb3IgYWxsIHByb2plY3RzXG5jb25zdCBOYXZiYXIgPSAoKCkgPT4ge1xuICBsZXQgaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICBjb25zdCByZW5kZXIgPSAoYXBwLCBwYXJlbnQpID0+IHtcbiAgICBpZiAoaW5pdGlhbGlzZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOYXZiYXIgYWxyZWFkeSBpbml0aWFsaXNlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdmJhckRpdiA9IGFwcGVuZENoaWxkKHBhcmVudCwgJ2RpdicsICduYXZiYXInKTtcbiAgICBjb25zdCBiYWNrQnV0dG9uRGl2ID0gYXBwZW5kQ2hpbGQobmF2YmFyRGl2LCAnZGl2JywgJ2JhY2stYnRuJyk7XG4gICAgYmFja0J1dHRvbkRpdi50ZXh0Q29udGVudCA9ICc8JztcbiAgICBhcHBlbmRDaGlsZChuYXZiYXJEaXYsICdkaXYnLCAndGl0bGUnKTtcblxuICAgIGNvbnN0IHNpdGVOYW1lRGl2ID0gYXBwZW5kQ2hpbGQobmF2YmFyRGl2LCAnZGl2JywgJ3NpdGUtbmFtZScpO1xuICAgIHNpdGVOYW1lRGl2LnRleHRDb250ZW50ID0gJ1RoaW5ncyBUbyBEbyc7XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lcnNcbiAgICBzaXRlTmFtZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGFwcC5nZXRIb21lU2NyZWVuKCkucmVuZGVyKGFwcCk7XG4gICAgfSk7XG5cbiAgICBpbml0aWFsaXNlZCA9IHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBzaXRlTmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICAgIHNpdGVOYW1lRGl2LnRleHRDb250ZW50ID0gdGl0bGU7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0JhY2tCdXR0b24gPSAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBiYWNrQnV0dG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stYnRuJyk7XG4gICAgYmFja0J1dHRvbkRpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICBiYWNrQnV0dG9uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVCYWNrQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tCdXR0b25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjay1idG4nKTtcbiAgICBiYWNrQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXIsIHNldFRpdGxlLCBzaG93QmFja0J1dHRvbiwgaGlkZUJhY2tCdXR0b24gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IE5hdmJhciB9O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgeyBQcm9qZWN0c1NjcmVlbiB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG4vLyBTY3JlZW4gZm9yIHNpbmdsZSBwcm9qZWN0XG5jb25zdCBQcm9qZWN0U2NyZWVuID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKGFwcCwgcHJvamVjdCkgPT4ge1xuICAgIC8vIE5hdmJhclxuICAgIE5hdmJhci5zZXRUaXRsZShwcm9qZWN0LmdldFRpdGxlKCkpO1xuICAgIE5hdmJhci5zaG93QmFja0J1dHRvbigoKSA9PiB7XG4gICAgICBQcm9qZWN0c1NjcmVlbi5yZW5kZXIoYXBwKTtcbiAgICB9KTtcblxuICAgIC8vIENvbnRlbnRcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlciB9O1xufSkoKTtcblxuZXhwb3J0IHsgUHJvamVjdFNjcmVlbiB9O1xuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi91dGlsL2hlbHBlcic7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgeyBQcm9qZWN0U2NyZWVuIH0gZnJvbSAnLi9wcm9qZWN0JztcblxuLy8gU2NyZWVuIGZvciBhbGwgcHJvamVjdHNcbmNvbnN0IFByb2plY3RzU2NyZWVuID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKGFwcCkgPT4ge1xuICAgIC8vIE5hdmJhclxuICAgIE5hdmJhci5zZXRUaXRsZSgnUHJvamVjdHMnKTtcbiAgICBOYXZiYXIuaGlkZUJhY2tCdXR0b24oKTtcblxuICAgIC8vIENvbnRlbnRcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBhcHBlbmRDaGlsZChjb250ZW50RGl2LCAnZGl2JywgJ3Byb2plY3RzJyk7XG5cbiAgICBhcHAuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdERpdiA9IGFwcGVuZENoaWxkKHByb2plY3RzRGl2LCAnZGl2JywgJ3Byb2plY3QgY2FyZCcpO1xuXG4gICAgICBjb25zdCBsZWZ0RGl2ID0gYXBwZW5kQ2hpbGQocHJvamVjdERpdiwgJ2RpdicsICdsZWZ0Jyk7XG4gICAgICBjb25zdCByaWdodERpdiA9IGFwcGVuZENoaWxkKHByb2plY3REaXYsICdkaXYnLCAncmlnaHQnKTtcblxuICAgICAgLy8gTGVmdCBoYWxmIG9mIGNhcmRcbiAgICAgIGNvbnN0IHRpdGxlRGl2ID0gYXBwZW5kQ2hpbGQobGVmdERpdiwgJ2RpdicsICd0aXRsZScpO1xuICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Db3VudERpdiA9IGFwcGVuZENoaWxkKGxlZnREaXYsICdkaXYnLCAndG9kby1jb3VudCcpO1xuICAgICAgY29uc3QgY291bnRWYWx1ZURpdiA9IGFwcGVuZENoaWxkKHRvZG9Db3VudERpdiwgJ2RpdicsICd2YWx1ZScpO1xuICAgICAgY291bnRWYWx1ZURpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VG9kb3MoKS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGNvdW50VW9tRGl2ID0gYXBwZW5kQ2hpbGQodG9kb0NvdW50RGl2LCAnZGl2JywgJ3VvbScpO1xuICAgICAgY291bnRVb21EaXYudGV4dENvbnRlbnQgPVxuICAgICAgICBwcm9qZWN0LmdldFRvZG9zKCkubGVuZ3RoICE9PSAxID8gJ3RvZG9zJyA6ICd0b2RvJztcblxuICAgICAgLy8gUmlnaHQgaGFsZiBvZiBjYXJkXG4gICAgICBjb25zdCBidXR0b25zRGl2ID0gYXBwZW5kQ2hpbGQocmlnaHREaXYsICdkaXYnLCAnYnV0dG9ucycpO1xuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGFwcGVuZENoaWxkKGJ1dHRvbnNEaXYsICdidXR0b24nKTtcbiAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBhcHBlbmRDaGlsZChidXR0b25zRGl2LCAnYnV0dG9uJywgJ2RlbGV0ZScpO1xuICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5cbiAgICAgIC8vIEV2ZW50IGxpc3RlbmVyc1xuICAgICAgbGVmdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgUHJvamVjdFNjcmVlbi5yZW5kZXIoYXBwLCBwcm9qZWN0KTtcbiAgICAgIH0pO1xuXG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuXG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFwcC5kZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgcmVuZGVyKGFwcCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFByb2plY3RzU2NyZWVuIH07XG4iLCJjb25zdCBjcmVhdGVDaGlsZCA9IChwYXJlbnRPYmosIGNoaWxkVHlwZSwgY2hpbGRDbGFzcykgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGRUeXBlKTtcblxuICBsZXQgY2xhc3NlcyA9XG4gICAgdHlwZW9mIGNoaWxkQ2xhc3MgPT09ICdzdHJpbmcnID8gY2hpbGRDbGFzcy5zcGxpdCgvXFxzKy8pIDogY2hpbGRDbGFzcztcblxuICBjbGFzc2VzLmZvckVhY2goKGNscykgPT4ge1xuICAgIGlmIChjbHMubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRPYmouY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkT2JqO1xufTtcblxuY29uc3QgcHJlcGVuZENoaWxkID0gKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzID0gJycpID0+IHtcbiAgY29uc3QgY2hpbGRPYmogPSBjcmVhdGVDaGlsZChwYXJlbnRPYmosIGNoaWxkVHlwZSwgY2hpbGRDbGFzcyk7XG4gIHBhcmVudE9iai5wcmVwZW5kKGNoaWxkT2JqKTtcbiAgcmV0dXJuIGNoaWxkT2JqO1xufTtcblxuY29uc3QgYXBwZW5kQ2hpbGQgPSAocGFyZW50T2JqLCBjaGlsZFR5cGUsIGNoaWxkQ2xhc3MgPSAnJykgPT4ge1xuICBjb25zdCBjaGlsZE9iaiA9IGNyZWF0ZUNoaWxkKHBhcmVudE9iaiwgY2hpbGRUeXBlLCBjaGlsZENsYXNzKTtcbiAgcGFyZW50T2JqLmFwcGVuZENoaWxkKGNoaWxkT2JqKTtcbiAgcmV0dXJuIGNoaWxkT2JqO1xufTtcblxuZXhwb3J0IHsgcHJlcGVuZENoaWxkLCBhcHBlbmRDaGlsZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHsgQmFzZVNjcmVlbiB9IGZyb20gJy4vc2NyZWVucy9iYXNlJztcbmltcG9ydCB7IFByb2plY3RzU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW5zL3Byb2plY3RzJztcblxuY29uc3QgQXBwID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgY29uc3QgaG9tZVNjcmVlbiA9IFByb2plY3RzU2NyZWVuO1xuXG4gIC8vIEdldHRlcnNcbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcbiAgY29uc3QgZ2V0SG9tZVNjcmVlbiA9ICgpID0+IGhvbWVTY3JlZW47XG5cbiAgLy8gUHJvamVjdHNcbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIHByb2plY3RzLnB1c2goUHJvamVjdCh0aXRsZSkpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaW5kZXgpID0+IHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgLy8gU2NyZWVuc1xuXG4gIHJldHVybiB7IGdldFByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBnZXRIb21lU2NyZWVuIH07XG59KSgpO1xuXG5BcHAuY3JlYXRlUHJvamVjdCgnVGVzdCBQcm9qZWN0Jyk7XG5BcHAuY3JlYXRlUHJvamVjdCgnVGVzdCBQcm9qZWN0IDInKTtcblxuQmFzZVNjcmVlbi5yZW5kZXIoQXBwKTtcbkFwcC5nZXRIb21lU2NyZWVuKCkucmVuZGVyKEFwcCk7XG5cbi8vIFRPRE86IFJlbW92ZSBpbiBwcm9kdWN0aW9uXG53aW5kb3cuYXBwID0gQXBwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9