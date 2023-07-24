export default function allFromTown(regNumbers, city){
    var allRegNumbers = regNumbers.split(',');
    allRegNumbers.push('CJ 456');
    var newArr = [];
    
    for(var i=0; i<allRegNumbers.length; i++){
      if(allRegNumbers[i].startsWith(city)){
        newArr.push(allRegNumbers[i]);
      }
    }
    return newArr;
}