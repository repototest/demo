const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入> ',
});

rl.prompt();

rl.on('line', line => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`你输入的是：'${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('再见!');
  process.exit(0);
});
