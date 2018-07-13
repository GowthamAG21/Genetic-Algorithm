<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Login Form</title>
        <link rel="stylesheet" href="css/style.css">
        <style type="text/css">
         .info, .success, .warning, .error, .validation {
border: 1px solid;
margin: 10px 0px;
padding:15px 10px 15px 50px;
background-repeat: no-repeat;
background-position: 10px center;
}
.info {
color: #00529B;
background-color: #BDE5F8;
background-image: url('info.png');
}
.success {
color: #4F8A10;
background-color: #DFF2BF;
background-image:url('success.png');
}
.warning {
color: #9F6000;
background-color: #FEEFB3;
background-image: url('warning.png');
}
.error {
color: #D8000C;
background-color: #FFBABA;
background-image: url('error.png');
}
        </style>
        <script language="JavaScript"  src="common/CommonFunction.js"></script>
        <script type="text/javascript">
             function submitForm(){
            	 var username=document.getElementById("login-name").value;
            	 var password=document.getElementById("login-pass").value;
            	 if(username=="" && password==""){
            		 showMessageBox("username and password should not be empty");
            		 return false;
            	 }else if(username==""){
            		 showMessageBox("user name should not be empty");
            		 return false;
            	 }else if(password==""){
            		 showMessageBox("password should not be empty");
            		 return false;
            	 }
            	 document.getElementById("formsubmit").action=serveturl+"/login";
                 
            	 return true;
            	 
             }
         </script>
  </head>
  <%
    Object message= request.getAttribute("message");
    System.out.println(message+"-----------------");
     if(message==null){
    	message="";
    }
     String strmsg=message.toString();
  %>
  <body>
   <form method="post" action="" id="formsubmit" onsubmit="return submitForm()">
	<div class="login">
	<div style="display:none" id="info" class="info">Login success</div>
		<div class="login-screen">
			<div class="app-title"> 
				<h1>Login</h1>
			</div>

			<div class="login-form">
				<div class="control-group">
				<input type="text" class="login-field" value="" name="login_name" placeholder="username" id="login-name">
				<label class="login-field-icon fui-user" for="login-name"></label>
				</div>

				<div class="control-group">
				<input type="password" class="login-field" value="" name="login_pass" placeholder="password" id="login-pass">
				<label class="login-field-icon fui-lock" for="login-pass"></label>
				</div>

				<input type="submit" class="btn btn-primary btn-large btn-block" value="login">
				<a class="login-link" href="#">Lost your password?</a>
				<a class="login-link" id="loginpage" href="">New user Registration</a>
			</div>
		</div>
	</div>
	</form>
	<script type="text/javascript">
	    var serveturl=getServerURL();
        var page="/registration.jsp";
        page=serveturl+page;
        document.getElementById("loginpage").href=page;
        var message='<%=strmsg%>';
        if(message!=""){
      	  showMessageBox(message);
        }
	</script>
</body>
</html>
