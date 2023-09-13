function onLoadData() {
    console.log("html page loaded");
}

function add(num1, num2) {
    return num1 + num2;
}

let sub = function(num1, num2) {
    return num1 - num2;
}

let mul = (num1, num2) => {
    return num1 * num2;
};

let div = (num1, num2) => {
    if(num2 == 0) {
    return 0;
    }
    return num1 / num2;
};

function onLoadData() {
    const result1 = document.getElementById('add');
    result1.textContent = 'add result : ' + add(10, 20);

    const result2 = document.getElementById('sub');
    result2.textContent = 'sub result : ' + sub(10, 20);

    const result3 = document.getElementById('mul');
    result3.textContent = 'mul result : ' + mul(10, 20);

    const result4 = document.getElementById('div');
    result4.textContent = 'div result : ' + div(10, 20);
    
    resultData.appendChild(result1);

    resultData.appendChild(result2);

    resultData.appendChild(result3);

    resultData.appendChild(result4);
}
window.onload = onLoadData; 
