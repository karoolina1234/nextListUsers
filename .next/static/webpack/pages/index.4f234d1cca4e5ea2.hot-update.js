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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pqina_pintura__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pqina/pintura */ \"./node_modules/@pqina/pintura/pintura.js\");\n/* harmony import */ var _pqina_react_pintura__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pqina/react-pintura */ \"./node_modules/@pqina/react-pintura/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n(0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.setPlugins)(_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_crop, _pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_finetune, _pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_filter, _pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_annotate);\nconst editorDefaults = {\n    utils: [\n        \"crop\",\n        \"finetune\",\n        \"filter\",\n        \"annotate\"\n    ],\n    imageReader: (0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.createDefaultImageReader)(),\n    imageWriter: (0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.createDefaultImageWriter)(),\n    shapePreprocessor: (0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.createDefaultShapePreprocessor)(),\n    ..._pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_finetune_defaults,\n    ..._pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.plugin_filter_defaults,\n    ..._pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.markup_editor_defaults,\n    locale: {\n        ...LocaleCore,\n        ...LocaleCrop,\n        ...LocaleFinetune,\n        ...LocaleFilter,\n        ...LocaleAnnotate,\n        ...LocaleMarkupEditor\n    }\n};\nfunction PinturaImageWidget(param) {\n    let { value, onChange } = param;\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const editorConfig = (0,_pqina_pintura__WEBPACK_IMPORTED_MODULE_2__.getEditorDefaults)();\n    const handleEditorChange = (newValue)=>{\n        setEditorValue(newValue);\n        onChange(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Editor pintura\"\n            }, void 0, false, {\n                fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"70vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pqina_react_pintura__WEBPACK_IMPORTED_MODULE_3__.PinturaEditor, {\n                    ...editorDefaults,\n                    src: \"./image.jpeg\",\n                    onLoad: (res)=>console.log(\"load image\", res),\n                    onProcess: (param)=>{\n                        let { dest } = param;\n                        return setResult(URL.createObjectURL(dest));\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            !!result.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: result,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/karolinamendes/nextListUsers/components/Avatar.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(PinturaImageWidget, \"qoGl22B7WAXz9bHytSnRSI+DHp8=\");\n_c = PinturaImageWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PinturaImageWidget);\nvar _c;\n$RefreshReg$(_c, \"PinturaImageWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVztBQUNTO0FBQ21DO0FBc0J2RTtBQUV4QlcsMERBQVVBLENBQUNDLHVEQUFXQSxFQUFFRSwyREFBZUEsRUFBRUcseURBQWFBLEVBQUVHLDJEQUFlQTtBQUd2RSxNQUFNSSxpQkFBaUI7SUFDbkJDLE9BQU87UUFBQztRQUFRO1FBQVk7UUFBVTtLQUFXO0lBQ2pEQyxhQUFhbEIsd0VBQXdCQTtJQUNyQ21CLGFBQWFsQix3RUFBd0JBO0lBQ3JDbUIsbUJBQW1CbEIsOEVBQThCQTtJQUNqRCxHQUFHTSxvRUFBd0I7SUFDM0IsR0FBR0csa0VBQXNCO0lBQ3pCLEdBQUdHLGtFQUFzQjtJQUN6Qk8sUUFBUTtRQUNKLEdBQUdDLFVBQVU7UUFDYixHQUFHQyxVQUFVO1FBQ2IsR0FBR0MsY0FBYztRQUNqQixHQUFHQyxZQUFZO1FBQ2YsR0FBR0MsY0FBYztRQUNqQixHQUFHQyxrQkFBa0I7SUFDekI7QUFDSjtBQUVBLFNBQVNDLG1CQUFtQixLQUFtQjtRQUFuQixFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFuQjs7SUFDeEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUd2QywrQ0FBUUEsQ0FBQztJQUdyQyxNQUFNd0MsZUFBZXZDLGlFQUFpQkE7SUFFdEMsTUFBTXdDLHFCQUFxQixDQUFDQztRQUN4QkMsZUFBZUQ7UUFDZkwsU0FBU0s7SUFDYjtJQUVBLHFCQUNJLDhEQUFDRTs7MEJBQ0csOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNEO2dCQUFJRSxPQUFPO29CQUFFQyxRQUFRO2dCQUFPOzBCQUN6Qiw0RUFBQzVDLCtEQUFhQTtvQkFDVCxHQUFHb0IsY0FBYztvQkFDbEJ5QixLQUFLO29CQUNMQyxRQUFRLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQyxjQUFjRjtvQkFDM0NHLFdBQVc7NEJBQUMsRUFBRUMsSUFBSSxFQUFFOytCQUFLZixVQUFVZ0IsSUFBSUMsZUFBZSxDQUFDRjtvQkFBSzs7Ozs7Ozs7Ozs7WUFJbkUsQ0FBQyxDQUFDaEIsT0FBT21CLE1BQU0sa0JBQ3BCLDhEQUFDWjswQkFDQyw0RUFBQ2E7b0JBQUlWLEtBQUtWO29CQUFRcUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7R0E5QlN4QjtLQUFBQTtBQWdDVCwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXZhdGFyLmpzPzZmMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RWRpdG9yRGVmYXVsdHMgfSBmcm9tICdAcHFpbmEvcGludHVyYSc7XG5pbXBvcnQgeyBwaW50dXJhIH0gZnJvbSAnQHBxaW5hL3BpbnR1cmEvcGludHVyYS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IFBpbnR1cmFFZGl0b3IsIFBpbnR1cmFFZGl0b3JNb2RhbCwgUGludHVyYUVkaXRvck92ZXJsYXkgfSBmcm9tICdAcHFpbmEvcmVhY3QtcGludHVyYSc7XG5cblxuaW1wb3J0IHtcbiAgICBsb2NhbGVfZW5fZ2IsXG4gICAgY3JlYXRlRGVmYXVsdEltYWdlUmVhZGVyLFxuICAgIGNyZWF0ZURlZmF1bHRJbWFnZVdyaXRlcixcbiAgICBjcmVhdGVEZWZhdWx0U2hhcGVQcmVwcm9jZXNzb3IsXG5cbiAgICBzZXRQbHVnaW5zLFxuICAgIHBsdWdpbl9jcm9wLFxuICAgIHBsdWdpbl9jcm9wX2xvY2FsZV9lbl9nYixcbiAgICBwbHVnaW5fZmluZXR1bmUsXG4gICAgcGx1Z2luX2ZpbmV0dW5lX2xvY2FsZV9lbl9nYixcbiAgICBwbHVnaW5fZmluZXR1bmVfZGVmYXVsdHMsXG4gICAgcGx1Z2luX2ZpbHRlcixcbiAgICBwbHVnaW5fZmlsdGVyX2xvY2FsZV9lbl9nYixcbiAgICBwbHVnaW5fZmlsdGVyX2RlZmF1bHRzLFxuICAgIHBsdWdpbl9hbm5vdGF0ZSxcbiAgICBwbHVnaW5fYW5ub3RhdGVfbG9jYWxlX2VuX2diLFxuICAgIG1hcmt1cF9lZGl0b3JfZGVmYXVsdHMsXG4gICAgbWFya3VwX2VkaXRvcl9sb2NhbGVfZW5fZ2IsXG59IGZyb20gJ0BwcWluYS9waW50dXJhJztcblxuc2V0UGx1Z2lucyhwbHVnaW5fY3JvcCwgcGx1Z2luX2ZpbmV0dW5lLCBwbHVnaW5fZmlsdGVyLCBwbHVnaW5fYW5ub3RhdGUpO1xuXG5cbmNvbnN0IGVkaXRvckRlZmF1bHRzID0ge1xuICAgIHV0aWxzOiBbXCJjcm9wXCIsIFwiZmluZXR1bmVcIiwgXCJmaWx0ZXJcIiwgXCJhbm5vdGF0ZVwiXSxcbiAgICBpbWFnZVJlYWRlcjogY3JlYXRlRGVmYXVsdEltYWdlUmVhZGVyKCksXG4gICAgaW1hZ2VXcml0ZXI6IGNyZWF0ZURlZmF1bHRJbWFnZVdyaXRlcigpLFxuICAgIHNoYXBlUHJlcHJvY2Vzc29yOiBjcmVhdGVEZWZhdWx0U2hhcGVQcmVwcm9jZXNzb3IoKSxcbiAgICAuLi5wbHVnaW5fZmluZXR1bmVfZGVmYXVsdHMsXG4gICAgLi4ucGx1Z2luX2ZpbHRlcl9kZWZhdWx0cyxcbiAgICAuLi5tYXJrdXBfZWRpdG9yX2RlZmF1bHRzLFxuICAgIGxvY2FsZToge1xuICAgICAgICAuLi5Mb2NhbGVDb3JlLFxuICAgICAgICAuLi5Mb2NhbGVDcm9wLFxuICAgICAgICAuLi5Mb2NhbGVGaW5ldHVuZSxcbiAgICAgICAgLi4uTG9jYWxlRmlsdGVyLFxuICAgICAgICAuLi5Mb2NhbGVBbm5vdGF0ZSxcbiAgICAgICAgLi4uTG9jYWxlTWFya3VwRWRpdG9yLFxuICAgIH0sXG59O1xuXG5mdW5jdGlvbiBQaW50dXJhSW1hZ2VXaWRnZXQoeyB2YWx1ZSwgb25DaGFuZ2UgfSkge1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4gICAgY29uc3QgZWRpdG9yQ29uZmlnID0gZ2V0RWRpdG9yRGVmYXVsdHMoKTtcblxuICAgIGNvbnN0IGhhbmRsZUVkaXRvckNoYW5nZSA9IChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBzZXRFZGl0b3JWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPkVkaXRvciBwaW50dXJhPC9wPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNzB2aFwiIH19PlxuICAgICAgICAgICAgICAgIDxQaW50dXJhRWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIHsuLi5lZGl0b3JEZWZhdWx0c31cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi4vaW1hZ2UuanBlZ1wifVxuICAgICAgICAgICAgICAgICAgICBvbkxvYWQ9eyhyZXMpID0+IGNvbnNvbGUubG9nKFwibG9hZCBpbWFnZVwiLCByZXMpfVxuICAgICAgICAgICAgICAgICAgICBvblByb2Nlc3M9eyh7IGRlc3QgfSkgPT4gc2V0UmVzdWx0KFVSTC5jcmVhdGVPYmplY3RVUkwoZGVzdCkpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgeyEhcmVzdWx0Lmxlbmd0aCAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIDxpbWcgc3JjPXtyZXN1bHR9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpbnR1cmFJbWFnZVdpZGdldDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0RWRpdG9yRGVmYXVsdHMiLCJwaW50dXJhIiwiUGludHVyYUVkaXRvciIsIlBpbnR1cmFFZGl0b3JNb2RhbCIsIlBpbnR1cmFFZGl0b3JPdmVybGF5IiwibG9jYWxlX2VuX2diIiwiY3JlYXRlRGVmYXVsdEltYWdlUmVhZGVyIiwiY3JlYXRlRGVmYXVsdEltYWdlV3JpdGVyIiwiY3JlYXRlRGVmYXVsdFNoYXBlUHJlcHJvY2Vzc29yIiwic2V0UGx1Z2lucyIsInBsdWdpbl9jcm9wIiwicGx1Z2luX2Nyb3BfbG9jYWxlX2VuX2diIiwicGx1Z2luX2ZpbmV0dW5lIiwicGx1Z2luX2ZpbmV0dW5lX2xvY2FsZV9lbl9nYiIsInBsdWdpbl9maW5ldHVuZV9kZWZhdWx0cyIsInBsdWdpbl9maWx0ZXIiLCJwbHVnaW5fZmlsdGVyX2xvY2FsZV9lbl9nYiIsInBsdWdpbl9maWx0ZXJfZGVmYXVsdHMiLCJwbHVnaW5fYW5ub3RhdGUiLCJwbHVnaW5fYW5ub3RhdGVfbG9jYWxlX2VuX2diIiwibWFya3VwX2VkaXRvcl9kZWZhdWx0cyIsIm1hcmt1cF9lZGl0b3JfbG9jYWxlX2VuX2diIiwiZWRpdG9yRGVmYXVsdHMiLCJ1dGlscyIsImltYWdlUmVhZGVyIiwiaW1hZ2VXcml0ZXIiLCJzaGFwZVByZXByb2Nlc3NvciIsImxvY2FsZSIsIkxvY2FsZUNvcmUiLCJMb2NhbGVDcm9wIiwiTG9jYWxlRmluZXR1bmUiLCJMb2NhbGVGaWx0ZXIiLCJMb2NhbGVBbm5vdGF0ZSIsIkxvY2FsZU1hcmt1cEVkaXRvciIsIlBpbnR1cmFJbWFnZVdpZGdldCIsInZhbHVlIiwib25DaGFuZ2UiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJlZGl0b3JDb25maWciLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJuZXdWYWx1ZSIsInNldEVkaXRvclZhbHVlIiwiZGl2IiwicCIsInN0eWxlIiwiaGVpZ2h0Iiwic3JjIiwib25Mb2FkIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm9uUHJvY2VzcyIsImRlc3QiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsZW5ndGgiLCJpbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Avatar.js\n"));

/***/ })

});