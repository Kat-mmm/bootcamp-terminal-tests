import assert from 'assert';
import isWeekday from '../isWeekday.js';

describe("The is a Weekday function", ()=>{
    it("Return false if it is Saturday", ()=>{
        assert.equal(isWeekday("Sunday"), false)
    })

    it("Return false if it is Sunday", ()=>{
        assert.equal(isWeekday("Sunday"), false)
    })

    it("Return true if it is Monday", ()=>{
        assert.equal(isWeekday("Monday"), true)
    })

    it("Return true if it is Tuesday", ()=>{
        assert.equal(isWeekday("Tuesday"), true)
    })

    it("Return true if it is Wednesday", ()=>{
        assert.equal(isWeekday("Wednesday"), true)
    })

    it("Return true if it is Thursday", ()=>{
        assert.equal(isWeekday("Thursday"), true)
    })

    it("Return true if it is Friday", ()=>{
        assert.equal(isWeekday("Friday"), true)
    })
})