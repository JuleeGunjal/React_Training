// What will be printed to the console?
const testAsyncFunction = () =>{
return new Promise((resolve, reject) =>{
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else {
reject('Test Reject');
}
}).catch((err) =>{
console.log('Error caught in testAsyncFunction', err);
throw new Error('Forced error');
});
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err));

// OUTPU => 
// Error caught in testAsyncFunction Test Reject
// Error in catch block:  Error: Forced error

// because of  throw keyword in first catch block will return the call to the catch block of the method
// where it was called from.