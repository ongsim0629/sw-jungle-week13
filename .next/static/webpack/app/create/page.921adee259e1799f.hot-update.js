"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create/page",{

/***/ "(app-pages-browser)/./src/app/create/page.tsx":
/*!*********************************!*\
  !*** ./src/app/create/page.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Create)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Create() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: async (evt)=>{\n            evt.preventDefault();\n            const title = evt.target.title.value;\n            const body = evt.target.body.value;\n            const resp = await fetch(\"\".concat(\"http://localhost:9999/\", \"topics\"), {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    title,\n                    body\n                })\n            });\n            const topic = await resp.json();\n            console.log(\"file: page.js:19 ~ Create ~ topic:\", topic);\n            router.push(\"/read/\".concat(topic.id));\n            router.refresh();\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Create\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"title\",\n                    placeholder: \"title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\create\\\\page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 8\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"body\",\n                    placeholder: \"body\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\create\\\\page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 8\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"create\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\create\\\\page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 8\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\create\\\\page.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n_s(Create, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Create;\nvar _c;\n$RefreshReg$(_c, \"Create\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3JlYXRlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTRDO0FBRTdCLFNBQVNDOztJQUN0QixNQUFNQyxTQUFTRiwwREFBU0E7SUFDeEIscUJBQU8sOERBQUNHO1FBQUtDLFVBQVUsT0FBTUM7WUFDM0JBLElBQUlDLGNBQWM7WUFDbEIsTUFBTUMsUUFBUUYsSUFBSUcsTUFBTSxDQUFDRCxLQUFLLENBQUNFLEtBQUs7WUFDcEMsTUFBTUMsT0FBT0wsSUFBSUcsTUFBTSxDQUFDRSxJQUFJLENBQUNELEtBQUs7WUFDbEMsTUFBTUUsT0FBTyxNQUFNQyxNQUFNLEdBQW1DLE9BQWhDQyx3QkFBK0IsRUFBQyxXQUFTO2dCQUNuRUcsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBUCxNQUFNUSxLQUFLQyxTQUFTLENBQUM7b0JBQUNaO29CQUFPRztnQkFBSTtZQUNuQztZQUNBLE1BQU1VLFFBQVEsTUFBTVQsS0FBS1UsSUFBSTtZQUM3QkMsUUFBUUMsR0FBRyxDQUFDLHNDQUFzQ0g7WUFDbERsQixPQUFPc0IsSUFBSSxDQUFDLFNBQWtCLE9BQVRKLE1BQU1LLEVBQUU7WUFDN0J2QixPQUFPd0IsT0FBTztRQUNoQjs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFLDRFQUFDQztvQkFBTUMsTUFBSztvQkFBT0MsTUFBSztvQkFBUUMsYUFBWTs7Ozs7Ozs7Ozs7MEJBQy9DLDhEQUFDSjswQkFBRSw0RUFBQ0s7b0JBQVNGLE1BQUs7b0JBQU9DLGFBQVk7Ozs7Ozs7Ozs7OzBCQUNyQyw4REFBQ0o7MEJBQUUsNEVBQUNDO29CQUFNQyxNQUFLO29CQUFTckIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEM7R0F2QndCUjs7UUFDUEQsc0RBQVNBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NyZWF0ZS9wYWdlLnRzeD81YWRiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG4gIFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZSgpe1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiA8Zm9ybSBvblN1Ym1pdD17YXN5bmMgZXZ0PT57XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZXZ0LnRhcmdldC50aXRsZS52YWx1ZTtcclxuICAgIGNvbnN0IGJvZHkgPSBldnQudGFyZ2V0LmJvZHkudmFsdWU7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH10b3BpY3NgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dGl0bGUsIGJvZHl9KVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB0b3BpYyA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJmaWxlOiBwYWdlLmpzOjE5IH4gQ3JlYXRlIH4gdG9waWM6XCIsIHRvcGljKVxyXG4gICAgcm91dGVyLnB1c2goYC9yZWFkLyR7dG9waWMuaWR9YCk7XHJcbiAgICByb3V0ZXIucmVmcmVzaCgpO1xyXG4gIH19PlxyXG4gICAgPGgyPkNyZWF0ZTwvaDI+XHJcbiAgICA8cD48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cInRpdGxlXCIgLz48L3A+XHJcbiAgICA8cD48dGV4dGFyZWEgbmFtZT1cImJvZHlcIiBwbGFjZWhvbGRlcj1cImJvZHlcIj48L3RleHRhcmVhPjwvcD5cclxuICAgIDxwPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJjcmVhdGVcIiAvPjwvcD5cclxuICA8L2Zvcm0+XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQ3JlYXRlIiwicm91dGVyIiwiZm9ybSIsIm9uU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsInRhcmdldCIsInZhbHVlIiwiYm9keSIsInJlc3AiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b3BpYyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImlkIiwicmVmcmVzaCIsImgyIiwicCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/create/page.tsx\n"));

/***/ })

});