const fs = require('fs')

let startTime,endTime,milisec_diff

let now = new Date();

fs.readFile('cypress/fixtures/temp/executionTime/startTime.json', 'utf8', (err, jsonString) => {
  if (err) 
  {
    console.log("Error reading file from disk:", err)
    return
  }
  try
  {
    const time = JSON.parse(jsonString)
    console.log("startTime:", new Date(time.startTime).toLocaleString())
    console.log("endTime:", now.toLocaleString())

    startTime=new Date(time.startTime).getTime()
    endTime=now.getTime()

    if (endTime < startTime) 
    milisec_diff = startTime - endTime
    else
    milisec_diff = endTime - startTime    

    var msec = milisec_diff;
    var days = Math.floor(msec / 1000 / 60 / 60 / 24)
    msec -= days * 1000 * 60 * 60 * 24;
    var hours = Math.floor(msec / 1000 / 60 / 60);
    msec -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(msec / 1000 / 60);
    msec -= minutes * 1000 * 60;
    var seconds = Math.floor(msec / 1000);
    msec -= seconds * 1000;
    console.log(days+ " Days "+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds")

    const execTime ={
      startTime: new Date(time.startTime).toLocaleString() ,
      endTime: now.toLocaleString() ,
      executionTime: days+ " Days "+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds" 
    }
    const newJsonString = JSON.stringify(execTime)
    fs.writeFile('cypress/fixtures/temp/executionTime/executionTime.json', newJsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
    })
   
  } 
  catch(err)
  {
    console.log('Error parsing JSON string:', err)
  }
})
