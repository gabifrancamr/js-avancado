async function asyncSum(a, b) {
  return a + b;
}

async function asyncSubtract(a, b) {
  return a - b;
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

const numbers = [4, 5, 9, 17];

async function asyncSquare(x) {
  return x * x
}

Promise.all(numbers.map((numbers) => asyncSquare(numbers)))
  .then((squares) => {
    console.log(squares);
  })
  .catch((err) => {
    console.log(err);
  });
