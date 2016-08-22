exports.id = 0;
exports.modules = {

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.requestMessage = requestMessage;
	exports.helloWorld = helloWorld;
	
	var _isomorphicFetch = __webpack_require__(23);
	
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
		alert();
		return {
			type: _actionTypes.MESSAGE_REQUEST
		};
	}
	
	function stopFetching() {
		return {
			type: _actionTypes.MESSAGE_STOP_FETCH
		};
	}
	
	function helloWorld() {
		return function (dispatch) {
			return (0, _isomorphicFetch2.default)("http://localhost:8000/hello").then(function (response) {
				if (response.status >= 400) {
					dispatch(stopFetching());
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function (data) {
				console.log(data);
				dispatch(receiveMessage(data));
			});
		};
	}

/***/ }

};
//# sourceMappingURL=0.9078e3bdb1e0fe972ae1.hot-update.js.map