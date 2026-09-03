function sum(...value)
{
    let total=0;
    for(let n of value){
        total=total+n;
        
    }
    return total;
}
console.log(sum(8))