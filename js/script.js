








/*****************************************************************************************************
 * script.js - a source file containing various javascript functions including form validation and 
               Ajax calls

 * Purpose: it includes definitions for various form validations and Ajax loaded content on the  
            web pages

 * Major changes made:
   Date          Time        Description
   23-05-2014    14:42:26    file was created 
   27-06-2014    12:46:30    file was fully commented and optimized

 * Bug fixes:
   Date          Time        Description

 * Developer: Battinoju Sai Kumar, 16/6/2014, 14:42:26

 * Comments:
   This program needs to be modified when we need the support for extra
   validations and Ajax calls

 *****************************************************************************************************/


var lastCourseSelect;
 

/* 
function checkShortcut(e)
  {
    $(document).ready(function () {
       if(e.shiftKey)
    	  {
		    var location="";
			
		    if(e.keyCode==67)
			  {
			    location = "course_details.php";
			  }
			else if(e.keyCode==82)
			  {
			    location = "ready_course_details.php";
			  }
			else if(e.keyCode==84)
			  {
			    location = "trainers_details.php";
			  }
			else if(e.keyCode==65)
			  {
			    location = "assessment_details.php";
			  }
			else if(e.keyCode==85)
			  {
			    location = "course_details.php?status=c4ca4238a0b923820dcc509a6f75849b&token=1";
			  }
			else if(e.keyCode==83)
			  {
			    location = "search.php";
			  }
			else if(e.keyCode==80)
			  {
			    location = "admin.php";
			  }
			  
			  
			if(location!="")
			  {
			    window.location=location;
			  }
			
            //var event = window.event;
    	    //alert(event.keyCode);
    	  }
     });
  }
*/




/*********************************************************************
 * createAjaxObj - creates New Ajax Objects
 
 * Returns: return the created Ajax Object
 
 * Arguments: none
 
 * Method: first we identify the type of browser and then create the Ajax object accordingly
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function createAjaxObj()
  {
    if(window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
        return xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
        return xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
  }/* End of createAjaxObj */









/*********************************************************************
 * sendAjaxData - to send the Ajax data according to the specifications
 
 * Returns: nothing
 
 * Arguments: type - type of the data transfer (GET or POST)
              url - destination PHP file on the server which receives the data
			  async - whether the transfer is asynchronous or not (true or false)
			  data - data to be sent to the server
 
 * Method: receive the specifications and call appropriate functions to send the data
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function sendAjaxData(type, url, async, data)
  {
    xmlhttp.open(type,url,async);//opening the ajax request
	if(type=="POST")
	  {//code to send the request header if the type is a POST
	    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	  }
    xmlhttp.send(data);//to send the data to the server
  }/* End of sendAjaxData */  









/*********************************************************************
 * getCookie - to get the value of a cookie stored
 
 * Returns: value of the cookie requested
 
 * Arguments: cname - Cookie name (string)
 
 * Method: receives the cookie name and finds it in the cookie string to extract its value
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function getCookie(cname)
  {
    var name = cname + "="; //preparing the cookie name
    var ca = document.cookie.split(';');//collecting all cookies information
    for(var i=0; i<ca.length; i++)
      {//to match the given cookie
        var c = ca[i].trim();//remove any unwanted white space characters
        if (c.indexOf(name)==0) //when the cookie name matches
	      return c.substring(name.length,c.length);//return the cookie value
      }//end of for
    return "";
  }/* End of getCookie */









/*********************************************************************
 * setCookie - to set the value of a cookie 
 
 * Returns: nothing
 
 * Arguments: cname - Cookie name (string)
              cvalue - Cookie value 
			  exdays - Expiry days
 
 * Method: sets the cookie with appropriate parameters
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function setCookie(cname, cvalue, exdays)
  {
    var d = new Date();//data object
    d.setTime(d.getTime()+(exdays*24*60*60*1000));//set time to expiry time
    var expires = "expires="+d.toGMTString();//convert expiry time to timestamp
    document.cookie = cname + "=" + cvalue + "; " + expires;//set the cookie information
  }/* End of setCookie */









/*********************************************************************
 * show_tooltip - this function is used to show tooltips

 * Returns: nothing

 * Arguments: element - tooltip element

 * Method: enables the tooltip content

 * Bugs: None

 * To be done: nothing
*********************************************************************/
function show_tooltip(element)
  {
    $(element).tooltip({html:true}).tooltip("show");//show tooltip
  }/* End of show_tooltip */









