<?php
include("header.php");
require("connect.php");
session_start();
error_reporting(E_ALL ^ E_NOTICE);
$_SESSION['prev_page'] = "login.php";
function login_form()
  {
?>
    </div>
    <div class="row-fluid text-center" style="background-color:#0e8ddc;" >

      <div class="span5 offset2">
	    <img src="img/login.jpg" style="width:60%;height:60%;" />
      </div>

      <div class="span3 text-left">
        <br /><br /><br /><br />
        <h4 style="color:white;" ><i class="fa fa-user"></i> Login</h4>
        <form action="login.php" method="post" name="adminLogin">
          <table>
            <tr>
              <td>
			    <input type="text" class="input-medium" name="username"  autocomplete="off" placeholder="Username..." >
		      </td>
            </tr>

            <tr>
              <td>
			    <input type="password"  class="input-medium" autocomplete="off"  name="password"  placeholder="Password..." >
			  </td>
            </tr>

            <tr>
			  <td>
			    <input type="submit"  class="btn" name="login" value="Login" />
		      </td>
			  <td>
			    <input type="submit"  class="btn" name="signup" value="Sign Up" />
			  </td>
			</tr>
          </table>
        </form>
      </div>
    </div>

<?php
  }

function signup_form()
  {
?>
    </div>
    <div class="row-fluid text-center" style="background-color:#0e8ddc;" >

      <div class="span5 offset2">
	    <img src="img/login.jpg" style="width:70%;height:70%;" />
      </div>

      <div class="span3 text-left">
        <br /><br /><br /><br />
        <h4 style="color:white;" ><i class="fa fa-user"></i> Sign Up</h4>
        <form action="login.php" method="post" name="adminLogin">
          <table>
		    <tr>
              <td>
			    <input type="text" class="input-medium" name="first_name"  autocomplete="off" placeholder="First Name..."  required/>
		      </td>
            </tr>
            <tr>
                  <td>
    			    <input type="text" class="input-medium" name="last_name"  autocomplete="off" placeholder="Last Name..."  required/>
    		      </td>
                </tr>
            <tr>
              <td>
			    <input type="text" class="input-medium" name="username"  autocomplete="off" placeholder="Username..."  required/>
		      </td>
            </tr>

            <tr>
              <td>
			    <input type="password"  class="input-medium" autocomplete="off"  name="password"  placeholder="Password..."  required required/>
			  </td>
            </tr>

            <tr>
			  <td>
			    <input type="submit"  class="btn" name="submit" value="Submit" />
          <input type="submit"  class="btn" name="cancel" onclick="javascript:window.location='login.php';" value="Cancel" />
		      </td>
			</tr>
          </table>
        </form>
      </div>
    </div>

<?php
  }
if(isset($_POST['signup']))
  {
    signup_form();
  }
else
  {
  if(isset($_POST['login']))
  {
    $query = "select userName,password from users";
	$name = mysqli_query($con,$query);
	$flag = 0;
	while($sel = mysqli_fetch_array($name))
	  {
	    if($_POST['username'] == $sel[0] && md5($_POST['password']) == $sel[1])
		  {
		    $flag = 1;
			break;
		  }
	  }
	if($flag == 0)
	  {
	    echo '<center><h3>Username or password is incorrect</h3></center>';
	  }
	else
	  {
	    $_SESSION['username'] = $_POST['username'];
		echo '<script>window.location="index.php";</script>';
	  }
  }
    if(isset($_POST['submit']))
	  {
	    $query = "select userName from users";
	    $name = mysqli_query($con,$query);
	    $flag = 1;
	    while($sel = mysqli_fetch_array($name))
	     {
	      if($_POST['username'] == $sel['userName'])
		    {
		      $flag = 0;
			    break;
		    }
	     }
		if($flag == 1)
		  {
	        $pass = md5($_POST['password']);
	        $query = "INSERT INTO users (userName, password, firstName, lastName) VALUES ('$_POST[username]', '$pass', '$_POST[first_name]', '$_POST[last_name]')";
            mysqli_query($con,$query);
		    echo '<center><h3>Details added successfully</h3></center>';
		  }
		else
		  {
		    echo '<center><h3>User name already exist</h3></center>';
		  }
	  }
    login_form();
  }
?>

<?php
include("footer.php");
?>
