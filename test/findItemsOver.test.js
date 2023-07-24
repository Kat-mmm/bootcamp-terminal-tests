import assert from 'assert';
import findItemsOver from '../findItemsOver.js';

describe("Find items over function", ()=>{
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}
    ]

    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 30},
    ];
    
    var results2 = [
        {name : 'pears', qty : 37},
        {name : 'apples', qty : 30},
    ]

    it("Takes in a list of objects each object having name and qty attributes with another input called threshold(25), return the products with a qty higher than 25", ()=>{
        assert.deepEqual(findItemsOver(itemList, 25), results)
    })

    it("Takes in a list of objects each object having name and qty attributes with another input called threshold(28), return the products with a qty higher than 28", ()=>{
        assert.deepEqual(findItemsOver(itemList2, 28), results2)
    })
})