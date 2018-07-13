function searchVehicle(){

	document.getElementById("Mainblock").innerHTML="";

	var data='<div id="divMianblock" style="width: 100%">'+
	'		<div style="display: table;">'+
	'			<div style="display: table-row;">'+
	'				<div style="display: table-cell;vertical-align:middle;padding-right: 20px;">'+
	'					select Search Type</div>'+
	'				<div style="display: table-cell;vertical-align:middle;height:30px;padding-right: 20px;">'+
	'					<select class="form-control" id="searchType">'+
	'						<option id="comp_name">company name</option>'+
	'						<option id="vehicle_name">vehicle name</option>'+
	'					</select>'+
	'				</div>'+
	'				<div style="display: table-cell; padding-right: 20px;">'+
	'					<div class="input-group input-group-lg">'+
	'<input category="free-website-templates" value="" style="height:30px;" type="text" class="form-control search_box" placeholder="" name="q" id="searchText">'+
	'<div class="input-group-btn">'+
	'  <button class="btn btn-default" style="font-size:10px;height:30px;" type="submit" onclick="submitSearch();" id="search_button">'+
	'  <i class="glyphicon glyphicon-search"></i></button>'+
	'</div>'+
	'</div>'+
	'				</div>'+
	'			</div>'+
	'		</div> '+
	'		<div id="searchresult" style="width:95%;height:100%;padding-bottom: 10px;padding-top: 10px; border:1px 1px 1px 1px #335599;">'+
	'		</div>'+
	'	</div>';

	document.getElementById("Mainblock").innerHTML=data;

}


function addVehicle(){

	document.getElementById("Mainblock").innerHTML="";
	var data='<div style="width: 100%; height: 100%; display: block; background-color:white;">'+
	'						<div class="displaytable" style="width: 100%">'+
	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter vehicle type</div>'+
	'									<select style="width:200px;" class="form-control" id="v_type">'+
	'										<option name="2">2 wheeler</option>'+
	'										<option name="3">3 wheeler</option>'+
	'										<option name="4">4 wheeler</option>'+
	'									</select>'+
	'									<div class="input-group-addon">&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter vehicle Name</div>'+
	'									<input class="form-control" type="text" id="v_name"'+
	'										placeholder="Enter the vechile Name" size="50">'+
	'									<div class="input-group-addon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter Company Name</div>'+
	'									<input class="form-control" type="text" id="c_name"'+
	'										placeholder="Enter the Company Name" size="50">'+
	'									<div class="input-group-addon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter Price</div>'+
	'									<input type="text" class="form-control" onkeypress="return onlyNos(event,this);" id="v_price" placeholder="Enter Price (only nymber)"'+
	'										size="50">'+
	'									<div class="input-group-addon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter Highway Mileage</div>'+
	'									<input class="form-control" onkeypress="return onlyNos(event,this);" type="text" id="v_h_mileage"'+
	'										placeholder="Enter Highway Mileage (only nymber)" size="50"/>'+
	'									<div class="input-group-addon">									Kms </div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter Horse power</div>'+
	'									<input class="form-control" onkeypress="return onlyNos(event,this);" type="text" id="v_horsepower"'+
	'										placeholder="Enter Hourse Power (only nymber)" size="50">'+
	'									<div class="input-group-addon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter City Mileage</div>'+
	'									<input class="form-control" type="text" id="v_c_mileage" onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter City Mileage (only nymber)" size="50">'+
	'									<div class="input-group-addon">kms</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter Engine size</div>'+
	'									<input class="form-control" id="v_enginesize" type="text" onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter Engine size (only nymber)" size="50">'+
	'									<div class="input-group-addon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter Number of stoke</div>'+
	'									<input class="form-control" type="text" id="v_num_stoke" onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter Number of stoke (only nymber)" size="50">'+
	'									<div class="input-group-addon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter No of Cylinders</div>'+
	'									<input class="form-control" type="text" id="v_num_cylinder" onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter No of Cylinders (only nymber)" size="50">'+
	'									<div class="input-group-addon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter fuel capacity</div>'+
	'									<input class="form-control" type="text" id="v_fuel_capacity" onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter fuel capacity (only nymber)" size="50">'+
	'									<div class="input-group-addon">liters</div>'+
	'								</div>'+
	'							</div>'+

	'							<div class="displayrow">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">Enter vehicle length</div>'+
	'									<input class="form-control" type="text" id="v_length" placeholder="Enter vehicle length (only nymber)" size="50" onkeypress="return onlyNos(event,this);">'+
	'									<div class="input-group-addon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'						</div>'+

	'						<div align="center" class="displaytable" style="width:100%;padding-top:15px;">'+
	'							<div style="display: table-row;">'+
	'								<div style="display: table-cell;">'+
	'									<input class="btn btn-default" onclick="validateform();" type="button" value="Save">'+
	'									<input class="btn btn-default" type="button" value="Clear">'+
	'								</div>'+
	'							</div>'+
	'						</div>';
	document.getElementById("Mainblock").innerHTML=data;

}

