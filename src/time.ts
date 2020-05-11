import { DATETIME, DATETIME_LEN, formatDateTime, splitDateTime, TIME_SEPARATOR } from "./utils"

/**
 * Add an array of string time values "HH:mm:ss".
 *
 * Usage:
 *  > add(['04:20:10', '21:15:10'])
 *  > [ 25, 35, 20 ]
 *  > add(['04:35:10', '21:35:10'])
 *  > [ 26, 10, 20 ]
 *  > add(['30:59', '17:10'])
 *  > [ 48, 09, 0 ]
 *  > add(['19:30:00', '00:30:00'])
 *  > [ 20, 0, 0 ]
 *
 * @param string[] arr Array of string times to add
 * @returns number[] Time result in array format. E.g [5, 0, 0]
 */
export function add (arr: string[]): number[] {
    const intTimes: string[] = Array.isArray(arr) ? arr : [ arr ]
    const lenArr: number = intTimes.length
    const times: number[] = DATETIME.slice(0)

    for (let i = 0; i < lenArr; i++) {
        const time: number[] = splitDateTime(intTimes[i], TIME_SEPARATOR)

        for (let e = 0; e < DATETIME_LEN; e++) {
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
export function str (arr: number[]): string {
    return formatDateTime(arr, TIME_SEPARATOR)
}

/**
 * Substract an array of string time values "HH:mm:ss".
 *
 * Usage:
 *  > sub(['20:05:10', '10:10:50'])
 *  > [ 9, 54, 20 ]
 *  > sub(['20:40:10', '20:10:50'])
 *  > [ 0, 29, 20 ]
 *
 * @param string[] arr
 * @returns number[]
 */
export function sub (arr: string[]): number[] {
    const intTimes = Array.isArray(arr) ? arr : [ arr ]
    const lenArr = intTimes.length
    const times = DATETIME.slice(0)

    let prev = 0

    for (let i = 0; i < lenArr; i++) {
        const time = splitDateTime(intTimes[i], TIME_SEPARATOR)

        for (let e = DATETIME_LEN - 1; e > -1; e--) {
            const unit = time[e]

            // first time value
            if (!i) {
                times[e] = unit
            } else {
                // prev value (minor)
                if (times[e] < unit) {
                // 60's formula
                    if (times[0] === time[0] && times[1] === time[1]) {
                        times[e] = 60 - ((60 - unit) + times[e])
                    } else {
                        times[e] = (60 - unit) + times[e]

                        if (prev) {
                            times[e] -= prev
                        }
                    }

                    prev = 1
                } else {
                    // prev value (major)
                    times[e] = times[e] - unit

                    if (times[e]) {
                        times[e] = times[e] - prev
                    }
                }
            }
        }
    }

    return times
}
