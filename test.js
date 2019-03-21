function plus (x,y){
return x+y
};
function minus (x,y){

return x-y
};
function mutltiply(x,y){
return x*y
};
function division (x,y){
if (y<0){
return 'Error';
}
else
return x/y;
};

function calculate (x,y, operration){
return operations[operation](x,y);
},
console.log(calculate(38,4, '/'));