function submitSearch(){

	var searchType=document.getElementById("searchType").options[document.getElementById("searchType").selectedIndex].id;
	var searchText=document.getElementById("searchText").value;
	var data="&searchText="+searchText+"&searchType="+searchType;
	submiturl(1,data);
}

function submiturl(mode,data){
	try{
		var callback = {
				sucess:sucessSearchPostfun
		};
		Ajaxrequest.sendAsynchRequest('POST',getServerURL()+"/SearchPage?ajax=true",callback,"mode="+mode+data);
	}catch(e){
		alert(e);
	}
}


function sucessSearchPostfun(responeObject){
	var data=eval("("+responeObject.responseText+")");
	document.getElementById("searchresult").innerHTML="";
	var innerData='<div style="display:table;width:95%;border-color:#335599;">'+
	'				<div style="display:table-row; background-color:#335599;">'+
	'					<div style="display: table-cell; padding-left:10px; color: white;font-weight: bold;">company name</div>'+
	'					<div style="display: table-cell; padding-left:10px; color: white;font-weight: bold;">vehicle name</div>'+
	'				</div>';



	for ( var i = 0; i < data.length; i++) {

		if(i%2==0){
			innerData+='<div style="display:table-row; background-color:white;">'+
			'					<div style="display: table-cell; padding-left:10px;"> <a id='+data[i].v_id+' onclick="openV_info(this)">'+data[i].c_name+'</a></div>'+
			'					<div style="display: table-cell; padding-left:10px;"> <a id='+data[i].v_id+' onclick="openV_info(this)">'+data[i].v_name+'</a></div>'+
			'				</div>';
		}else{
			innerData+='<div style="display:table-row; background-color:#f2f2f2;">'+
			'					<div style="display: table-cell; padding-left:10px;"> <a id='+data[i].v_id+' onclick="openV_info(this)">'+data[i].c_name+'</a></div>'+
			'					<div style="display: table-cell; padding-left:10px;"> <a id='+data[i].v_id+' onclick="openV_info(this)">'+data[i].v_name+'</a></div>'+
			'				</div>';	
		}
	}
	if(data.length==0){
		alert("No result Found");
	}
	innerData+="</div>";
	document.getElementById("searchresult").innerHTML=innerData;
}

function openV_info(obj){
	submitV_info(2,"&v_id="+obj.id);
}

function submitV_info(mode,data){
	try{
		var callback = {
				sucess:sucessSearchPostfun_1
		};
		Ajaxrequest.sendAsynchRequest('POST',getServerURL()+"/SearchPage?ajax=true",callback,"mode="+mode+data);
	}catch(e){
		alert(e);
	}
}

