let obj = {color:1}
console.log(typeof obj);
let fun = function() {
    this.color = 1;
}
console.log(typeof fun);

// let Shape = function() {
//     this.stroke = 1;
//     this.color = 'white';
//     function drow() {
//         console.log('draw=======>');
//     }
// }
let Shape = {
    stroke: 1, 
    color: 'white',
    drow: function() {
        this.console.log('draw');
    }
}

let ractangle = new Shape();
let circle = new Shape();
ractangle.background_color = 'green';
Shape.prototype.backgroundColor = 'pink';
console.log(ractangle.backgroundColor);
console.log(console.backgroundColor);
circle.move = function(x,y) {
    console.log('move : ' + x + ":" + y);
}

Shape.prototype.moveTo = function(x, y) {
    console.log('moveTo : ' + x + ":" + y);
}
circle.move(10, 20);
ractangle.moveTo(10, 20);

