const TIME = [ 0, 0, 0 ]
const TIME_LEN = TIME.length

/**
 * Pad a single string time value with zeros. Eg. "5" to "05".
 *
 * @param {String} str
 * @returns {String}
 */
const zeroPad = (str) => ('0' + str).slice(-2)

/**
 * Normalize a string time. Eg. "1:2" to "01:02:00"
 *
 * @param {String} str String time to normalize.
 * @returns {String}
 */
const normalize = (str) => {
  const times = (str || '').split(':')

  for (let i = 0; i < TIME_LEN; i++) {
    times[i] = isNaN(parseInt(times[i])) ? 0 : parseInt(times[i])
  }

  return times
}

/**
 * Format an array time values into string time.
 *
 * @param {Array} arr Array of times to format. E.g. [12, 10, 45]
 * @returns {String} String time format.
 */
const str = (arr) => {
  const timeArr = Array.isArray(arr) ? arr : [ arr ]
  const lenArr = timeArr.length
  const times = TIME.slice(0)
  const timesf = []

  for (let i = 0; i < lenArr; i++) {
    times[i] = isNaN(parseInt(timeArr[i])) ? 0 : parseInt(timeArr[i])
  }

  for (let i = 0; i < TIME_LEN; i++) {
    timesf[i] = zeroPad(times[i])
  }

  return timesf.join(':')
}

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
  const times = TIME.slice(0)

  for (let i = 0; i < lenArr; i++) {
    const time = normalize(timeArr[i])

    for (let e = 0; e < TIME_LEN; e++) {
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

// TODO: Implement full subtraction
const sub = (arr) => {
  const timeArr = Array.isArray(arr) ? arr : [ arr ]
  const lenArr = timeArr.length
  const times = TIME.slice(0)

  for (let i = 0; i < lenArr; i++) {
    const time = normalize(timeArr[i])

    for (let e = 0; e < TIME_LEN; e++) {
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

  // implement goes here

  return [ hours, minutes, seconds ]
}

module.exports = {
  add,
  sub,
  str
}
