enum Type {
  verbose,
  info,
  warning,
  error,

}

export default interface MyLogger {
public function verbose(content: string)
public function info(content: string)
public function warning(content: string)
public function error(content: string)
}