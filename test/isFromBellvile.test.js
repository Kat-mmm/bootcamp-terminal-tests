import assert from 'assert';
import isFromBellville from '../isFromBellvile.js';

describe("Is from Bellville function", ()=>{
    it("Resgistration should start with 'CY'", ()=>{
        assert.equal(isFromBellville("CY 567"), true)
    })

    it("Registration does not start with 'CY'", ()=>{
        assert.equal(isFromBellville("CA 567"), false)
    })
})