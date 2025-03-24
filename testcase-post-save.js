//Today's task : If a work item has no linked work item, link the appropriate work item.
var logFile = new java.io.FileWriter("./logs/main/link.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
try {
    // Fetch linked work items
    var linkedItems = workItem.getLinkedWorkItems();
    logWriter.write(currentDateTime + " linkedItems: " + linkedItems + "\n");
    // Get the project ID and tracker project
    var projectId = workItem.getProjectId();
    var trackerProject = trackerService.getTrackerProject(projectId);
    if (linkedItems.size() === 0) {
        // No linked work items; add the appropriate work item
        var itemToLink = trackerService.findWorkItem(projectId, "CONF-522");
        if (itemToLink != null) {
            var role = trackerProject.getWorkItemLinkRoleEnum().wrapOption("implements");
            workItem.addLinkedItem(itemToLink, role, null, false); // Link the item
            logWriter.write(currentDateTime + " Linked item: " + itemToLink.getId() + "\n");
        } else {
            logWriter.write(currentDateTime + " CONF-522 not found in project " + projectId + "\n");
        }
        workItem.save(); // Save changes
    } else {
        returnValue = "workItem is linked";
    }
} catch (runtimeException) {
    logWriter.write(currentDateTime + "\tRuntime Exception Occurred: " + runtimeException + "\n");
}
logWriter.flush();