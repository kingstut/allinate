"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-surveys",{

/***/ "./components/SurveyForm.js":
/*!**********************************!*\
  !*** ./components/SurveyForm.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst SurveyForm = (param)=>{\n    let { onSubmit  } = param;\n    function handleOnSubmit(e) {\n        const { currentTarget  } = e;\n        const fields = Array.from(currentTarget.elements);\n        const data = {};\n        fields.forEach((field)=>{\n            if (!field.name) return;\n            data[field.name] = field.value;\n        });\n        if (typeof onSubmit === \"function\") {\n            onSubmit(data, e);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleOnSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Link?\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/SurveyForm.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"question\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/SurveyForm.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Budget?\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/SurveyForm.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"budget\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/SurveyForm.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Cost per response?\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/SurveyForm.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"cpr\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/SurveyForm.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Create Survey\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/SurveyForm.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/SurveyForm.js\",\n        lineNumber: 20,\n        columnNumber: 7\n    }, undefined);\n};\n_c = SurveyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SurveyForm);\nvar _c;\n$RefreshReg$(_c, \"SurveyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1cnZleUZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFnRDtBQUNoRCxNQUFNQyxhQUFhLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTtJQUM1QixTQUFTQyxlQUFlQyxDQUFDLEVBQUU7UUFDekIsTUFBTSxFQUFFQyxjQUFhLEVBQUUsR0FBR0Q7UUFFMUIsTUFBTUUsU0FBU0MsTUFBTUMsSUFBSSxDQUFDSCxjQUFjSSxRQUFRO1FBQ2hELE1BQU1DLE9BQU8sQ0FBQztRQUVkSixPQUFPSyxPQUFPLENBQUNDLENBQUFBLFFBQVM7WUFDdEIsSUFBSyxDQUFDQSxNQUFNQyxJQUFJLEVBQUc7WUFDbkJILElBQUksQ0FBQ0UsTUFBTUMsSUFBSSxDQUFDLEdBQUdELE1BQU1FLEtBQUs7UUFDaEM7UUFFQSxJQUFLLE9BQU9aLGFBQWEsWUFBYTtZQUNwQ0EsU0FBU1EsTUFBTU47UUFDakIsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNXO1FBQUtiLFVBQVVDOzswQkFDZCw4REFBQ2E7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQVNKLE1BQUs7Ozs7OzswQkFFZiw4REFBQ0c7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQVNKLE1BQUs7Ozs7OzswQkFFZiw4REFBQ0c7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQVNKLE1BQUs7Ozs7OzswQkFDZiw4REFBQ0s7MEJBQU87Ozs7Ozs7Ozs7OztBQUdkO0tBOUJJakI7QUFnQ0osK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdXJ2ZXlGb3JtLmpzPzg1YzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NyZWF0ZS5tb2R1bGUuY3NzXCJcbmNvbnN0IFN1cnZleUZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXQoZSkge1xuICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBlO1xuICBcbiAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oY3VycmVudFRhcmdldC5lbGVtZW50cyk7XG4gICAgICBjb25zdCBkYXRhID0ge307XG4gIFxuICAgICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICBpZiAoICFmaWVsZC5uYW1lICkgcmV0dXJuO1xuICAgICAgICBkYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICB9KVxuICBcbiAgICAgIGlmICggdHlwZW9mIG9uU3VibWl0ID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICBvblN1Ym1pdChkYXRhLCBlKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5MaW5rPzwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwicXVlc3Rpb25cIj48L3RleHRhcmVhPlxuXG4gICAgICAgIDxsYWJlbD5CdWRnZXQ/PC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJidWRnZXRcIj48L3RleHRhcmVhPlxuXG4gICAgICAgIDxsYWJlbD5Db3N0IHBlciByZXNwb25zZT88L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNwclwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24+Q3JlYXRlIFN1cnZleTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgU3VydmV5Rm9ybTsiXSwibmFtZXMiOlsic3R5bGVzIiwiU3VydmV5Rm9ybSIsIm9uU3VibWl0IiwiaGFuZGxlT25TdWJtaXQiLCJlIiwiY3VycmVudFRhcmdldCIsImZpZWxkcyIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiZGF0YSIsImZvckVhY2giLCJmaWVsZCIsIm5hbWUiLCJ2YWx1ZSIsImZvcm0iLCJsYWJlbCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SurveyForm.js\n"));

/***/ })

});