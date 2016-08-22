exports.id = 0;
exports.modules = {

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.requestUsers = requestUsers;
	exports.fetchUsers = fetchUsers;
	exports.helloWorld = helloWorld;
	
	var _isomorphicFetch = __webpack_require__(23);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _actionTypes = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var githubApi = "https://api.github.com";
	if (false) {
		var _window$location = window.location;
		var protocol = _window$location.protocol;
		var hostname = _window$location.hostname;
		var port = _window$location.port;
	
		githubApi = protocol + '//' + hostname + ':' + port + '/api/github';
	}
	
	function receiveUsers(fetchedStargazers) {
		return {
			type: _actionTypes.STARGAZERS_FETCH,
			fetchedStargazers: fetchedStargazers
		};
	}
	
	function requestUsers() {
		return {
			type: _actionTypes.STARGAZERS_REQUEST
		};
	}
	
	function stopFetching() {
		return {
			type: _actionTypes.STARGAZERS_STOP_FETCH
		};
	}
	
	function receiveMessage(message) {
		return {
			type: MESSAGE_FETCH,
			message: message
		};
	}
	
	function fetchUsers(nextPage, pagesToFetch) {
		return function (dispatch) {
			return (0, _isomorphicFetch2.default)(githubApi + "/repos/Luandro/hapi-universal-redux/stargazers" + ('?per_page=10&page=' + nextPage)).then(function (response) {
				return response.json();
			}).then(function (body) {
				if (!body || !body.length) {
					dispatch(stopFetching());
					return;
				}
				var fetchedStargazers = body.map(function (_ref) {
					var id = _ref.id;
					var login = _ref.login;
					return { id: id, login: login };
				});
				dispatch(receiveUsers(fetchedStargazers));
			}).catch(function (error) {
				console.error(error);
			});
		};
	}
	
	function helloWorld() {
		return function (dispatch) {
			return (0, _isomorphicFetch2.default)("http://localhost:8000/hello").then(function (response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function (data) {
				dispatch(receiveUsers(fetchedStargazers));
			});
		};
	}

/***/ }

};
//# sourceMappingURL=0.33aa16fef6bdd6f2c8d3.hot-update.js.map