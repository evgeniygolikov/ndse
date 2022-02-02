const readline = require('readline/promises');
const fs = require('fs/promises');
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const generateRandomNumber = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

const game = async () => {
  const rl = readline.createInterface(process.stdin, process.stdout);
  const number = generateRandomNumber(1, 2);

  console.log(
    '\n',
    '🕹 🪙 Игра "Орел или решка".\n',
    'Загадано число в диапазоне от 1 до 2.\n',
    'Попробуй его отгадать.\n',
    'Удачи!\n'
  );

  while (true) {
    const answer = parseInt(await rl.question(' Ответ: '));

    if ([1, 2].includes(answer)) {
      const result = answer === number;

      console.log(result ? '\n Угадал 🎉' : '\n Не угадал 🙁');
      console.log(' --------------------------------------------------');
      rl.close();

      return result;
    }

    console.log(' Введите число от 1 до 2!\n');
  }
};

yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command({
    command: 'game',
    desc: 'Начинает игру "Орёл или решка"',
    builder(yargs) {
      return yargs
        .alias('f', 'file')
        .demandOption(['f']);
    },
    async handler(argv) {
      const result = await game();

      try {
        await fs.appendFile(`${argv.file}.txt`, `${Number(result)}`);

        console.log(` Результат игры будет сохранён в '${argv.file}.txt'\n`);
      } catch (error) {
        console.error('Произошла ошибка при сохранении результата игры\n', error);
      }
    },
  })
  .help('h')
  .alias('h', 'help')
  .parse();
