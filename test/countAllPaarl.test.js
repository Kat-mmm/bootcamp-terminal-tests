import assert from 'assert';
import countAllPaarl from '../countAllPaarl.js';

describe("All from Paarl function", ()=>{
    it("Take in a string of five mixed registration numbers and return a count of all that are from Paarl", ()=>{
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'))
    })

    it("Take in a string of one Paarl registration number and return a count of all that are from Paarl", ()=>{
        assert.equal(1, countAllPaarl('CJ 345 123'))
    })
})