const fs = require('fs');
const csv = require('csv-parser');

const canadianFile = 'canada.txt';
const americanFile = 'usa.txt';

if (canadianFile || americanFile) {
  fs.unlink(canadianFile, (err) => {
    if (err) {
      console.log('Canadian Text File Not Found');
    }
  });
  fs.unlink(americanFile, (err) => {
    if (err) {
      console.log('American Text File Not Found');
    }
  });
  console.log('Files Removed Successfully');
}

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (data) => {
    if (data['country'] === 'Canada') {
      fs.writeFileSync(
        canadianFile,
        `${data['country']}, ${data['year']}, ${data['population']} \n`,
        { flag: 'a' }
      );
    } else if (data['country'] === 'United States') {
      fs.writeFileSync(
        americanFile,
        `${data['country']}, ${data['year']}, ${data['population']} \n`,
        { flag: 'a' }
      );
    }
  })
  .on('end', () => {
    console.log(fs.readFileSync(canadianFile).toString());
    console.log(fs.readFileSync(americanFile).toString());
  });
