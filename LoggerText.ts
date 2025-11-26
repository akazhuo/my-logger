import MyLogger from './Logger'

export default class LoggerText implements MyLogger {
  constructor(params?: any) {

  }
  verbose(content: string) {
    console.log(content);
  }
  info(content: string) {
    console.info(content);
  }
  warning(content: string) {
    console.warn(content);
  }
  error(content: string) {
    console.error(content);
  }
}