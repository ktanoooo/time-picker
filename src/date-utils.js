import {
  parse as parseDate,
  format as formatDate,
  toDate,
  isValid,
  getHours,
  setHours,
  isSameHour,
  getMinutes,
  setMinutes,
  isSameMinute,
  getSeconds,
  setSeconds,
  isSameSecond,
} from 'date-fns/esm';

export const parseTime = (value, format = null) => {
  if (value === null) {
    return value;
  }
  if (value instanceof Date) {
    return value;
  }
  if (format === null) {
    return toDate(value);
  }

  const parsed = parseDate(value, format, new Date());

  if (!isValid(parsed) || !value.startsWith(formatDate(parsed, format))) {
    return new Date('');
  }

  return parsed;
};

export const formatTime = (value, format, formatLocale = '') => {
  let ret = formatDate(parseTime(value, format), format);
  if (formatLocale === 'ja')
    ret = ret.replace('AM', '午前').replace('PM', '午後');
  console.log(ret);
  console.log(formatLocale);
  return ret;
};

export const isValidTime = (value) => isValid(value);

export {
  getHours,
  setHours,
  isSameHour,
  getMinutes,
  setMinutes,
  isSameMinute,
  getSeconds,
  setSeconds,
  isSameSecond,
};
