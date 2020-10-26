function customPrint(n, message) {
  //  Add your code here
  if (n > 0 && n !== 0) {
    console.log(message);
    customPrint(n - 1, message);
  }
}
