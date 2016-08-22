exports.id = 0;
exports.modules = {

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _isomorphicFetch = __webpack_require__(24);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _reactRedux = __webpack_require__(21);
	
	var _StargazersActions = __webpack_require__(25);
	
	var _messageActions = __webpack_require__(26);
	
	var _radium = __webpack_require__(20);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StargazersContainer = function (_Component) {
	  _inherits(StargazersContainer, _Component);
	
	  function StargazersContainer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, StargazersContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(StargazersContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentWillMount = function () {
	      /**
	       * Start loading.
	       */
	      _this.props.dispatch((0, _StargazersActions.requestUsers)());
	
	      /**
	       * Start loading message.
	       */
	      _this.props.dispatch((0, _messageActions.requestMessage)());
	      /**
	       * Start recursive loading.
	       */
	      _this.recursiveFetch();
	    }, _this.componentDidUpdate = function () {
	      var _this$props = _this.props;
	      var stargazers = _this$props.stargazers;
	      var dispatch = _this$props.dispatch;
	      /**
	       * Recursive fetch everytime component updates.
	       */
	
	      if (stargazers.nextPage > 1 && stargazers.pagesToFetch > 0 && stargazers.isLoading === true) {
	        _this.recursiveFetch();
	      }
	    }, _this.componentDidMount = function () {
	      var dispatch = _this.props.dispatch;
	
	      dispatch((0, _messageActions.helloWorld)());
	    }, _this.recursiveFetch = function () {
	      var _this$props2 = _this.props;
	      var stargazers = _this$props2.stargazers;
	      var dispatch = _this$props2.dispatch;
	
	      dispatch((0, _StargazersActions.fetchUsers)(stargazers.nextPage, stargazers.pagesToFetch));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	   * Function that dispatches the fetch action.
	   */
	
	
	  _createClass(StargazersContainer, [{
	    key: 'render',
	
	
	    /**
	     * Render child routes and Radium's Style component, for css-like global styles.
	     */
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_radium.Style, { rules: {
	            'body, html': {
	              margin: 0,
	              padding: 0
	            },
	            '.active': {
	              fontWeight: 900
	            }
	
	          } }),
	        this.props.children
	      );
	    }
	  }]);
	
	  return StargazersContainer;
	}(_react.Component);
	
	/**
	 * Radium connect.
	 */
	
	
	StargazersContainer = (0, _radium2.default)(StargazersContainer);
	
	/**
	 * Redux connect.
	 */
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    stargazers: state.stargazers,
	    messages: state.messages };
	})(StargazersContainer);

/***/ }

};
//# sourceMappingURL=0.8a078a256315a4d1dcae.hot-update.js.map