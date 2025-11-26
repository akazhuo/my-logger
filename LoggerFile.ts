import MyLogger from './Logger'
const fs = require('fs/promises');

export default class LoggerFile implements MyLogger {
  filePath: string;

  constructor(params?: any) {
    this.filePath = params.filePath + '/' + Date.now() + '.txt'
  }

  async verbose(content: string) {
    await fs.appendFile(this.filePath, content);
  };
  async info(content: string) {
    await fs.appendFile(this.filePath, content);
  }
  async warning(content: string) {
    await fs.appendFile(this.filePath, content);
  }
  async error(content: string) {
    await fs.appendFile(this.filePath, content);
  }
}