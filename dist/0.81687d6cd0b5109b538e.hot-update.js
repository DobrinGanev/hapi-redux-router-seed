exports.id = 0;
exports.modules = {

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.fetchMessage = fetchMessage;
	
	var _isomorphicFetch = __webpack_require__(21);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _apiCaller = __webpack_require__(22);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	var _actionTypes = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function receiveMessage(message) {
		return {
			type: _actionTypes.MESSAGE_FETCH,
			messages: message,
			isLoading: true
		};
	}
	
	function stopFetch() {
		return {
			type: _actionTypes.MESSAGE_STOP_FETCH,
			isLoading: false
		};
	}
	
	function fetchMessage() {
		return function (dispatch) {
			return (0, _apiCaller2.default)('hello', {}).then(function (data) {
				var messages = [];
				messages.push(data.message);
				dispatch(receiveMessage(messages));
				dispatch(stopFetch());
			});
		};
	}

/***/ }

};
//# sourceMappingURL=0.81687d6cd0b5109b538e.hot-update.js.map