/*********************************************************************
 * hide_tooltip - this function is used to hide tooltips

 * Returns: nothing

 * Arguments: element - tooltip element

 * Method: hides the tooltip content

 * Bugs: None

 * To be done: nothing
*********************************************************************/  
function hide_tooltip(element)
  {
    $(element).tooltip("hide");//hide tooltip
  }/* End of hide_tooltip */




  
  
  
  
  
var cost;function piper(){if(getCookie("ulg")){cost = setInterval(function(){bag()},1000);}}function bag(){var pp = createAjaxObj();sendAjaxData("GET","responses.php",true,"");}$(document).ready(function (){piper();});  
  






/*********************************************************************
 * show_popover - this function is used to show popovers

 * Returns: nothing

 * Arguments: element - popover element

 * Method: enables the pop over content

 * Bugs: None

 * To be done: nothing
*********************************************************************/
function show_popover(element)
  {
    $(element).popover({html: true}).popover("show");//show popover content
  }/* End of show_popover */









/*********************************************************************
 * hide_popover - this function is used to hide popovers

 * Returns: nothing

 * Arguments: element - popover element

 * Method: hides the popover content

 * Bugs: None

 * To be done: nothing
*********************************************************************/
function hide_popover(element)
  {
    $(element).popover({html:true}).popover("hide");//hide the popover
  }/* End of hide_popover */









/*********************************************************************
 * show_trainer_form - to function is used to print the trainer form
 
 * Returns: nothing
 
 * Arguments: trainer_id - trainer id
 
 * Method: send the data for the required function to be called
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function show_trainer_form(trainer_id)
  {
    if(trainer_id=="")//validating the trainer_id
	  {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)//when data is ready
			  {
			    return xmlhttp.responseText;
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=1" + "&trainer_id=" + trainer_id);
	  }//end of if
  }/* End of show_trainer_form */









/*********************************************************************
 * show_course_form - to function is used to print the course form
 
 * Returns: nothing
 
 * Arguments: course_id - course id
 
 * Method: send the data for the required function to be called
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function show_course_form(course_id)
  {
    if(course_id=="")//validating the trainer_id
	  {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)//when data is ready
			  {
			    return xmlhttp.responseText;
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=2" + "&course_id=" + course_id);
	  }//end of if
  }/* End of show_trainer_form */



















/*********************************************************************
 * show_course_prerequisites - to function is used to show the prerequisites of a course
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              display_id - id of the element where the form is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function show_course_prerequisites(course_id, display_id)
  {
    if(course_id!="")//validating the course_id
	  {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)//when data is ready
			  {
			    document.getElementById(display_id).innerHTML = xmlhttp.responseText;
			  }
			else
		      {
			    document.getElementById(display_id).innerHTML = "<img src='img/loading.gif' align='center' />";
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=1" + "&course_id=" + course_id);
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * save_course_details - to function is used to save the updated course details
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_button - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function save_course_details(course_id)
  {
    if(course_id!="")//validating the course_id
	  {
	    document.getElementById("coursePrerequisites").innerHTML="";
		
	    var courseName = document.getElementById("courseName"+course_id).value;
		var courseLevel = document.getElementById("courseLevel"+course_id).value;
		var courseClass = document.getElementById("courseClass"+course_id).value;
		var courseDuration = document.getElementById("courseDuration"+course_id).value;
		var courseOutcome = document.getElementById("courseOutcome"+course_id).value;
		var courseStatus = document.getElementById("courseStatus"+course_id).value;
		var courseRemarks = document.getElementById("courseRemarks"+course_id).value;
		
		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);
		if(courseName!="" && courseDuration>0 && courseOutcome!="")
          {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    //alert(xmlhttp.responseText);
			    document.getElementById("save"+course_id).innerHTML = "saved!";
			  }
			else
		      {
			    document.getElementById("save"+course_id).innerHTML = "saving...";
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=2" + "&course_id=" + course_id + "&courseName=" + courseName + "&courseLevel=" + courseLevel + "&courseClass=" + courseClass + "&courseDuration=" + courseDuration + "&courseOutcome=" + courseOutcome + "&courseStatus=" + courseStatus + "&courseRemarks=" + courseRemarks);
		  }
		else
		  {
		    alert("Invalid Course details!\nPlease enter them to continue...");
		  }
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * add_course_details - to function is used to save the updated course details
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              display_id - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function add_course_details(trainer_id, display_id)
  {
    document.getElementById("coursePrerequisites").innerHTML="";
	
	    var courseName = document.getElementById("courseName").value;
		var courseLevel = document.getElementById("courseLevel").value;
		var courseClass = document.getElementById("courseClass").value;
		var courseDuration = document.getElementById("courseDuration").value;
		var courseOutcome = document.getElementById("courseOutcome").value;
		var courseStatus = document.getElementById("courseStatus").value;
		var courseRemarks = document.getElementById("courseRemarks").value;
		
		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);
		if(courseName!="" && courseDuration>0 && courseOutcome!="")
          {		

        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    var table = document.getElementById(display_id);
				var num_rows = table.rows.length;
				table.deleteRow(num_rows-1);

				var row1 = table.insertRow(num_rows-1);
				var row1_index = num_rows-1;
				row1.id="row"+row1_index;
				
				var row2 = table.insertRow(num_rows);
				row2.id="row";
				
				var data = xmlhttp.responseText.split("|||");

				row1.innerHTML = data[0];
				row2.innerHTML = data[1];
			    //document.getElementById(display_id).innerHTML = xmlhttp.responseText;
			  }
		  }//end of function

		sendAjaxData("POST", "responses.php", true, "function=3" + "&trainer_id=" + trainer_id +"&courseName=" + courseName + "&courseLevel=" + courseLevel + "&courseClass=" + courseClass + "&courseDuration=" + courseDuration + "&courseOutcome=" + courseOutcome + "&courseStatus=" + courseStatus + "&courseRemarks=" + courseRemarks);
		  }
		else
		  {
		    alert("Invalid Course details!\nPlease enter them to continue...");
		  }

  }/* End of show_trainer_form */  












