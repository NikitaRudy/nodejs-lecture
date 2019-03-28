
const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, './1.txt'), 'Hello\nWorld\n!', (err) => {
  if (err) {
      console.log('async writeFile', 'error: ', err);
      return
  }
  console.log('async writeFile', 'done!');
});

fs.writeFileSync(path.join(__dirname, './1.txt'), 'Hello\nWorld\n!')
console.log('sync writeFfile', 'done!')

