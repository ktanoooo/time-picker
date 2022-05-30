/* eslint no-console:0 */

import 'rc-time-picker-date-fns-format-ja/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import TimePicker, { formatTime } from 'rc-time-picker-date-fns-format-ja';

const format = 'h:mm a';

const now = new Date();

function onChange(value) {
  console.log(value && formatTime(value, format));
}

ReactDom.render(
  <TimePicker
    showSecond={false}
    defaultValue={now}
    className="xxx"
    onChange={onChange}
    format={format}
    use12Hours
  />,
  document.getElementById('__react-content')
);
