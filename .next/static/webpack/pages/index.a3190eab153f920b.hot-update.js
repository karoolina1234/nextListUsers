"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Avatar.js":
/*!******************************!*\
  !*** ./components/Avatar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pqina_react_pintura__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pqina/react-pintura */ \"./node_modules/@pqina/react-pintura/index.js\");\n/* harmony import */ var _pqina_pintura__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pqina/pintura */ \"./node_modules/@pqina/pintura/pintura.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PinturaImageWidget(param) {\n    let { value, onChange } = param;\n    _s();\n    const [editorValue, setEditorValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value || \"image.jpeg\");\n    const editorConfig = (0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_3__.getEditorDefaults)();\n    const handleEditorChange = (newValue)=>{\n        setEditorValue(newValue);\n        onChange(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Editor pintura\"\n            }, void 0, false, {\n                fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pqina_react_pintura__WEBPACK_IMPORTED_MODULE_2__.PinturaEditor, {\n                ...editorConfig,\n                src: \"\",\n                imageCropAspectRatio: 1\n            }, void 0, false, {\n                fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(PinturaImageWidget, \"aZRu8nJorsuSXy7M+xFwX0vg5dQ=\");\n_c = PinturaImageWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PinturaImageWidget);\nvar _c;\n$RefreshReg$(_c, \"PinturaImageWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDYTtBQUNGO0FBRW5ELFNBQVNJLG1CQUFtQixLQUFtQjtRQUFuQixFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFuQjs7SUFDeEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDSSxTQUFTO0lBR3hELE1BQU1JLGVBQWVOLGlFQUFpQkE7SUFFdEMsTUFBTU8scUJBQXFCLENBQUNDO1FBQ3hCSCxlQUFlRztRQUNmTCxTQUFTSztJQUNiO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ1gsK0RBQWFBO2dCQUNULEdBQUdPLFlBQVk7Z0JBQ2hCSyxLQUFJO2dCQUNKQyxzQkFBc0I7Ozs7Ozs7Ozs7OztBQUl0QztHQXJCU1g7S0FBQUE7QUF1QlQsK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F2YXRhci5qcz82ZjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBpbnR1cmFFZGl0b3IgfSBmcm9tICdAcHFpbmEvcmVhY3QtcGludHVyYSc7XG5pbXBvcnQgeyBnZXRFZGl0b3JEZWZhdWx0cyB9IGZyb20gJ0BwcWluYS9waW50dXJhJztcblxuZnVuY3Rpb24gUGludHVyYUltYWdlV2lkZ2V0KHsgdmFsdWUsIG9uQ2hhbmdlIH0pIHtcbiAgICBjb25zdCBbZWRpdG9yVmFsdWUsIHNldEVkaXRvclZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlIHx8ICdpbWFnZS5qcGVnJyk7XG5cblxuICAgIGNvbnN0IGVkaXRvckNvbmZpZyA9IGdldEVkaXRvckRlZmF1bHRzKCk7XG5cbiAgICBjb25zdCBoYW5kbGVFZGl0b3JDaGFuZ2UgPSAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgc2V0RWRpdG9yVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5FZGl0b3IgcGludHVyYTwvcD5cbiAgICAgICAgICAgIDxQaW50dXJhRWRpdG9yXG4gICAgICAgICAgICAgICAgey4uLmVkaXRvckNvbmZpZ31cbiAgICAgICAgICAgICAgICBzcmM9XCJcIlxuICAgICAgICAgICAgICAgIGltYWdlQ3JvcEFzcGVjdFJhdGlvPXsxfVxuICAgICAgICAgICAgPjwvUGludHVyYUVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGludHVyYUltYWdlV2lkZ2V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQaW50dXJhRWRpdG9yIiwiZ2V0RWRpdG9yRGVmYXVsdHMiLCJQaW50dXJhSW1hZ2VXaWRnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZWRpdG9yVmFsdWUiLCJzZXRFZGl0b3JWYWx1ZSIsImVkaXRvckNvbmZpZyIsImhhbmRsZUVkaXRvckNoYW5nZSIsIm5ld1ZhbHVlIiwiZGl2IiwicCIsInNyYyIsImltYWdlQ3JvcEFzcGVjdFJhdGlvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Avatar.js\n"));

/***/ })

});