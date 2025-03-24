var logFile = new java.io.FileWriter("./logs/main/changerequest.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();

try {
    var custom = workItem.getCustomField("severityOfHarm");
    var custom1 = workItem.getCustomField("occurrenceOfHarm");
        
        logWriter.write(currentDateTime + "\t workitem: "+ custom1 +"\n");
    if (custom.getId() == "critical" && custom1.getId() == "improbable"||
        custom.getId() == "critical" && custom1.getId() == "improbable"||
        custom.getId() == "negligible" && custom1.getId() == "occasional"||
        custom.getId() == "improbable" && custom1.getId() == "critical"||
        custom.getId() == "major" && custom1.getId() == "remote"||
        custom.getId() == "minor" && custom1.getId() == "improbable") {
            
        workItem.setEnumerationValue("riskLevel","zone1"); 
    }
    else if(custom.getId() == "minor" && custom1.getId() == "common"||
            custom.getId() == "castastrophic" && custom1.getId() == "improbable"||
            custom.getId() == "critical" && custom1.getId() == "occasional"||
            custom.getId() == "major" && custom1.getId() == "occasional"||
            custom.getId() == "critical" && custom1.getId() == "remote")
    {
        workItem.setEnumerationValue("riskLevel","zone2"); 
    }
    else{
        workItem.setEnumerationValue("riskLevel","zone3");
    }
    logWriter.write(currentDateTime + "\t workitem: "+ +"\n");

    workItem.save();

} catch (error) {
    logWriter.write(currentDateTime + "\t Runtime Exception Occured : " + error + "\n");
}
logWriter.flush();