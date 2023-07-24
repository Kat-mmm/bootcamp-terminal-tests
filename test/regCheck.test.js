import assert from 'assert';
import regCheck from '../regCheck.js';

describe("Registration check function", ()=>{
    it("Check if the resgistration number is from GP", ()=>{
        assert.equal(regCheck("RG 45 HN GP", "GP"), true)
    })

    it("Check if the registration number is not from GP", ()=>{
        assert.equal(regCheck("CA 1234-123", "GP"), false)
    })

    it("Check if the resgistration number is from L", ()=>{
        assert.equal(regCheck("FGT 491 L", "L"), true)
    })

    it("Check if the registration number is not from L", ()=>{
        assert.equal(regCheck("CA 1234-123", "L"), false)
    })

    it("Check if the resgistration number is from EC", ()=>{
        assert.equal(regCheck("LKG 679 EC", "EC"), true)
    })

    it("Check if the registration number is not from EC", ()=>{
        assert.equal(regCheck("ND 123-456", "GP"), false)
    })

    it("Check if the resgistration number is from MP", ()=>{
        assert.equal(regCheck("GHT 456 MP", "MP"), true)
    })

    it("Check if the registration number is not from MP", ()=>{
        assert.equal(regCheck("CY 678-453", "CY"), false)
    })
})