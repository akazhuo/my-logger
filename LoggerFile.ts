import MyLogger from './Logger'
const fs = require('fs');
const { join } = require('node:path');

export default class LoggerFile implements MyLogger {
  filePath: string;

  constructor(params?: any) {
    const date = new Date();
    const logFolder = join(__dirname, 'logs');
    try {
      if (!fs.existsSync(logFolder)) {
        fs.mkdirSync(logFolder);
      }
    } catch (err) {
      console.error(err);
    }
    // ./logs/YYYY-MM-DD.txt
    this.filePath = `${logFolder}/${new Date().toISOString().split('T')[0]}.txt`
  }

  write(content: string) {
    fs.appendFile(this.filePath, content + '\n', (err: Error) => {
      if (err) {
        console.log(err);
      } else {
        console.log('write log file succeed');
      }
    })
  };
}