function sucessSearchPostfun_1(responseObject){
	var data=eval("("+responseObject.responseText+")");
	document.getElementById("searchresult").innerHTML="";

	var innerData='<div style="display:table;width:95%;border-color:#335599;">';
	/*'				<div style="display:table-row; background-color:#335599;">'+
	'					<div style="display: table-cell; padding-left:10px; color: white;font-weight: bold;">Type</div>'+
	'					<div style="display: table-cell; padding-left:10px; color: white;font-weight: bold;">Value</div>'+
	'				</div>';*/



	innerData+='<div style="display:table-row;">'+
	'<div class="input-group"><div class="input-group-addon" style="width:500px;">vehicle type</div>'+
	'<select id="v_type" class="form-control" >'+
	'										<option name="2">2 wheeler</option>'+
	'										<option name="3">3 wheeler</option>'+
	'										<option name="4">4 wheeler</option>'+
	'									</select>'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;">vehicle Name</div>'+
	'									<input disabled class="form-control" type="text" id="v_name"'+
	'										placeholder="Enter the vechile Name" value='+data[0].v_name+' size="30">'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;">Company Name</div>'+
	'									<input disabled type="text" class="form-control" id="c_name"'+
	'										placeholder="Enter the Company Name" value='+data[0].c_name+' size="30">'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;">Price</div>'+
	'									<input disabled type="text" class="form-control" onkeypress="return onlyNos(event,this);" id="v_price" value='+data[0].v_price+' placeholder="Enter Price (only nymber)"'+
	'										size="30">'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;"> Highway Mileage</div>'+
	'									<input disabled class="form-control" onkeypress="return onlyNos(event,this);" type="text" value='+data[0].v_h_mileage+' id="v_h_mileage"'+
	'										placeholder="Enter Highway Mileage (only nymber)" size="30">'+
	'									<div class="input-group-addon"> Kms</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;"> Horse power</div>'+
	'									<input  disabled class="form-control" onkeypress="return onlyNos(event,this);" type="text" value='+data[0].v_horsepower+' id="v_horsepower"'+
	'										placeholder="Enter Hourse Power (only nymber)" size="30">'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;"> City Mileage</div>'+
	'									<input disabled class="form-control" type="text" id="v_c_mileage" value='+data[0].v_c_mileage+' onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter City Mileage (only nymber)" size="30"/><div class="input-group-addon">Kms</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;"> Engine size</div>'+
	'									<input disabled id="v_enginesize" class="form-control" type="text" value='+data[0].v_enginesize+' onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter Engine size (only nymber)" size="30">'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div   class="input-group"><div class="input-group-addon" style="width:500px;">Number of stoke</div>'+
	'									<input disabled class="form-control" type="text" id="v_num_stoke" value='+data[0].v_num_stoke+' onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter Number of stoke (only nymber)" size="30">'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div  class="input-group"><div class="input-group-addon" style="width:500px;">No of Cylinders</div>'+
	'									<input disabled class="form-control" type="text" id="v_num_cylinder" value='+data[0].v_num_cylinder+' onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter No of Cylinders (only nymber)" size="30">'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;"> fuel capacity</div>'+
	'									<input disabled class="form-control" type="text" id="v_fuel_capacity" value='+data[0].v_fuel_capacity+' onkeypress="return onlyNos(event,this);"'+
	'										placeholder="Enter fuel capacity (only nymber)" size="30">'+
	'									<div class="input-group-addon">liters</div>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display:table-row;">'+
	'								<div class="input-group"><div class="input-group-addon" style="width:500px;"> vehicle length</div>'+
	'									<input disabled class="form-control" type="text" value='+data[0].v_length+' id="v_length" placeholder="Enter vehicle length (only nymber)" size="30" onkeypress="return onlyNos(event,this);">'+
	'									<div class="input-group-addon"> &nbsp;</div>'+
	'								</div>'+
	'							</div>'+
	'						</div>'+

	'</div>'




	innerData+='</div>';
	document.getElementById("searchresult").innerHTML=innerData;

}


function drawRulesPage(){
	document.getElementById("Mainblock").innerHTML="";
	var data='		<div'+
	'					style="width: 100%; height: 100%; display: block; background-color: #F1F1F1;">'+
	'					<div style="display: table; width: 100%">'+
	'						<div style="display: table-row;">'+
	'							<div style="display: table-cell; width: 20%;">Enter the'+
	'								Rules set for the vehicle</div>'+
	'							<div'+
	'								style="display: table-cell; width: 20%; vertical-align: middle;">'+
	'								<select style="width: 200px;" class="form-control" id="v_type">'+
	'									<option name="0"></option>'+
	'									<option name="2">2wheeler</option>'+
	'									<option name="3">3wheeler</option>'+
	'									<option name="4">4wheeler</option>'+
	'								</select>'+
	'							</div>'+
	'							<div style="display: table-cell;">'+
	'								<input type="button" class="form-control" onclick="saveRulesSet()" value="Save">'+
	'							</div>'+
	'							<div style="display: table-cell;">'+
	'								<input type="button" class="form-control" value="Clear">'+
	'							</div>'+
	'						</div>'+
	'					</div>'+
	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							Price</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_price_1"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_price_2"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+

	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							Highway Mileage(kms)</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_h_mileage_1"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_h_mileage_2"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+

	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							Horse power</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_h_power_1"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_h_power_2"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+

	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							City Mileage</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_c_mileage_1"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_c_mileage_2"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+

	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							Engine size</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_e_size_1"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_e_size_2"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+

	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							Number of stoke</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_num_stoke_1"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" id="v_num_stoke_2"'+
	'							class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+

	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							No of Cylinders</div>'+
	'						<input type="text" id="v_num_cylinder_1"'+
	'							onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" id="v_num_cylinder_2"'+
	'							onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+

	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							fuel capacity (L)</div>'+
	'						<input type="text" id="v_fuel_capacity_1"'+
	'							onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" id="v_fuel_capacity_2"'+
	'							onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+

	'					<div class="input-group">'+
	'						<div class="input-group-addon" style="width: 220px;">Enter'+
	'							vehicle length</div>'+
	'						<input type="text" id="v_length_1"'+
	'							onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" class="form-control">'+
	'						<div class="input-group-addon">min</div>'+
	'						<input type="text" id="v_length_2"'+
	'							onkeypress="return onlyNos(event,this);"'+
	'							placeholder="Enter only nymber" class="form-control">'+
	'						<div class="input-group-addon">max</div>'+
	'					</div>'+
	'				</div>';	
	document.getElementById("Mainblock").innerHTML=data;


}

