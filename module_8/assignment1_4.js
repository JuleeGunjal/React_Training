// What will be printed to the console?
const testAsyncFunction = () =>{
return Promise.reject('Test static reject');
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block', res);
})
.catch((err) => console.log('Error in catch block', err));

// OutPut =>
// Error in catch block Test static reject
// As promise return the rejection with err as 'Test static reject'