<%@page import="com.genetic.algorithm.util.CommonUtil"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%
	String userName = CommonUtil.notNull(request.getParameter("user"));
	System.out.println("==================" + userName);
%>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script language="JavaScript" src="../common/Ajax.js"></script>
<script language="JavaScript" src="../common/CommonFunction.js"></script>
<script language="JavaScript" src="../js/HomePage.js"></script>
<script language="JavaScript" src="../common/common.js"></script>
<link rel="stylesheet" href="../css/Homestyle.css">
<link rel="stylesheet" href="../css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<style type="text/css">


.funkyradio div {
	clear: both;
	overflow: hidden;
}

.funkyradio label {
	width: 100%;
	border-radius: 3px;
	border: 1px solid #D1D3D4;
	font-weight: normal;
}

.funkyradio input[type="radio"]:empty,.funkyradio input[type="checkbox"]:empty
	{
	display: none;
}

.funkyradio input[type="radio"]:empty   ~ label,.funkyradio input[type="checkbox"]:empty 
	 ~ label {
	position: relative;
	line-height: 2.5em;
	text-indent: 3.25em;
	margin-top: 2em;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.funkyradio input[type="radio"]:empty   ~ label:before,.funkyradio input[type="checkbox"]:empty 
	 ~ label:before {
	position: absolute;
	display: block;
	top: 0;
	bottom: 0;
	left: 0;
	content: '';
	width: 2.5em;
	background: #D1D3D4;
	border-radius: 3px 0 0 3px;
}

.funkyradio input[type="radio"]:hover:not  (:checked  ) ~ label,.funkyradio input[type="checkbox"]:hover:not
	 (:checked  ) ~ label {
	color: #888;
}

.funkyradio input[type="radio"]:hover:not  (:checked  ) ~ label:before,.funkyradio input[type="checkbox"]:hover:not
	 (:checked  ) ~ label:before {
	content: '\2714';
	text-indent: .9em;
	color: #C2C2C2;
}

.funkyradio input[type="radio"]:checked   ~ label,.funkyradio input[type="checkbox"]:checked 
	 ~ label {
	color: #777;
}

.funkyradio input[type="radio"]:checked   ~ label:before,.funkyradio input[type="checkbox"]:checked 
	 ~ label:before {
	content: '\2714';
	text-indent: .9em;
	color: #333;
	background-color: #ccc;
}

.funkyradio input[type="radio"]:focus   ~ label:before,.funkyradio input[type="checkbox"]:focus 
	 ~ label:before {
	box-shadow: 0 0 0 3px #999;
}

.funkyradio-default input[type="radio"]:checked   ~ label:before,.funkyradio-default input[type="checkbox"]:checked 
	 ~ label:before {
	color: #333;
	background-color: #ccc;
}

.funkyradio-primary input[type="radio"]:checked   ~ label:before,.funkyradio-primary input[type="checkbox"]:checked 
	 ~ label:before {
	color: #fff;
	background-color: #337ab7;
}

.funkyradio-success input[type="radio"]:checked   ~ label:before,.funkyradio-success input[type="checkbox"]:checked 
	 ~ label:before {
	color: #fff;
	background-color: #5cb85c;
}

.funkyradio-danger input[type="radio"]:checked   ~ label:before,.funkyradio-danger input[type="checkbox"]:checked 
	 ~ label:before {
	color: #fff;
	background-color: #d9534f;
}

.funkyradio-warning input[type="radio"]:checked   ~ label:before,.funkyradio-warning input[type="checkbox"]:checked 
	 ~ label:before {
	color: #fff;
	background-color: #f0ad4e;
}

.funkyradio-info input[type="radio"]:checked   ~ label:before,.funkyradio-info input[type="checkbox"]:checked 
	 ~ label:before {
	color: #fff;
	background-color: #5bc0de;
}



.col-md-2,.col-md-10 {
	padding: 0;
}

.panel {
	margin-bottom: 0px;
}

.chat-window {
	bottom: 0;
	float: left;
	margin-left: 10px;
	width: 75%;
}

.chat-window>div>.panel {
	border-radius: 5px 5px 0 0;
}

.icon_minim {
	padding: 2px 10px;
}

.msg_container_base {
	background: #e5e5e5;
	margin: 0;
	padding: 0 10px 10px;
	max-height: 300px;
	overflow-x: hidden;
}

.top-bar {
	background: #999;
	color: white;
	padding: 10px;
	position: relative;
	overflow: hidden;
}

.msg_receive {
	padding-left: 0;
	margin-left: 0;
}

.msg_sent {
	padding-bottom: 20px !important;
	margin-right: 0;
}

.messages {
	background: white;
	padding: 10px;
	border-radius: 2px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	max-width: 100%;
}

.messages>p {
	font-size: 13px;
	margin: 0 0 0.2rem 0;
}

.messages>time {
	font-size: 11px;
	color: #ccc;
}

.msg_container {
	padding: 10px;
	overflow: hidden;
	display: flex;
	height: 80px;
}

img {
	display: block;
	width: 100%;
	height: 65px;
	width: 65px;
}

.avatar {
	position: relative;
}

.base_receive>.avatar:after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	width: 0;
	height: 0;
	border: 5px solid #FFF;
	border-left-color: rgba(0, 0, 0, 0);
	border-bottom-color: rgba(0, 0, 0, 0);
}

