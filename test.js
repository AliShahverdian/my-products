function addNumber() {
  return "hello";
}

function addNumber(a, b) {
  return a + b;
}

const addNumber = () => {
  return "hello";
};

const addNumber = (a, b) => {
  return a + b;
};

() => {
  return "Hello";
};

const products = [1, 2, 3];

const test = products.map((product, index) => {
  return product + index;
});
