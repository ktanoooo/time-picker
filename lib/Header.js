"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dateUtils = require("./date-utils");

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

var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var str = event.target.value;

      _this.setState({
        str: str
      });

      var _this$props = _this.props,
          format = _this$props.format,
          hourOptions = _this$props.hourOptions,
          minuteOptions = _this$props.minuteOptions,
          secondOptions = _this$props.secondOptions,
          disabledHours = _this$props.disabledHours,
          disabledMinutes = _this$props.disabledMinutes,
          disabledSeconds = _this$props.disabledSeconds,
          onChange = _this$props.onChange;

      if (str) {
        var originalValue = _this.props.value;
        var parsed = (0, _dateUtils.parseTime)(str, format);

        if (!(0, _dateUtils.isValidTime)(parsed)) {
          _this.setState({
            invalid: true
          });

          return;
        }

        var value = (0, _dateUtils.setHours)((0, _dateUtils.setMinutes)((0, _dateUtils.setSeconds)(_this.getProtoValue(), (0, _dateUtils.getSeconds)(parsed)), (0, _dateUtils.getMinutes)(parsed)), (0, _dateUtils.getHours)(parsed)); // if time value not allowed, response warning.

        if (hourOptions.indexOf((0, _dateUtils.getHours)(value)) < 0 || minuteOptions.indexOf((0, _dateUtils.getMinutes)(value)) < 0 || secondOptions.indexOf((0, _dateUtils.getSeconds)(value)) < 0) {
          _this.setState({
            invalid: true
          });

          return;
        } // if time value is disabled, response warning.


        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes((0, _dateUtils.getHours)(value));
        var disabledSecondOptions = disabledSeconds((0, _dateUtils.getHours)(value), (0, _dateUtils.getMinutes)(value));

        if (disabledHourOptions && disabledHourOptions.indexOf((0, _dateUtils.getHours)(value)) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf((0, _dateUtils.getMinutes)(value)) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf((0, _dateUtils.getSeconds)(value)) >= 0) {
          _this.setState({
            invalid: true
          });

          return;
        }

        if (originalValue) {
          if (!(0, _dateUtils.isSameHour)(originalValue, value) || !(0, _dateUtils.isSameMinute)(originalValue, value) || !(0, _dateUtils.isSameSecond)(originalValue, value)) {
            // keep other fields for rc-calendar
            var changedValue = (0, _dateUtils.setHours)((0, _dateUtils.setMinutes)((0, _dateUtils.setSeconds)(originalValue, (0, _dateUtils.getSeconds)(value)), (0, _dateUtils.getMinutes)(value)), (0, _dateUtils.getHours)(value));
            onChange(changedValue);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else {
        onChange(null);
      }

      _this.setState({
        invalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var _this$props2 = _this.props,
          onEsc = _this$props2.onEsc,
          onKeyDown = _this$props2.onKeyDown;

      if (e.keyCode === 27) {
        onEsc();
      }

      onKeyDown(e);
    });

    var _value = props.value,
        _format = props.format,
        formatLocale = props.formatLocale;
    _this.state = {
      str: _value && (0, _dateUtils.formatTime)(_value, _format, formatLocale) || '',
      invalid: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var focusOnOpen = this.props.focusOnOpen;

      if (focusOnOpen) {
        // Wait one frame for the panel to be positioned before focusing
        var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
        requestAnimationFrame(function () {
          _this2.refInput.focus();

          _this2.refInput.select();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          value = _this$props3.value,
          format = _this$props3.format,
          formatLocale = _this$props3.formatLocale;

      if (value !== prevProps.value) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          str: value && (0, _dateUtils.formatTime)(value, format, formatLocale) || '',
          invalid: false
        });
      }
    }
  }, {
    key: "getProtoValue",
    value: function getProtoValue() {
      var _this$props4 = this.props,
          value = _this$props4.value,
          defaultOpenValue = _this$props4.defaultOpenValue;
      return value || defaultOpenValue;
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var _this3 = this;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          placeholder = _this$props5.placeholder,
          inputReadOnly = _this$props5.inputReadOnly;
      var _this$state = this.state,
          invalid = _this$state.invalid,
          str = _this$state.str;
      var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
      return /*#__PURE__*/_react["default"].createElement("input", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-input"), invalidClass),
        ref: function ref(_ref) {
          _this3.refInput = _ref;
        },
        onKeyDown: this.onKeyDown,
        value: str,
        placeholder: placeholder,
        onChange: this.onInputChange,
        readOnly: !!inputReadOnly
      });
    }
  }, {
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-input-wrap")
      }, this.getInput());
    }
  }]);

  return Header;
}(_react.Component);

_defineProperty(Header, "propTypes", {
  format: _propTypes["default"].string,
  formatLocale: _propTypes["default"].string,
  prefixCls: _propTypes["default"].string,
  disabledDate: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  clearText: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  inputReadOnly: _propTypes["default"].bool,
  hourOptions: _propTypes["default"].array,
  minuteOptions: _propTypes["default"].array,
  secondOptions: _propTypes["default"].array,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  disabledSeconds: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onEsc: _propTypes["default"].func,
  defaultOpenValue: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  currentSelectPanel: _propTypes["default"].string,
  focusOnOpen: _propTypes["default"].bool,
  onKeyDown: _propTypes["default"].func,
  clearIcon: _propTypes["default"].node
});

_defineProperty(Header, "defaultProps", {
  inputReadOnly: false
});

var _default = Header;
exports["default"] = _default;