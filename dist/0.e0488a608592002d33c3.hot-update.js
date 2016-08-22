exports.id = 0;
exports.modules = {

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = stargazers;
	
	var _actionTypes = __webpack_require__(15);
	
	var initialState = {
		message: [],
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
//# sourceMappingURL=0.e0488a608592002d33c3.hot-update.js.map