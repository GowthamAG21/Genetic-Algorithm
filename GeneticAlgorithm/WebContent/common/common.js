function save(){
	
	var v_type=document.getElementById("v_type").options[document.getElementById("v_type").selectedIndex].text;
	var v_name=document.getElementById("v_name").value;
	var c_name=document.getElementById("c_name").value;
	var v_price=document.getElementById("v_price").value;
	var v_h_mileage=document.getElementById("v_h_mileage").value;
	var v_horsepower=document.getElementById("v_horsepower").value;
	var v_c_mileage=document.getElementById("v_c_mileage").value;
	var v_enginesize=document.getElementById("v_enginesize").value;
	var v_num_stoke=document.getElementById("v_num_stoke").value;
	var v_num_cylinder=document.getElementById("v_num_cylinder").value;
	var v_fuel_capacity=document.getElementById("v_fuel_capacity").value;
	var v_length=document.getElementById("v_length").value;
	
	try{
			  var callback = {
			   			sucess:sucessinsert
			   };
			  
			  var parm="";
			  parm+="&v_type="+v_type;
			  parm+="&v_name="+v_name;
			  parm+="&c_name="+c_name;
			  parm+="&v_price="+v_price;
			  parm+="&v_h_mileage="+v_h_mileage;
			  parm+="&v_horsepower="+v_horsepower;
			  parm+="&v_c_mileage="+v_c_mileage;
			  parm+="&v_enginesize="+v_enginesize;
			  parm+="&v_num_stoke="+v_num_stoke;
			  parm+="&v_num_cylinder="+v_num_cylinder;
			  parm+="&v_fuel_capacity="+v_fuel_capacity;
			  parm+="&v_length="+v_length;
			  
		      Ajaxrequest.sendAsynchRequest('POST',getServerURL()+"/AdminPage?ajax=true",callback,parm);
		  }catch(e){
			  alert(e);
		  }
}

function sucessinsert(responseobj){
	alert(responseobj.responseText);
}

function onlyNos(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    catch (err) {
        alert(err.Description);
    }
}

