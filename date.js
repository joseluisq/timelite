const { DATE_SEPARATOR, splitDateTime, getDaysInMonth, formatDateTime } = require('./utils')

/**
 * Normalize string date values returning a valid date as an unsigned integer array.
 *
 * @param {String} str
 * @returns {Array}
 */
const normalize = (str) => {
  const cyear = new Date().getFullYear()
  const parts = splitDateTime(str, DATE_SEPARATOR)

  let year = parts[0]
  let month = parts[1]
  let day = parts[2]

  // if year has two digits or less
  // convert to full year value
  if (year >= 0 && year <= 99) {
    year += cyear - cyear % 100
  }

  // it is not a valid month number
  if (month < 1) {
    month = 1
  }

  if (month > 12) {
    month = 12
  }

  const daysInMonth = getDaysInMonth(year, month)

  if (day < 1) {
    day = 1
  }

  if (day > daysInMonth) {
    day = daysInMonth
  }

  return [ year, month, day ]
}

/**
 * Format an array date values into string date.
 *
 * @param {Array} arr Array of times to format. E.g. [2018, 12, 3]
 * @returns {String} String time format.
 */
const str = (arr) => {
  const a = normalize(formatDateTime(arr, DATE_SEPARATOR))
  return formatDateTime(a, DATE_SEPARATOR)
}

module.exports = {
  normalize,
  str
}
