// Define the cube function
function cube(x) {
    return x ** 3;
  }
  
  // Call the function on each value of the array
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const cubes = numbers.map(cube);
  
  console.log(cubes);
  