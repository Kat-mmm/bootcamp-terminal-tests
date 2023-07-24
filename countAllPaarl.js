export default function countAllPaarl(regNumbers){
    var regList = regNumbers.split(', ');
    
    var count = 0;
    for(var i=0; i<regList.length; i++){
      if(regList[i].startsWith('CJ')){
        count += 1;
      }
    }
    
    return count;
}