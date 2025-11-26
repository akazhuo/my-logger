1.使用示例
`npx ts-node main.ts`
2.设计理念
Logger 为接口类，LoggerText、LoggerFile 分别实现接口类方法 verbose、info、warning、error。
LoggerFile 使用简单 node.js File api 读写文件。
3.未来扩展
扩展 Logger 接口类、或新建对应 Logger 子类。