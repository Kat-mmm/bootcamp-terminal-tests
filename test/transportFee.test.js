import assert from 'assert';
import transportFee from '../transportFee.js';

describe("Transport fee function", ()=>{
    it("Take in the shift morning and must return 'R20'", ()=>{
        assert.equal(transportFee("morning"), "R20")
    })

    it("Take in the shift afternoon and must return 'R10'", ()=>{
        assert.equal(transportFee("afternoon"), "R10")
    })

    it("Take in the nightshift and must return 'free'", ()=>{
        assert.equal(transportFee("nightshift"), "free")
    })
})