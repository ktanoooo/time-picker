'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSameSecond = exports.setSeconds = exports.getSeconds = exports.isSameMinute = exports.setMinutes = exports.getMinutes = exports.isSameHour = exports.setHours = exports.getHours = exports.isValidTime = exports.formatTime = exports.parseTime = undefined;

var _esm = require('date-fns/esm');

var parseTime = exports.parseTime = function parseTime(value) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (value === null) {
    return value;
  }
  if (value instanceof Date) {
    return value;
  }
  if (format === null) {
    return (0, _esm.toDate)(value);
  }

  var parsed = (0, _esm.parse)(value, format, new Date());

  if (!(0, _esm.isValid)(parsed) || !value.startsWith((0, _esm.format)(parsed, format))) {
    return new Date('');
  }

  return parsed;
};

var formatTime = exports.formatTime = function formatTime(value, format) {
  var formatLocale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var ret = (0, _esm.format)(parseTime(value, format), format);
  if (formatLocale === 'ja') ret = ret.replace('AM', '午前').replace('PM', '午後');
  console.log(ret);
  console.log(formatLocale);
  return ret;
};

var isValidTime = exports.isValidTime = function isValidTime(value) {
  return (0, _esm.isValid)(value);
};

exports.getHours = _esm.getHours;
exports.setHours = _esm.setHours;
exports.isSameHour = _esm.isSameHour;
exports.getMinutes = _esm.getMinutes;
exports.setMinutes = _esm.setMinutes;
exports.isSameMinute = _esm.isSameMinute;
exports.getSeconds = _esm.getSeconds;
exports.setSeconds = _esm.setSeconds;
exports.isSameSecond = _esm.isSameSecond;