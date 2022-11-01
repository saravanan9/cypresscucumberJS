const fs = require('fs')

let startTime = new Date();
console.log(startTime.toLocaleString())

const time ={
  startTime: startTime 
}
const jsonString = JSON.stringify(time)
fs.writeFile('cypress/fixtures/temp/executionTime/startTime.json', jsonString, err => {
  if (err) {
      console.log('Error writing file', err)
  } else {
      console.log('Successfully wrote file')
  }
})
