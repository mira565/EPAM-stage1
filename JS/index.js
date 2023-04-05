// 1.Perform addition of various types (string + boolean, string + number, number + boolean)

let a = 'Hello';
let b = true;
let c = 5

console.log('string + boolean =', a + b);
console.log('string + number =', a + 5);
console.log('number + boolean =', c + b);


// 2.Perform multiplication of various types (string * boolean, string * number, number * boolean)

console.log('string * boolean =', a * b);
console.log('string * number =', a * c);
console.log('number * boolean =',  c * b)

// 3.Divide different types (string / boolean, string / number, number / Boolean)

console.log( 'string / boolean =', a/ b)
console.log ( 'string / number =', a / 5)
console.log ( 'number / boolean =', c / b)


// 4. Perform explicit conversion (number, string, boolean)

console.log('StringToNumber =', Number(a));
console.log('StringToBoolean =', Boolean(a))

console.log('BooleanToNumber =', Number(b));
console.log('BooleanToString =', String(b))

console.log('NumberToString =', String(c))
console.log('NumberToBoolean =', Boolean(c));

