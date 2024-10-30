"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// Button 컴포넌트\nfunction CustomButton(props) {\n    const { color, onClick, children } = props;\n    if (color) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: {\n            background: color,\n            color: \"white\"\n        },\n        onClick: onClick,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 18,\n        columnNumber: 12\n    }, this);\n}\n_c = CustomButton;\nfunction User(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"component-style\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    props.user.age,\n                    \"살 - \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: props.user.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomButton, {\n                onClick: ()=>props.handleDelete(props.user.id),\n                children: \"삭제하기\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c1 = User;\nconst App = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            age: 30,\n            name: \"송중기\"\n        },\n        {\n            id: 2,\n            age: 24,\n            name: \"송강\"\n        },\n        {\n            id: 3,\n            age: 21,\n            name: \"김유정\"\n        },\n        {\n            id: 4,\n            age: 29,\n            name: \"구교환\"\n        }\n    ]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [age, setAge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const nameChangeHandler = (event)=>{\n        setName(event.target.value);\n    };\n    const ageChangeHandler = (event)=>{\n        setAge(event.target.value);\n    };\n    //추가 버튼 기능\n    const clickAddButtonHandler = ()=>{\n        const addUser = {\n            id: users.length + 1,\n            age: age,\n            name: name\n        };\n        setUsers([\n            ...users,\n            addUser\n        ]);\n    };\n    //삭제 버튼 기능\n    const clickRemoveButtonHandler = (id)=>{\n        //alert(id);\n        const newUsers = users.filter((user)=>user.id !== id);\n        setUsers(newUsers);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"이름: \\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        onChange: (event)=>nameChangeHandler(event)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    \"나이:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: age,\n                        onChange: (event)=>ageChangeHandler(event)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: clickAddButtonHandler,\n                        children: \"추가\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app-style\",\n                children: users.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(User, {\n                        item: item,\n                        users: users,\n                        removeFunciton: clickRemoveButtonHandler\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"J5BeaD3PRymVHnBTjrXxJtL7c/I=\");\n_c2 = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CustomButton\");\n$RefreshReg$(_c1, \"User\");\n$RefreshReg$(_c2, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNqQjtBQUV2QixjQUFjO0FBQ2QsU0FBU0UsYUFBYUMsS0FBUztJQUM3QixNQUFNLEVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUMsR0FBR0g7SUFDakMsSUFBSUMsT0FDRixxQkFDRSw4REFBQ0c7UUFDQ0MsT0FBTztZQUFFQyxZQUFZTDtZQUFPQSxPQUFPO1FBQVE7UUFDM0NDLFNBQVNBO2tCQUVSQzs7Ozs7O0lBSVAscUJBQU8sOERBQUNDO1FBQU9GLFNBQVNBO2tCQUFVRixNQUFNRyxRQUFROzs7Ozs7QUFDbEQ7S0FiT0o7QUFlVCxTQUFTUSxLQUFLUCxLQUFTO0lBQ3JCLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7O29CQUFLUixNQUFNVSxJQUFJLENBQUNDLEdBQUc7b0JBQUM7Ozs7Ozs7MEJBQ3JCLDhEQUFDSDswQkFBS1IsTUFBTVUsSUFBSSxDQUFDRSxJQUFJOzs7Ozs7MEJBQ3JCLDhEQUFDYjtnQkFBYUcsU0FBUyxJQUFNRixNQUFNYSxZQUFZLENBQUNiLE1BQU1VLElBQUksQ0FBQ0ksRUFBRTswQkFBRzs7Ozs7Ozs7Ozs7O0FBS3RFO01BVlNQO0FBYVQsTUFBTVEsTUFBTTs7SUFDVixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDO1FBQ2pDO1lBQUVnQixJQUFJO1lBQUdILEtBQUs7WUFBSUMsTUFBTTtRQUFNO1FBQzlCO1lBQUVFLElBQUk7WUFBR0gsS0FBSztZQUFJQyxNQUFNO1FBQUs7UUFDN0I7WUFBRUUsSUFBSTtZQUFHSCxLQUFLO1lBQUlDLE1BQU07UUFBTTtRQUM5QjtZQUFFRSxJQUFJO1lBQUdILEtBQUs7WUFBSUMsTUFBTTtRQUFNO0tBQy9CO0lBRUQsTUFBTSxDQUFDQSxNQUFNTSxRQUFRLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNhLEtBQUtRLE9BQU8sR0FBR3JCLCtDQUFRQSxDQUFDO0lBRS9CLE1BQU1zQixvQkFBb0IsQ0FBQ0M7UUFDekJILFFBQVFHLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUNBLE1BQU1DLG1CQUFtQixDQUFDSDtRQUN4QkYsT0FBT0UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzNCO0lBRUEsVUFBVTtJQUNWLE1BQU1FLHdCQUF3QjtRQUM1QixNQUFNQyxVQUFVO1lBQ2RaLElBQUlFLE1BQU1XLE1BQU0sR0FBRztZQUNuQmhCLEtBQUtBO1lBQ0xDLE1BQU1BO1FBQ1I7UUFDQUssU0FBUztlQUFJRDtZQUFPVTtTQUFRO0lBQzlCO0lBQ0EsVUFBVTtJQUNWLE1BQU1FLDJCQUEyQixDQUFDZDtRQUNoQyxZQUFZO1FBQ1osTUFBTWUsV0FBV2IsTUFBTWMsTUFBTSxDQUFDLENBQUNwQixPQUFTQSxLQUFLSSxFQUFFLEtBQUtBO1FBQ3BERyxTQUFTWTtJQUNYO0lBRUEscUJBQ0UsOERBQUNyQjs7MEJBQ0MsOERBQUNBOztvQkFBSTtrQ0FFSCw4REFBQ3VCO3dCQUFNUixPQUFPWDt3QkFBTW9CLFVBQVUsQ0FBQ1gsUUFBVUQsa0JBQWtCQzs7Ozs7O2tDQUMzRCw4REFBQ1k7Ozs7O29CQUFLO2tDQUVOLDhEQUFDRjt3QkFBTVIsT0FBT1o7d0JBQUtxQixVQUFVLENBQUNYLFFBQVVHLGlCQUFpQkg7Ozs7OztrQ0FDekQsOERBQUNZOzs7OztrQ0FDRCw4REFBQzdCO3dCQUFPRixTQUFTdUI7a0NBQXVCOzs7Ozs7Ozs7Ozs7MEJBRTFDLDhEQUFDakI7Z0JBQUlDLFdBQVU7MEJBRVhPLE1BQU1rQixHQUFHLENBQUMsU0FBVUMsSUFBSTtvQkFDdEIscUJBQ0UsOERBQUM1Qjt3QkFDQzRCLE1BQU1BO3dCQUNObkIsT0FBT0E7d0JBRVBvQixnQkFBZ0JSO3VCQURYTyxLQUFLckIsRUFBRTs7Ozs7Z0JBSWxCOzs7Ozs7Ozs7Ozs7QUFlVjtHQXZFTUM7TUFBQUE7QUF5RU4saUVBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIjtcblxuLy8gQnV0dG9uIOy7tO2PrOuEjO2KuFxuZnVuY3Rpb24gQ3VzdG9tQnV0dG9uKHByb3BzOmFueSkge1xuICBjb25zdCB7Y29sb3IsIG9uQ2xpY2ssIGNoaWxkcmVufSA9IHByb3BzXG4gICAgaWYgKGNvbG9yKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yLCBjb2xvcjogXCJ3aGl0ZVwiIH19XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICBcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT57cHJvcHMuY2hpbGRyZW59PC9idXR0b24+O1xuICB9XG5cbmZ1bmN0aW9uIFVzZXIocHJvcHM6YW55KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc3R5bGVcIj5cbiAgICAgIDxkaXY+e3Byb3BzLnVzZXIuYWdlfeyCtCAtIDwvZGl2PlxuICAgICAgPGRpdj57cHJvcHMudXNlci5uYW1lfTwvZGl2PlxuICAgICAgPEN1c3RvbUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVEZWxldGUocHJvcHMudXNlci5pZCl9PlxuICAgICAgICDsgq3soJztlZjquLBcbiAgICAgIDwvQ3VzdG9tQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXG4gICAgeyBpZDogMSwgYWdlOiAzMCwgbmFtZTogXCLshqHspJHquLBcIiB9LFxuICAgIHsgaWQ6IDIsIGFnZTogMjQsIG5hbWU6IFwi7Iah6rCVXCIgfSxcbiAgICB7IGlkOiAzLCBhZ2U6IDIxLCBuYW1lOiBcIuq5gOycoOyglVwiIH0sXG4gICAgeyBpZDogNCwgYWdlOiAyOSwgbmFtZTogXCLqtazqtZDtmZhcIiB9LFxuICBdKTtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG5hbWVDaGFuZ2VIYW5kbGVyID0gKGV2ZW50OmFueSkgPT4ge1xuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgYWdlQ2hhbmdlSGFuZGxlciA9IChldmVudDphbnkpID0+IHtcbiAgICBzZXRBZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICAvL+y2lOqwgCDrsoTtirwg6riw64qlXG4gIGNvbnN0IGNsaWNrQWRkQnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRVc2VyID0ge1xuICAgICAgaWQ6IHVzZXJzLmxlbmd0aCArIDEsXG4gICAgICBhZ2U6IGFnZSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgfTtcbiAgICBzZXRVc2VycyhbLi4udXNlcnMsIGFkZFVzZXJdKTtcbiAgfTtcbiAgLy/sgq3soJwg67KE7Yq8IOq4sOuKpVxuICBjb25zdCBjbGlja1JlbW92ZUJ1dHRvbkhhbmRsZXIgPSAoaWQpID0+IHtcbiAgICAvL2FsZXJ0KGlkKTtcbiAgICBjb25zdCBuZXdVc2VycyA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gaWQpO1xuICAgIHNldFVzZXJzKG5ld1VzZXJzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICDsnbTrpoQ6ICZuYnNwO1xuICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG5hbWVDaGFuZ2VIYW5kbGVyKGV2ZW50KX0gLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIOuCmOydtDpcbiAgICAgICAgPGlucHV0IHZhbHVlPXthZ2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGFnZUNoYW5nZUhhbmRsZXIoZXZlbnQpfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0FkZEJ1dHRvbkhhbmRsZXJ9Puy2lOqwgDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1zdHlsZVwiPlxuICAgICAgICB7XG4gICAgICAgICAgdXNlcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VXNlclxuICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgdXNlcnM9e3VzZXJzfVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICByZW1vdmVGdW5jaXRvbj17Y2xpY2tSZW1vdmVCdXR0b25IYW5kbGVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgLyogPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc3R5bGVcIj5cbiAgICAgICAge3VzZXJzWzBdLmFnZX0gLSB7dXNlcnNbMF0ubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc3R5bGVcIj5cbiAgICAgICAge3VzZXJzWzFdLmFnZX0gLSB7dXNlcnNbMV0ubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc3R5bGVcIj5cbiAgICAgICAge3VzZXJzWzJdLmFnZX0gLSB7dXNlcnNbMl0ubmFtZX1cbiAgICAgIDwvZGl2PiAqL1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkN1c3RvbUJ1dHRvbiIsInByb3BzIiwiY29sb3IiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJidXR0b24iLCJzdHlsZSIsImJhY2tncm91bmQiLCJVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlciIsImFnZSIsIm5hbWUiLCJoYW5kbGVEZWxldGUiLCJpZCIsIkFwcCIsInVzZXJzIiwic2V0VXNlcnMiLCJzZXROYW1lIiwic2V0QWdlIiwibmFtZUNoYW5nZUhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWdlQ2hhbmdlSGFuZGxlciIsImNsaWNrQWRkQnV0dG9uSGFuZGxlciIsImFkZFVzZXIiLCJsZW5ndGgiLCJjbGlja1JlbW92ZUJ1dHRvbkhhbmRsZXIiLCJuZXdVc2VycyIsImZpbHRlciIsImlucHV0Iiwib25DaGFuZ2UiLCJiciIsIm1hcCIsIml0ZW0iLCJyZW1vdmVGdW5jaXRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});