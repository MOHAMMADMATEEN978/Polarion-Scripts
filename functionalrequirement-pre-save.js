var logFile = new java.io.FileWriter("./logs/main/linking_wis.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();

try {
    var workitem = workItem.getId();
    logWriter.write(currentDateTime + "\t Workitem ID : " + workitem +"\n");

    var linkwi = workItem.getLinkedWorkItems();
    
    var linkedIds = [];
    for (var i = 0; i < linkwi.length; i++) {
        linkedIds.push(linkwi[i].getId());
    }
    logWriter.write(currentDateTime + "\t Linked Workitem IDs  : " + linkedIds.join(", ") + "\n");

    var linkedCustomField = linkwi[0].getPriority().getName();
    logWriter.write(currentDateTime + "\t Custom field for FIRST linked workitem  : " + linkedCustomField + "\n");

    var linkedCustomField = linkwi[1].getPriority().getName();
    logWriter.write(currentDateTime + "\t Custom field for SECOND linked workitem  : " + linkedCustomField + "\n");

    var linkedCustomField = linkwi[2].getPriority().getName();
    logWriter.write(currentDateTime + "\t Custom field for THIRD linked workitem  : " + linkedCustomField + "\n");

    var linkedCustomField = linkwi[2].getSeverity().getName();
    logWriter.write(currentDateTime + "\t Custom field for FORTH linked workitem  : " + linkedCustomField + "\n");

} catch (error) {
    logWriter.write(currentDateTime + "\t ERROR : " + error + "\n");
}

logWriter.flush();