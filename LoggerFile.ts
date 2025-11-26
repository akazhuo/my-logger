import MyLogger from './Logger'
const fs = require('fs');
const { join } = require('node:path');

export default class LoggerFile implements MyLogger {
  filePath: string;

  constructor(params?: any) {
    const date = new Date();
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ];
    const logFolder = join(__dirname, 'logs');
    try {
      if (!fs.existsSync(logFolder)) {
        fs.mkdirSync(logFolder);
      }
    } catch (err) {
      console.error(err);
    }
    this.filePath = `${logFolder}/${year}-${month + 1}-${day}.txt`
  }

  write(content: string) {
    fs.appendFile(this.filePath, content + '\n', { flag: 'a+' }, (err: Error) => {
      if (err) {
        console.log(err);
      } else {
        console.log('write log file succeed');
      }
    })
  };
}