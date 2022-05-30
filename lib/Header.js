'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateUtils = require('./date-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header = function (_Component) {
  (0, _inherits3['default'])(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3['default'])(this, Header);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value,
        format = props.format,
        formatLocale = props.formatLocale;

    _this.state = {
      str: value && (0, _dateUtils.formatTime)(value, format, formatLocale) || '',
      invalid: false
    };
    return _this;
  }

  (0, _createClass3['default'])(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.focusOnOpen) {
        // Wait one frame for the panel to be positioned before focusing
        var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
        requestAnimationFrame(function () {
          _this2.refs.input.focus();
          _this2.refs.input.select();
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          format = nextProps.format,
          formatLocale = nextProps.formatLocale;

      this.setState({
        str: value && (0, _dateUtils.formatTime)(value, format, formatLocale) || '',
        invalid: false
      });
    }
  }, {
    key: 'getClearButton',
    value: function getClearButton() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          allowEmpty = _props.allowEmpty;

      if (!allowEmpty) {
        return null;
      }
      return _react2['default'].createElement('a', {
        className: prefixCls + '-clear-btn',
        role: 'button',
        title: this.props.clearText,
        onMouseDown: this.onClear
      });
    }
  }, {
    key: 'getProtoValue',
    value: function getProtoValue() {
      return this.props.value || this.props.defaultOpenValue;
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          placeholder = _props2.placeholder;
      var _state = this.state,
          invalid = _state.invalid,
          str = _state.str;

      var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
      return _react2['default'].createElement('input', {
        className: prefixCls + '-input  ' + invalidClass,
        ref: 'input',
        onKeyDown: this.onKeyDown,
        value: str,
        placeholder: placeholder,
        onChange: this.onInputChange
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var prefixCls = this.props.prefixCls;

      return _react2['default'].createElement(
        'div',
        { className: prefixCls + '-input-wrap' },
        this.getInput(),
        this.getClearButton()
      );
    }
  }]);
  return Header;
}(_react.Component);

Header.propTypes = {
  format: _propTypes2['default'].string,
  formatLocale: _propTypes2['default'].string,
  prefixCls: _propTypes2['default'].string,
  disabledDate: _propTypes2['default'].func,
  placeholder: _propTypes2['default'].string,
  clearText: _propTypes2['default'].string,
  value: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].string]),
  hourOptions: _propTypes2['default'].array,
  minuteOptions: _propTypes2['default'].array,
  secondOptions: _propTypes2['default'].array,
  disabledHours: _propTypes2['default'].func,
  disabledMinutes: _propTypes2['default'].func,
  disabledSeconds: _propTypes2['default'].func,
  onChange: _propTypes2['default'].func,
  onClear: _propTypes2['default'].func,
  onEsc: _propTypes2['default'].func,
  allowEmpty: _propTypes2['default'].bool,
  defaultOpenValue: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].string]),
  currentSelectPanel: _propTypes2['default'].string,
  focusOnOpen: _propTypes2['default'].bool,
  onKeyDown: _propTypes2['default'].func
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onInputChange = function (event) {
    var str = event.target.value;

    _this3.setState({ str: str });

    var _props3 = _this3.props,
        format = _props3.format,
        hourOptions = _props3.hourOptions,
        minuteOptions = _props3.minuteOptions,
        secondOptions = _props3.secondOptions,
        disabledHours = _props3.disabledHours,
        disabledMinutes = _props3.disabledMinutes,
        disabledSeconds = _props3.disabledSeconds,
        onChange = _props3.onChange,
        allowEmpty = _props3.allowEmpty;


    if (str) {
      var originalValue = _this3.props.value;
      var parsed = (0, _dateUtils.parseTime)(str, format);

      if (!(0, _dateUtils.isValidTime)(parsed)) {
        _this3.setState({ invalid: true });
        return;
      }

      var value = (0, _dateUtils.setHours)((0, _dateUtils.setMinutes)((0, _dateUtils.setSeconds)(_this3.getProtoValue(), (0, _dateUtils.getSeconds)(parsed)), (0, _dateUtils.getMinutes)(parsed)), (0, _dateUtils.getHours)(parsed));

      // if time value not allowed, response warning.
      if (hourOptions.indexOf((0, _dateUtils.getHours)(value)) < 0 || minuteOptions.indexOf((0, _dateUtils.getMinutes)(value)) < 0 || secondOptions.indexOf((0, _dateUtils.getSeconds)(value)) < 0) {
        _this3.setState({ invalid: true });
        return;
      }

      // if time value is disabled, response warning.
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes((0, _dateUtils.getHours)(value));
      var disabledSecondOptions = disabledSeconds((0, _dateUtils.getHours)(value), (0, _dateUtils.getMinutes)(value));
      if (disabledHourOptions && disabledHourOptions.indexOf((0, _dateUtils.getHours)(value)) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf((0, _dateUtils.getMinutes)(value)) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf((0, _dateUtils.getSeconds)(value)) >= 0) {
        _this3.setState({ invalid: true });
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
    } else if (allowEmpty) {
      onChange(null);
    } else {
      _this3.setState({ invalid: true });
      return;
    }

    _this3.setState({ invalid: false });
  };

  this.onKeyDown = function (e) {
    var _props4 = _this3.props,
        onEsc = _props4.onEsc,
        onKeyDown = _props4.onKeyDown;

    if (e.keyCode === 27) {
      onEsc();
    }
    onKeyDown(e);
  };

  this.onClear = function () {
    _this3.setState({ str: '' });
    _this3.props.onClear();
  };
};

exports['default'] = Header;
module.exports = exports['default'];