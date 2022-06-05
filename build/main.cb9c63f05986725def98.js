/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/calculateTime.js":
/*!*****************************!*\
  !*** ./js/calculateTime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calculateTime)\n/* harmony export */ });\nfunction calculateTime({h, m, s}) {\r\n    if (s === 0 && m !== 0) {\r\n        m -= 1;\r\n        s += 59\r\n    }\r\n    if (m === 0 && h !== 0) {\r\n        h -= 1;\r\n        m += 59\r\n    }\r\n    return {h: h, m: m, s: s}\r\n}\r\n\r\n//пришлось придумать таймер без библиотеки луксон\n\n//# sourceURL=webpack://webtools/./js/calculateTime.js?");

/***/ }),

/***/ "./js/dateCalc.js":
/*!************************!*\
  !*** ./js/dateCalc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _printResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printResult.js */ \"./js/printResult.js\");\n/* harmony import */ var _getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDateDiff.js */ \"./js/getDateDiff.js\");\n\r\n\r\n\r\nfunction dateCalc(){\r\n    const form = document.getElementById('dateCalc');\r\n\r\n    form.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n\r\n        const formData = new FormData(event.target);\r\n\r\n        const firstDate = formData.get('firstDate');\r\n        const secondDate = formData.get('secondDate');\r\n\r\n        if (!firstDate || !secondDate) {\r\n            (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)('Empty date fields')\r\n        } else {\r\n            const result = firstDate > secondDate ? (0,_getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(secondDate, firstDate) : (0,_getDateDiff_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(firstDate, secondDate);\r\n\r\n            //походу в исходном коде луксона разработчики где-то словили баг\r\n            console.log(result) //не работает\r\n        };\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateCalc);\n\n//# sourceURL=webpack://webtools/./js/dateCalc.js?");

/***/ }),

/***/ "./js/getDateDiff.js":
/*!***************************!*\
  !*** ./js/getDateDiff.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'luxon/DateTime'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nfunction getDateDiff(firstDate, secondDate) {\r\n\r\n    const firstDateObj = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'luxon/DateTime'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firstDate);\r\n    const secondDateObj = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'luxon/DateTime'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(secondDate);\r\n\r\n    return secondDateObj.diff(firstDateObj, ['months', 'days', 'hours', 'seconds']).toObject();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDateDiff);\n\n//# sourceURL=webpack://webtools/./js/getDateDiff.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _switchApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchApp */ \"./js/switchApp.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n\r\n\n\n//# sourceURL=webpack://webtools/./js/index.js?");

/***/ }),

/***/ "./js/printResult.js":
/*!***************************!*\
  !*** ./js/printResult.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printResult\": () => (/* binding */ printResult)\n/* harmony export */ });\nconst printResult = (text) => {\r\n    \r\n    const resultField = document.getElementById('dateCalc_result');\r\n    resultField.innerText = text;\r\n    resultField.style.color = 'red';\r\n\r\n}\n\n//# sourceURL=webpack://webtools/./js/printResult.js?");

/***/ }),

