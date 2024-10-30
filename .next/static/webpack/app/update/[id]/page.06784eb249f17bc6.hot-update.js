"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/update/[id]/page",{

/***/ "(app-pages-browser)/./src/app/update/[id]/page.tsx":
/*!**************************************!*\
  !*** ./src/app/update/[id]/page.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Update)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Update() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const id = params.id;\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    // 데이터 가져오기\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetchTopic() {\n            if (!id) return;\n            const resp = await fetch(\"\".concat(\"http://localhost:9999/\", \"topics/\").concat(id), {\n                cache: 'no-cache'\n            });\n            const topic = await resp.json();\n            setTitle(topic.title);\n            setBody(topic.body);\n        }\n        fetchTopic();\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: async (evt)=>{\n            evt.preventDefault();\n            const title = evt.target.title.value;\n            const body = evt.target.body.value;\n            const resp = await fetch(\"\".concat(\"http://localhost:9999/\", \"topics/\").concat(id), {\n                method: 'PATCH',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    title,\n                    body\n                })\n            });\n            if (resp.ok) {\n                const topic = await resp.json();\n                router.push(\"/read/\".concat(topic.id));\n                router.refresh();\n            } else {\n                console.error(\"Failed to update topic\");\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Update\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\update\\\\[id]\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"title\",\n                    placeholder: \"title\",\n                    onChange: (e)=>setTitle(e.target.value),\n                    value: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\update\\\\[id]\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\update\\\\[id]\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"body\",\n                    placeholder: \"body\",\n                    onChange: (e)=>setBody(e.target.value),\n                    value: body\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\update\\\\[id]\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\update\\\\[id]\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    value: \"update\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\update\\\\[id]\\\\page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\update\\\\[id]\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\update\\\\[id]\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Update, \"XFVjH7aNBqYNXm0eOjJprr5FT54=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = Update;\nvar _c;\n$RefreshReg$(_c, \"Update\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXBkYXRlL1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN1RDtBQUNYO0FBRTdCLFNBQVNJOztJQUN0QixNQUFNQyxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTU0sU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU1NLEtBQUtELE9BQU9DLEVBQUU7SUFFcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVqQyxXQUFXO0lBQ1hELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVU7WUFDYixJQUFJLENBQUNMLElBQUk7WUFFVCxNQUFNTSxPQUFPLE1BQU1DLE1BQU0sR0FBNENQLE9BQXpDUSx3QkFBK0IsRUFBQyxXQUFZLE9BQUhSLEtBQU07Z0JBQ3pFVyxPQUFPO1lBQ1Q7WUFDQSxNQUFNQyxRQUFRLE1BQU1OLEtBQUtPLElBQUk7WUFDN0JYLFNBQVNVLE1BQU1YLEtBQUs7WUFDcEJHLFFBQVFRLE1BQU1ULElBQUk7UUFDcEI7UUFFQUU7SUFDRixHQUFHO1FBQUNMO0tBQUc7SUFFUCxxQkFDRSw4REFBQ2M7UUFBS0MsVUFBVSxPQUFPQztZQUNyQkEsSUFBSUMsY0FBYztZQUNsQixNQUFNaEIsUUFBUWUsSUFBSUUsTUFBTSxDQUFDakIsS0FBSyxDQUFDa0IsS0FBSztZQUNwQyxNQUFNaEIsT0FBT2EsSUFBSUUsTUFBTSxDQUFDZixJQUFJLENBQUNnQixLQUFLO1lBRWxDLE1BQU1iLE9BQU8sTUFBTUMsTUFBTSxHQUE0Q1AsT0FBekNRLHdCQUErQixFQUFDLFdBQVksT0FBSFIsS0FBTTtnQkFDekVvQixRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FsQixNQUFNbUIsS0FBS0MsU0FBUyxDQUFDO29CQUFFdEI7b0JBQU9FO2dCQUFLO1lBQ3JDO1lBRUEsSUFBSUcsS0FBS2tCLEVBQUUsRUFBRTtnQkFDWCxNQUFNWixRQUFRLE1BQU1OLEtBQUtPLElBQUk7Z0JBQzdCZixPQUFPMkIsSUFBSSxDQUFDLFNBQWtCLE9BQVRiLE1BQU1aLEVBQUU7Z0JBQzdCRixPQUFPNEIsT0FBTztZQUNoQixPQUFPO2dCQUNMQyxRQUFRQyxLQUFLLENBQUM7WUFDaEI7UUFDRjs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNDLDRFQUFDQztvQkFDQ0MsTUFBSztvQkFDTEMsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsVUFBVUMsQ0FBQUEsSUFBS2xDLFNBQVNrQyxFQUFFbEIsTUFBTSxDQUFDQyxLQUFLO29CQUN0Q0EsT0FBT2xCOzs7Ozs7Ozs7OzswQkFHWCw4REFBQzZCOzBCQUNDLDRFQUFDTztvQkFDQ0osTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsVUFBVUMsQ0FBQUEsSUFBS2hDLFFBQVFnQyxFQUFFbEIsTUFBTSxDQUFDQyxLQUFLO29CQUNyQ0EsT0FBT2hCOzs7Ozs7Ozs7OzswQkFHWCw4REFBQzJCOzBCQUNDLDRFQUFDQztvQkFBTUMsTUFBSztvQkFBU2IsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7R0FyRXdCdEI7O1FBQ1BKLHNEQUFTQTtRQUNUQyxzREFBU0E7OztLQUZGRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvdXBkYXRlL1tpZF0vcGFnZS50c3g/ZTE1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpOyAgXHJcbiAgY29uc3QgaWQgPSBwYXJhbXMuaWQ7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgLy8g642w7J207YSwIOqwgOyguOyYpOq4sFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRvcGljKCkge1xyXG4gICAgICBpZiAoIWlkKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH10b3BpY3MvJHtpZH1gLCB7XHJcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB0b3BpYyA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgICBzZXRUaXRsZSh0b3BpYy50aXRsZSk7XHJcbiAgICAgIHNldEJvZHkodG9waWMuYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hUb3BpYygpO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2FzeW5jIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZXZ0LnRhcmdldC50aXRsZS52YWx1ZTtcclxuICAgICAgY29uc3QgYm9keSA9IGV2dC50YXJnZXQuYm9keS52YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfXRvcGljcy8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGUsIGJvZHkgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3Aub2spIHtcclxuICAgICAgICBjb25zdCB0b3BpYyA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvcmVhZC8ke3RvcGljLmlkfWApO1xyXG4gICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgdG9waWNcIik7XHJcbiAgICAgIH1cclxuICAgIH19PlxyXG4gICAgICA8aDI+VXBkYXRlPC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiIFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgIHZhbHVlPXt0aXRsZX0gXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICBuYW1lPVwiYm9keVwiIFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJib2R5XCIgXHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICB2YWx1ZT17Ym9keX0gXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwidXBkYXRlXCIgLz5cclxuICAgICAgPC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVcGRhdGUiLCJyb3V0ZXIiLCJwYXJhbXMiLCJpZCIsInRpdGxlIiwic2V0VGl0bGUiLCJib2R5Iiwic2V0Qm9keSIsImZldGNoVG9waWMiLCJyZXNwIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImNhY2hlIiwidG9waWMiLCJqc29uIiwiZm9ybSIsIm9uU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJwdXNoIiwicmVmcmVzaCIsImNvbnNvbGUiLCJlcnJvciIsImgyIiwicCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRleHRhcmVhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/update/[id]/page.tsx\n"));

/***/ })

});