const DATETIME = [ 0, 0, 0 ]
const DATETIME_LEN = DATETIME.length
const TIME_SEPARATOR = ':'
const DATE_SEPARATOR = '-'

/**
 * Pad a single string time value with zeros. Eg. "5" to "05".
 *
 * @param {String} str
 * @param {Number} len
 * @returns {String}
 */
const zeroPad = (str, len) => ('0' + str).slice(-len)

/**
 * Split and normalize a date or time string returning an unsigned integer array with their values.
 *
 * Examples:
 *  > "1:2" to [01, 02, 00]
 *  > "2018-12-25" to [2018, 12, 25]
 *
 * @param {String} str String date or time to split and normalize.
 * @param {String} separator String character or RegEx used to separate the string. E.g. ":" (Time) or "-" (Date)
 * @returns {Array}
 */
const splitDateTime = (str, separator) => {
  const times = (typeof str === 'string' ? str : '').split(separator)

  for (let i = 0; i < DATETIME_LEN; i++) {
    times[i] = isNaN(parseInt(times[i])) ? 0 : parseInt(times[i])
  }

  return times
}

/**
 * Format an array with time or date values into string time or date.
 *
 * @param {Array} arr Array of times to format. E.g. [12, 10, 45]
 * @param {String} joiner String character used to join the string. E.g. ":" (Time) or "-" (Date)
 * @returns {String} String time format.
 */
const formatDateTime = (arr, joiner) => {
  const timeArr = Array.isArray(arr) ? arr : [ arr ]
  const lenArr = timeArr.length
  const times = DATETIME.slice(0)
  const timesf = []

  for (let i = 0; i < lenArr; i++) {
    times[i] = isNaN(parseInt(timeArr[i])) ? 0 : parseInt(timeArr[i])
  }

  for (let i = 0; i < DATETIME_LEN; i++) {
    timesf[i] = zeroPad(times[i], joiner === DATE_SEPARATOR && i === 0 ? 4 : 2)
  }

  return timesf.join(joiner)
}

/**
 * Get the number of days in a month of the given year and month.
 *
 * @param {Number} year
 * @param {Number} month
 * @returns {Number}
 */
const getDaysInMonth = (year, month) => {
  const ndate = new Date(0)
  ndate.setFullYear(year, month, 0)
  ndate.setHours(0, 0, 0, 0)
  return ndate.getDate()
}

module.exports = {
  DATETIME,
  DATETIME_LEN,
  TIME_SEPARATOR,
  DATE_SEPARATOR,
  zeroPad,
  splitDateTime,
  formatDateTime,
  getDaysInMonth
}
