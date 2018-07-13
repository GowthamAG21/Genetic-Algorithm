<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
        <link rel="stylesheet" href="css/style.css">
        <!-- <script language="JavaScript"  src="common/Ajax.js"></script>
         -->
         <script language="JavaScript"  src="common/CommonFunction.js"></script>
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
   <form id="formsubmit" method="post" onsubmit="return validate()" action="/registration">
	<div class="login">
	<div style="display:none" id="info" class="info">Login success</div>
		<div class="login-screen">
	  
			<div class="app-title"> 
				<h1>Registration</h1> 
			</div>

			<div class="login-form">
				<div class="control-group">
				<input type="text" class="login-field" value="" name="username" placeholder="username" id="login-name">
				<label class="login-field-icon fui-user" for="login-name"></label>
				</div>

				<div class="control-group">
				<input type="password" class="login-field" value="" name="password" placeholder="password" id="login-pass">
				<label class="login-field-icon fui-lock" for="login-pass"></label>
				</div>
				
				<div class="control-group">
				<input type="password" class="login-field" value="" placeholder="Confirm password" id="con-login-pass">
				<label class="login-field-icon fui-lock" for="login-pass"></label>
				</div>
				
				<div class="control-group">
				<input type="text" class="login-field" value="" name="email" placeholder="E-Mail id" id="login-email">
				<label class="login-field-icon fui-lock" for="login-pass"></label>
				</div>

				<input type="submit" class="btn btn-primary btn-large btn-block"  value="Register" >
				<a class="login-link" id="loginpage" href="#">Back to login page</a>
			</div>
		</div>
	</div>
		
	  <!-- <div style="width: 40%;" id="info" class="info">Login success</div>
	  <div style="width: 50%;" class="success">Successful operation message</div>

<div style="width: 50%;" class="warning">Warning message</div>

<div style="width: 50%;" class="error">Error message</div>
 -->
	  
	</form>
	
	<script type="text/javascript">
	       
          var serveturl=getServerURL();
          var page="/index.jsp";
          page=serveturl+page;
          document.getElementById("loginpage").href=page;
          var message='<%=strmsg%>';
          if(message!=""){
        	  showMessageBox(message);
          }        
          function validate(){
        	  try{
        	  var login_name=document.getElementById("login-name").value;
        	  var login_pass=document.getElementById("login-pass").value;
        	  var login_con_pass=document.getElementById("con-login-pass").value;
        	  var login_Email=document.getElementById("login-email").value;
        	  
        	  if(login_name==""){
        		  showMessageBox("Enter User Name");
        		  return false;
        	  }else if(login_name.length>15)
        	  {
        		  showMessageBox("User Name should not be more than 15 letter");
        		  return false;	
        	  }else if(login_pass==""){
        		  showMessageBox("password should not be empty");
        		  return false;	
        	  }else if(login_con_pass==""){
        		  showMessageBox("confirm password should not be empty");
        		  return false;	
        	  }else if(login_pass.length<7){
        		  showMessageBox("password length should be greater than 7 letter");
        		  return false;	
        	  }else if(login_pass.length>20){
        		  showMessageBox("password should be less than 20 letter");
        		  return false;	
              }else if(login_con_pass!=login_pass){
            	  showMessageBox("password entered or not same");
            	  return false;	
              }else if(login_Email==""){
            	  showMessageBox("email id should not be empty");
            	  return false;	
              }
        	  document.getElementById("formsubmit").action=serveturl+"/registration";
               return true;
        	  }catch(e){
            	   alert(e);
               }
           }
          
          
          
        </script>
</body>
</html>
