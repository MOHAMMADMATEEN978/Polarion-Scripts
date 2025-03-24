var logFile = new java.io.FileWriter("./logs/main/statusapproved.log", true);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
var errorMessage = "";
var returnValue = "";
try {
    var workItemId = workItem.getId();
    logWriter.write(currentDateTime + "\t Workitem : " + workItemId + "\n");

    var linkedWorkItems = workItem.getLinkedWorkItems();
    logWriter.write(currentDateTime + "\t Linked Workitems count: " + linkedWorkItems.size() + "\n");
    for (var i = 0; i < linkedWorkItems.size(); i++) {
        var linkedWorkItem = linkedWorkItems.get(i);
        var linkedStatus = linkedWorkItem.getStatus().getId();
        logWriter.write(currentDateTime + "\t Linked Workitem ID: " + linkedWorkItem.getId() + ", Status: " + linkedStatus + "\n");
        if (linkedStatus !== "approved") {
            returnValue = "Some linked work items are not approved.";
            break;
        }
    }
    workItem.save();
} catch (error) {
    errorMessage = error.message;
    if (logWriter) {
        logWriter.write(currentDateTime + "\t Error: " + errorMessage + "\n");
    }
    returnValue = errorMessage;
} finally {
    logWriter.flush();
    logWriter.close();
}
errorMessage;
returnValue;