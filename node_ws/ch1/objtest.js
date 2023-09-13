function getData(callbackFunc) {

    let result = true;

return new Promise((resolve, reject) => {
    if(result)
    resolve(result);
else
reject(result);
});
}
var callvackfunc1 = function(response, callbackFunc) {
    return new Promise((resolve, reject) => {
        if(result)
            resolve(result);
        else
            reject(result);
    });
}
var callbackFunc2 = function(response) {
    console.log(response);
}
getData()
.then(response => callbackFunc1(response))
.then(response => callbackFunc2(response))
.catch((error) => {
});

// async function getData_await() {
//     try {
//         let result = await getData();
//         result = await callbackFunc1(result);
//         if(result){
//             console.log("success");
//             callbackFunc2(result);
//     }
//     catch {

//     }
// }
