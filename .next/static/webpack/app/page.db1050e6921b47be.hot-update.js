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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction User(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"user-card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    props.user.age,\n                    \"살 - \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: props.user.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            \"//2. 버튼을 컴포넌트로 바꾸기\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomButton, {\n                onClick: ()=>props.handleDelete(props.user.id),\n                children: \"삭제하기\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = User;\nconst App = ()=>{\n    _s();\n    // const users = [\n    //   { id: 1, age: 30, name: \"송중기\" },\n    //   { id: 2, age: 24, name: \"송강\" },\n    //   { id: 3, age: 21, name: \"김유정\" },\n    //   { id: 4, age: 29, name: \"구교환\" },\n    // ];\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            age: 30,\n            name: \"송중기\"\n        },\n        {\n            id: 2,\n            age: 24,\n            name: \"송강\"\n        },\n        {\n            id: 3,\n            age: 21,\n            name: \"김유정\"\n        },\n        {\n            id: 4,\n            age: 29,\n            name: \"구교환\"\n        }\n    ]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [age, setAge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const nameChangeHandler = (event)=>{\n        setName(event.target.value);\n    };\n    const ageChangeHandler = (event)=>{\n        setAge(event.target.value);\n    };\n    //추가 버튼 기능\n    const clickAddButtonHandler = ()=>{\n        const addUser = {\n            id: users.length + 1,\n            age: age,\n            name: name\n        };\n        setUsers([\n            ...users,\n            addUser\n        ]);\n    };\n    //삭제 버튼 기능\n    const clickRemoveButtonHandler = (id)=>{\n        //alert(id);\n        const newUsers = users.filter((user)=>user.id !== id);\n        setUsers(newUsers);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"이름: \\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name,\n                        onChange: (event)=>nameChangeHandler(event)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    \"나이:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: age,\n                        onChange: (event)=>ageChangeHandler(event)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: clickAddButtonHandler,\n                        children: \"추가\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app-style\",\n                children: users.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(User, {\n                        item: item,\n                        users: users,\n                        removeFunciton: clickRemoveButtonHandler\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\s1_1v\\\\react_study\\\\study-react\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"J5BeaD3PRymVHnBTjrXxJtL7c/I=\");\n_c1 = App;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"User\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNqQjtBQUV2QixTQUFTRSxLQUFLQyxLQUFTO0lBQ3JCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7O29CQUFLRCxNQUFNRyxJQUFJLENBQUNDLEdBQUc7b0JBQUM7Ozs7Ozs7MEJBQ3JCLDhEQUFDSDswQkFBS0QsTUFBTUcsSUFBSSxDQUFDRSxJQUFJOzs7Ozs7WUFBTzswQkFFNUIsOERBQUNDO2dCQUFhQyxTQUFTLElBQU1QLE1BQU1RLFlBQVksQ0FBQ1IsTUFBTUcsSUFBSSxDQUFDTSxFQUFFOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFLdEU7S0FYU1Y7QUFjVCxNQUFNVyxNQUFNOztJQUNWLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFDckMsS0FBSztJQUNMLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztRQUNqQztZQUFFVyxJQUFJO1lBQUdMLEtBQUs7WUFBSUMsTUFBTTtRQUFNO1FBQzlCO1lBQUVJLElBQUk7WUFBR0wsS0FBSztZQUFJQyxNQUFNO1FBQUs7UUFDN0I7WUFBRUksSUFBSTtZQUFHTCxLQUFLO1lBQUlDLE1BQU07UUFBTTtRQUM5QjtZQUFFSSxJQUFJO1lBQUdMLEtBQUs7WUFBSUMsTUFBTTtRQUFNO0tBQy9CO0lBRUQsTUFBTSxDQUFDQSxNQUFNUSxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ00sS0FBS1UsT0FBTyxHQUFHaEIsK0NBQVFBLENBQUM7SUFFL0IsTUFBTWlCLG9CQUFvQixDQUFDQztRQUN6QkgsUUFBUUcsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBQ0EsTUFBTUMsbUJBQW1CLENBQUNIO1FBQ3hCRixPQUFPRSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDM0I7SUFFQSxVQUFVO0lBQ1YsTUFBTUUsd0JBQXdCO1FBQzVCLE1BQU1DLFVBQVU7WUFDZFosSUFBSUUsTUFBTVcsTUFBTSxHQUFHO1lBQ25CbEIsS0FBS0E7WUFDTEMsTUFBTUE7UUFDUjtRQUNBTyxTQUFTO2VBQUlEO1lBQU9VO1NBQVE7SUFDOUI7SUFDQSxVQUFVO0lBQ1YsTUFBTUUsMkJBQTJCLENBQUNkO1FBQ2hDLFlBQVk7UUFDWixNQUFNZSxXQUFXYixNQUFNYyxNQUFNLENBQUMsQ0FBQ3RCLE9BQVNBLEtBQUtNLEVBQUUsS0FBS0E7UUFDcERHLFNBQVNZO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ3ZCOzswQkFDQyw4REFBQ0E7O29CQUFJO2tDQUVILDhEQUFDeUI7d0JBQU1SLE9BQU9iO3dCQUFNc0IsVUFBVSxDQUFDWCxRQUFVRCxrQkFBa0JDOzs7Ozs7a0NBQzNELDhEQUFDWTs7Ozs7b0JBQUs7a0NBRU4sOERBQUNGO3dCQUFNUixPQUFPZDt3QkFBS3VCLFVBQVUsQ0FBQ1gsUUFBVUcsaUJBQWlCSDs7Ozs7O2tDQUN6RCw4REFBQ1k7Ozs7O2tDQUNELDhEQUFDQzt3QkFBT3RCLFNBQVNhO2tDQUF1Qjs7Ozs7Ozs7Ozs7OzBCQUUxQyw4REFBQ25CO2dCQUFJQyxXQUFVOzBCQUVYUyxNQUFNbUIsR0FBRyxDQUFDLFNBQVVDLElBQUk7b0JBQ3RCLHFCQUNFLDhEQUFDaEM7d0JBQ0NnQyxNQUFNQTt3QkFDTnBCLE9BQU9BO3dCQUVQcUIsZ0JBQWdCVDt1QkFEWFEsS0FBS3RCLEVBQUU7Ozs7O2dCQUlsQjs7Ozs7Ozs7Ozs7O0FBZVY7R0E3RU1DO01BQUFBO0FBK0VOLGlFQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCI7XG5cbmZ1bmN0aW9uIFVzZXIocHJvcHM6YW55KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmRcIj5cbiAgICAgIDxkaXY+e3Byb3BzLnVzZXIuYWdlfeyCtCAtIDwvZGl2PlxuICAgICAgPGRpdj57cHJvcHMudXNlci5uYW1lfTwvZGl2PlxuXHRcdFx0Ly8yLiDrsoTtirzsnYQg7Lu07Y+s64SM7Yq466GcIOuwlOq+uOq4sFxuICAgICAgPEN1c3RvbUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVEZWxldGUocHJvcHMudXNlci5pZCl9PlxuICAgICAgICDsgq3soJztlZjquLBcbiAgICAgIDwvQ3VzdG9tQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgLy8gY29uc3QgdXNlcnMgPSBbXG4gIC8vICAgeyBpZDogMSwgYWdlOiAzMCwgbmFtZTogXCLshqHspJHquLBcIiB9LFxuICAvLyAgIHsgaWQ6IDIsIGFnZTogMjQsIG5hbWU6IFwi7Iah6rCVXCIgfSxcbiAgLy8gICB7IGlkOiAzLCBhZ2U6IDIxLCBuYW1lOiBcIuq5gOycoOyglVwiIH0sXG4gIC8vICAgeyBpZDogNCwgYWdlOiAyOSwgbmFtZTogXCLqtazqtZDtmZhcIiB9LFxuICAvLyBdO1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtcbiAgICB7IGlkOiAxLCBhZ2U6IDMwLCBuYW1lOiBcIuyGoeykkeq4sFwiIH0sXG4gICAgeyBpZDogMiwgYWdlOiAyNCwgbmFtZTogXCLshqHqsJVcIiB9LFxuICAgIHsgaWQ6IDMsIGFnZTogMjEsIG5hbWU6IFwi6rmA7Jyg7KCVXCIgfSxcbiAgICB7IGlkOiA0LCBhZ2U6IDI5LCBuYW1lOiBcIuq1rOq1kO2ZmFwiIH0sXG4gIF0pO1xuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgbmFtZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGFnZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICAvL+y2lOqwgCDrsoTtirwg6riw64qlXG4gIGNvbnN0IGNsaWNrQWRkQnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRVc2VyID0ge1xuICAgICAgaWQ6IHVzZXJzLmxlbmd0aCArIDEsXG4gICAgICBhZ2U6IGFnZSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgfTtcbiAgICBzZXRVc2VycyhbLi4udXNlcnMsIGFkZFVzZXJdKTtcbiAgfTtcbiAgLy/sgq3soJwg67KE7Yq8IOq4sOuKpVxuICBjb25zdCBjbGlja1JlbW92ZUJ1dHRvbkhhbmRsZXIgPSAoaWQpID0+IHtcbiAgICAvL2FsZXJ0KGlkKTtcbiAgICBjb25zdCBuZXdVc2VycyA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gaWQpO1xuICAgIHNldFVzZXJzKG5ld1VzZXJzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICDsnbTrpoQ6ICZuYnNwO1xuICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IG5hbWVDaGFuZ2VIYW5kbGVyKGV2ZW50KX0gLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIOuCmOydtDpcbiAgICAgICAgPGlucHV0IHZhbHVlPXthZ2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGFnZUNoYW5nZUhhbmRsZXIoZXZlbnQpfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0FkZEJ1dHRvbkhhbmRsZXJ9Puy2lOqwgDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1zdHlsZVwiPlxuICAgICAgICB7XG4gICAgICAgICAgdXNlcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VXNlclxuICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgdXNlcnM9e3VzZXJzfVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICByZW1vdmVGdW5jaXRvbj17Y2xpY2tSZW1vdmVCdXR0b25IYW5kbGVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgLyogPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc3R5bGVcIj5cbiAgICAgICAge3VzZXJzWzBdLmFnZX0gLSB7dXNlcnNbMF0ubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc3R5bGVcIj5cbiAgICAgICAge3VzZXJzWzFdLmFnZX0gLSB7dXNlcnNbMV0ubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc3R5bGVcIj5cbiAgICAgICAge3VzZXJzWzJdLmFnZX0gLSB7dXNlcnNbMl0ubmFtZX1cbiAgICAgIDwvZGl2PiAqL1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlVzZXIiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsInVzZXIiLCJhZ2UiLCJuYW1lIiwiQ3VzdG9tQnV0dG9uIiwib25DbGljayIsImhhbmRsZURlbGV0ZSIsImlkIiwiQXBwIiwidXNlcnMiLCJzZXRVc2VycyIsInNldE5hbWUiLCJzZXRBZ2UiLCJuYW1lQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJhZ2VDaGFuZ2VIYW5kbGVyIiwiY2xpY2tBZGRCdXR0b25IYW5kbGVyIiwiYWRkVXNlciIsImxlbmd0aCIsImNsaWNrUmVtb3ZlQnV0dG9uSGFuZGxlciIsIm5ld1VzZXJzIiwiZmlsdGVyIiwiaW5wdXQiLCJvbkNoYW5nZSIsImJyIiwiYnV0dG9uIiwibWFwIiwiaXRlbSIsInJlbW92ZUZ1bmNpdG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});