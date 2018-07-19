import { DATE_SEPARATOR, formatDateTime, getDaysInMonth, splitDateTime } from './utils'

/**
 * Normalize string date values returning times valid date as an unsigned integer array.
 *
 * @param string str
 * @returns number[]
 */
export function normalize (str: string): number[] {
  const cyear: number = new Date().getFullYear()
  const parts: number[] = splitDateTime(str, DATE_SEPARATOR)

  let year: number = parts[0]
  let month: number = parts[1]
  let day: number = parts[2]

  // if year has two digits or less
  // convert to full year value
  if (year >= 0 && year <= 99) {
    year += cyear - cyear % 100
  }

  // it is not times valid month number
  if (month < 1) {
    month = 1
  }

  if (month > 12) {
    month = 12
  }

  const daysInMonth: number = getDaysInMonth(year, month)

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
 * @param number[] arr Array of times to format. E.g. [2018, 12, 3]
 * @returns string String time format.
 */
export function str (arr: number[]): string {
  const times: number[] = normalize(formatDateTime(arr, DATE_SEPARATOR))
  return formatDateTime(times, DATE_SEPARATOR)
}
