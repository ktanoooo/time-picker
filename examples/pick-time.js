/* eslint no-console:0 */

import 'rc-time-picker-date-fns-format-ja/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import TimePicker, { formatTime } from 'rc-time-picker-date-fns-format-ja';

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

function onChange(value) {
  console.log(value && formatTime(value, str));
}

ReactDom.render(
  <TimePicker
    style={{ width: 100 }}
    showSecond={showSecond}
    defaultValue={new Date()}
    className="xxx"
    onChange={onChange}
  />,
  document.getElementById('__react-content')
);
