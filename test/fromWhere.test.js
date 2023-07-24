import assert from 'assert';
import fromWhere from '../fromWhere.js';

describe("From where function", ()=>{
    it("Takes in a car registration number from Paarl and return where the car is from", ()=>{
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    })

    it("Takes in a car registration number  from Cape Town and return where the car is from", ()=>{
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    })

    it("Takes in a car registration number from Bellville and return where the car is from", ()=>{
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    })

    it("Takes in a car registration number from somewhere else and return where the car is from", ()=>{
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    })

})