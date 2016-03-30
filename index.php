<?php
include("header.php");
require("connect.php");

session_start();


function time_stamp($seconds)
  {
    date_default_timezone_set("Asia/Kolkata");
    $mer = date("a", $seconds);
    $hours = date("a", $seconds) == "pm" ? date("h", $seconds)+12 : date("h", $seconds);
    if($hours == "12")
    {
      $hours = "00";
    }
    elseif($hours == "24")
    {
      $hours = "12";
    }
    $time=date("Y",$seconds)."-".date("m",$seconds)."-".date("d",$seconds)." ".$hours.":".date("i", $seconds).":".date("s", $seconds);

    return $time;
  }/*End of time_stamp */


if(!isset($_SESSION['username']))
  {
    echo '<script>window.location="login.php";</script>';
  }
 if(isset($_POST['logout']))
    {
      session_destroy();
  	  echo '<script>window.location="login.php";</script>';
    }

    if(isset($_POST['profile_edit']))
  {
    $qu = "select firstName,lastName,userName,password from users where userName='$_SESSION[username]'";
    $se = mysqli_query($con,$qu);
    $pro = mysqli_fetch_array($se);
    $flag = 0;
    $query = "select userName from users";
    $name = mysqli_query($con,$query);
    $falg1 = 0;
    $flag_pass = 0;
    $flag_uname = 0;
    while($sel = mysqli_fetch_array($name))
     {
      if($_POST['username'] == $sel['userName'] && $_POST['username'] != $pro[2])
      {
        $flag1 = 1;
        echo '<center><h3>User name alredy exists</h3></center>';
        break;
      }
     }
    if($_POST['original_password']!='' && $_POST['new_password']!='' && $flag1==0)
      {
        if($pro[3]!=md5($_POST['original_password']))
          {
            echo '<center><h3>Password is incorrect</h3></center>';
            $flag = 1;
          }
        else
          {
            $pass = md5($_POST['new_password']);
            $query = "update users set password='$pass' where userName='$_SESSION[username]'";
            mysqli_query($con,$query);
            $flag_pass = 1;
          }
      }
    if($flag == 0 && $flag1==0)
      {
        if($_POST['first_name']!='' && $_POST['last_name']!='')
          {
            $query = "update users set firstName='$_POST[first_name]' where userName='$_SESSION[username]'";
            mysqli_query($con,$query);
            $query = "update users set lastName='$_POST[last_name]' where userName='$_SESSION[username]'";
            mysqli_query($con,$query);
          }
        if($_POST['username']!='' && $_POST['username'] != $pro[2])
          {
            $query = "update users set userName='$_POST[username]' where userName='$_SESSION[username]'";
            mysqli_query($con,$query);
            $query = "update given set userName='$_POST[username]' where userName='$_SESSION[username]'";
            mysqli_query($con,$query);
            $query = "update information set userName='$_POST[username]' where userName='$_SESSION[username]'";
            mysqli_query($con,$query);
            $_SESSION['username'] = $_POST['username'];
            $flag_uname = 1;
          }
      }
    if($flag_uname == 1 && $flag_pass == 1)
      {
        echo '<center><h3>Username and Password Successfully changed</h3></center>';
      }
    else if($flag_uname == 1)
      {
        echo '<center><h3>Username Successfully changed</h3></center>';
      }
    else if($flag_pass == 1)
      {
        echo '<center><h3>Password Successfully changed</h3></center>';
      }
  }
  if(isset($_POST['post_added']))
  {
    $date = time_stamp(time());
    $qu = "INSERT INTO forum (userName, post, postTitle, dateAdded) VALUES ('$_SESSION[username]', '$_POST[content]', '$_POST[title]', '$date')";
    mysqli_query($con,$qu);
  }
  if(isset($_POST['post_comment']))
  {
    $date = time_stamp(time());
    $qu = "INSERT INTO comments (postId, userName, comment, dateAdded) VALUES ('$_POST[id]', '$_SESSION[username]', '$_POST[comment]', '$date')";
    mysqli_query($con,$qu);
  }

    if(isset($_POST['profile']))
      {
        $qu = "select firstName,lastName,userName from users where userName='$_SESSION[username]'";
        $se = mysqli_query($con,$qu);
        $pro = mysqli_fetch_array($se);
        ?>
        <form method="post">
        <div class="row-fluid">
        <div class="span4 offset2">
          <table class="table table-bordered table-striped table-hover table-condensed" >
          <tr>
            <td>
            <center><b>First Name</b></center>
          </td>
          <td>
            <center><b><input type="text" name="first_name" value="<?php echo $pro[0]; ?>" required /></b></center>
          </td>
          </tr>
          <tr>
            <td>
            <center><b>Last Name</b></center>
          </td>
          <td>
            <center><b><input type="text" name="last_name" value="<?php echo $pro[1]; ?>" required /></b></center>
          </td>
          </tr>
          <tr>
            <td>
            <center><b>Username</b></center>
          </td>
          <td>
            <center><b><input type="text" name="username" value="<?php echo $pro[2]; ?>" /></b></center>
          </td>
          </tr>
        </tr>
        <tr>
          <td>
          <center><b>Current Password</b></center>
        </td>
        <td>
          <center><b><input type="password" name="original_password" placeholder="current password" /></b></center>
        </td>
        </tr>
        <tr>
          <td>
          <center><b>New Password</b></center>
        </td>
        <td>
          <center><b><input type="password" name="new_password" placeholder="new password"  /></b></center>
        </td>
        </tr>
        </table>
        <button type = "submit" class = "btn btn-primary" name = "profile_edit" value="1" >Save</button>
        <button type = "submit" class = "btn btn-primary" name = "cancel" onclick="javascript:window.location='index.php';" >cancel</button>
        </div>
        </div>
        <?php
      }
      elseif(isset($_POST['add_post']))
      {
        ?>
        <form method="post">
        <div class="row-fluid">
        <div class="span8 offset2">
          <table>
          <tr>
          <td>
            <center><b><input type="text" name="title" value="" placeholder='Title..' required /></b></center>
          </td>
          </tr>
          <tr>
          <td>
            <center><b><textarea name="content" rows="10" cols="50" placeholder="Post content.." required ></textarea></b></center>
          </td>
          </tr>
        </table>
        <button type = "submit" class = "btn btn-primary" name = "post_added" value="1" >Save</button>
        <button type = "submit" class = "btn btn-primary" name = "cancel" onclick="javascript:window.location='index.php';" >cancel</button>
        </div>
        </div>
        <?php
      }
      else {
      echo '<form method="post">';
      echo '<div class="floating-box">
      <div class="row-fluid">';
      $qu = "select firstName,lastName,userName from users where userName='$_SESSION[username]'";
      $se = mysqli_query($con,$qu);
      $user_det = mysqli_fetch_array($se);
      echo '<div class="offset9"><b><h4>Hi '.$user_det[0].' '.$user_det[1].'</h4></b></div>
         <div class="row-fluid">
          <div class="offset2">
          <table><tr>
          <td><button type = "submit" class = "btn btn-primary" name = "home" value="1" >Home</button></td>
          <td class="span9"><button type = "submit" class = "btn btn-primary" name = "add_post" onclick="javascript:window.location=\'index.php\';" value="1" >Add post</button></td>
          <td><button type = "submit" class = "btn btn-primary" name = "profile" value="1" >Edit profile</button></td>
          <td></td><td></td>
          <td><button type = "submit" class = "btn btn-primary" name = "logout" value="1" >Logout</button>
          </td></tr></table></div></div></div><br /></form>';
      echo "<div class=\"row-fluid\">
            <div class=\"span8 offset2\">";
      $qu = "select * from forum ";
      if(isset($_POST['comments']))
      {
        $qu .= "where postId='$_POST[id]' ";
      }
      $qu .= "order by dateAdded desc";
      $se = mysqli_query($con,$qu);
      while($sel = mysqli_fetch_array($se))
      {
        $quer = "select firstName, lastName from users where userName='$sel[userName]'";
        $select = mysqli_query($con,$quer);
        $name = mysqli_fetch_array($select);
        echo '<form method="post"><table class="table table-hover">';
        echo '<tr class="text-info"><td>'.$name['firstName'].' '.$name['lastName'].' on '.$sel['dateAdded'].'</td></tr>';
        echo '<tr class="info"><td>';
        echo $sel['postTitle'];
        echo '</tr><tr><td>';
        echo $sel['post'];
        echo '</td></tr></table>';
        if(isset($_POST['comments']))
        {
          $quer2 = "select * from comments where postId='$sel[postId]' order by dateAdded desc";
          $select2 = mysqli_query($con,$quer2);
          echo '<br /><br />
                <h4>Comments</h4>';
          while($comments = mysqli_fetch_array($select2))
          {
            $quer3 = "select firstName, lastName from users where userName='$comments[userName]'";
            $select3 = mysqli_query($con,$quer3);
            $name3 = mysqli_fetch_array($select3);
            echo '<table><tr><td>'.$comments[2].'</td></tr>';
            echo '<tr class="text-info"><td>'.$name3['firstName'].' '.$name3['lastName'].' on '.$comments['dateAdded'].'</td></tr>';
            echo '</table><br />';
          }
          echo '<table class="table table-hover"><tr><td><textarea name="comment" rows="4" cols="50" placeholder="Comment.." required\ ></textarea></td></tr>';
          echo '<tr><td>
                <form method="post">
                <button type = "submit" class = "btn btn-primary" name = "post_comment" >Submit</button>
                <input type="hidden" name="id" value='.$sel['postId'].' />
                <input type="hidden" name="comments" value="comments" /></form>';
        }
        else
        {
          echo '<tr class="text-success"><td>
                <button type = "submit" class = "btn btn-primary" onclick="javascript:window.location=\'index.php\';" name = "comments" value="1" >comments</button>';
        }
        echo '</td></tr></table><input type="hidden" name="id" value='.$sel['postId'].' /></form><br /><br />';
      }
      echo "</div></div>";
       }
include("footer.php");
?>
