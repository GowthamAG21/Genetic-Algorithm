Ajaxrequest={browser_type:[
		'MSXML2.XMLHTTP.3.0',
		'MSXML2.XMLHTTP',
		'Microsoft.XMLHTTP'
	],
     ajaxRequest: function(){
	 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] 
	 if (window.ActiveXObject){
	  for (var i=0; i<activexmodes.length; i++){
	   try{
	    return new ActiveXObject(activexmodes[i])
	   }
	   catch(e){
	    //suppress error
	   }
	  }
	 }
	 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
	  return new XMLHttpRequest()
	 else
	  return false
	}
,
    sendAsynchRequest:function(method, uri, callback, data,modeSynch){
     	var requestObject = this.ajaxRequest();
    	if(!requestObject){
    		return null;
    	}else{
    		//data=((data)?data:"")+"&AjaxRequest="+true;
    		if(method=="GET"){
    				uri+="?"+data;
    		}
    		else if(method=="POST"){
    			//uri+="?"+data
    		}
    		requestObject.method=method;
    		requestObject.uri=uri;
    		requestObject.callback=callback;
    		requestObject.data=data;
    		requestObject.open(method, uri, true);
	    	requestObject.argument = callback.argument;
			
	    	requestObject.onreadystatechange = function(){
			if(requestObject && requestObject.readyState == 4){
				callback.sucess(requestObject);
			}
			}
			requestObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    	requestObject.send(data);
	    	
			return requestObject;
    	}
    }
}