function saveRulesSet(){

	try{
		var v_price_1=document.getElementById("v_price_1").value;
		var v_price_2=document.getElementById("v_price_2").value;

		var v_h_mileage_1=document.getElementById("v_h_mileage_1").value;
		var v_h_mileage_2=document.getElementById("v_h_mileage_2").value;

		var v_h_power_1=document.getElementById("v_h_power_1").value;
		var v_h_power_2=document.getElementById("v_h_power_2").value;

		var v_c_mileage_1=document.getElementById("v_c_mileage_1").value;
		var v_c_mileage_2=document.getElementById("v_c_mileage_2").value;

		var v_e_size_1=document.getElementById("v_e_size_1").value;
		var v_e_size_2=document.getElementById("v_e_size_2").value;

		var v_num_stoke_1=document.getElementById("v_num_stoke_1").value;
		var v_num_stoke_2=document.getElementById("v_num_stoke_2").value;

		var v_num_cylinder_1=document.getElementById("v_num_cylinder_1").value;
		var v_num_cylinder_2=document.getElementById("v_num_cylinder_2").value;

		var v_fuel_capacity_1=document.getElementById("v_fuel_capacity_1").value;
		var v_fuel_capacity_2=document.getElementById("v_fuel_capacity_2").value;

		var v_length_1=document.getElementById("v_length_1").value;
		var v_length_2=document.getElementById("v_length_2").value;	

		if(v_price_1.trim()=="" && v_price_2.trim()=="" && 	v_h_mileage_1==""  && v_h_mileage_2=="" && v_h_power_1=="" && v_h_power_2=="" && v_c_mileage_1=="" && v_c_mileage_2=="" && v_e_size_1=="" && v_e_size_2=="" && v_num_stoke_1=="" && v_num_stoke_2=="" && v_num_cylinder_1=="" && v_num_cylinder_2=="" && v_fuel_capacity_1=="" && v_fuel_capacity_2=="" && v_length_1=="" && v_length_2=="" ){
			alert("Enter all the fields");
			return false;
		}

		if(v_price_1>v_price_2){
			alert("Enter the min price is greater than max");
			return false;
		}

		if(v_h_mileage_1>v_h_mileage_2){
			alert("Enter the min mileage is greater than maximum");
			return false;
		}

		if(v_c_mileage_1>v_c_mileage_2){
			alert("Enter the min  city mileage is greater than maximum");
			return false;
		}

		if(v_h_power_1>v_h_power_2){
			alert("Enter the min  horse power is greater than maximum");
			return false;
		}

		if(v_e_size_1>v_e_size_2){
			alert("Enter the min engine size is greater than maximum");
			return false;
		}

		if(v_num_stoke_1>v_num_stoke_2){
			alert("Enter the min num of stoke is greater than maximum");
			return false;
		}

		if(v_num_cylinder_1>v_num_cylinder_2){
			alert("Enter the min number of cylender  is greater than maximum");
			return false;
		}

		if(v_fuel_capacity_1>v_fuel_capacity_2){
			alert("Enter the min fuel capacity  is greater than maximum");
			return false;
		}

		if(v_length_1>v_length_2){
			alert("Enter the min length is greater than maximum");
			return false;
		}

		var searchType=document.getElementById("v_type").options[document.getElementById("v_type").selectedIndex].value;
		if(searchType==""){

			alert("Select the vehicle Type");
		}

		var urldata= "&v_price_1="+v_price_1+
		"&v_price_2="+v_price_2+
		"&v_h_mileage_1="+v_h_mileage_1+
		"&v_h_mileage_2="+v_h_mileage_2+
		"&v_h_power_1="+v_h_power_1+
		"&v_h_power_2="+v_h_power_2+
		"&v_c_mileage_1="+v_c_mileage_1+
		"&v_c_mileage_2="+v_c_mileage_2+
		"&v_e_size_1="+v_e_size_1+
		"&v_e_size_2="+v_e_size_2+
		"&v_num_stoke_1="+v_num_stoke_1+
		"&v_num_stoke_2="+v_num_stoke_2+
		"&v_num_cylinder_1="+v_num_cylinder_1+
		"&v_num_cylinder_2="+v_num_cylinder_2+
		"&v_fuel_capacity_1="+v_fuel_capacity_1+
		"&v_fuel_capacity_2="+v_fuel_capacity_2+
		"&v_length_1="+v_length_1+
		"&v_length_2="+v_length_2+
		"&v_type="+searchType;
		alert(urldata);
		sendSaveAjax("/rulesset",urldata);


	}catch(e){
		alert(e.message);
	}
}


