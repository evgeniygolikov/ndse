const readline = require('readline/promises');

const MIN = 0;
const MAX = 100;

const generateRandomNumber = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

const main = async () => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  const number = generateRandomNumber(MIN, MAX);

  console.log(`Загадано число в диапазоне от ${MIN} до ${MAX}`);

  do {
    var answer = parseInt(await rl.question(''));

    if (isNaN(answer)) {
      console.log('Введите число');
    } else if(answer > number) {
      console.log('Меньше');
    } else if (answer < number) {
      console.log('Больше');
    } else {
      console.log('Победа');
    }
  } while (answer !== number)

  rl.close();
}

main();
