exports.id = 0;
exports.modules = {

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = function (initialState) {
		var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
			return f;
		})(_redux.createStore);
	
		var store = finalCreateStore(_reducers2.default, initialState);
		debugger;
		if (true) {
			// Enable Webpack hot module replacement for reducers
			module.hot.accept(12, function () {
				var nextRootReducer = __webpack_require__(12).default;
				store.replaceReducer(nextRootReducer);
			});
		}
	
		return store;
	};
	
	var _redux = __webpack_require__(13);
	
	var _reduxThunk = __webpack_require__(17);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(12);
	
	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }

};
//# sourceMappingURL=0.ba00ffba710990a12fc4.hot-update.js.map