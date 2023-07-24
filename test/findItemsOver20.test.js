import assert from 'assert';
import findItemsOver20 from '../findItemsOver20.js';

describe("Find items over 20 function", ()=>{
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];

    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'grapes', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
        {name : 'oranges', qty : 31},
    ];

    var results2 = [
        {name : 'grapes', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'oranges', qty : 31},
    ];

    

    it("Takes in a list of objects each object having name and qty attributes, return the products with a qty higher than 20", ()=>{
        assert.deepEqual(findItemsOver20(itemList), results)
    })

    it("Takes in a list with a different dataset of objects each object having name and qty attributes, return the products with a qty higher than 20", ()=>{
        assert.deepEqual(findItemsOver20(itemList2), results2)
    })
})