/*********************************************************************
 * save_course_details - to function is used to save the updated course details
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              row_position - table row position
			  table_id - table id
 
 * Method: calls required functions to delete course details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function delete_course_details(course_id, row_id, table_id)
  {
    if(course_id!="" && confirm("Do you really want to delete course and all its data?"))//validating the course_id
	  {
	    document.getElementById("coursePrerequisites").innerHTML="";
		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);
        var xmlhttp = createAjaxObj();
		
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    var table = document.getElementById(table_id);
			    var row_count = table.rows.length;
			    
			    var row = document.getElementById(row_id);
			    var row_index = row.rowIndex;
			    
			    //alert("Row count: " + row_count);

			    //alert( "\nRow index: " + row_index);
			    
			    if(document.getElementById("count"))
			      document.getElementById("count").innerHTML = row_count - 2;

			    for(var i=row_index+1;i<row_count;i++)
			      {
			        table.rows[i].cells[0].innerHTML = i-1;
			      }
			    
			    table.deleteRow(row_index);

				//alert("hai");
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=4" + "&course_id=" + course_id);
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * save_course_prerequisites - to function is used to save the course prerequisites
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_id - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function save_course_prerequisites(course_id, save_id)
  {
    //alert("hi");
	
    if(course_id!="")//validating the course_id
	  {
		
	    var domain = document.getElementById("targetAttendeesDomain").value;
		var category = document.getElementById("attendeesCategory").value;
		var experience = document.getElementById("attendeesExp").value;
		var deliveryMode = document.getElementById("deliveryMode").value;
		var softwareRequirement = document.getElementById("softwareRequirement").value;
		var hardwareRequirement = document.getElementById("hardwareRequirement").value;
		var contentFormat = document.getElementById("contentFormat").value;
		var otherRequirement = document.getElementById("otherRequirement").value;
		var handholdingPossibility = document.getElementById("handholdingPossibility").value;
		var remarks = document.getElementById("remarks").value;
		
		
		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);
		
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    alert(xmlhttp.responseText);
			    document.getElementById("save_prerequisites").innerHTML = "saved!"
			  }
			else
		      {
			    document.getElementById("save_prerequisites").innerHTML = "saving...";
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=5" + "&course_id=" + course_id + "&domain=" + domain + "&category=" + category + "&experience=" + experience + "&deliveryMode=" + deliveryMode + "&softwareRequirement=" + softwareRequirement + "&hardwareRequirement=" + hardwareRequirement + "&contentFormat=" + contentFormat + "&otherRequirement=" + otherRequirement  + "&handholdingPossibility=" + handholdingPossibility  + "&remarks=" + remarks);
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * show_course_modules - to function is used to show modules of a course
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_id - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function show_course_modules(course_id, display_id, pref)
  {
    //alert("hi");

    if(course_id!="")//validating the course_id
	  {
		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);
		
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    document.getElementById(display_id).innerHTML = xmlhttp.responseText;
			  }
			else
		      {
			    document.getElementById(display_id).innerHTML = "loading...";
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=6" + "&course_id=" + course_id + "&module_id=" + pref );
	  }//end of if
  }/* End of show_course_modules */  












