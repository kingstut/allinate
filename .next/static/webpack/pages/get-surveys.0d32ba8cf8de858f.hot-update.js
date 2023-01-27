"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/get-surveys",{

/***/ "./components/GetFormList.js":
/*!***********************************!*\
  !*** ./components/GetFormList.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GetForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetForm */ \"./components/GetForm.js\");\n/* harmony import */ var _styles_get_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/get.module.css */ \"./styles/get.module.css\");\n/* harmony import */ var _styles_get_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_get_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GetFormList = (param)=>{\n    let { surveys , onSubmit  } = param;\n    if (surveys.length > 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_get_module_css__WEBPACK_IMPORTED_MODULE_2___default().Ulist),\n            children: surveys.map((survey)=>{\n                return(// eslint-disable-next-line react/jsx-key\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_get_module_css__WEBPACK_IMPORTED_MODULE_2___default().Form),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GetForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        question: survey,\n                        onSubmit: onSubmit\n                    }, void 0, false, {\n                        fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetFormList.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetFormList.js\",\n                    lineNumber: 11,\n                    columnNumber: 15\n                }, undefined));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetFormList.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, undefined);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \" No surveys available right now. \"\n        }, void 0, false, {\n            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetFormList.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_c = GetFormList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetFormList);\nvar _c;\n$RefreshReg$(_c, \"GetFormList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dldEZvcm1MaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFDYztBQUU3QyxNQUFNRSxjQUFjLFNBQXlCO1FBQXhCLEVBQUNDLFFBQU8sRUFBRUMsU0FBUSxFQUFDO0lBQ3BDLElBQUlELFFBQVFFLE1BQU0sR0FBQyxHQUFHO1FBQ3RCLHFCQUNJLDhEQUFDQztZQUFJQyxXQUFXTixxRUFBWTtzQkFDekJFLFFBQVFNLEdBQUcsQ0FBQ0MsQ0FBQUEsU0FBVTtnQkFDckIsT0FDRSx5Q0FBeUM7OEJBQ3pDLDhEQUFDSjtvQkFBSUMsV0FBV04sb0VBQVc7OEJBQ3pCLDRFQUFDRCxnREFBT0E7d0JBQ05ZLFVBQVlGO3dCQUNaTixVQUFZQTs7Ozs7Ozs7Ozs7WUFJcEI7Ozs7OztJQUdSLE9BQ0k7UUFDRixxQkFBUSw4REFBQ1M7c0JBQUU7Ozs7OztJQUNiLENBQUM7QUFDSDtLQXJCTVg7QUF1QkosK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZXRGb3JtTGlzdC5qcz9hYjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZXRGb3JtIGZyb20gXCIuL0dldEZvcm1cIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2dldC5tb2R1bGUuY3NzXCJcblxuY29uc3QgR2V0Rm9ybUxpc3QgPSAoe3N1cnZleXMsIG9uU3VibWl0fSkgPT4ge1xuICAgIGlmIChzdXJ2ZXlzLmxlbmd0aD4wKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5VbGlzdH0+XG4gICAgICAgICAge3N1cnZleXMubWFwKHN1cnZleSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LWtleVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm19PlxuICAgICAgICAgICAgICAgIDxHZXRGb3JtXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbiA9IHtzdXJ2ZXl9XG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHtvblN1Ym1pdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIGVsc2V7XG4gICAgcmV0dXJuICg8cD4gTm8gc3VydmV5cyBhdmFpbGFibGUgcmlnaHQgbm93LiA8L3A+IClcbiAgfVxufVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgR2V0Rm9ybUxpc3Q7Il0sIm5hbWVzIjpbIkdldEZvcm0iLCJzdHlsZXMiLCJHZXRGb3JtTGlzdCIsInN1cnZleXMiLCJvblN1Ym1pdCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsIlVsaXN0IiwibWFwIiwic3VydmV5IiwiRm9ybSIsInF1ZXN0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GetFormList.js\n"));

/***/ })

});