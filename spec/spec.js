const myApp = require('../getprimes.js');

describe("",function()
    {
        it("should be a number",function()
        {
            expect(myApp.getPrimes('wole')).toBe("This is not a number!")
        }
        )

        it("should not be zero",function()
        {
            expect(myApp.getPrimes(0)).toBe("Number cannot be less than 1")
        }
        )

        it("should not be negative",function()
        {
            expect(myApp.getPrimes(-1)).toBe("Number cannot be less than 1")
        }
        )

        it("should return an array of 0,1,2,3",function()
        {
            expect(myApp.getPrimes(3)).toEqual([0,1,2,3])
        }
        )

        it("should return an array of 0,1,2,3,5",function()
        {
            expect(myApp.getPrimes(5)).toEqual([0,1,2,3,5])
        }
        )

        it("should return an array of 0,1,2,3,5,7",function()
        {
            expect(myApp.getPrimes(7)).toEqual([0,1,2,3,5,7])
        }
        )

        it("should return an array of 0,1,2,3,5,7,11",function()
        {
            expect(myApp.getPrimes(11)).toEqual([0,1,2,3,5,7,11])
        }
        )

        it("should return an array of 0,1,2,3,5,7,11,13",function()
        {
            expect(myApp.getPrimes(13)).toEqual([0,1,2,3,5,7,11,13])
        }
        )

        it("should return an array of 0,1,2,3,5,7,11,13,17",function()
        {
            expect(myApp.getPrimes(17)).toEqual([0,1,2,3,5,7,11,13,17])
        }
        )

        it("should return an array of 0,1,2,3,5,7,11,13,17,19",function()
        {
            expect(myApp.getPrimes(19)).toEqual([0,1,2,3,5,7,11,13,17,19])
        }
        )
    }
)

