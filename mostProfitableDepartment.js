export default function mostProfitableDepartment(salesData){
    var bestDepartment = '';
    var bestSale = 0;
    for(var i=0; i<salesData.length; i++){
      const {department, sales} = salesData[i];
      if(sales > bestSale){
        bestSale = sales;
        bestDepartment = department;
      }
    }
    return bestDepartment;
}