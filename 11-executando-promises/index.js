function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(a + b);
    }
  });
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(a - b);
    }
  });
}

const sumResult = asyncSum(50, 33);
const subResult = asyncSubtract(50, 33);

Promise.all([sumResult, subResult])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });


const numbers = [4, 5, 9, 17]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        if(typeof x !== 'number') {
            reject(false)
        } else {
            resolve(x * x)
        }
    })
}

Promise.all(numbers.map((numbers) => asyncSquare(numbers))).then((squares) => {
    console.log(squares)
}).catch((err) => {
    console.log(err)
})

