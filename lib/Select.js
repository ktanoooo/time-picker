"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _raf = _interopRequireDefault(require("raf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scrollTo = function scrollTo(element, to, duration) {
  // jump to target if duration zero
  if (duration <= 0) {
    (0, _raf["default"])(function () {
      element.scrollTop = to;
    });
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  (0, _raf["default"])(function () {
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);

  var _super = _createSuper(Select);

  function Select() {
    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      active: false
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (value) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          type = _this$props.type;
      onSelect(type, value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (e) {
      var onMouseEnter = _this.props.onMouseEnter;

      _this.setState({
        active: true
      });

      onMouseEnter(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      _this.setState({
        active: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveList", function (node) {
      _this.list = node;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (e) {
      _this.setState({
        active: true
      });

      _this.props.onMouseEnter(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      _this.setState({
        active: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveList", function (node) {
      _this.list = node;
    });

    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // jump to selected option
      this.scrollToSelected(0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var selectedIndex = this.props.selectedIndex; // smooth scroll to selected option

      if (prevProps.selectedIndex !== selectedIndex) {
        this.scrollToSelected(120);
      }
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this2 = this;

      var _this$props2 = this.props,
          options = _this$props2.options,
          selectedIndex = _this$props2.selectedIndex,
          prefixCls = _this$props2.prefixCls,
          onEsc = _this$props2.onEsc;
      return options.map(function (item, index) {
        var _classNames;

        var cls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-select-option-selected"), selectedIndex === index), _defineProperty(_classNames, "".concat(prefixCls, "-select-option-disabled"), item.disabled), _classNames));
        var onClick = item.disabled ? undefined : function () {
          _this2.onSelect(item.value);
        };

        var onKeyDown = function onKeyDown(e) {
          if (e.keyCode === 13) onClick();else if (e.keyCode === 27) onEsc();
        };

        return /*#__PURE__*/_react["default"].createElement("li", {
          role: "button",
          onClick: onClick,
          className: cls,
          key: index,
          disabled: item.disabled,
          tabIndex: "0",
          onKeyDown: onKeyDown
        }, item.value);
      });
    }
  }, {
    key: "scrollToSelected",
    value: function scrollToSelected(duration) {
      // move to selected item
      var selectedIndex = this.props.selectedIndex;

      var select = _reactDom["default"].findDOMNode(this);

      var list = _reactDom["default"].findDOMNode(this.list);

      if (!list) {
        return;
      }

      var index = selectedIndex;

      if (index < 0) {
        index = 0;
      }

      var topOption = list.children[index];
      var to = topOption.offsetTop;
      scrollTo(select, to, duration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          options = _this$props3.options;
      var active = this.state.active;

      if (options.length === 0) {
        return null;
      }

      var cls = (0, _classnames["default"])("".concat(prefixCls, "-select"), _defineProperty({}, "".concat(prefixCls, "-select-active"), active));
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: cls,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        ref: this.saveList
      }, this.getOptions()));
    }
  }]);

  return Select;
}(_react.Component);

_defineProperty(Select, "propTypes", {
  prefixCls: _propTypes["default"].string,
  options: _propTypes["default"].array,
  selectedIndex: _propTypes["default"].number,
  type: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onEsc: _propTypes["default"].func
});

var _default = Select;
exports["default"] = _default;