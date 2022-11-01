const reporter = require('cucumber-html-reporter');
const fs = require('fs')
var data=fs.readFileSync('cypress/fixtures/temp/executionTime/executionTime.json', 'utf8');
var time=JSON.parse(data)
var data1=fs.readFileSync('cypress.json', 'utf8');
var cypress=JSON.parse(data1)
 
  const options = {
    theme: 'hierarchy',
    jsonDir: 'cypress/cucumberReports/cucumberJsonReports',
    output: 'cypress/cucumberReports/cucumberReport.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    ignoreBadJsonFile: true,
    name:'QA Automation for '+cypress.env.clientName,
    storeScreenshots:true,
    screenshotsDirectory:'cypress/cucumberReports/screenshots',
    scenarioTimestamp: true,
    metadata: {
      "Client": cypress.env.clientName,
      "Browser": "Chrome",
      "Platform": "Windows 10",
      "Execution Start Time":time.startTime ,   
      "Execution End Time":time.endTime    ,
      "Elapsed Execution Time":time.executionTime    
    }
  }

reporter.generate(options);
