
var fs = require('fs')
var tty = require('tty')
var assert = require('assert')

if (tty.isatty(0)) {
  exports.stdin = process.stdin
} else {
  var ttyFd = fs.openSync('/dev/tty', 'r')
  assert(tty.isatty(ttyFd))
  exports.stdin = new tty.ReadStream(ttyFd)
}

if (tty.isatty(1)) {
  exports.stdout = process.stdout
} else {
  var ttyFd = fs.openSync('/dev/tty', 'w')
  assert(tty.isatty(ttyFd))
  exports.stdin = new tty.WriteStream(ttyFd)
}
