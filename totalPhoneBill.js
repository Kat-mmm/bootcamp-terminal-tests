export default function totalPhoneBill(log){
    var allLogs = log.split(', ');
    
    var bill = 0;
    for(var i=0; i<allLogs.length; i++){
      if(allLogs[i] === 'call'){
        bill += 2.75;
      }
      else if(allLogs[i] === 'sms'){
        bill += 0.65;
      }
    }
    
    return `R${bill.toFixed(2)}`;
}