/** Problem 06 :  (Current Salary )  */
var experience = 60;
var startingSalary = 30000;
//write your code here
if( startingSalary<=10^6 && experience<=50){
var currentSalary=startingSalary;
for( var i=0; i<experience; i++){
    currentSalary= currentSalary+(currentSalary*0.05);
}
console.log(currentSalary.toFixed(2));}