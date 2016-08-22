exports.id = 0;
exports.modules = {

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(13);
	
	var _stargazers = __webpack_require__(14);
	
	var _stargazers2 = _interopRequireDefault(_stargazers);
	
	var _message = __webpack_require__(30);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _reactRouterRedux = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootReducer = (0, _redux.combineReducers)({
	  stargazers: _stargazers2.default,
	  message: _message2.default,
	  routing: _reactRouterRedux.routerReducer
	});
	
	exports.default = rootReducer;

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = stargazers;
	
	var _actionTypes = __webpack_require__(15);
	
	var initialState = {
		message: '',
		isLoading: false
	};
	
	function stargazers() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
		var action = arguments[1];
	
		switch (action.type) {
			case _actionTypes.MESSAGE_FETCH:
				return Object.assign({}, state, {
					message: state.message
				});
			case _actionTypes.MESSAGE_REQUEST:
				return Object.assign({}, state, {
					isLoading: true
				});
			case _actionTypes.MESSAGE_STOP_FETCH:
				return Object.assign({}, state, {
					isLoading: false
				});
			default:
				return state;
		}
	}

/***/ }

};
//# sourceMappingURL=0.761b661be43324755bce.hot-update.js.map