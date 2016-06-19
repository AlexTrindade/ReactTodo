var one = () => {
  var two = () => {
    console.log('Function two');
  }
  return two;
}
one()();
