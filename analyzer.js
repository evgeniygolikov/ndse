const fs = require('fs');
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command({
    command: 'analyze',
    desc: 'Анализирует результаты игры "Орёл или решка"',
    builder(yargs) {
      return yargs
        .alias('f', 'file')
        .demandOption(['f']);
    },
    handler(argv) {
      const rs = fs.createReadStream(`${argv.file}.txt`, {highWaterMark: 1, encoding: 'utf8'});

      const result = {
        win: 0,
        lose: 0,
      };

      rs.on('data', chunk => {
        const gameResult = Boolean(Number(chunk));

        if (gameResult) {
          result.win += 1;
        } else {
          result.lose += 1;
        }
      });

      rs.on('error', console.error);

      rs.on('end', () => {
        const {win, lose} = result;
        const total = win + lose;
        const ratio = (win / total * 100).toFixed(2);

        console.log(
          '\n',
          `Общее количество партий: ${total}\n`,
          `Количество выигранных партий: ${win}\n`,
          `Количество проигранных партий: ${lose}\n`,
          `Процентное соотношение выигранных партий: ~ ${ratio}%\n`
        );
      });
    },
  })
  .help('h')
  .alias('h', 'help')
  .parse();