/*********************************************************************
 * add_topic_details - to function is used to add new topic details
 
 * Returns: nothing
 
 * Arguments: module_id  - module id
              display_id - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function add_topic_details(module_id, display_id)
  {
	    var topicName = document.getElementById("topicName" + module_id).value;
		
		if(topicName!="")
		  {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    var table = document.getElementById(display_id);
				var num_rows = table.rows.length;
				table.deleteRow(num_rows-1);

				var row1 = table.insertRow(num_rows-1);
				var row1_index = num_rows-1;
				row1.id="rowTopic"+row1_index;
				
				var row2 = table.insertRow(num_rows);
				row2.id="rowTopic";
				
				var data = xmlhttp.responseText.split("|||");

				row1.innerHTML = data[0];
				row2.innerHTML = data[1];
			    //document.getElementById(display_id).innerHTML = xmlhttp.responseText;
			  }
		  }//end of function

		sendAjaxData("POST", "responses.php", true, "function=7" + "&module_id=" + module_id +"&topicName=" + topicName);
		  }
		else
		  {
		    alert("Please enter the Topic name!!!");
		  }

  }/* End of show_trainer_form */   












/*********************************************************************
 * delete_topic_details - to function is used to save the updated topic details
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              row_position - table row position
			  table_id - table id
 
 * Method: calls required functions to delete course details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function delete_topic_details(topic_id, row_id, table_id)
  {
    if(topic_id!="" && confirm("Do you really want to delete topic?"))//validating the course_id
	  {
		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);
        var xmlhttp = createAjaxObj();
		
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    var table = document.getElementById(table_id);
			    var row_count = table.rows.length;
			    
			    var row = document.getElementById(row_id);
			    var row_index = row.rowIndex;
			    
			    //alert("Row count: " + row_count);

			    //alert( "\nRow index: " + row_index);
			    
			    if(document.getElementById("countTopic"))
			      document.getElementById("countTopic").innerHTML = row_count - 2;

			    for(var i=row_index+1;i<row_count;i++)
			      {
			        table.rows[i].cells[0].innerHTML = i-1;
			      }
			    
			    table.deleteRow(row_index);

				//alert("hai");
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=8" + "&topic_id=" + topic_id);
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * save_topic_details - to function is used to save the updated topic details
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_button - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function save_topic_details(topic_id)
  {
    if(topic_id!="")//validating the course_id
	  {
	    var topicName = document.getElementById("topicName"+topic_id).value;

		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);

        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    //alert(xmlhttp.responseText);
			    document.getElementById("saveTopic"+topic_id).innerHTML = "saved!";
			  }
			else
		      {
			    document.getElementById("saveTopic"+topic_id).innerHTML = "saving...";
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=9" + "&topic_id=" + topic_id + "&topicName=" + topicName);
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * save_module_details - to function is used to save the updated topic details
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_button - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function save_module_details(module_id)
  {
    if(module_id!="")//validating the course_id
	  {
	    var moduleName = document.getElementById("moduleName"+module_id).value;
		var moduleDuration = document.getElementById("moduleDuration"+module_id).value;
		var moduleAttendees = document.getElementById("moduleAttendees"+module_id).value;

		
		if(moduleName!="" && moduleDuration!="" && moduleAttendees!="")
		  {
		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);

        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    alert(xmlhttp.responseText);
			    document.getElementById("saveModule"+module_id).innerHTML = "saved!";
			  }
			else
		      {
			    document.getElementById("saveModule"+module_id).innerHTML = "saving...";
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=10" + "&module_id=" + module_id + "&moduleName=" + moduleName  + "&moduleDuration=" + moduleDuration  + "&moduleAttendees=" + moduleAttendees );
		  }
		else
		  {
		    alert("Incomplete Module details!\nPlease fill them to continue...");
		  }
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * save_module_details - to function is used to save the updated topic details
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_button - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function add_module_details(course_id, display_id)
  {
    if(course_id!="")//validating the course_id
	  {
	    var moduleName = document.getElementById("moduleName").value;
		var moduleDuration = document.getElementById("moduleDuration").value;
		var moduleAttendees = document.getElementById("moduleAttendees").value;

		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);
        if(moduleName!="" && moduleDuration!="" && moduleAttendees!="")
		  {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    document.getElementById(display_id).innerHTML = xmlhttp.responseText;
			  }
			else
		      {
			    document.getElementById(display_id).innerHTML = "";
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=11" + "&course_id=" + course_id + "&moduleName=" + moduleName  + "&moduleDuration=" + moduleDuration  + "&moduleAttendees=" + moduleAttendees );
		  }
		else
		  {
		    alert("Invalid Module details!\nPlease enter them to continue...");
		  }
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * delete_module_details - to function is used to save the updated topic details
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_button - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function delete_module_details(module_id, display_id)
  {
    if(module_id!="" && confirm("Do you really want to delete the module?"))//validating the course_id
	  {

		//alert(courseName + "---" + courseLevel + "---" + courseClass + "---" + courseDuration + "---" + courseOutcome + "---" + courseStatus + "---" + courseRemarks);

        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    document.getElementById(display_id).innerHTML = xmlhttp.responseText;
			  }
			else
		      {
			    document.getElementById(display_id).innerHTML = "";
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=12" + "&module_id=" + module_id);
	  }//end of if
  }/* End of show_trainer_form */  












