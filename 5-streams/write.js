const fs = require('fs');
const path = require('path');


const pathToBigFile = path.join(__dirname, 'bigfile.txt');


async function generateBigFile(lines) {
    const writable = fs.createWriteStream(pathToBigFile, {
        highWaterMark: 16 * 1024
    });

    const str = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \n';

    let percentage = 0;

   for (let i = 0; i < lines; i++) {
       await write(writable, str);
       
       const curPercentage = Math.ceil(i / lines * 100);

       if (curPercentage !== percentage) {
           percentage = curPercentage;
           console.log(`${percentage}%`);
       }
   }

    writable.end('THE END');
    console.log('drain was emitted', counter, 'times');
    console.log('done');
}

let counter = 0;
function write(writable, chunk) {
    return new Promise((resolve, reject) => {
        if (!writable.write(chunk)) {
            writable.once('drain', () => {
                counter++;
                resolve();
            });
        } else {
            resolve();
        }
    });
}


generateBigFile(10 ** 6);