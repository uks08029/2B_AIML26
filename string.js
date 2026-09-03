let firstName ="utkarsh";
let lastName ="singh"
console.log("my firstName is"+firstName);
console.log("my lastName is"+lastName);
console.log(`my firstName is$(firstName)`);
console.log(`my name is ${firstName} ${lastName}`);
function fullName(first,last)
{
    return `${first}${last}`;
}
let name=`hello ${fullName(firstName,lastName)}`;
console.log(name);