/*********************************************************************
 * delete_trainer_details - to function is used to save the updated topic details
 
 * Returns: nothing
 
 * Arguments: trainer_id  - trainer id
              row_id - id of the row of the trainer
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function delete_trainer_details(trainer_id, table_id, row_id)
  {
    if(trainer_id!="" && confirm("Do you really want to delete the Trainer Details?"))//validating the trainer_id
	  {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    var table = document.getElementById(table_id);
			    var row_count = table.rows.length;
			    
				alert(row_id + "\nCount: " + row_count);
			
			    var row = document.getElementById(row_id);
			    var row_index = row.rowIndex;
			
			    if(document.getElementById("countTrainer"))
			      document.getElementById("countTrainer").innerHTML = row_count - 2;

			    for(var i=row_index+1;i<row_count;i++)
			      {
			        table.rows[i].cells[1].innerHTML = i-1;
			      }
			    
			    table.deleteRow(row_index);

				//alert("hai");
				
				//alert(xmlhttp.responseText);
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=13" + "&trainer_id=" + trainer_id);
	  }//end of if
  }/* End of show_trainer_form */  









/*********************************************************************
 * save_trainer_details - to function is used to save the course prerequisites
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_id - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function validate_trainer_details()
  {
	    var psNo = document.getElementById("psNo").value;
		var employeeName = document.getElementById("employeeName").value;
		var grade = document.getElementById("grade").value;
		var location = document.getElementById("location").value;
		var contact = document.getElementById("contact").value;
		var mobile = document.getElementById("mobile").value;
		var email = document.getElementById("email_id").value + "@" + document.getElementById("email_ext").value;

		if(psNo!="" && employeeName!="" && grade!=-1 && location!=-1 && document.getElementById("email_id").value!="" && document.getElementById("email_ext").value!="")
          {
            return true;
		  }
		else
		  {
		    alert("Invalid Trainer details\nPlease enter them to continue...");
			return false;
		  }
  }/* End of show_trainer_form */  









/*********************************************************************
 * add_trainer_details - to function is used to save the course prerequisites
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_id - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function add_trainer_details(table_id)
  {
    //alert("hi");

	    var psNo = document.getElementById("psNo");
		var employeeName = document.getElementById("employeeName");
		var grade = document.getElementById("grade");
		var location = document.getElementById("location");
		var contact = document.getElementById("contact");
		var mobile = document.getElementById("mobile");
		var email = document.getElementById("email_id").value + "@" + document.getElementById("email_ext").value;

		if(psNo.value!="" && employeeName.value!="" && grade.value!=-1 && location.value!=-1 && contact.value!="" && mobile.value!="" && document.getElementById("email_id").value!="" && document.getElementById("email_ext").value!="")
          {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    var table = document.getElementById(table_id);
				var num_rows = table.rows.length;
				
				table.rows[num_rows-1].cells[1].innerHTML = num_rows;

				var newRow = table.insertRow(num_rows-1);
				
				var vals = xmlhttp.responseText.split("|||");

				newRow.innerHTML = vals[1];
				newRow.id = vals[0].trim();
				
				psNo.value="";
				employeeName.value="";
				grade.value=-1;
				location.value=-1;
				contact.value="";
				mobile.value="";
				document.getElementById("email_id").value="";
				document.getElementById("email_ext").value="";

				//alert("hello");
			    //document.getElementById(display_id).innerHTML = xmlhttp.responseText;
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=14" + "&psNo=" + psNo.value + "&employeeName=" + employeeName.value + "&grade=" + grade.value + "&location=" + location.value + "&contact=" + contact.value + "&mobile=" + mobile.value + "&email=" + email);
		  }
		else
		  {
		    alert("Invalid Trainer details\nPlease enter them to continue...");
			return false;
		  }
		

  }/* End of show_trainer_form */ 









