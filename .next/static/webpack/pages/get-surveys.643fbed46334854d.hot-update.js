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

/***/ "./components/GetForm.js":
/*!*******************************!*\
  !*** ./components/GetForm.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_get_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/get.module.css */ \"./styles/get.module.css\");\n/* harmony import */ var _styles_get_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_get_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst GetForm = (param)=>{\n    let { question , onSubmit  } = param;\n    _s();\n    function handleOnSubmit(e) {\n        onSubmit(question, setShow, e);\n    }\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleOnSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            children: [\n                                \" $\",\n                                question.cpr\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetForm.js\",\n                            lineNumber: 15,\n                            columnNumber: 20\n                        }, undefined),\n                        \"  \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetForm.js\",\n                    lineNumber: 15,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: question.question,\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                                    children: \"Link to form\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetForm.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 54\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetForm.js\",\n                            lineNumber: 16,\n                            columnNumber: 45\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetForm.js\",\n                    lineNumber: 16,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_get_module_css__WEBPACK_IMPORTED_MODULE_3___default().FormButton),\n                    children: \"Submitted\"\n                }, void 0, false, {\n                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetForm.js\",\n                    lineNumber: 17,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetForm.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/GetForm.js\",\n        lineNumber: 12,\n        columnNumber: 7\n    }, undefined);\n};\n_s(GetForm, \"vfh/DqFDMxhJHyczn42K3OB7AlU=\");\n_c = GetForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetForm);\nvar _c;\n$RefreshReg$(_c, \"GetForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dldEZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDZ0I7QUFDWjtBQUNqQyxNQUFNRyxVQUFVLFNBQTJCO1FBQTFCLEVBQUNDLFNBQVEsRUFBRUMsU0FBUSxFQUFDOztJQUNqQyxTQUFTQyxlQUFlQyxDQUFDLEVBQUU7UUFDdkJGLFNBQVNELFVBQVVJLFNBQVNEO0lBRWhDO0lBRUEsTUFBTSxDQUFDRSxNQUFNRCxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDLElBQUk7SUFDckMscUJBQ0UsOERBQUNRO2tCQUNFRCxzQkFDRCw4REFBQ0U7WUFBS04sVUFBVUM7OzhCQUNWLDhEQUFDTTs7d0JBQUc7c0NBQUMsOERBQUNDOztnQ0FBTztnQ0FBR1QsU0FBU1UsR0FBRzs7Ozs7Ozt3QkFBVTs7Ozs7Ozs4QkFDdEMsOERBQUNDO29CQUFFQyxNQUFPWixTQUFTQSxRQUFROzt3QkFBRTtzQ0FBQyw4REFBQ1M7O2dDQUFPOzhDQUFDLDhEQUFDSTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUMzQyw4REFBQ0M7b0JBQU9DLFdBQVdsQiwwRUFBaUI7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xEO0dBcEJJRTtLQUFBQTtBQXNCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dldEZvcm0uanM/MjE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZ2V0Lm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IEdldEZvcm0gPSAoe3F1ZXN0aW9uLCBvblN1Ym1pdH0gKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXQoZSkge1xuICAgICAgICBvblN1Ym1pdChxdWVzdGlvbiwgc2V0U2hvdywgZSlcbiAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7c2hvdyAmJlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICAgICAgICA8aDE+IDxjZW50ZXI+ICR7cXVlc3Rpb24uY3ByfTwvY2VudGVyPiAgPC9oMT5cbiAgICAgICAgICAgICAgPGEgaHJlZj0ge3F1ZXN0aW9uLnF1ZXN0aW9ufT4gPGNlbnRlcj4gPGVtPkxpbmsgdG8gZm9ybTwvZW0+PC9jZW50ZXI+PC9hPiBcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtQnV0dG9ufT5TdWJtaXR0ZWQ8L2J1dHRvbj4gICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgKVxuICB9XG4gIFxuZXhwb3J0IGRlZmF1bHQgR2V0Rm9ybTsiXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsInVzZVN0YXRlIiwiR2V0Rm9ybSIsInF1ZXN0aW9uIiwib25TdWJtaXQiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJzZXRTaG93Iiwic2hvdyIsImRpdiIsImZvcm0iLCJoMSIsImNlbnRlciIsImNwciIsImEiLCJocmVmIiwiZW0iLCJidXR0b24iLCJjbGFzc05hbWUiLCJGb3JtQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GetForm.js\n"));

/***/ })

});