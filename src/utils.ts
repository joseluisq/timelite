const DATETIME: number[] = [ 0, 0, 0 ]
const DATETIME_LEN: number = DATETIME.length
const TIME_SEPARATOR: string = ':'
const DATE_SEPARATOR: string = '-'

/**
 * Pad a single string time value with zeros. Eg. "5" to "05".
 *
 * @param string str
 * @param number len
 * @returns string
 */
function zeroPad (value: number | string = '', len: number = 2): string {
  let str: string = value.toString()

  if (str.length < len) {
    str = ('0' + str.toString()).slice(-len)
  }

  return str
}

/**
 * Split and normalize a date or time string returning an unsigned integer array with their values.
 *
 * Examples:
 *  > "1:2" to [01, 02, 00]
 *  > "2018-12-25" to [2018, 12, 25]
 *
 * @param string str String date or time to split and normalize.
 * @param string divider String character or RegEx used to separate the string. E.g. ":" (Time) or "-" (Date)
 * @returns number[]
 */
function splitDateTime (str: string, divider: string): number[] {
  const strTime: string[] = str.split(divider)
  const intTime: number[] = []

  for (let i: number = 0; i < DATETIME_LEN; i++) {
    intTime[i] = isNaN(parseInt(strTime[i], 10)) ? 0 : parseInt(strTime[i], 10)
  }

  return intTime
}

/**
 * Format an array with time or date values into string time or date.
 *
 * @param array timeInts Integer array times to format. E.g. [12, 10, 45]
 * @param string joiner String character used to join the string. E.g. ":" (Time) or "-" (Date)
 * @returns string String time format.
 */
function formatDateTime (timeInts: number[], joiner: string): string {
  const intTime: number[] = Array.isArray(timeInts) ? timeInts : [ timeInts ]
  const intTimeLen: number = intTime.length
  const strTime: string[] = []
  const timeBase: number[] = DATETIME.slice(0)

  for (let i: number = 0; i < intTimeLen; i++) {
    timeBase[i] = isNaN(intTime[i]) ? 0 : intTime[i]
  }

  let len: number
  for (let i: number = 0; i < DATETIME_LEN; i++) {
    len = joiner === DATE_SEPARATOR && i === 0 ? 4 : 2
    strTime[i] = zeroPad(timeBase[i].toString(), len)
  }

  return strTime.join(joiner)
}

/**
 * Get the number of days in a month of the given year and month.
 *
 * @param number year
 * @param number month
 * @returns number
 */
function getDaysInMonth (year: number, month: number): number {
  const ndate: Date = new Date(0)
  ndate.setFullYear(year, month, 0)
  ndate.setHours(0, 0, 0, 0)

  return ndate.getDate()
}

export {
  DATETIME,
  DATETIME_LEN,
  TIME_SEPARATOR,
  DATE_SEPARATOR,
  zeroPad,
  splitDateTime,
  formatDateTime,
  getDaysInMonth
}