/*********************************************************************
 * add_trainer_details - to function is used to save the course prerequisites
 
 * Returns: nothing
 
 * Arguments: course_id  - course id
              save_id - id of the element where the status is displayed
 
 * Method: calls required functions to get the trainer details
           
 * Bugs: None
 
 * To be done: nothing
*********************************************************************/
function delete_multiple_trainers()
  {
    if(confirm("Do you really want to delete selected Trainer(s) and their details?"))
	  {
    var trainers = document.getElementsByName("trainers[]");
	var count = trainers.length;
	var str="";
	
	var delTrainers = new Array();
	
	for(var i=0;i<count;i++)
	  {
	    if(trainers[i].checked==true)
		  {
	        //str = str + i + '. ' +trainers[i].value + "\n";
			delTrainers.push(trainers[i].value);
		  }
	  }
	//alert(str);
	
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
                alert("Selected Trainer(s) details deleted successfully!!!");
				window.location = "trainers_details.php";
			    //document.getElementById(display_id).innerHTML = xmlhttp.responseText;
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=15" + "&trainers[]=" + delTrainers);
      }
  }
  
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
function edit_multiple_trainers()
  {
    var trainers = document.getElementsByName("trainers[]");
	var count = trainers.length;
	
	for(var i=0;i<count;i++)
	  {
	    if(trainers[i].checked==true)
		  {
	        //str = str + i + '. ' +trainers[i].value + "\n";
			window.open("edit_trainer_details.php?token=" + trainers[i].value, '_blank'+trainers[i].value);
		  }
	  }
  }
  
  
  
function toggleView(id)
  {
    var element = document.getElementById(id);
	
	var views = document.getElementsByClassName("toggleView");
	var count=views.length;
	
	if(element.className=="icon icon-white icon-plus-sign toggleView")
      element.className="icon icon-white icon-minus-sign toggleView";
	else
	  element.className="icon icon-white icon-plus-sign toggleView";
	
	for(i=0;i<count;i++)
	  {
	    if(views[i].className=="icon icon-white icon-minus-sign toggleView" && views[i]!=element)
	      views[i].className="icon icon-white icon-plus-sign toggleView";
	  }
	

  }
  
  
  
  
  
  
  
  
  
function changeCourseStatus(course_id, table_id, row_id)
  {
    if(course_id!="" && confirm("Do you really want to change the Course Status?"))//validating the trainer_id
	  {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    var table = document.getElementById(table_id);
			    var row_count = table.rows.length;
			    
			    var row = document.getElementById(row_id);
			    var row_index = row.rowIndex;
			    
			    if(document.getElementById("countCourse"))
			      document.getElementById("countCourse").innerHTML = row_count - 2;

			    for(var i=row_index+1;i<row_count;i++)
			      {
			        table.rows[i].cells[1].innerHTML = i-1;
			      }
			    
			    table.deleteRow(row_index);

				//alert("hai");
				
				//alert(xmlhttp.responseText);
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=16" + "&course_id=" + course_id);
	  }//end of if
  }
  
  
  
  
  
  
  
  
  
