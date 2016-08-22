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
		isLoading: false
	};
	
	function message() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
		var action = arguments[1];
	
		switch (action.type) {
			case _actionTypes.MESSAGE_FETCH:
				return Object.assign({}, state, {
					messages: state.messages
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
//# sourceMappingURL=0.9d3b210394d7b543cf73.hot-update.js.map