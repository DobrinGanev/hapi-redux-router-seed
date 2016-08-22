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
	function stopFetching(state) {
		debugger;
		return Object.assign({}, state, {
			isLoading: false
		});
	}
	function message() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
		var action = arguments[1];
	
		debugger;
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
				stopFetching(state);
			default:
				return state;
		}
	}

/***/ }

};
//# sourceMappingURL=0.8de8f228c1acbae57e65.hot-update.js.map