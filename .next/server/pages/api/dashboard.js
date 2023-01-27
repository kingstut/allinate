"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/dashboard";
exports.ids = ["pages/api/dashboard"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/dashboard/index.js":
/*!**************************************!*\
  !*** ./pages/api/dashboard/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/db/client */ \"(api)/./server/db/client.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\nfunction handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            return postUser();\n        case \"PUT\":\n            return updateUser();\n        default:\n            return res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n    async function postUser() {\n        try {\n            const { session: session  } = req.body;\n            const email = session.user.email;\n            await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.user.upsert({\n                where: {\n                    user_id: email\n                },\n                update: {},\n                create: {\n                    user_id: email\n                }\n            });\n            return res.status(200).json({});\n        } catch (error) {\n            return res.status(400).json({\n                message: error\n            });\n        }\n    }\n    async function updateUser() {\n        const { session: session , cpr: cpr , budget: budget  } = req.body;\n        const email = session.user.email;\n        const up_budget = -parseFloat(budget);\n        const up_cpr = parseFloat(cpr);\n        await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.user.update({\n            where: {\n                user_id: email\n            },\n            data: {\n                money: {\n                    increment: up_budget + up_cpr\n                }\n            }\n        });\n        return res.status(200).json({});\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGFzaGJvYXJkL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBQ2xELGlFQUFlQyxPQUFPQSxFQUFDO0FBRXZCLFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZCLE9BQVFELElBQUlFLE1BQU07UUFDZCxLQUFLO1lBQ0QsT0FBT0M7UUFDWCxLQUFLO1lBQ0QsT0FBT0M7UUFDWDtZQUNJLE9BQU9ILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVOLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDckU7SUFFQSxlQUFlQyxXQUFXO1FBQ3RCLElBQUk7WUFDQSxNQUFNLEVBQUVJLFNBQVNBLFFBQU8sRUFBRSxHQUFHUCxJQUFJUSxJQUFJO1lBQ3JDLE1BQU1DLFFBQVFGLFFBQVFHLElBQUksQ0FBQ0QsS0FBSztZQUNoQyxNQUFNWCxpRUFBa0IsQ0FBQztnQkFDckJjLE9BQU87b0JBQ0hDLFNBQVNKO2dCQUNiO2dCQUNBSyxRQUFRLENBQUM7Z0JBQ1RDLFFBQVE7b0JBQ0pGLFNBQVVKO2dCQUNkO1lBQ0Y7WUFDRixPQUFPUixJQUFJSSxNQUFNLENBQUMsS0FBS1csSUFBSSxDQUFDLENBQUM7UUFDakMsRUFBRSxPQUFPQyxPQUFPO1lBQ1osT0FBT2hCLElBQUlJLE1BQU0sQ0FBQyxLQUFLVyxJQUFJLENBQUM7Z0JBQUVFLFNBQVNEO1lBQU07UUFDakQ7SUFDSjtJQUVBLGVBQWViLGFBQWE7UUFDeEIsTUFBTSxFQUFFRyxTQUFTQSxRQUFPLEVBQUVZLEtBQUlBLElBQUcsRUFBRUMsUUFBT0EsT0FBTSxFQUFDLEdBQUdwQixJQUFJUSxJQUFJO1FBQzVELE1BQU1DLFFBQVFGLFFBQVFHLElBQUksQ0FBQ0QsS0FBSztRQUNoQyxNQUFNWSxZQUFZLENBQUNDLFdBQVdGO1FBQzlCLE1BQU1HLFNBQVNELFdBQVdIO1FBRTFCLE1BQU1yQixpRUFBa0IsQ0FBQztZQUNyQmMsT0FBTztnQkFDSEMsU0FBU0o7WUFDYjtZQUNBZSxNQUFNO2dCQUNGQyxPQUFPO29CQUNIQyxXQUFXTCxZQUFZRTtnQkFDM0I7WUFDSjtRQUNGO1FBQ0YsT0FBT3RCLElBQUlJLE1BQU0sQ0FBQyxLQUFLVyxJQUFJLENBQUMsQ0FBQztJQUNqQztBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnlvcy12Ly4vcGFnZXMvYXBpL2Rhc2hib2FyZC9pbmRleC5qcz81MjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uLy4uL3NlcnZlci9kYi9jbGllbnQnXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuXG5mdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgICAgICAgcmV0dXJuIHBvc3RVc2VyKCk7XG4gICAgICAgIGNhc2UgJ1BVVCc6XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlVXNlcigpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBwb3N0VXNlcigpIHtcbiAgICAgICAgdHJ5IHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHsgc2Vzc2lvbjogc2Vzc2lvbiB9ID0gcmVxLmJvZHlcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsIFxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiBlbWFpbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZToge30sXG4gICAgICAgICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQgOiBlbWFpbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe30pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKCkge1xuICAgICAgICBjb25zdCB7IHNlc3Npb246IHNlc3Npb24sIGNwcjpjcHIsIGJ1ZGdldDpidWRnZXR9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgZW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWwgXG4gICAgICAgIGNvbnN0IHVwX2J1ZGdldCA9IC1wYXJzZUZsb2F0KGJ1ZGdldClcbiAgICAgICAgY29uc3QgdXBfY3ByID0gcGFyc2VGbG9hdChjcHIpXG5cbiAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogZW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1vbmV5OiB7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudDogdXBfYnVkZ2V0ICsgdXBfY3ByXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7fSk7XG4gICAgfVxuXG5cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInBvc3RVc2VyIiwidXBkYXRlVXNlciIsInN0YXR1cyIsImVuZCIsInNlc3Npb24iLCJib2R5IiwiZW1haWwiLCJ1c2VyIiwidXBzZXJ0Iiwid2hlcmUiLCJ1c2VyX2lkIiwidXBkYXRlIiwiY3JlYXRlIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImNwciIsImJ1ZGdldCIsInVwX2J1ZGdldCIsInBhcnNlRmxvYXQiLCJ1cF9jcHIiLCJkYXRhIiwibW9uZXkiLCJpbmNyZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/dashboard/index.js\n");

/***/ }),

/***/ "(api)/./server/db/client.js":
/*!*****************************!*\
  !*** ./server/db/client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXIvZGIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUV0QyxNQUFNQyxTQUNYQyxPQUFPRCxNQUFNLElBQ2IsSUFBSUQsd0RBQVlBLEdBQUU7QUFFcEIsSUFBSUcsSUFBeUIsRUFBY0QsT0FBT0QsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J5b3Mtdi8uL3NlcnZlci9kYi9jbGllbnQuanM/NzNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbC5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCgpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWwucHJpc21hID0gcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./server/db/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/dashboard/index.js"));
module.exports = __webpack_exports__;

})();