import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  isValidTime,
  formatTime,
  parseTime,
  getHours,
  setHours,
  isSameHour,
  getMinutes,
  setMinutes,
  isSameMinute,
  getSeconds,
  setSeconds,
  isSameSecond,
} from './date-utils';

class Header extends Component {
  static propTypes = {
    format: PropTypes.string,
    formatLocale: PropTypes.string,
    prefixCls: PropTypes.string,
    disabledDate: PropTypes.func,
    placeholder: PropTypes.string,
    clearText: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    inputReadOnly: PropTypes.bool,
    hourOptions: PropTypes.array,
    minuteOptions: PropTypes.array,
    secondOptions: PropTypes.array,
    disabledHours: PropTypes.func,
    disabledMinutes: PropTypes.func,
    disabledSeconds: PropTypes.func,
    onChange: PropTypes.func,
    onEsc: PropTypes.func,
    defaultOpenValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    currentSelectPanel: PropTypes.string,
    focusOnOpen: PropTypes.bool,
    onKeyDown: PropTypes.func,
    clearIcon: PropTypes.node,
  };

  static defaultProps = {
    inputReadOnly: false,
  };

  constructor(props) {
    super(props);
    const { value, format, formatLocale } = props;
    this.state = {
      str: (value && formatTime(value, format, formatLocale)) || '',
      invalid: false,
    };
  }

  componentDidMount() {
    const { focusOnOpen } = this.props;
    if (focusOnOpen) {
      // Wait one frame for the panel to be positioned before focusing
      const requestAnimationFrame =
        window.requestAnimationFrame || window.setTimeout;
      requestAnimationFrame(() => {
        this.refInput.focus();
        this.refInput.select();
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { value, format, formatLocale } = this.props;
    if (value !== prevProps.value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        str: (value && formatTime(value, format, formatLocale)) || '',
        invalid: false,
      });
    }
  }

  onInputChange = (event) => {
    const str = event.target.value;

    this.setState({ str });

    const {
      format,
      hourOptions,
      minuteOptions,
      secondOptions,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      onChange,
    } = this.props;

    if (str) {
      const { value: originalValue } = this.props;
      const parsed = parseTime(str, format);

      if (!isValidTime(parsed)) {
        this.setState({ invalid: true });
        return;
      }

      const value = setHours(
        setMinutes(
          setSeconds(this.getProtoValue(), getSeconds(parsed)),
          getMinutes(parsed)
        ),
        getHours(parsed)
      );

      // if time value not allowed, response warning.
      if (
        hourOptions.indexOf(getHours(value)) < 0 ||
        minuteOptions.indexOf(getMinutes(value)) < 0 ||
        secondOptions.indexOf(getSeconds(value)) < 0
      ) {
        this.setState({ invalid: true });
        return;
      }

      // if time value is disabled, response warning.
      const disabledHourOptions = disabledHours();
      const disabledMinuteOptions = disabledMinutes(getHours(value));
      const disabledSecondOptions = disabledSeconds(
        getHours(value),
        getMinutes(value)
      );
      if (
        (disabledHourOptions &&
          disabledHourOptions.indexOf(getHours(value)) >= 0) ||
        (disabledMinuteOptions &&
          disabledMinuteOptions.indexOf(getMinutes(value)) >= 0) ||
        (disabledSecondOptions &&
          disabledSecondOptions.indexOf(getSeconds(value)) >= 0)
      ) {
        this.setState({ invalid: true });
        return;
      }

      if (originalValue) {
        if (
          !isSameHour(originalValue, value) ||
          !isSameMinute(originalValue, value) ||
          !isSameSecond(originalValue, value)
        ) {
          // keep other fields for rc-calendar
          const changedValue = setHours(
            setMinutes(
              setSeconds(originalValue, getSeconds(value)),
              getMinutes(value)
            ),
            getHours(value)
          );
          onChange(changedValue);
        }
      } else if (originalValue !== value) {
        onChange(value);
      }
    } else {
      onChange(null);
    }

    this.setState({ invalid: false });
  };

  onKeyDown = (e) => {
    const { onEsc, onKeyDown } = this.props;
    if (e.keyCode === 27) {
      onEsc();
    }
    onKeyDown(e);
  };

  getProtoValue() {
    const { value, defaultOpenValue } = this.props;
    return value || defaultOpenValue;
  }

  getInput() {
    const { prefixCls, placeholder, inputReadOnly } = this.props;
    const { invalid, str } = this.state;
    const invalidClass = invalid ? `${prefixCls}-input-invalid` : '';
    return (
      <input
        className={classNames(`${prefixCls}-input`, invalidClass)}
        ref={(ref) => {
          this.refInput = ref;
        }}
        onKeyDown={this.onKeyDown}
        value={str}
        placeholder={placeholder}
        onChange={this.onInputChange}
        readOnly={!!inputReadOnly}
      />
    );
  }

  render() {
    const { prefixCls } = this.props;
    return <div className={`${prefixCls}-input-wrap`}>{this.getInput()}</div>;
  }
}

export default Header;
