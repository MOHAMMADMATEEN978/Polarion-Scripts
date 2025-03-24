//First get the workitem and their title and after that set the workitem title as description

var logFile = new java.io.FileWriter("./logs/main/f_r.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
try
   { 
    var workitem = workItem.getId();
    logWriter.write(currentDateTime + "\t Workitem ID : " + workitem +"\n");
     var title = workItem.getTitle();
     logWriter.write(currentDateTime + "\t Workitem Title : " + title + "\n ");
     workItem.setTitle("Description 's");
     var description = workItem.getTitle();
     logWriter.write(currentDateTime + "\t New Workitem Title : " + description + "\n")
   }
     catch (error) 
     { 
        logWriter.write(currentDateTime + "\t Runtime Exception Occured : " + error + "\n");
     }
finally
{ 
   logWriter.flush();
   logWriter.close();
}