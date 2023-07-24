import assert from 'assert';
import totalPhoneBill from '../totalPhoneBill.js';

describe("Total phone bill function", ()=>{
    it("Take in a string of various calls made and sms's made then return the total phone bill", ()=>{
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })

    it("Take in a string of a call and a sms made then return the total phone bill", ()=>{
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })

    it("Take in a string of one sms then return the total phone bill", ()=>{
        assert.equal('R0.65', totalPhoneBill('sms'));
    })

    it("Take in a string of one call made then return the total phone bill", ()=>{
        assert.equal('R2.75', totalPhoneBill('call'));
    })
})