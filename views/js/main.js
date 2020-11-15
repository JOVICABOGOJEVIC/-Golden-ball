var promena = 0; 
if (data.length > 1) { 
  var k = data.length - 1; 
 while ((promena == 0) && (k >= 0)) { 
   promena = 1;
   for(let j = 0; j < k; j++) {
       if (data[j].visited < data[j + 1].visited) {
         promena = 0;
         var tmpName = data[j].name;
         var tmpVisited = data[j].visited;
         data[j].name = data[j + 1].name;
         data[j].visited = data[j + 1].visited;
         data[j + 1].name = tmpName;
         data[j + 1].visited = tmpVisited;
       }
   }
   k--;
 }
} 