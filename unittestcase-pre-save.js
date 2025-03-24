var logFile = new java.io.FileWriter("./logs/main/mateen.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
var errorMessage = "";
var returnValue = "";

try {
    
    var linkedWorkitems = workItem.getLinkedWorkItems();
    logWriter.write(currentDateTime + "\tRuntime Exception Occured " + linkedWorkitems + "\n ");

if (linkedWorkitems.length > 1) {

    returnValue = "remove linked workitem if they are more than one ";
    
}

    }
catch(runTimeException){

}
logWriter.flush();
errorMessage;
returnValue;