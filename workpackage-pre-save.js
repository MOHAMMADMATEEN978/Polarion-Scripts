// If a parent requirement moves to "Approved," automatically update all child tasks to "In Progress".

//only works on the direct liked workitem , workflow is same for the direct and
//back linked stil not working for the back linked workitem

var logFile = new java.io.FileWriter("./logs/main/status-change.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();

try {
    var workItemId = workItem.getId();
    logWriter.write(currentDateTime + "\t workitem Id : " + workItemId + "\n");

    status1=workItem.setEnumerationValue("status","accepted");
    logWriter.write(currentDateTime + "\t Status changed to: "+ status1 +"\n");

    var linkedworkitem = workItem.getLinkedWorkItemsDirect();
    logWriter.write(currentDateTime + "\t linked workitems : "+ linkedworkitem + "\n")
        for (var i = 0; i < linkedworkitem.length; i++)
            {
            stat = linkedworkitem[i].setEnumerationValue("status","open");
            logWriter.write(currentDateTime + "\t linked workitem status : " + stat + "\n");
            }
    } 
catch (error)
{ 
    logWriter.write(currentDateTime + "\t error" + error + "\n");
} 
finally
{
    logWriter.flush();
}