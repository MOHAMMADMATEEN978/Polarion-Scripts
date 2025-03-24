//umamah's presentation task
// make changes according to ur requirements   



// Initialize log file writer
var logFile = new java.io.FileWriter("./logs/main/newTask.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
 
try {
    // Retrieve the current project from the tracker service
    var project = trackerService.getTrackerProject(workItem.getProject().getId());
    logWriter.write(currentDateTime + "\tProject: " + project.getId() + "\n");
 
    // Create a new work item of type "systemrequirement"
    var newWorkItem = project.createWorkItem("systemrequirement");
 
    // Retrieve the custom field value "newTaskId" from the main work item
    var customFieldValue = workItem.getCustomField("newTaskId");
    logWriter.write(currentDateTime + "\tMAIN WORKITEM: " + workItem.getId() + "\n");
    logWriter.write(currentDateTime + "\tCustom Field Value: " + customFieldValue + "\n");
   
 
    // If custom field has a value and new work item is created successfully
    if (customFieldValue && newWorkItem !== null) {
        // Set the title of the new work item using the custom field value
        newWorkItem.setTitle(customFieldValue);
 
        // Save the new work item
        newWorkItem.save();
        logWriter.write(currentDateTime + "\tNEW WORKITEM: " + newWorkItem.getId() + "\n");
        logWriter.write(currentDateTime + "\tWORKITEM CREATED SUCCESSFULLY.\n");
 
        // Clear the custom field in the main work item and save
        workItem.setCustomField("newTaskId", ' ');
        workItem.save();
        logWriter.write(currentDateTime + "\tCustom Field Cleared Successfully\n");
 
        // Retrieve the appropriate linking role
        var role = project.getWorkItemLinkRoleEnum().getAllOptions().get(1);
 
        // Logging the objects before linking
        logWriter.write(currentDateTime + "\tnewWorkItem: " + newWorkItem + " Type: " + typeof newWorkItem + "\n");
        logWriter.write(currentDateTime + "\trole: " + role + " Type: " + typeof role + "\n");
        logWriter.write(currentDateTime + "\tworkItem: " + workItem + " Type: " + typeof workItem + "\n");
 
        // Link the newly created work item to the main work item
        var linkItem = newWorkItem.addLinkedItem(workItem, role, null, true);
        logWriter.write(currentDateTime + "\tLinking successful: " + linkItem + "\n");
 
        // Save the new work item after linking
        newWorkItem.save();
    } else {
        logWriter.write(currentDateTime + "\tWork Item NOT CREATED.\n");
    }
} catch (runtimeException) {
    // Log any runtime exceptions
    logWriter.write(currentDateTime + "\tRun Time Exception: " + runtimeException + "\n");
} finally {
    // Ensure logs are flushed and file is closed
    logWriter.flush();
    logWriter.close();
}