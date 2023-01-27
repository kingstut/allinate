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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/header.module.css */ \"./styles/header.module.css\");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/api */ \"./helpers/api.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// The approach used in this component shows how to build a sign in and sign out\n// component that works on pages which support both client and server side\n// rendering, and avoids any flash incorrect content on initial page load.\nfunction Header() {\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const loading = status === \"loading\";\n    var _session_user_email;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().signedInStatus),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"nojs-show \".concat(!session && loading ? (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading) : (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().loaded)),\n                    children: [\n                        !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().notSignedInText),\n                                    children: \"You are not signed in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/api/auth/signin\",\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonPrimary),\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)();\n                                    },\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true),\n                        (session === null || session === void 0 ? void 0 : session.user) && axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3000/api/dashboard\", {\n                            session\n                        }).then(_helpers_api__WEBPACK_IMPORTED_MODULE_3__.handleResponse) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                session.user.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        backgroundImage: \"url('\".concat(session.user.image, \"')\")\n                                    },\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().avatar)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().signedInText),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: (_session_user_email = session.user.email) !== null && _session_user_email !== void 0 ? _session_user_email : session.user.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/api/auth/signout\",\n                                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                                    },\n                                    children: \"Sign out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainHead),\n                children: \"Allinate\"\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItems),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"Home \"\n                            }, void 0, false, {\n                                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/get-surveys\",\n                                children: \"Provide Information\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/create-surveys\",\n                                children: \"Ask for Information\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/me\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stutiraizada/Desktop/git/byos-v/components/header.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2lDO0FBQ2I7QUFDRjtBQUVyQjtBQUV6QixnRkFBZ0Y7QUFDaEYsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUMzRCxTQUFTTyxTQUFTOztJQUMvQixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdQLDJEQUFVQTtJQUM1QyxNQUFNUSxVQUFVRCxXQUFXO1FBdUNKRDtJQXJDdkIscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7Z0JBQUlDLFdBQVdWLGlGQUFxQjswQkFDbkMsNEVBQUNZO29CQUNDRixXQUFXLGFBRVYsT0FEQyxDQUFDTCxXQUFXRSxVQUFVUCwwRUFBYyxHQUFHQSx5RUFBYTs7d0JBR3JELENBQUNLLHlCQUNBOzs4Q0FDRSw4REFBQ1M7b0NBQUtKLFdBQVdWLGtGQUFzQjs4Q0FBRTs7Ozs7OzhDQUd6Qyw4REFBQ2dCO29DQUNDQyxNQUFPO29DQUNQUCxXQUFXVixnRkFBb0I7b0NBQy9CbUIsU0FBUyxDQUFDQyxJQUFNO3dDQUNkQSxFQUFFQyxjQUFjO3dDQUNoQnhCLHVEQUFNQTtvQ0FDUjs4Q0FDRDs7Ozs7Ozs7d0JBS0pRLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2lCLElBQUksS0FFWnBCLGtEQUFVLENBQUMsdUNBQ1g7NEJBQUVHO3dCQUFRLEdBQUltQixJQUFJLENBQUN2Qix3REFBY0EsbUJBQ2pDOztnQ0FDR0ksUUFBUWlCLElBQUksQ0FBQ0csS0FBSyxrQkFDakIsOERBQUNYO29DQUNDWSxPQUFPO3dDQUFFQyxpQkFBaUIsUUFBMkIsT0FBbkJ0QixRQUFRaUIsSUFBSSxDQUFDRyxLQUFLLEVBQUM7b0NBQUk7b0NBQ3pEZixXQUFXVix5RUFBYTs7Ozs7OzhDQUc1Qiw4REFBQ2M7b0NBQUtKLFdBQVdWLCtFQUFtQjs4Q0FDbEMsNEVBQUM4QjtrREFBUXpCLENBQUFBLHNCQUFBQSxRQUFRaUIsSUFBSSxDQUFDUyxLQUFLLGNBQWxCMUIsaUNBQUFBLHNCQUFzQkEsUUFBUWlCLElBQUksQ0FBQ1UsSUFBSTs7Ozs7Ozs7Ozs7OENBRWxELDhEQUFDaEI7b0NBQ0NDLE1BQU87b0NBQ1BQLFdBQVdWLHlFQUFhO29DQUN4Qm1CLFNBQVMsQ0FBQ0MsSUFBTTt3Q0FDZEEsRUFBRUMsY0FBYzt3Q0FDaEJ2Qix3REFBT0E7b0NBQ1Q7OENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1QsOERBQUNXO2dCQUFJQyxXQUFXViwyRUFBZTswQkFBRTs7Ozs7OzBCQUdqQyw4REFBQ21DOzBCQUNDLDRFQUFDQztvQkFBRzFCLFdBQVdWLDJFQUFlOztzQ0FDNUIsOERBQUNzQzs0QkFBRzVCLFdBQVdWLDBFQUFjO3NDQUMzQiw0RUFBQ0osa0RBQUlBO2dDQUFDcUIsTUFBSzswQ0FBSTs7Ozs7Ozs7Ozs7c0NBRWpCLDhEQUFDcUI7NEJBQUc1QixXQUFXViwwRUFBYztzQ0FDM0IsNEVBQUNKLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7MENBQWU7Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ3FCOzRCQUFHNUIsV0FBV1YsMEVBQWM7c0NBQzNCLDRFQUFDSixrREFBSUE7Z0NBQUNxQixNQUFLOzBDQUFrQjs7Ozs7Ozs7Ozs7c0NBRS9CLDhEQUFDcUI7NEJBQUc1QixXQUFXViwwRUFBYztzQ0FDM0IsNEVBQUNKLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0IsQ0FBQztHQTlFdUJkOztRQUNZSix1REFBVUE7OztLQUR0QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hlYWRlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGhhbmRsZVJlc3BvbnNlfSBmcm9tIFwiLi4vaGVscGVycy9hcGlcIlxuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIFRoZSBhcHByb2FjaCB1c2VkIGluIHRoaXMgY29tcG9uZW50IHNob3dzIGhvdyB0byBidWlsZCBhIHNpZ24gaW4gYW5kIHNpZ24gb3V0XG4vLyBjb21wb25lbnQgdGhhdCB3b3JrcyBvbiBwYWdlcyB3aGljaCBzdXBwb3J0IGJvdGggY2xpZW50IGFuZCBzZXJ2ZXIgc2lkZVxuLy8gcmVuZGVyaW5nLCBhbmQgYXZvaWRzIGFueSBmbGFzaCBpbmNvcnJlY3QgY29udGVudCBvbiBpbml0aWFsIHBhZ2UgbG9hZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKVxuICBjb25zdCBsb2FkaW5nID0gc3RhdHVzID09PSBcImxvYWRpbmdcIlxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmVkSW5TdGF0dXN9PlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT17YG5vanMtc2hvdyAke1xuICAgICAgICAgICAgIXNlc3Npb24gJiYgbG9hZGluZyA/IHN0eWxlcy5sb2FkaW5nIDogc3R5bGVzLmxvYWRlZFxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgeyFzZXNzaW9uICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5vdFNpZ25lZEluVGV4dH0+XG4gICAgICAgICAgICAgICAgWW91IGFyZSBub3Qgc2lnbmVkIGluXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgL2FwaS9hdXRoL3NpZ25pbmB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uUHJpbWFyeX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBzaWduSW4oKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3Nlc3Npb24/LnVzZXIgIFxuICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Rhc2hib2FyZCcsIFxuICAgICAgICAgICAgeyBzZXNzaW9uIH0gKS50aGVuKGhhbmRsZVJlc3BvbnNlKSApICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtzZXNzaW9uLnVzZXIuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7c2Vzc2lvbi51c2VyLmltYWdlfScpYCB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25lZEluVGV4dH0+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57c2Vzc2lvbi51c2VyLmVtYWlsID8/IHNlc3Npb24udXNlci5uYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YC9hcGkvYXV0aC9zaWdub3V0YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgc2lnbk91dCgpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gb3V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluSGVhZH0+XG4gICAgICAgICBBbGxpbmF0ZVxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbXN9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZSA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbX0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2dldC1zdXJ2ZXlzXCI+UHJvdmlkZSBJbmZvcm1hdGlvbjwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlLXN1cnZleXNcIj5Bc2sgZm9yIEluZm9ybWF0aW9uPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tZVwiPkRhc2hib2FyZDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiTGluayIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwic3R5bGVzIiwiaGFuZGxlUmVzcG9uc2UiLCJheGlvcyIsIkhlYWRlciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwibG9hZGluZyIsImhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsInNpZ25lZEluU3RhdHVzIiwicCIsImxvYWRlZCIsInNwYW4iLCJub3RTaWduZWRJblRleHQiLCJhIiwiaHJlZiIsImJ1dHRvblByaW1hcnkiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInBvc3QiLCJ0aGVuIiwiaW1hZ2UiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImF2YXRhciIsInNpZ25lZEluVGV4dCIsInN0cm9uZyIsImVtYWlsIiwibmFtZSIsImJ1dHRvbiIsIm1haW5IZWFkIiwibmF2IiwidWwiLCJuYXZJdGVtcyIsImxpIiwibmF2SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});