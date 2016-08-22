exports.id = 0;
exports.modules = {

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(19);
	
	var _messageActions = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      this.props.dispatch((0, _messageActions.fetchMessage)());
	      console.log(this.props.isLoading);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isLoading = this.props.isLoading;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          isLoading
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	App.propTypes = {
	  dispatch: _react.PropTypes.func.isRequired,
	  messages: _react.PropTypes.array.isRequired,
	  isLoading: _react.PropTypes.bool.isRequired
	};
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  var _isLoading$messages = {
	    isLoading: store.message.isLoading,
	    messages: store.message.messages
	  };
	  var messages = _isLoading$messages.messages;
	  var isLoading = _isLoading$messages.isLoading;
	
	
	  return {
	    messages: messages,
	    isLoading: isLoading
	
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }

};
//# sourceMappingURL=0.e48f1bbe08787f1c67da.hot-update.js.map