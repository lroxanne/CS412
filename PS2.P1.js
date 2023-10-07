// Generator function to generate Fibonacci numbers
const fibonacciGenerator = function* () {
    let [prev, current] = [0, 1];
    yield prev;
    yield current;
  
    while (true) {
      [prev, current] = [current, prev + current];
      yield current;
    }
  }
  
  // Generator function to filter out odd Fibonacci numbers
  const evenFibonacciGenerator = function* () {
    const fibonacci = fibonacciGenerator();
    let value = fibonacci.next().value;
    while (true) {
      if (value % 2 === 0) {
        yield value;
      }
      value = fibonacci.next().value;
    }
  }
  
  const evenFib = evenFibonacciGenerator();
  
  for (let i = 0; i < 6; i++) {
    console.log(evenFib.next().value);
  }
  