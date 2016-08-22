exports.id = 0;
exports.modules = {

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.requestMessage = requestMessage;
	exports.fetchMessage = fetchMessage;
	
	var _isomorphicFetch = __webpack_require__(21);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _actionTypes = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (false) {
		var _window$location = window.location;
		var protocol = _window$location.protocol;
		var hostname = _window$location.hostname;
		var port = _window$location.port;
	}
	
	function receiveMessage(message) {
		return {
			type: _actionTypes.MESSAGE_FETCH,
			message: message
		};
	}
	
	function requestMessage() {
		return {
			type: _actionTypes.MESSAGE_REQUEST
		};
	}
	
	function stopFetch() {
		return {
			type: _actionTypes.MESSAGE_STOP_FETCH
		};
	}
	
	function fetchMessage() {
		return function (dispatch) {
			return (0, _isomorphicFetch2.default)("http://localhost:8000/hello").then(function (response) {
				if (response.status >= 400) {
					dispatch(stopFetch());
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function (data) {
				var messages = [];
				messages.push(data.message);
				dispatch(receiveMessage(messages));
			});
		};
	}

/***/ }

};
//# sourceMappingURL=0.9485650aa00b9c1b0f33.hot-update.js.map