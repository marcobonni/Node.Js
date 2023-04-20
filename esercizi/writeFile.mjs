import * as fs from 'fs';

fs.writeFile('myfile.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File saved!');
});
