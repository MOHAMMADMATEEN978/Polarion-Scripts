var logFile = new java.io.FileWriter("./logs/main/issues.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
var errorMessage = "";
var returnValue = "";
try {
    var workitem = workItem.getId();
    logWriter.write(currentDateTime + "\t Workitem Id :  " + workitem + "\n ");

    var title = workItem.getTitle();
    logWriter.write(currentDateTime + "\t WorkItem Title : " + title + "\n ");

    var risklevel = workItem.getCustomField("riskLevel");
    logWriter.write(currentDateTime + "\t Risk Level = " + risklevel + "\n ");

    var testcoverage = workItem.getCustomField("testCoverage");
    logWriter.write(currentDateTime + "\t Test Coverage = " + testcoverage + "\n ");

    if (risklevel == null || risklevel < 1) {
        errorMessage="Work item cannot be saved. Risk Level is less than 1 or is empty."
        logWriter.write(currentDateTime + "\t " +errorMessage+ "\n ");
    }
    if (testcoverage == null || testcoverage < 1) {
        errorMessage="Work item cannot be saved. Risk Level is less than 1 or is empty."
        logWriter.write(currentDateTime + "\t " +errorMessage+ "\n ");
    }
    workItem.save();
} catch (error) {
    logWriter.write(currentDateTime + "\t Error: " + error + "\n ");
} finally {
    logWriter.flush();
    logWriter.close();
}
if (errorMessage) {
    returnValue = errorMessage;
}
returnValue;