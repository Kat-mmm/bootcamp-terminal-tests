export default function transportFee(timeOfDay){
    if(timeOfDay === 'morning'){
      return 'R20';
    }
    else if(timeOfDay === 'afternoon'){
      return 'R10';
    }
    else if(timeOfDay === 'nightshift'){
      return 'free';
    }
}