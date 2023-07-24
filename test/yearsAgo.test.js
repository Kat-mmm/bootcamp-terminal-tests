import assert from 'assert';
import yearsAgo from '../yearsAgo.js';

describe("Years ago function", ()=>{
    it("Take in the year 1962 and return how many years ago is it from the current year", ()=>{
        assert.equal(yearsAgo(1962), new Date().getFullYear() - 1962)
    })

    it("Take in the year 2000 and return how many years ago is it from the current year", ()=>{
        assert.equal(yearsAgo(2000), new Date().getFullYear() - 2000)
    })
})