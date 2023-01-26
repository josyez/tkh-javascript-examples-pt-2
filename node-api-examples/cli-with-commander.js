const { program } = require("commander");

program
  .option("-d, --debug", "output extra debugging")
  .option("-s, --size <size>", "Size of pizza", "small")
  .option("-p, --pizza-type <type>", "flavour of pizza", 'cheese');

program.parse(process.argv);

const options = program.opts();

console.log(options);

console.log(`your pizza is ${options.pizzaType} and the size is ${options.size}`);

// if(options.small){
//   console.log(`your pizza is ${options.pizzaType} and the size is small`);
// } else {
//   console.log(`your pizza is ${options.pizzaType} and the size is large`);
// }