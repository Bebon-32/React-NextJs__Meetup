webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_AL_RD_Desktop_Learning_React_NextJs_P2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AL_RD_Desktop_Learning_React_NextJs_P2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_AL_RD_Desktop_Learning_React_NextJs_P2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_AL_RD_Desktop_Learning_React_NextJs_P2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");




var _jsxFileName = "C:\\Users\\AL-RD\\Desktop\\Learning React\\NextJs P2\\pages\\new-meetup\\index.js",
    _this = undefined;

// our-domain.com/new-meetup


var NewMeetupPage = /*#__PURE__*/function () {
  var _ref = Object(C_Users_AL_RD_Desktop_Learning_React_NextJs_P2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AL_RD_Desktop_Learning_React_NextJs_P2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, data;
    return C_Users_AL_RD_Desktop_Learning_React_NextJs_P2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/api/new-meetup', {
              method: 'POST',
              body: JSON.stringify(enteredMeetupData),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            console.log(data);
            router.push('/');
            return _context.abrupt("return", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
              onAddMeetup: addMeetupHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 10
            }, _this));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function NewMeetupPage() {
    return _ref.apply(this, arguments);
  };
}();

_c = NewMeetupPage;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

var _c;

$RefreshReg$(_c, "NewMeetupPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVudGVyZWRNZWV0dXBEYXRhIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicHVzaCIsImFkZE1lZXR1cEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYTtBQUFBLG9UQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0lDLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUM1Q0Msb0JBQU0sRUFBRSxNQURvQztBQUU1Q0Msa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVDLGlCQUFmLENBRnNDO0FBRzVDQyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCO0FBRFQ7QUFIbUMsYUFBcEIsQ0FEVDs7QUFBQTtBQUNiQyxvQkFEYTtBQUFBO0FBQUEsbUJBU0VBLFFBQVEsQ0FBQ0MsSUFBVCxFQVRGOztBQUFBO0FBU1hDLGdCQVRXO0FBV2pCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQUcsa0JBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFiaUIsMERBZWQscUVBQUMseUVBQUQ7QUFBZSx5QkFBVyxFQUFFQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUo7O0FBQUEsa0JBQWJmLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7O0tBQU1BLGE7QUFrQlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuOTE4YmYxOTBjYjAzOGZiZjYzN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG91ci1kb21haW4uY29tL25ldy1tZWV0dXBcclxuaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XHJcblxyXG5jb25zdCBOZXdNZWV0dXBQYWdlID0gIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbmV3LW1lZXR1cCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRlcmVkTWVldHVwRGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgXHJcbiAgcmV0dXJuIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=