import { add, str } from '../src/time'

describe('Timelite: Time', () => {
  describe('add', () => {
    it('should return an array with zeros if params were unprovided', () => {
      expect(add([ '' ])).toEqual([ 0, 0, 0 ])
      expect(add([])).toEqual([ 0, 0, 0 ])
    })

    it('should add an array with one value', () => {
      expect(add([ '04:20:10' ])).toEqual([ 4, 20, 10 ])
    })

    it('should add an array with two values', () => {
      expect(add([ '04:20:10', '21:15:10' ])).toEqual([ 25, 35, 20 ])
    })

    it('should add an array with three incompletely formatted values', () => {
      expect(add([ '12:0', '0:1:0', '01' ])).toEqual([ 13, 1, 0 ])
    })
  })

  describe('str', () => {
    it('should return a zeros time string if params were unprovided', () => {
      expect(str([])).toBe('00:00:00')
      expect(str([ 0, 0, 0 ])).toBe('00:00:00')
      expect(str([ 1, 20 ])).toBe('01:20:00')
    })

    it('contains add an array of values', () => {
      const arr: number[] = add([ '4:20', '04:20:10' ])
      expect(str(arr)).toEqual('08:40:10')
    })
  })
})
