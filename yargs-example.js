const fs = require('fs')
const argv = require('./index')

// Create stream with the file
const s = fs.createReadStream(argv.file)

var lines = 0
s.on('data', buf => {
  // Get the number of lines
  lines += buf.toString().match(/\n/g).length
})

s.on('end', () => {
  // Display the number of lines
  console.log(lines)
})	