export default function findItemsOver20(itemsList){
    var result = [];
    for(var i=0; i<itemsList.length; i++){
      var item = itemsList[i];
      if(item.qty > 20){
        result.push(item);
      }
    }
    return result;
}