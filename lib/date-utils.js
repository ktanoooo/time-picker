"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "formatDate", {
  enumerable: true,
  get: function get() {
    return _esm.format;
  }
});
exports.formatTime = void 0;
Object.defineProperty(exports, "getDate", {
  enumerable: true,
  get: function get() {
    return _esm.getDate;
  }
});
Object.defineProperty(exports, "getHours", {
  enumerable: true,
  get: function get() {
    return _esm.getHours;
  }
});
Object.defineProperty(exports, "getMinutes", {
  enumerable: true,
  get: function get() {
    return _esm.getMinutes;
  }
});
Object.defineProperty(exports, "getMonth", {
  enumerable: true,
  get: function get() {
    return _esm.getMonth;
  }
});
Object.defineProperty(exports, "getSeconds", {
  enumerable: true,
  get: function get() {
    return _esm.getSeconds;
  }
});
Object.defineProperty(exports, "getYear", {
  enumerable: true,
  get: function get() {
    return _esm.getYear;
  }
});
Object.defineProperty(exports, "isSameHour", {
  enumerable: true,
  get: function get() {
    return _esm.isSameHour;
  }
});
Object.defineProperty(exports, "isSameMinute", {
  enumerable: true,
  get: function get() {
    return _esm.isSameMinute;
  }
});
Object.defineProperty(exports, "isSameSecond", {
  enumerable: true,
  get: function get() {
    return _esm.isSameSecond;
  }
});
exports.isValidTime = void 0;
Object.defineProperty(exports, "parseDate", {
  enumerable: true,
  get: function get() {
    return _esm.parse;
  }
});
exports.parseTime = void 0;
Object.defineProperty(exports, "setHours", {
  enumerable: true,
  get: function get() {
    return _esm.setHours;
  }
});
Object.defineProperty(exports, "setMinutes", {
  enumerable: true,
  get: function get() {
    return _esm.setMinutes;
  }
});
Object.defineProperty(exports, "setSeconds", {
  enumerable: true,
  get: function get() {
    return _esm.setSeconds;
  }
});

var _esm = require("date-fns/esm");

var parseTime = function parseTime(value) {
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

exports.parseTime = parseTime;

var formatTime = function formatTime(value, format) {
  var formatLocale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var ret = (0, _esm.format)(parseTime(value, format), format);
  if (formatLocale === 'ja') ret = ret.replace('AM', '午前').replace('PM', '午後');
  return ret;
};

exports.formatTime = formatTime;

var isValidTime = function isValidTime(value) {
  return (0, _esm.isValid)(value);
};

exports.isValidTime = isValidTime;