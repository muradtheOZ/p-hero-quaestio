// Main Function
const largestNumber = (array, n) => {
    const newArray = []
    const factArray = []
        //making a new Array After Dividing by n
    array.map((arr) => {
            const result = (arr / n)
            newArray.push(result);
        })
        //making array of factorial result 
    newArray.map((newarr) => {
        const newElement = factorial(newarr)
        factArray.push(newElement)
    })


    // returning max
    return Math.max(...factArray);

}

const factorial = (num) => {
    //base case
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}