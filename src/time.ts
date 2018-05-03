import {
  splitDateTime,
  formatDateTime,
  DATETIME,
  DATETIME_LEN,
  TIME_SEPARATOR
} from './utils'

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
 * @param string[] arr Array of string times to add
 * @returns number[] Time result in array format. E.g [5, 0, 0]
 */
function add (arr: string[]): number[] {
  const intTimes: string[] = Array.isArray(arr) ? arr : [ arr ]
  const lenArr: number = intTimes.length
  const times: number[] = DATETIME.slice(0)

  for (let i: number = 0; i < lenArr; i++) {
    const time: number[] = splitDateTime(intTimes[i], TIME_SEPARATOR)

    for (let e: number = 0; e < DATETIME_LEN; e++) {
      times[e] += time[e]
    }
  }

  let hours: number = times[0]
  let minutes: number = times[1]
  let seconds: number = times[2]

  if (seconds >= 60) {
    const m: number = (seconds / 60) << 0
    minutes += m
    seconds -= 60 * m
  }

  if (minutes >= 60) {
    const h: number = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h
  }

  return [ hours, minutes, seconds ]
}

/**
 * Format an array time values into string time.
 *
 * @param number[] arr Array of times to format. E.g. [12, 10, 45]
 * @returns string String time format.
 */
function str (arr: number[]): string {
  return formatDateTime(arr, TIME_SEPARATOR)
}

/**
 * TODO: Implement full subtraction
 *
 * @param string[] arr
 * @returns number[]
 */
function sub (arr: string[]): number[] {
  const intTimes: string[] = Array.isArray(arr) ? arr : [ arr ]
  const lenArr: number = intTimes.length
  const times: number[] = DATETIME.slice(0)

  for (let i: number = 0; i < lenArr; i++) {
    const time: number[] = splitDateTime(intTimes[i], TIME_SEPARATOR)

    for (let e: number = 0; e < DATETIME_LEN; e++) {
      if (times[e] <= 0) {
        times[e] = time[e]
      } else {
        times[e] -= time[e]
      }
    }
  }

  const hours: number = times[0]
  const minutes: number = times[1]
  const seconds: number = times[2]

  return [ hours, minutes, seconds ]
}

export {
  add,
  sub,
  str
}
