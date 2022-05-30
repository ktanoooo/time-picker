import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { parseTime, getHours, getMinutes } from './date-utils';

import Header from './Header';
import Combobox from './Combobox';

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var arr = [];
  for (var value = 0; value < length; value += step) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    _classCallCheck(this, Panel);

    var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

    _this.onChange = function (newValue) {
      _this.setState({ value: newValue });
      _this.props.onChange(newValue);
    };

    _this.onCurrentSelectPanelChange = function (currentSelectPanel) {
      _this.setState({ currentSelectPanel: currentSelectPanel });
    };

    _this.state = {
      value: parseTime(props.value),
      selectionRange: []
    };
    return _this;
  }

  _createClass(Panel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;
      if (value) {
        this.setState({ value: value });
      }
    }
  }, {
    key: 'close',


    // https://github.com/ant-design/ant-design/issues/5829
    value: function close() {
      this.props.onEsc();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          placeholder = _props.placeholder,
          disabledHours = _props.disabledHours,
          disabledMinutes = _props.disabledMinutes,
          disabledSeconds = _props.disabledSeconds,
          hideDisabledOptions = _props.hideDisabledOptions,
          allowEmpty = _props.allowEmpty,
          showHour = _props.showHour,
          showMinute = _props.showMinute,
          showSecond = _props.showSecond,
          format = _props.format,
          formatLocale = _props.formatLocale,
          defaultOpenValue = _props.defaultOpenValue,
          clearText = _props.clearText,
          onEsc = _props.onEsc,
          addon = _props.addon,
          use12Hours = _props.use12Hours,
          onClear = _props.onClear,
          focusOnOpen = _props.focusOnOpen,
          onKeyDown = _props.onKeyDown,
          hourStep = _props.hourStep,
          minuteStep = _props.minuteStep,
          secondStep = _props.secondStep;
      var _state = this.state,
          value = _state.value,
          currentSelectPanel = _state.currentSelectPanel;


      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value ? getHours(value) : null);
      var disabledSecondOptions = disabledSeconds(value ? getHours(value) : null, value ? getMinutes(value) : null);

      var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
      var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
      var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);

      return React.createElement(
        'div',
        {
          className: classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + '-inner', true), _defineProperty(_classNames, className, !!className), _classNames))
        },
        React.createElement(Header, {
          clearText: clearText,
          prefixCls: prefixCls,
          defaultOpenValue: defaultOpenValue,
          value: value,
          currentSelectPanel: currentSelectPanel,
          onEsc: onEsc,
          format: format,
          formatLocale: formatLocale,
          placeholder: placeholder,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          onChange: this.onChange,
          onClear: onClear,
          allowEmpty: allowEmpty,
          focusOnOpen: focusOnOpen,
          onKeyDown: onKeyDown
        }),
        React.createElement(Combobox, {
          prefixCls: prefixCls,
          value: value,
          defaultOpenValue: defaultOpenValue,
          format: format,
          onChange: this.onChange,
          showHour: showHour,
          showMinute: showMinute,
          showSecond: showSecond,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
          use12Hours: use12Hours
        }),
        addon(this)
      );
    }
  }]);

  return Panel;
}(Component);

Panel.propTypes = {
  clearText: PropTypes.string,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  defaultOpenValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  placeholder: PropTypes.string,
  format: PropTypes.string,
  formatLocale: PropTypes.string,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  hideDisabledOptions: PropTypes.bool,
  onChange: PropTypes.func,
  onEsc: PropTypes.func,
  allowEmpty: PropTypes.bool,
  showHour: PropTypes.bool,
  showMinute: PropTypes.bool,
  showSecond: PropTypes.bool,
  onClear: PropTypes.func,
  use12Hours: PropTypes.bool,
  hourStep: PropTypes.number,
  minuteStep: PropTypes.number,
  secondStep: PropTypes.number,
  addon: PropTypes.func,
  focusOnOpen: PropTypes.bool,
  onKeyDown: PropTypes.func
};
Panel.defaultProps = {
  prefixCls: 'rc-time-picker-panel',
  onChange: noop,
  onClear: noop,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  defaultOpenValue: new Date(),
  use12Hours: false,
  addon: noop,
  onKeyDown: noop
};


export default Panel;