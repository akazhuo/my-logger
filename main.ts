import LoggerFile from './LoggerFile';
import LoggerText from './LoggerText'

const lt = new LoggerText()
console.log(lt);

lt.verbose('test')

const lf = new LoggerFile({ filePath: './' })
lf.verbose('test')