let a=["yes","no","you","i","me"]
function reverseArray(arr){
    var newArray=[];
    for(var i=arr.length-1;i>=0;i--){
        newArray.push(arr[i]);
    }
    return newArray;
}