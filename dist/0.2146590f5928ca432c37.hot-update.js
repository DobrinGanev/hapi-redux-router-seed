exports.id = 0;
exports.modules = {

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = message;
	
	var _actionTypes = __webpack_require__(15);
	
	var initialState = {
		messages: [{
			data: "Hello"
		}],
		isLoading: true
	};
	
	function message() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
		var action = arguments[1];
	
		switch (action.type) {
			case _actionTypes.MESSAGE_FETCH:
				return Object.assign({}, state, {
					messages: action.messages
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
//# sourceMappingURL=0.2146590f5928ca432c37.hot-update.js.map