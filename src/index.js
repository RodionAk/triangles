/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


function fact(num)
{
    let val=1;
    for (let i = 2; i <= num; i++)
        val = val * i;
    return val;
}



module.exports = function getLoveTrianglesCount(preferences = []) {
  
// there is a fundamental formula in combinatorics
// if we need to take k from n, it means we have to apply following formula
// n!/((n-k)!k!)


//const min_number_to_create_triangle_of_love = 3;
const three = 3;

console.log(preferences); 

let size = preferences.length;




let result = fact(size) / (fact(size - three) * fact(three) );
return result;

};




