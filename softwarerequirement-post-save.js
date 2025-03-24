var logFile = new java.io.FileWriter("./logs/main/newWorkitem2.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
try{
    var project = trackerService.grtTrackerProject(WorkItem.getProject().getId());
    logWriter.write(currentDateTime + "\t project : " + project.getId() + "\n");
    var query = "type:systemrequirement AND title:abc"
    var existingItems = trackerService.queryWorkItems(project, query, "id");
    logWriter.write(currentDateTime + "\t Existing Items : " + existingItems.length + "\n");
    
    var backlink = workItem.getLinkedWorkItems();
    logWriter.write(currentDateTime + "\backlink: " +backlink.size()+ "\n");

    if(existingItems.length == "0" ){
       for (var i = 0; i < backlink.size(); i++) {

        var newWorkItem = project.createWorkItem("systemrequirement");
        newWorkItem.setTitle("abc");
        newWorkItem.save();

        logWriter.write(currentDateTime + "\t new work item created : " + newWorkItem.getId() + "\n");
        break;
       }


    }else{
        logWriter.write(currentDateTime + "\t Work Item already exixt: " + newWorkItem.getId()+ "\n");
    }
}
catch(runtimeException){
    logWriter.write(currentDateTime + "\t runtime exception occured" + runtimeException + "\n");

}finally{
    logWriter.flush();
}