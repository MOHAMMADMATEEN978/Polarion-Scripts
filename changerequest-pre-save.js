//Today's task : If a work item has no linked work item, link the appropriate work item.

var logFile = new java.io.FileWriter("./logs/main/linkingWI.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();

try {
    // Fetch linked work items
    var linkedItems = workItem.getLinkedWorkItems();
    logWriter.write(currentDateTime + " linkedItems: " + linkedItems + "\n");

    // Get the project ID and tracker project
    var projectId = workItem.getProjectId();
    var trackerProject = trackerService.getTrackerProject(projectId);
    //  setting the field "priority"
    var priority = workItem.getPriority();
    logWriter.write(currentDateTime + "\t priority  " + priority.getName() +"\n");
    var linkedItems = workItem.getLinkedWorkItems();
    logWriter.write(currentDateTime + "true" + linkedItems + "\n");

    for(var i=0; i < linkedItems.length; i++){
        var val = linkedItems[i].getPriority().getName();
        logWriter.write(currentDateTime + "\t val " + val + "\n");
        
        if (val == priority) {
            returnvalue = true;
        }else{
            linkedItems[i].setPriority(priority)
            linkedItems[i].save()
        }
    }

    if (linkedItems.size() === 2) {
        // No linked work items; add the appropriate work item
        var itemToLink = trackerService.findWorkItem(projectId, "CONF-527");
        if (itemToLink != null) {
            var role = trackerProject.getWorkItemLinkRoleEnum().wrapOption("implements");
            workItem.addLinkedItem(itemToLink, role, null, false); // Link the item
            logWriter.write(currentDateTime + " Linked item: " + itemToLink.getId() + "\n");
        } else {
            logWriter.write(currentDateTime + " CONF-527 not found in project " + projectId + "\n");
        }
        
        workItem.save(); // Save changes
    } else {
        returnValue = "existing workitem";
    }

} catch (runtimeException) {
    logWriter.write(currentDateTime + "\tRuntime Exception Occurred: " + runtimeException + "\n");
}
logWriter.flush();





   