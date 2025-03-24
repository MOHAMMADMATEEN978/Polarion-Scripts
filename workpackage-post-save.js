var logFile = new java.io.FileWriter("./logs/main/settingpriority.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
try
    {
    var priority = workItem.getPriority();
    logWriter.write(currentDateTime + "\t priority  " + priority.getName() +"\n");
    var linkedItems = workItem.getLinkedWorkItems();
    logWriter.write(currentDateTime + "true" + linkedItems + "\n");

    for(var i=0; i < linkedItems.length; i++)
        {
        var val = linkedItems[i].getPriority().getName();
        logWriter.write(currentDateTime + "\t val " + val + "\n");
            if (val == priority)
            {
            returnvalue = true;
            }
            else
            {
            linkedItems[i].setPriority(priority)
            linkedItems[i].save()
            }
        }
    }
catch (runtimeException)
{
    logWriter.write(currentDateTime + "\tRuntime Exception Occured: " + runtimeException + "\n");
}
logWriter.flush();