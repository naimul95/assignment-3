/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
if(lastDay>3 && lastDay<=30){
     for(var day=1; day<=lastDay; day++ ){ if(day%3===0){console.log( day,'- medicine' );}
                                            else{ console.log(day,'- rest');} }
  }
