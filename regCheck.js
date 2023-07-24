export default function regCheck(regNumber, location){
    if(regNumber.endsWith('GP')){
      return regNumber.endsWith(location);
    }
    else if(regNumber.endsWith('L')){
      return regNumber.endsWith(location);
    }
    else if(regNumber.endsWith('EC')){
      return regNumber.endsWith(location);
    }
    else if(regNumber.endsWith('MP')){
      return regNumber.endsWith(location);
    }
    else{
      return false;
    }
}