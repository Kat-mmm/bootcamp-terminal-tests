import greet from '../greet.js';
import assert from 'assert';

describe("The greet function", ()=>{
    it("Greet Katlego with 'Hello, Katlego'", ()=>{
        assert.equal("Hello, Katlego", greet("Katlego"))
    })

    it("Greet Cole with 'Hello, Cole'", ()=>{
        assert.equal("Hello, Cole", greet("Cole"))
    })
})