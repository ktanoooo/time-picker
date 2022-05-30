import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isValidTime, formatTime, parseTime, getHours, setHours, isSameHour, getMinutes, setMinutes, isSameMinute, getSeconds, setSeconds, isSameSecond } from './date-utils';

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value,
        format = props.format,
        formatLocale = props.formatLocale;

    _this.state = {
      str: value && formatTime(value, format, formatLocale) || '',
      invalid: false
    };
    return _this;
  }

  _createClass(Header, [{
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
        str: value && formatTime(value, format, formatLocale) || '',
        invalid: false
      });
    }
  }, {
    key: 'getClearButton',
    value: function getClearButton() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          allowEmpty = _props.allowEmpty,
          clearIcon = _props.clearIcon;

      if (!allowEmpty) {
        return null;
      }
      return React.createElement(
        'a',
        {
          role: 'button',
          className: prefixCls + '-clear-btn',
          title: this.props.clearText,
          onMouseDown: this.onClear
        },
        clearIcon || React.createElement('i', { className: prefixCls + '-clear-btn-icon' })
      );
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
      return React.createElement('input', {
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

      return React.createElement(
        'div',
        { className: prefixCls + '-input-wrap' },
        this.getInput(),
        this.getClearButton()
      );
    }
  }]);

  return Header;
}(Component);

Header.propTypes = {
  format: PropTypes.string,
  formatLocale: PropTypes.string,
  prefixCls: PropTypes.string,
  disabledDate: PropTypes.func,
  placeholder: PropTypes.string,
  clearText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  hourOptions: PropTypes.array,
  minuteOptions: PropTypes.array,
  secondOptions: PropTypes.array,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onEsc: PropTypes.func,
  allowEmpty: PropTypes.bool,
  defaultOpenValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  currentSelectPanel: PropTypes.string,
  focusOnOpen: PropTypes.bool,
  onKeyDown: PropTypes.func,
  clearIcon: PropTypes.node
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
      var parsed = parseTime(str, format);

      if (!isValidTime(parsed)) {
        _this3.setState({ invalid: true });
        return;
      }

      var value = setHours(setMinutes(setSeconds(_this3.getProtoValue(), getSeconds(parsed)), getMinutes(parsed)), getHours(parsed));

      // if time value not allowed, response warning.
      if (hourOptions.indexOf(getHours(value)) < 0 || minuteOptions.indexOf(getMinutes(value)) < 0 || secondOptions.indexOf(getSeconds(value)) < 0) {
        _this3.setState({ invalid: true });
        return;
      }

      // if time value is disabled, response warning.
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(getHours(value));
      var disabledSecondOptions = disabledSeconds(getHours(value), getMinutes(value));
      if (disabledHourOptions && disabledHourOptions.indexOf(getHours(value)) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(getMinutes(value)) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(getSeconds(value)) >= 0) {
        _this3.setState({ invalid: true });
        return;
      }

      if (originalValue) {
        if (!isSameHour(originalValue, value) || !isSameMinute(originalValue, value) || !isSameSecond(originalValue, value)) {
          // keep other fields for rc-calendar
          var changedValue = setHours(setMinutes(setSeconds(originalValue, getSeconds(value)), getMinutes(value)), getHours(value));
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

export default Header;