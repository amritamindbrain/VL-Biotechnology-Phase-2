/**loading progress bar on the stage*/
var progressText = new createjs.Text("", "16px Arial", "#000000");
	//call the function for loading progress
loadingProgress = function (queue,stage,cWidth){
	progressText.x = cWidth/2.4 - progressText.getMeasuredWidth() / 2;
	progressText.y = cWidth/2.4;
	progressText.text="nefjhasefbjhsdabj"
	stage.addChild(progressText); 	
	queue.on("progress", function(){handleProgress(queue)});
	stage.update();
}
/*text display for the loader*/
handleProgress = function(queue){	
	progressText.text = (queue.progress*100|0) + " % Loaded";	
}


	