/***/ "./js/switchApp.js":
/*!*************************!*\
  !*** ./js/switchApp.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dateCalc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateCalc.js */ \"./js/dateCalc.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ \"./js/timer.js\");\n\r\n\r\n\r\n//рендер страницы в зависимости от переключения приложений\r\n\r\nconst switchButton = document.getElementById('switchButton');\r\nconst container = document.getElementById('container');\r\n\r\n\r\nswitchButton.addEventListener('click', () => {\r\n    if (switchButton.getAttribute('toggle') === 'calc') {\r\n        switchButton.setAttribute('toggle', 'timer')\r\n        container.innerHTML = `\r\n            <form id=\"dateCalc\">\r\n                <h3>Date Calculator</h3>\r\n                <label>\r\n                    <strong>First date</strong>\r\n                    <input type=\"date\" name=\"firstDate\">\r\n                </label>\r\n                <label>\r\n                    <strong>Second date</strong>\r\n                    <input type=\"date\" name=\"secondDate\">\r\n                </label>\r\n                <button type=\"submit\">Calculate date range</button>\r\n                <p style=\"font-size: 50px;\" id=\"dateCalc_result\"></p>\r\n            </form>`;\r\n        (0,_dateCalc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } else {\r\n        switchButton.setAttribute('toggle', 'calc')\r\n        container.innerHTML = `\r\n            <form id=\"timer\">\r\n                <h3>Timer</h3>\r\n                <label>\r\n                    <strong>Set hours</strong>\r\n                    <input type=\"text\" name=\"hoursInput\">\r\n                </label>\r\n                <label>\r\n                    <strong>Set minutes</strong>\r\n                    <input type=\"text\" name=\"minutesInput\">\r\n                </label>\r\n                <label>\r\n                    <strong>Set seconds</strong>\r\n                    <input type=\"text\" name=\"secondsInput\">\r\n                </label>\r\n                <button type=\"submit\">Set Timer</button>\r\n                \r\n                <p style=\"font-size: 50px;\" id=\"dateCalc_result\"></p>\r\n            </form>\r\n            <button id=\"startButton\">Start</button>\r\n                <button id=\"stopButton\">Stop</button>`\r\n        ;(0,_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n})\n\n//# sourceURL=webpack://webtools/./js/switchApp.js?");

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _printResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printResult.js */ \"./js/printResult.js\");\n/* harmony import */ var _calculateTime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculateTime.js */ \"./js/calculateTime.js\");\n\r\n\r\n\r\n\r\nfunction timer() {\r\n    const form = document.getElementById('timer');\r\n    const startButton = document.getElementById('startButton');\r\n    const stopButton = document.getElementById('stopButton');\r\n\r\n    form.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n\r\n        const formData = new FormData(event.target);\r\n        let hoursInput = +formData.get('hoursInput');\r\n        let minutesInput = +formData.get('minutesInput');\r\n        let secondsInput = +formData.get('secondsInput');\r\n\r\n        if (minutesInput > 60 || minutesInput < 0) {\r\n            (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)('Wrong time');\r\n        }\r\n        else if (secondsInput > 60 || secondsInput < 0) {\r\n            (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)('Wrong time');\r\n        } else if (secondsInput > 60 || secondsInput < 0) {\r\n            (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)('Wrong time');\r\n        } else {\r\n            (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)(`Hours ${hoursInput}, minutes ${minutesInput}, seconds ${secondsInput}`)\r\n        }\r\n\r\n        const timeConfig = {\r\n            h: hoursInput,\r\n            m: minutesInput,\r\n            s: secondsInput\r\n        }\r\n\r\n\r\n        let interval;\r\n\r\n        stopButton.addEventListener('click', () => {\r\n            clearInterval(interval);\r\n            (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)(`Hours ${timeConfig.h}, minutes ${timeConfig.m}, seconds ${timeConfig.s}`);\r\n        })\r\n\r\n        startButton.addEventListener('click', () => {\r\n            interval = setInterval(() => {\r\n                if (timeConfig.h <= 0 && timeConfig.m <= 0 && timeConfig.s < 0) clearInterval(interval)\r\n\r\n                timeConfig.h = (0,_calculateTime_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(timeConfig).h;;\r\n                timeConfig.m = (0,_calculateTime_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(timeConfig).m;\r\n                timeConfig.s = (0,_calculateTime_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(timeConfig).s;\r\n\r\n                timeConfig.s -= 1;\r\n\r\n                (0,_printResult_js__WEBPACK_IMPORTED_MODULE_0__.printResult)(`Hours ${timeConfig.h}, minutes ${timeConfig.m}, seconds ${timeConfig.s}`);\r\n\r\n            }, 1000)\r\n\r\n        })\r\n\r\n\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://webtools/./js/timer.js?");

/***/ }),

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webtools/./css/index.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;