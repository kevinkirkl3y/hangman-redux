import React from 'react';

const wordList = ['redux', 'method', 'react', 'javascript', 'algorithm', 'ternary', 'program', 'api', 'argument', 'boolean', 'bug', 'char', 'object', 'oop', 'class', 'code', 'cli', 'compilation', 'conditional', 'constant', 'data', 'array', 'declaration', 'exception', 'expression', 'framework', 'hardcode', 'loop', 'iteration', 'key', 'value', 'property', 'destructuring', 'variable', 'operator', 'null', 'operand', 'pointer', 'interger', 'undefined', 'markup', 'hypertext', 'webpack', 'package', 'module', 'backend', 'server', 'source', 'statement', 'syntax', 'token', 'alert', 'allocate', 'bootstrap', 'binary', 'bind', 'div', 'bracket', 'closure', 'comment', 'constructor', 'curry', 'declaration', 'error', 'framework', 'pierre']
const randomWord = wordList[Math.floor(Math.random() * wordList.length)] 

function Word() {
  return randomWord;
}

export default Word;