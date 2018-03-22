const { splitDateTime, formatDateTime, DATETIME, DATETIME_LEN, TIME_SEPARATOR } = require('./utils')

/**
 * Add an array of string time values "HH:mm:ss".
 *
 * Usage:
 *  > add(['04:20:10', '21:15:10'])
 *  > "25:35:20"
 *  > add(['04:35:10', '21:35:10'])
 *  > "26:10:20"
 *  > add(['30:59', '17:10'])
 *  > "48:09:00"
 *  > add(['19:30:00', '00:30:00'])
 *  > "20:00:00"
 *
 * @param {Array} arr Array of string times to add
 * @returns {Array} Time result in array format. E.g [5, 0, 0]
 */
const add = (arr) => {
  const timeArr = Array.isArray(arr) ? arr : [ arr ]
  const lenArr = timeArr.length
  const times = DATETIME.slice(0)

  for (let i = 0; i < lenArr; i++) {
    const time = splitDateTime(timeArr[i], TIME_SEPARATOR)

    for (let e = 0; e < DATETIME_LEN; e++) {
      times[e] += time[e]
    }
  }

  let hours = times[0]
  let minutes = times[1]
  let seconds = times[2]

  if (seconds >= 60) {
    const m = (seconds / 60) << 0
    minutes += m
    seconds -= 60 * m
  }

  if (minutes >= 60) {
    const h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h
  }

  return [ hours, minutes, seconds ]
}

/**
 * Format an array time values into string time.
 *
 * @param {Array} arr Array of times to format. E.g. [12, 10, 45]
 * @returns {String} String time format.
 */
const str = (arr) => formatDateTime(arr, TIME_SEPARATOR)

/**
 * TODO: Implement full subtraction
 *
 * @param {Array} arr
 * @returns {Array}
 */
const sub = (arr) => {
  const timeArr = Array.isArray(arr) ? arr : [ arr ]
  const lenArr = timeArr.length
  const times = DATETIME.slice(0)

  for (let i = 0; i < lenArr; i++) {
    const time = splitDateTime(timeArr[i])

    for (let e = 0; e < DATETIME_LEN; e++) {
      if (times[e] <= 0) {
        times[e] = time[e]
      } else {
        times[e] -= time[e]
      }
    }
  }

  let hours = times[0]
  let minutes = times[1]
  let seconds = times[2]

  return [ hours, minutes, seconds ]
}

module.exports = {
  add,
  sub,
  str
}
