import { parse as parseDate, format as formatDate, toDate, isValid, getHours, setHours, isSameHour, getMinutes, setMinutes, isSameMinute, getSeconds, setSeconds, isSameSecond } from 'date-fns/esm';

export var parseTime = function parseTime(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (value === null) {
    return value;
  }
  if (value instanceof Date) {
    return value;
  }
  if (format === null) {
    return toDate(value);
  }

  var parsed = parseDate(value, format, new Date());

  if (!isValid(parsed) || !value.startsWith(formatDate(parsed, format))) {
    return new Date('');
  }

  return parsed;
};

export var formatTime = function formatTime(value, format) {
  var formatLocale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var ret = formatDate(parseTime(value, format), format);
  if (formatLocale === 'ja') ret = ret.replace('AM', '午前').replace('PM', '午後');
  console.log(ret);
  console.log(formatLocale);
  return ret;
};

export var isValidTime = function isValidTime(value) {
  return isValid(value);
};

export { getHours, setHours, isSameHour, getMinutes, setMinutes, isSameMinute, getSeconds, setSeconds, isSameSecond };