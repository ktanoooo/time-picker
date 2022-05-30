import 'rc-time-picker-date-fns-format-ja/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import TimePicker from 'rc-time-picker-date-fns-format-ja';

ReactDom.render(
  <TimePicker defaultValue={new Date()} showSecond={false} minuteStep={15} />,
  document.getElementById('__react-content')
);
