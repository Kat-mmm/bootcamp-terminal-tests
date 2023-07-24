import assert from 'assert';
import countRegNumber from '../countRegNumber.js';

describe("Count registration numbers function", ()=>{
    it("Count the registration numbers in a string  of 3 reg numbres and return the count", ()=>{
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3)
    })

    it("Count the registration numbers in a string of 4 reg numbers and return the count", ()=>{
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328,CJ 555328')
        assert.equal(regCount, 4)
    })

})