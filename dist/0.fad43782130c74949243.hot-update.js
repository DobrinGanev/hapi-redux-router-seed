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
//# sourceMappingURL=0.fad43782130c74949243.hot-update.js.map