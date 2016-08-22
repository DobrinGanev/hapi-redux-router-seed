exports.id = 0;
exports.modules = {

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(10);
	
	var _App = __webpack_require__(18);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Foo = __webpack_require__(25);
	
	var _Foo2 = _interopRequireDefault(_Foo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Home from './components/Home';
	// import About from './components/About';
	
	/**
	 * The React Routes for both the server and the client.
	 */
	
	// import StargazersContainer from './containers/StargazersContainer';
	module.exports = _react2.default.createElement(
		_reactRouter.Router,
		null,
		_react2.default.createElement(
			_reactRouter.Route,
			{ component: _App2.default },
			_react2.default.createElement(_reactRouter.Route, { component: Foo })
		)
	);

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Foo;
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Foo() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'I am Foo!'
	  );
	}

/***/ }

};
//# sourceMappingURL=0.56ba45b47a89afb16ff2.hot-update.js.map