.base_sent {
	justify-content: flex-end;
	align-items: flex-end;
}

.base_sent>.avatar:after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 0;
	border: 5px solid white;
	border-right-color: transparent;
	border-top-color: transparent;
	box-shadow: 1px 1px 2px rgba(black, 0.2);
	//
	not
	quite
	perfect
	but
	close
}

.msg_sent>time {
	float: right;
}

.msg_container_base::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #F5F5F5;
}

.msg_container_base::-webkit-scrollbar {
	width: 12px;
	background-color: #F5F5F5;
}

.msg_container_base::-webkit-scrollbar-thumb {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	background-color: #555;
}

.btn-group.dropup {
	position: fixed;
	left: 0px;
	bottom: 0;
}

.panel-footer {
	background-color: #f5f5f5;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	border-top: 1px solid #ddd;
	padding: 10px 15px;
}

.spacediv {
	margin-top: 20px;
}

.spell_check_box {
	width: 500px;
	height: 400px;
	border: 3px solid grey;
	box-shadow: 10px 10px 5px #888888;
	display: block;
	z-index: 1111111111;
	position: fixed;
	margin-left: 392px;
	background-color: white;
	margin-top: 108px;
	border-radius: 25px;
}

.spell_menu {
	width: 497px;
	height: 30px;
	background-color: skyblue;
	border-radius: 25px;
}

.spell_close {
	width: 30px;
	height: 30px;
	margin-left: 468px;
	background-image: url("../images/close_icon.png");
	background-size: 30px 30px;
	background-repeat: no-repeat;
}

.spell_close:hover {
	background-color: red;
	cursor: pointer;
	border-radius: 25px;
}

.spell_body {
	width: 480px;
	height: 350px;
	margin-left: 10px;
	margin-top: 10px;
}

.left_text_box {
	width: 464px;
	height: 150px;
	float: left;
}

.right_button_box {
	width: 100px;
	height: 150px;
	float: left;
	margin-left: 12px;
	margin-top: 15px;
}

.leftbottom_text_box {
	width: 350px;
	height: 150px;
	border: 1px solid blue;
	float: left;
	margin-top: 15px;
	margin-left: 11px;
}

.resume_text,.ignore_text {
	width: 80px;
	height: 30px;
	margin-top: 8px;
	margin-left: 9px;
	background-image: url("../images/blue-button-hi.png");
	background-size: 80px 30px;
	background-repeat: no-repeat;
	border-radius: 25px;
	text-align: center;
	font-size: 18px;
	color: white;
}

.resume_text:hover,.ignore_text:hover {
	background-color: lightblue;
	cursor: pointer;
}

.spell_textarea {
	margin-left: 11px;
	margin-top: 13px;
}

.spell_check_multiple {
	width: 350px;
	height: 150px !important;
}

#custom-search-input {
	margin: 0;
	margin-top: 10px;
	padding: 0;
}

#custom-search-input .search-query {
	padding-right: 3px;
	padding-right: 4px \9;
	padding-left: 3px;
	padding-left: 4px \9;
	/* IE7-8 doesn't have border-radius, so don't indent the padding */
	margin-bottom: 0;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
}

#custom-search-input button {
	border: 0;
	background: none;
	/** belows styles are working good */
	padding: 2px 5px;
	margin-top: 2px;
	position: relative;
	left: -28px;
	/* IE7-8 doesn't have border-radius, so don't indent the padding */
	margin-bottom: 0;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	color: #D9230F;
}

.search-query:focus+button {
	z-index: 3;
}

.dispalytable {
	display: table;
	width: 100%;
}

.displayrow {
	display: table-row;
	text-align: left;
}

.displaycell1 {
	display: table-cell;
	width: 40%;
	padding-bottom: 20px;
	padding-left: 10px;
}

.displatcell2 {
	display: table-cell;
	width: 60%;
}
</style>
</head>
<body>



	<div class="">
		<ul id="nav">
			<li class="current"><a onclick="addVehicle()">Home</a></li>
			<li><a onclick="searchVehicle()">Search vehicle</a></li>
			<li><a onclick="drawRulesPage()">Rules Set</a></li>
			<li><a onclick="underConstruction()">Result</a></li>
			<li style="float: right"><a
				href="http://localhost:8080/GeneticAlgorithm/index.jsp">Logout</a></li>
			<li style="float: right"><a id="user_name">Welcome Admin</a></li>
		</ul>
	</div>
	<div style="height: 10px;"></div>

	<table width="100%" height="100%">
		<tr style="width: 100%">
			<td valign="top" style="width: 16%"><img class="img-thumbnail"
				alt="" style="width: 200px; height: 200px; margin-top: 15px"
				src="../images/Admin.png"></td>
			<td valign="top" id="Mainblock" style="width: 80%">
			

				</td>
		</tr>
	</table>

	<script type="text/javascript">
		function validateform() {
			try {
				inputarray = document.getElementsByTagName("input");
				for ( var i = 0; i < inputarray.length; i++) {
					if (inputarray[i].type == "text") {
						if (inputarray[i].value.trim() == "") {
							alert("fill all mandatory fields");

							return false;
						}
					}
				}
			} catch (e) {
				alert(e);
			}

			save();
		}

		addVehicle();
	</script>
</body>
</html>