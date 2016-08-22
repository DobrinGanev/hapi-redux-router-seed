exports.id = 0;
exports.modules = {

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(21);
	
	var _User = __webpack_require__(29);
	
	var _User2 = _interopRequireDefault(_User);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Home = function Home(_ref) {
		var styles = _ref.styles;
		var stargazers = _ref.stargazers;
		var message = _ref.message;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h3',
				null,
				'message[0]'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'Redux'
					),
					' for managing app state'
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'Redux DevTools'
					),
					' for state time travelling'
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'React Transform'
					),
					' for instant client updates'
				),
				_react2.default.createElement(
					'li',
					null,
					'Fully automated with npm run scripts'
				),
				_react2.default.createElement(
					'li',
					null,
					'Server hot reloads with ',
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'piping'
					),
					' and Hapi.js'
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'Webpack'
					),
					' for watch + production builds'
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'React'
					),
					' and ',
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'React Router'
					),
					' on the client and server'
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'Babel'
					),
					' automatically compiles ES6 + ES7'
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'span',
						{ style: styles.feature },
						'Radium'
					),
					' for advanced inline styling'
				)
			),
			_react2.default.createElement(
				'p',
				null,
				'In short – ',
				_react2.default.createElement(
					'em',
					null,
					'an excellent choice'
				),
				'. Ready to start',
				'?'
			),
			_react2.default.createElement(
				'h3',
				null,
				'Community'
			),
			stargazers.map(function (user, key) {
				return _react2.default.createElement(_User2.default, { key: key, user: user, styles: styles });
			})
		);
	};
	
	/**
	 * Connect to Redux store.
	 */
	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			stargazers: state.stargazers.users,
			message: state.message
		};
	})(Home);

/***/ }

};
//# sourceMappingURL=0.2c6812f4f51d1160cbe6.hot-update.js.map