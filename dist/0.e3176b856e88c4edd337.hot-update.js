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
	
	var _Foo = __webpack_require__(23);
	
	var _Foo2 = _interopRequireDefault(_Foo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * The React Routes for both the server and the client.
	 */
	module.exports = _react2.default.createElement(
		_reactRouter.Router,
		null,
		_react2.default.createElement(
			_reactRouter.Route,
			{ component: _App2.default },
			_react2.default.createElement(_reactRouter.Route, { component: _Foo2.default })
		)
	);

/***/ }

};
//# sourceMappingURL=0.e3176b856e88c4edd337.hot-update.js.map