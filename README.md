# TimePicker

React TimePicker

`date-fns`ベースのtimepickerをforkして、`午前, 午後`表記に対応したもの。
`format="a h:mm"`, `formatLocale="ja"`を付与すればいい。

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-time-picker-date-fns-format-ja.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-time-picker-date-fns-format-ja
[node-image]: https://img.shields.io/badge/node.js-%3E=_4.0.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-time-picker-date-fns-format-ja.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-time-picker-date-fns-format-ja

example
--------
Usage
-----

```
import TimePicker from 'rc-time-picker-date-fns-format-ja';
import ReactDOM from 'react-dom';
import 'rc-time-picker-date-fns-format-ja/assets/index.css';
ReactDOM.render(<TimePicker />, container);
```

change from "AM, PM" to "午前, 午後".

```
import TimePicker from 'rc-time-picker-date-fns-format-ja';
import ReactDOM from 'react-dom';
import 'rc-time-picker-date-fns-format-ja/assets/index.css';
ReactDOM.render(<TimePicker format="a h:mm" formatLocale="ja" />, container);
```

API
---

### TimePicker

| Name                    | Type                              | Default | Description |
|-------------------------|-----------------------------------|---------|-------------|
| prefixCls               | String                            | 'rc-time-picker-date-fns-format-ja' | prefixCls of this component |
| clearText               | String                            | 'clear' | clear tooltip of icon |
| disabled                | Boolean                           | false   | whether picker is disabled |
| allowEmpty              | Boolean                           | true | allow clearing text |
| open                    | Boolean                           | false | current open state of picker. controlled prop |
| defaultValue            | Date                              | null | default initial value |
| defaultOpenValue        | Date                              | new Date | default open panel value, used to set utcOffset,locale if value/defaultValue absent |
| value                   | Date                              | null | current value |
| placeholder             | String                            | '' | time input's placeholder |
| className               | String                            | '' | time picker className |
| id                      | String                            | '' | time picker id |
| popupClassName          | String                            | '' | time panel className |
| popupStyle              | object                            | {} | customize popup style
| showHour                | Boolean                           | true | whether show hour | |
| showMinute              | Boolean                           | true | whether show minute |
| showSecond              | Boolean                           | true | whether show second |
| format                  | String                            | - | date-fns format |
| formatLocale            | String                            | '' | ja |
| disabledHours           | Function                          | - | disabled hour options |
| disabledMinutes         | Function                          | - | disabled minute options |
| disabledSeconds         | Function                          | - | disabled second options |
| use12Hours              | Boolean                           | false | 12 hours display mode |
| hideDisabledOptions     | Boolean                           | false | whether hide disabled options |
| onChange                | Function                          | null | called when select a different value |
| onAmPmChange            | Function                          | null | called when select an am/pm value |
| addon                   | Function                          | - | called from timepicker panel to render some addon to its bottom, like an OK button. Receives panel instance as parameter, to be able to close it like `panel.close()`.|
| placement               | String                            | bottomLeft | one of ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] |
| transitionName          | String                            | ''  |  |
| name                    | String                            | - | sets the name of the generated input |
| onOpen                  | Function({ open })                |   | when TimePicker panel is closed      |
| onClose                 | Function({ open })                |   | when TimePicker panel is opened      |
| hourStep                | Number                            | 1 | interval between hours in picker  |
| minuteStep              | Number                            | 1 | interval between minutes in picker  |
| secondStep              | Number                            | 1 | interval between seconds in picker  |
| focusOnOpen             | Boolean                           | false | automatically focus the input when the picker opens |
| inputReadOnly             | Boolean                           | false | set input to read only |
| inputIcon             | ReactNode                           |  | specific the select icon. |
| clearIcon             | ReactNode                           |  | specific the clear icon. |

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

License
-------

rc-time-picker-date-fns-format-ja is released under the MIT license.
