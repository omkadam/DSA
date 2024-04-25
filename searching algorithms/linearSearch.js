/*

. this function accepts an array and a value
. loop through the array and check if the current element = to the value or not if it is then return the index 
. if value is never found return -1

*/

function linearSearch(arr, val){
    for(let i = 0; i<= arr.length; i++) {
        if(arr[i] === val){
            return i
        }
        return -1;
    }
}