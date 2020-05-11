import { normalize, str } from "../src/date"

describe("Timelite: Date", () => {
    describe("normalize", () => {
        it("should return an array with 2000-01-01 if params were unprovided", () => {
            expect(normalize("")).toEqual([ 2000, 1, 1 ])
            expect(normalize("00:00:00")).toEqual([ 2000, 1, 1 ])
        })

        it("should normalize arrays with incompletely values", () => {
            expect(normalize("17")).toEqual([ 2017, 1, 1 ])
            expect(normalize("18-4")).toEqual([ 2018, 4, 1 ])
            expect(normalize("18-02-30")).toEqual([ 2018, 2, 28 ])
        })
    })

    describe("str", () => {
        it("should return a 2000-01-01 string if params were unprovided", () => {
            expect(str([])).toBe("2000-01-01")
            expect(str([ 0, 0, 0 ])).toBe("2000-01-01")
            expect(str([ 1, 20 ])).toBe("2001-12-01")
        })

        it("format an array of date values", () => {
            const arr: number[] = normalize("4-20")
            expect(str(arr)).toBe(str([ 2004, 12, 1 ]))
        })
    })
})
