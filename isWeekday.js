export default function isWeekday(day){
    var isWeekend = day.startsWith('S');
    return !isWeekend;
}