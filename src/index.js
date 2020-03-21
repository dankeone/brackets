module.exports = function check(str, bracketsConfig){
 let arr = "";
 res = str;
  bracketsConfig.forEach((element) => {
  	arr +=element[0];
  	arr +=element[1];
  });
  arr = arr.split('');
  res = res.split('');
  let f1 = 0;
  let f2 = 0;
  let i = 0;
  if (arr.indexOf(res[i]) % 2 != 0) return(false);
  while (res.length > 0) {
   if(arr.indexOf(res[i]) % 2 != 0){
   	f1 = arr.indexOf(res[i]);
   	f2 = arr.indexOf(res[i-1]);
   	f2 += 1;
   	if(f1 != f2) return(false); else {
   		res.splice(i-1,2);
   		i = 0;
   	}
   } else {
   		f1 = arr.indexOf(res[i]);
   		f2 = f1 + 1;
   		
   		if (res[i] == res[i+1] && arr[f1] == arr[f2]) {
   			res.splice(i,2);
   			i = 0;		
   		} else i +=1;
   }	
   if (i > res.length) return(false);
  }
  return(true); 
 } 