function sendSaveAjax(url,data){
	try{
		var callback = {
				sucess:sucesssendSaveAjax
		};
		Ajaxrequest.sendAsynchRequest('POST',getServerURL()+"/rulesset?ajax=true",callback,data);
	}catch(e){
		alert(e);
	}
}

function sucesssendSaveAjax(responseObject){
	alert(responseObject.responseText);
}


function ResultPage(){

	document.getElementById("Mainblock").innerHTML="";
	
	var data='<nav class="navbar navbar-default">'+
	'				<div class="container-fluid">'+
	'					<div class="navbar-header">'+
	'						<a class="navbar-brand" >Select Vechile Type</a>'+
	'					</div>'+
	'					<div class="collapse navbar-collapse"'+
	'						id="bs-example-navbar-collapse-1">'+
	'						      <form class="navbar-form navbar-left">'+
	'							<div class="form-group">'+
	'								<select id="searchType" class="form-control">'+
	'									<option name="2">2 wheeler</option>'+
	'									<option name="3">3 wheeler</option>'+
	'									<option name="4">4 wheeler</option>'+
	'								</select>'+
	'							</div>'+
	'							<button type="button" onclick="getResultData()"  class="btn btn-default">Search</button>'+
	'						</form>'+
	'					</div>'+
	'					</div>';
	
data+='				<div class="funkyradio" style="width: 100%">'+
	'					<div style="display: table; width: 100%;">'+
	'						<div style="display: table-row; width: 100%;">'+
	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" checked id="v_price" /> <label'+
	'										for="v_price">Price</label>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" id="v_h_mileage" /> <label'+
	'										for="v_h_mileage">Highway Mileage</label>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" id="v_h_power" /> <label'+
	'										for="v_h_power">Horse power</label>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" id="v_c_mileage" /> <label'+
	'										for="v_c_mileage">City Mileage</label>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" id="v_e_size" /> <label'+
	'										for="v_e_size">Engine size</label>'+
	'								</div>'+
	'							</div>'+
	'						</div>'+
	'						<div style="display: table-row; width: 100%;">'+

	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" id="v_num_stoke" /> <label'+
	'										for="v_num_stoke">Number of stoke</label>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" id="v_num_cylender" /> <label'+
	'										for="v_num_cylender">No of Cylinders</label>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" id="v_f_capacity" /> <label'+
	'										for="v_f_capacity">fuel capacity</label>'+
	'								</div>'+
	'							</div>'+

	'							<div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input type="radio" name="radio" id="v_length" /> <label'+
	'										for="v_length">vehicle length</label>'+
	'								</div>'+
	'							</div>'+

	'							 <div style="display: table-cell;">'+
	'								<div class="funkyradio-default">'+
	'									<input  type="button" style="width: 100%;display:none;" id="v_search"'+
	'										value="back" class="btn btn-default" />'+
	'								</div>'+
	'							</div> '+

	'						</div>'+

	'					</div>'+


	'				</div>'+

	'				<div class="panel panel-default">'+
	'                        <div class="panel-heading">'+
	'                           <h3 class="panel-title">Results</h3>'+
	'                        </div>'+
	'                        <div id="searchresult" class="panel-body">'+
	'                        </div>'+
	'                </div>';
	document.getElementById("Mainblock").innerHTML=data;
}

function underConstruction(){
	ResultPage();
}

function getResultData(){

	var radio = document.getElementsByName('radio');
	var r_type="";
	for(var i = 0; i < radio.length; i++){
		if(radio[i].checked){
			r_type = radio[i].id;
			break;
		}
	}
	alert(r_type);
	var searchType=document.getElementById("searchType").options[document.getElementById("searchType").selectedIndex].value;
	var data="&searchType="+searchType+"&r_type="+r_type;
	submitResultDataurl(1,data);
}

function submitResultDataurl(mode,data){
	try{
		var callback = {
				sucess:sucessSearchPostfun
		};
		Ajaxrequest.sendAsynchRequest('POST',getServerURL()+"/homepage?ajax=true",callback,"mode="+mode+data);
	}catch(e){
		alert(e);
	}
}