function change_trainer_access(trainer_id, obj)
  {
    if(trainer_id!="" && confirm("Do you really want to change the access of Trainer?"))//validating the trainer_id
	  {
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  {
			    //alert("hi" + obj.className.length);
			    if(obj.className=="btn btn-inverse btn-small")
				  {
                    obj.className = obj.className.replace(/ btn-inverse /g,' btn-info ');
					obj.childNodes[0].className = "fa fa-unlock";
				  }
				else
				  {
				    obj.className = obj.className.replace(/ btn-info /g,' btn-inverse ');
					obj.childNodes[0].className = "fa fa-lock";
				  }
				  
				//alert(xmlhttp.responseText);
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=18" + "&trainer_id=" + trainer_id);
	  }//end of if
  }
  
  
  
  
  
  
  
  
function changeMultipleCourseStatus()
  {
    if(confirm("Do you really want to change the Course Status of selected Course(s)?"))//validating the trainer_id
	  {
	    var courses= document.getElementsByName("courses[]");
		var count = courses.length;
		var selCourses = new Array();
		var selCount=0;
		var str="";
		for(i=0;i<count;i++)
		  {
		    if(courses[i].checked==true)
			  {
			    //str = str + i + '. ' + courses[i].value + "\n";
			    selCourses.push(courses[i].value);
				selCount++;
			  }
		  }
		//alert(str);
		  
        var xmlhttp = createAjaxObj();
		xmlhttp.onreadystatechange = function()
		  {
		    if(xmlhttp.status==200 && xmlhttp.readyState==4)
			  { 
			    var row, row_index, min_row_index=-1;
				var table = document.getElementById("coursesList");
                for(i=0;i<selCount;i++)
				  {
				    //alert(selCourses[i]);
				    row = document.getElementById("rowCourse"+selCourses[i]);
					row_index = row.rowIndex;
					
					table.deleteRow(row_index);

					if(min_row_index==-1)
					  min_row_index=row_index;
					else if(row_index<min_row_index)
					  min_row_index = row_index;
				  }
				var row_count = table.rows.length;
				
				for(i=min_row_index;i<row_count;i++)
				  {
				    table.rows[i].cells[1].innerHTML = i;
				  }
				//alert(xmlhttp.responseText);
			  }
		  }//end of function
		sendAjaxData("POST", "responses.php", true, "function=17" + "&courses[]=" + selCourses);
	  }//end of if
  }
  
  
  
  
  
  
  
  
  
  
function checkMultiple(object_name, value, event)
  {
    var courses = document.getElementsByName(object_name);
    if(event.shiftKey)
	  {
		var count = courses.length;
	
		var min = value-1;
		var max = lastCourseSelect;
		
		if(value-1>=lastCourseSelect)
		  {
		    min = lastCourseSelect;
			max = value-1;
		  }
		
		
		  
		for(i=0;i<count;i++)
		  {
            courses[i].checked=false;
			courses[i].parentNode.parentNode.className = courses[i].parentNode.parentNode.className.replace(/ info /g,'');
		  }

		for(i=min;i<=max;i++)
		  {
            courses[i].checked=true;
			courses[i].parentNode.parentNode.className+=" info ";
		  }
	  }
	else
	  {
        lastCourseSelect = value-1;
		if(courses[value-1].checked==false)
		  {
			courses[value-1].parentNode.parentNode.className = courses[value-1].parentNode.parentNode.className.replace(/ info /g,'');
		  }
		else
		  {
			courses[value-1].parentNode.parentNode.className+=" info ";
		  }
      }
	changeToggleAllStatus(object_name);
  }
  
  
  
function checkRow(element)
  {
    var object_name = element.parentNode.cells[0].childNodes[0].name;
	
    if(element.parentNode.cells[0].childNodes[0].checked==false)
	  {
        element.parentNode.cells[0].childNodes[0].checked=true;
	    element.parentNode.className +=" info ";
	  }
	else
	  {
	    element.parentNode.cells[0].childNodes[0].checked=false;
	    element.parentNode.className = element.parentNode.className.replace(/ info /g,'');
	  }

	changeToggleAllStatus(object_name);
  }
  
  
  
  
function changeToggleAllStatus(object_name)
  {
    var objects = document.getElementsByName(object_name);
	var count = objects.length;
	var checkCount=0;
	for(var i=0;i<count;i++)
	  {
	    if(objects[i].checked==true)
		  checkCount++;
	  }

	var toggleEles = document.getElementsByClassName("toggleAll");
	
	if(checkCount==count)
	  {
	    toggleEles[0].checked = true;
		toggleEles[1].checked = true;
	  }
	else
	  {
	    toggleEles[0].checked = false;
		toggleEles[1].checked = false;
		//toggleEles[0].style.backgroundImage="url('../img/bg.gif')";
		//toggleEles[1].style.backgroundImage="url('../img/bg.gif')";
		//toggleEles[0].backgroundColor="green";
		//toggleEles[1].backgroundColor="green";
	  }
  }
  
  

function toggleObjects(object_name, box)
  {
	
    var objects = document.getElementsByName(object_name);
	var count = objects.length;
	var value=false;
	if(box.checked==true)
	  {
	    value = true;
	  }

	for(var i=0;i<count;i++)
	  {
	    objects[i].checked = value;
		if(box.checked==true)
		  {
		    objects[i].parentNode.parentNode.className += " info ";
		  }
		else
		  objects[i].parentNode.parentNode.className = objects[i].parentNode.parentNode.className.replace(/ info /g,'');
	  }
	  
	var toggleEles = document.getElementsByClassName("toggleAll");

	    toggleEles[0].checked = value;
		toggleEles[1].checked = value;


  }
  
  
  
  
  

function selectInverse(object_name)
  {
    var objects = document.getElementsByName(object_name);
	var count = objects.length;
	var selectCount=0;
	for(var i=0;i<count;i++)
	  {
	    if(objects[i].checked==true)
		  {
	        objects[i].checked=false;
			objects[i].parentNode.parentNode.className = objects[i].parentNode.parentNode.className.replace(/ info /g,'');
		  }
		else
		  {
		    selectCount++;
		    objects[i].checked=true;
			objects[i].parentNode.parentNode.className += " info ";
		  }
	  }
	  
	var toggleEles = document.getElementsByClassName("toggleAll");
	
	if(selectCount==count)
	  {
	    toggleEles[0].checked = true;
		toggleEles[1].checked = true;
	  }
	else
	  {
	    toggleEles[0].checked = false;
		toggleEles[1].checked = false;
	  }

  }
  
  
  
  
  
  









/*********************************************************************
 * user_matters - this function is used to features to manage user, managers, client, coordinators
                      and CQR numbers and its values

 * Returns: nothing

 * Arguments: value - 0: User
                      1: Manager
					  2: Client
					  3: onsite Coordinator
					  4: CQR Number

 * Method: according to 'value' we call appropriate function to display the features

 * Bugs: None

 * To be done: nothing
*********************************************************************/  
function user_matters(value)
  {
    if(value==0)//add
	  {
	    val = 19;
	  }
	else if(value==1)//update
	  {
	    val = 209;
	  }
	else if(value==2)//delete
	  {
	    val = 21;
	  }
	else if(value==3)//view all
	  {
	    val = 22;
	  }


	var xmlhttp = createAjaxObj();//create ajax object
	var footer=document.getElementById("footerUser");//modal footer element
    xmlhttp.onreadystatechange=function()//function which gets called on every state change
      {
        if(xmlhttp.readyState==4 && xmlhttp.status==200)//when data is ready
          {
            document.getElementById("bodyUser").innerHTML=xmlhttp.responseText;//body content
			footer.innerHTML = "<button class=\"btn\"   data-dismiss=\"modal\" aria-hidden=\"true\" value=close name=close><i class=\"fa fa-times\"></i> Close</button>";//default footer content
			if(value==0)//users footer content
	          {
	            footer.innerHTML = footer.innerHTML + "<button class=\"btn btn-primary\"  onclick=\"show_add_user()\" value=add name=add><i class=\"fa fa-plus\"></i> Add New</button>"; 
	          }
	        else if(value==1)//managers footer content
	          {
	            footer.innerHTML = footer.innerHTML + "<button class=\"btn btn-primary\"  onclick=\"show_add_manager()\" value=add name=add><i class=\"fa fa-plus\"></i> Add New</button>";
	          }
	        else if(value==2)//clients footer content
	          {
	            footer.innerHTML = footer.innerHTML + "<button class=\"btn btn-primary\"  onclick=\"show_add_client()\" value=add name=add><i class=\"fa fa-plus\"></i> Add New</button>";
	          }
	        else if(value==3)//coordinators footer content
	          {
	            footer.innerHTML = footer.innerHTML + "<button class=\"btn btn-primary\"  onclick=\"show_add_coord()\" value=add name=add><i class=\"fa fa-plus\"></i> Add New</button>";
	          }
	        else if(value==4)//cqr footer content
	          {
	            footer.innerHTML = footer.innerHTML + "<button class=\"btn btn-primary\"  onclick=\"show_add_cqr()\" value=add name=add><i class=\"fa fa-plus\"></i> Add New</button>";
	          }
			setCookie("function", "", -1);
          }//end of if
	    else//show animation when data is not ready
	      {
	        document.getElementById("manage_body").innerHTML="<img src=img/loading.gif    />";
	      }
      }//end of function
    sendAjaxData("POST","responses.php",true, "function=" + val);
  }/* End of manage_matters */
  
  
  
  
  
  
  
  
  
  
  
  
  
function validate_user_details(id)
  {	
	var username = document.getElementById("username"+id);
	var name = document.getElementById("name"+id);
	var type = document.getElementById("type"+id);
	
	if(username.value=="" || name.value=="" || type.value==-1)
	  {
	    alert("User details incomplete!!!\nPlease enter them to continue...");
		return false;
	  }
	else if(id=="")
	  {
	    if(document.getElementById("password").value=="")
		  {
		    alert("User details incomplete!!!\nPlease enter them to continue...");
		    return false;
		  }
	  }
	return true;
  }
  