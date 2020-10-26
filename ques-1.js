function customPrint(n, message) {
  console.log(message);
  //  Add your code here
  if (n > 0) {
    return customPrint(n - 1, message);
  }
}

console.log(customPrint(5, "Hello, World!"));
