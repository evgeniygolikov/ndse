
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const dayjs = require('dayjs');

yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command({
    command: 'current',
    desc: 'Показывает текущую дату.',
    builder(yargs) {
      return yargs
        .boolean(['y', 'm', 'd'])
        .alias('y', 'year')
        .alias('m', 'month')
        .alias('d', 'date');
    },
    handler(argv) {
      if (argv.y) {
        console.log(dayjs().year());
      } else if (argv.m) {
        console.log(dayjs().month() + 1);
      } else if (argv.d) {
        console.log(dayjs().date());
      } else {
        console.log(dayjs().toISOString());
      }
    },
  })
  .command({
    command: 'add',
    desc: 'Показывает будущую дату относительно текущей',
    builder(yargs) {
      return yargs
        .alias('y', 'year')
        .alias('m', 'month')
        .alias('d', 'day');
    },
    handler(argv) {
      const resultDate = Object.keys(argv).reduce((date, key) => {
        if (['day', 'month', 'year'].includes(key)) {
          return date.add(argv[key], key);
        }

        return date;
      }, dayjs());

      console.log(resultDate.toISOString());
    },
  })
  .command({
    command: 'sub',
    desc: 'Показывает прошлую дату относительно текущей',
    builder(yargs) {
      return yargs
        .alias('y', 'year')
        .alias('m', 'month')
        .alias('d', 'day');
    },
    handler(argv) {
      const resultDate = Object.keys(argv).reduce((date, key) => {
        if (['day', 'month', 'year'].includes(key)) {
          return date.subtract(argv[key], key);
        }

        return date;
      }, dayjs());

      console.log(resultDate.toISOString());
    },
  })
  .help()
  .parse();
