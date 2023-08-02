//  What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () =>{
return new Promise((resolve, reject) =>{
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else {
reject('Test Reject');
}
}).catch((err) =>{
console.log('Error caught in testAsyncFunction: ', err);
});
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));


// Observations:
// 1. When promise resolves
// => output => Response in then block:  Test Resolve
// the if block executed with promise state as fulfilled and response as ' Test Resolve'
// then it comes to the then and the response prints with the string provided

//2. When Promise rejected
// => Error caught in testAsyncFunction:  Test Reject
// Response in then block:  undefined
// Initially the if condition fails and else evaluated with reject error as 'Test Reject'
// then it searches for first catch block with the string provided with err response
// then it resolves back to then as it has response as undefined it prints it.

// It never goes to the next catch block as it already had find the catch block.