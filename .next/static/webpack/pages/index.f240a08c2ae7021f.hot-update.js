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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pqina_pintura__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pqina/pintura */ \"./node_modules/@pqina/pintura/pintura.js\");\n/* harmony import */ var _pqina_react_pintura__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pqina/react-pintura */ \"./node_modules/@pqina/react-pintura/index.js\");\n/* harmony import */ var _pqina_pintura_pintura_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pqina/pintura/pintura.css */ \"./node_modules/@pqina/pintura/pintura.css\");\n/* harmony import */ var _pqina_pintura_pintura_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pqina_pintura_pintura_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pqina_pintura_locale_en_GB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pqina/pintura/locale/en_GB */ \"./node_modules/@pqina/pintura/locale/en_GB/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n(0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.setPlugins)(_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_crop, _pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_finetune, _pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_filter, _pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_annotate);\nconst editorDefaults = {\n    utils: [\n        \"crop\",\n        \"finetune\",\n        \"filter\",\n        \"annotate\"\n    ],\n    imageReader: (0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.createDefaultImageReader)(),\n    imageWriter: (0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.createDefaultImageWriter)(),\n    shapePreprocessor: (0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.createDefaultShapePreprocessor)(),\n    ..._pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_finetune_defaults,\n    ..._pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_filter_defaults,\n    ..._pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.markup_editor_defaults,\n    locale: {\n        ..._pqina_pintura_locale_en_GB__WEBPACK_IMPORTED_MODULE_5__.LocaleCore,\n        ..._pqina_pintura_locale_en_GB__WEBPACK_IMPORTED_MODULE_5__.LocaleCrop,\n        ..._pqina_pintura_locale_en_GB__WEBPACK_IMPORTED_MODULE_5__.LocaleFinetune,\n        ..._pqina_pintura_locale_en_GB__WEBPACK_IMPORTED_MODULE_5__.LocaleFilter,\n        ..._pqina_pintura_locale_en_GB__WEBPACK_IMPORTED_MODULE_5__.LocaleAnnotate,\n        ..._pqina_pintura_locale_en_GB__WEBPACK_IMPORTED_MODULE_5__.LocaleMarkupEditor\n    }\n};\nfunction PinturaImageWidget(param) {\n    let { value, onChange } = param;\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Editor pintura\"\n            }, void 0, false, {\n                fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"70vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pqina_react_pintura__WEBPACK_IMPORTED_MODULE_3__.PinturaEditor, {\n                    ...editorDefaults,\n                    src: \"./image.jpeg\",\n                    onLoad: (res)=>console.log(\"load image\", res),\n                    onProcess: (param)=>{\n                        let { dest } = param;\n                        return setResult(URL.createObjectURL(dest));\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            !!result.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: result,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                lineNumber: 68,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(PinturaImageWidget, \"qoGl22B7WAXz9bHytSnRSI+DHp8=\");\n_c = PinturaImageWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PinturaImageWidget);\nvar _c;\n$RefreshReg$(_c, \"PinturaImageWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDVztBQUNFO0FBQ2pCO0FBZ0JWO0FBU2E7QUFFdkNPLDBEQUFVQSxDQUFDQyx1REFBV0EsRUFBRUMsMkRBQWVBLEVBQUVFLHlEQUFhQSxFQUFFRSwyREFBZUE7QUFHdkUsTUFBTVEsaUJBQWlCO0lBQ25CQyxPQUFPO1FBQUM7UUFBUTtRQUFZO1FBQVU7S0FBVztJQUNqREMsYUFBYW5CLHdFQUF3QkE7SUFDckNvQixhQUFhbkIsd0VBQXdCQTtJQUNyQ29CLG1CQUFtQm5CLDhFQUE4QkE7SUFDakQsR0FBR0ksb0VBQXdCO0lBQzNCLEdBQUdFLGtFQUFzQjtJQUN6QixHQUFHRSxrRUFBc0I7SUFDekJZLFFBQVE7UUFDSixHQUFHWCxtRUFBVTtRQUNiLEdBQUdDLG1FQUFVO1FBQ2IsR0FBR0MsdUVBQWM7UUFDakIsR0FBR0MscUVBQVk7UUFDZixHQUFHQyx1RUFBYztRQUNqQixHQUFHQywyRUFBa0I7SUFDekI7QUFDSjtBQUVBLFNBQVNPLG1CQUFtQixLQUFtQjtRQUFuQixFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFuQjs7SUFDeEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUc5QiwrQ0FBUUEsQ0FBQztJQUVyQyxxQkFDSSw4REFBQytCOzswQkFDRyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0Q7Z0JBQUlFLE9BQU87b0JBQUVDLFFBQVE7Z0JBQU87MEJBQ3pCLDRFQUFDaEMsK0RBQWFBO29CQUNULEdBQUdrQixjQUFjO29CQUNsQmUsS0FBSztvQkFDTEMsUUFBUSxDQUFDQyxNQUFRQyxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7b0JBQzNDRyxXQUFXOzRCQUFDLEVBQUVDLElBQUksRUFBRTsrQkFBS1gsVUFBVVksSUFBSUMsZUFBZSxDQUFDRjtvQkFBSzs7Ozs7Ozs7Ozs7WUFJbkUsQ0FBQyxDQUFDWixPQUFPZSxNQUFNLGtCQUNaLDhEQUFDWjswQkFDRyw0RUFBQ2E7b0JBQUlWLEtBQUtOO29CQUFRaUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUM7R0F0QlNwQjtLQUFBQTtBQXdCVCwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXZhdGFyLmpzPzZmMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RWRpdG9yRGVmYXVsdHMgfSBmcm9tICdAcHFpbmEvcGludHVyYSc7XG5pbXBvcnQgeyBQaW50dXJhRWRpdG9yIH0gZnJvbSAnQHBxaW5hL3JlYWN0LXBpbnR1cmEnO1xuaW1wb3J0IFwiQHBxaW5hL3BpbnR1cmEvcGludHVyYS5jc3NcIjtcblxuXG5pbXBvcnQge1xuICAgIGNyZWF0ZURlZmF1bHRJbWFnZVJlYWRlcixcbiAgICBjcmVhdGVEZWZhdWx0SW1hZ2VXcml0ZXIsXG4gICAgY3JlYXRlRGVmYXVsdFNoYXBlUHJlcHJvY2Vzc29yLFxuICBcbiAgICBzZXRQbHVnaW5zLFxuICAgIHBsdWdpbl9jcm9wLFxuICAgIHBsdWdpbl9maW5ldHVuZSxcbiAgICBwbHVnaW5fZmluZXR1bmVfZGVmYXVsdHMsXG4gICAgcGx1Z2luX2ZpbHRlcixcbiAgICBwbHVnaW5fZmlsdGVyX2RlZmF1bHRzLFxuICAgIHBsdWdpbl9hbm5vdGF0ZSxcbiAgICBtYXJrdXBfZWRpdG9yX2RlZmF1bHRzLFxuICB9IGZyb20gXCJAcHFpbmEvcGludHVyYVwiO1xuXG5pbXBvcnQge1xuICAgIExvY2FsZUNvcmUsXG4gICAgTG9jYWxlQ3JvcCxcbiAgICBMb2NhbGVGaW5ldHVuZSxcbiAgICBMb2NhbGVGaWx0ZXIsXG4gICAgTG9jYWxlQW5ub3RhdGUsXG4gICAgTG9jYWxlTWFya3VwRWRpdG9yLFxuICB9IGZyb20gXCJAcHFpbmEvcGludHVyYS9sb2NhbGUvZW5fR0JcIjtcblxuc2V0UGx1Z2lucyhwbHVnaW5fY3JvcCwgcGx1Z2luX2ZpbmV0dW5lLCBwbHVnaW5fZmlsdGVyLCBwbHVnaW5fYW5ub3RhdGUpO1xuXG5cbmNvbnN0IGVkaXRvckRlZmF1bHRzID0ge1xuICAgIHV0aWxzOiBbXCJjcm9wXCIsIFwiZmluZXR1bmVcIiwgXCJmaWx0ZXJcIiwgXCJhbm5vdGF0ZVwiXSxcbiAgICBpbWFnZVJlYWRlcjogY3JlYXRlRGVmYXVsdEltYWdlUmVhZGVyKCksXG4gICAgaW1hZ2VXcml0ZXI6IGNyZWF0ZURlZmF1bHRJbWFnZVdyaXRlcigpLFxuICAgIHNoYXBlUHJlcHJvY2Vzc29yOiBjcmVhdGVEZWZhdWx0U2hhcGVQcmVwcm9jZXNzb3IoKSxcbiAgICAuLi5wbHVnaW5fZmluZXR1bmVfZGVmYXVsdHMsXG4gICAgLi4ucGx1Z2luX2ZpbHRlcl9kZWZhdWx0cyxcbiAgICAuLi5tYXJrdXBfZWRpdG9yX2RlZmF1bHRzLFxuICAgIGxvY2FsZToge1xuICAgICAgICAuLi5Mb2NhbGVDb3JlLFxuICAgICAgICAuLi5Mb2NhbGVDcm9wLFxuICAgICAgICAuLi5Mb2NhbGVGaW5ldHVuZSxcbiAgICAgICAgLi4uTG9jYWxlRmlsdGVyLFxuICAgICAgICAuLi5Mb2NhbGVBbm5vdGF0ZSxcbiAgICAgICAgLi4uTG9jYWxlTWFya3VwRWRpdG9yLFxuICAgIH0sXG59O1xuXG5mdW5jdGlvbiBQaW50dXJhSW1hZ2VXaWRnZXQoeyB2YWx1ZSwgb25DaGFuZ2UgfSkge1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+RWRpdG9yIHBpbnR1cmE8L3A+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI3MHZoXCIgfX0+XG4gICAgICAgICAgICAgICAgPFBpbnR1cmFFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgey4uLmVkaXRvckRlZmF1bHRzfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiLi9pbWFnZS5qcGVnXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZD17KHJlcykgPT4gY29uc29sZS5sb2coXCJsb2FkIGltYWdlXCIsIHJlcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvY2Vzcz17KHsgZGVzdCB9KSA9PiBzZXRSZXN1bHQoVVJMLmNyZWF0ZU9iamVjdFVSTChkZXN0KSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ISFyZXN1bHQubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Jlc3VsdH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQaW50dXJhSW1hZ2VXaWRnZXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImdldEVkaXRvckRlZmF1bHRzIiwiUGludHVyYUVkaXRvciIsImNyZWF0ZURlZmF1bHRJbWFnZVJlYWRlciIsImNyZWF0ZURlZmF1bHRJbWFnZVdyaXRlciIsImNyZWF0ZURlZmF1bHRTaGFwZVByZXByb2Nlc3NvciIsInNldFBsdWdpbnMiLCJwbHVnaW5fY3JvcCIsInBsdWdpbl9maW5ldHVuZSIsInBsdWdpbl9maW5ldHVuZV9kZWZhdWx0cyIsInBsdWdpbl9maWx0ZXIiLCJwbHVnaW5fZmlsdGVyX2RlZmF1bHRzIiwicGx1Z2luX2Fubm90YXRlIiwibWFya3VwX2VkaXRvcl9kZWZhdWx0cyIsIkxvY2FsZUNvcmUiLCJMb2NhbGVDcm9wIiwiTG9jYWxlRmluZXR1bmUiLCJMb2NhbGVGaWx0ZXIiLCJMb2NhbGVBbm5vdGF0ZSIsIkxvY2FsZU1hcmt1cEVkaXRvciIsImVkaXRvckRlZmF1bHRzIiwidXRpbHMiLCJpbWFnZVJlYWRlciIsImltYWdlV3JpdGVyIiwic2hhcGVQcmVwcm9jZXNzb3IiLCJsb2NhbGUiLCJQaW50dXJhSW1hZ2VXaWRnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiZGl2IiwicCIsInN0eWxlIiwiaGVpZ2h0Iiwic3JjIiwib25Mb2FkIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm9uUHJvY2VzcyIsImRlc3QiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsZW5ndGgiLCJpbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Avatar.js\n"));

/***/ })

});