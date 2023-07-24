export default function fromWhere(location){
    switch(location.split(' ')[0]){
      case 'CY':
        return 'Bellville';
        break;
      case 'CJ':
        return 'Paarl';
        break;
      case 'CA':
        return 'Cape Town';
        break;
      default:
        return 'Some other place!';
    }
}