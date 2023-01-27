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

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/header.module.css */ \"./styles/header.module.css\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/api */ \"./helpers/api.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// The approach used in this component shows how to build a sign in and sign out\n// component that works on pages which support both client and server side\n// rendering, and avoids any flash incorrect content on initial page load.\nfunction Header() {\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const loading = status === \"loading\";\n    var _session_user_email;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().signedInStatus),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"nojs-show \".concat(!session && loading ? (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading) : (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().loaded)),\n                    children: [\n                        !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().notSignedInText),\n                                    children: \"You are not signed in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/api/auth/signin\",\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonPrimary),\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)();\n                                    },\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true),\n                        (session === null || session === void 0 ? void 0 : session.user) && axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3000/api/dashboard\", {\n                            session\n                        }).then(_helpers_api__WEBPACK_IMPORTED_MODULE_3__.handleResponse) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                session.user.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        backgroundImage: \"url('\".concat(session.user.image, \"')\")\n                                    },\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().avatar)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().signedInText),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                            children: \"Signed in as\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: (_session_user_email = session.user.email) !== null && _session_user_email !== void 0 ? _session_user_email : session.user.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/api/auth/signout\",\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                                    },\n                                    children: \"Sign out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainHead),\n                children: \"Allinate\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItems),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"Home \"\n                            }, void 0, false, {\n                                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/get-surveys\",\n                                children: \"Provide Information\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/create-surveys\",\n                                children: \"Ask for Information\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/me\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2lDO0FBQ2I7QUFDRjtBQUVyQjtBQUV6QixnRkFBZ0Y7QUFDaEYsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUMzRCxTQUFTTyxTQUFTOztJQUMvQixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdQLDJEQUFVQTtJQUM1QyxNQUFNUSxVQUFVRCxXQUFXO1FBeUNKRDtJQXZDdkIscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7Z0JBQUlDLFdBQVdWLGlGQUFxQjswQkFDbkMsNEVBQUNZO29CQUNDRixXQUFXLGFBRVYsT0FEQyxDQUFDTCxXQUFXRSxVQUFVUCwwRUFBYyxHQUFHQSx5RUFBYTs7d0JBR3JELENBQUNLLHlCQUNBOzs4Q0FDRSw4REFBQ1M7b0NBQUtKLFdBQVdWLGtGQUFzQjs4Q0FBRTs7Ozs7OzhDQUd6Qyw4REFBQ2dCO29DQUNDQyxNQUFPO29DQUNQUCxXQUFXVixnRkFBb0I7b0NBQy9CbUIsU0FBUyxDQUFDQyxJQUFNO3dDQUNkQSxFQUFFQyxjQUFjO3dDQUNoQnhCLHVEQUFNQTtvQ0FDUjs4Q0FDRDs7Ozs7Ozs7d0JBS0pRLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2lCLElBQUksS0FFWnBCLGtEQUFVLENBQUMsdUNBQ1g7NEJBQUVHO3dCQUFRLEdBQUltQixJQUFJLENBQUN2Qix3REFBY0EsbUJBQ2pDOztnQ0FDR0ksUUFBUWlCLElBQUksQ0FBQ0csS0FBSyxrQkFDakIsOERBQUNYO29DQUNDWSxPQUFPO3dDQUFFQyxpQkFBaUIsUUFBMkIsT0FBbkJ0QixRQUFRaUIsSUFBSSxDQUFDRyxLQUFLLEVBQUM7b0NBQUk7b0NBQ3pEZixXQUFXVix5RUFBYTs7Ozs7OzhDQUc1Qiw4REFBQ2M7b0NBQUtKLFdBQVdWLCtFQUFtQjs7c0RBQ2xDLDhEQUFDOEI7c0RBQU07Ozs7OztzREFDUCw4REFBQ0M7Ozs7O3NEQUNELDhEQUFDQztzREFBUTNCLENBQUFBLHNCQUFBQSxRQUFRaUIsSUFBSSxDQUFDVyxLQUFLLGNBQWxCNUIsaUNBQUFBLHNCQUFzQkEsUUFBUWlCLElBQUksQ0FBQ1ksSUFBSTs7Ozs7Ozs7Ozs7OzhDQUVsRCw4REFBQ2xCO29DQUNDQyxNQUFPO29DQUNQUCxXQUFXVix5RUFBYTtvQ0FDeEJtQixTQUFTLENBQUNDLElBQU07d0NBQ2RBLEVBQUVDLGNBQWM7d0NBQ2hCdkIsd0RBQU9BO29DQUNUOzhDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9ULDhEQUFDVztnQkFBSUMsV0FBV1YsMkVBQWU7MEJBQUU7Ozs7OzswQkFHakMsOERBQUNxQzswQkFDQyw0RUFBQ0M7b0JBQUc1QixXQUFXViwyRUFBZTs7c0NBQzVCLDhEQUFDd0M7NEJBQUc5QixXQUFXViwwRUFBYztzQ0FDM0IsNEVBQUNKLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7O3NDQUVqQiw4REFBQ3VCOzRCQUFHOUIsV0FBV1YsMEVBQWM7c0NBQzNCLDRFQUFDSixrREFBSUE7Z0NBQUNxQixNQUFLOzBDQUFlOzs7Ozs7Ozs7OztzQ0FFNUIsOERBQUN1Qjs0QkFBRzlCLFdBQVdWLDBFQUFjO3NDQUMzQiw0RUFBQ0osa0RBQUlBO2dDQUFDcUIsTUFBSzswQ0FBa0I7Ozs7Ozs7Ozs7O3NDQUUvQiw4REFBQ3VCOzRCQUFHOUIsV0FBV1YsMEVBQWM7c0NBQzNCLDRFQUFDSixrREFBSUE7Z0NBQUNxQixNQUFLOzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCLENBQUM7R0FoRnVCZDs7UUFDWUosdURBQVVBOzs7S0FEdEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9oZWFkZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBoYW5kbGVSZXNwb25zZX0gZnJvbSBcIi4uL2hlbHBlcnMvYXBpXCJcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyBUaGUgYXBwcm9hY2ggdXNlZCBpbiB0aGlzIGNvbXBvbmVudCBzaG93cyBob3cgdG8gYnVpbGQgYSBzaWduIGluIGFuZCBzaWduIG91dFxuLy8gY29tcG9uZW50IHRoYXQgd29ya3Mgb24gcGFnZXMgd2hpY2ggc3VwcG9ydCBib3RoIGNsaWVudCBhbmQgc2VydmVyIHNpZGVcbi8vIHJlbmRlcmluZywgYW5kIGF2b2lkcyBhbnkgZmxhc2ggaW5jb3JyZWN0IGNvbnRlbnQgb24gaW5pdGlhbCBwYWdlIGxvYWQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcbiAgY29uc3QgbG9hZGluZyA9IHN0YXR1cyA9PT0gXCJsb2FkaW5nXCJcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ25lZEluU3RhdHVzfT5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9e2Bub2pzLXNob3cgJHtcbiAgICAgICAgICAgICFzZXNzaW9uICYmIGxvYWRpbmcgPyBzdHlsZXMubG9hZGluZyA6IHN0eWxlcy5sb2FkZWRcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHshc2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ub3RTaWduZWRJblRleHR9PlxuICAgICAgICAgICAgICAgIFlvdSBhcmUgbm90IHNpZ25lZCBpblxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YC9hcGkvYXV0aC9zaWduaW5gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblByaW1hcnl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgc2lnbkluKClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzZXNzaW9uPy51c2VyICBcbiAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXNoYm9hcmQnLCBcbiAgICAgICAgICAgIHsgc2Vzc2lvbiB9ICkudGhlbihoYW5kbGVSZXNwb25zZSkgKSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3Nlc3Npb24udXNlci5pbWFnZX0nKWAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zaWduZWRJblRleHR9PlxuICAgICAgICAgICAgICAgIDxzbWFsbD5TaWduZWQgaW4gYXM8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Nlc3Npb24udXNlci5lbWFpbCA/PyBzZXNzaW9uLnVzZXIubmFtZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AvYXBpL2F1dGgvc2lnbm91dGB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIG91dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkhlYWR9PlxuICAgICAgICBBbGxpbmF0ZSBcbiAgICAgIDwvZGl2PlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW1zfT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWUgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nZXQtc3VydmV5c1wiPlByb3ZpZGUgSW5mb3JtYXRpb248L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZS1zdXJ2ZXlzXCI+QXNrIGZvciBJbmZvcm1hdGlvbjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVcIj5EYXNoYm9hcmQ8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInN0eWxlcyIsImhhbmRsZVJlc3BvbnNlIiwiYXhpb3MiLCJIZWFkZXIiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsImxvYWRpbmciLCJoZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzaWduZWRJblN0YXR1cyIsInAiLCJsb2FkZWQiLCJzcGFuIiwibm90U2lnbmVkSW5UZXh0IiwiYSIsImhyZWYiLCJidXR0b25QcmltYXJ5Iiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJwb3N0IiwidGhlbiIsImltYWdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhdmF0YXIiLCJzaWduZWRJblRleHQiLCJzbWFsbCIsImJyIiwic3Ryb25nIiwiZW1haWwiLCJuYW1lIiwiYnV0dG9uIiwibWFpbkhlYWQiLCJuYXYiLCJ1bCIsIm5hdkl0ZW1zIiwibGkiLCJuYXZJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});