





function validate_float(value, precision)
  {
    //alert("hai");
    if(/^(([0-9]*[\.]{1}[0-9]{1,3)})|([0-9]*))$/.test(value)==false)
	 return "0";
	return "1";
  }
  
  
  