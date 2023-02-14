(function() {
  "use strict"; // Start of use strict   // page profil //

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {

      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // End of use strict


// page connexion //


//cacher le mdp // 

let e=true;
function changer(){
  if(e){
    document.getElementById("pass").setAttribute("type","text");
    document.getElementById("eye").src="/home/fanny/Documents/GitHub/juba-web/assets/img/iconemdp_ouvert.png"; 
    e=false;
  }
  else{
      document.getElementById("pass").setAttribute("type","password");
      document.getElementById("eye").src="Images/iconemdp.png"; 
      e=true;
  }
}


//  TODO login form alert = a debuguer // 

let loginForm=document.getElementById("loginForm");
loginForm.addEventListener("play",(e) => {e.preventDefault();

  let username = document.getElementById("login");
  let password = document.getElementById("pass");

  if (username.value == "" || password.value == "") {
    alert("Please enter your email adress + your password to enter the JUBA world")
  } else {
    console.log(
      'this form has a username of ${username.value} and password of ${password.value}'
      );

      username.value= "";
      password.value= "";
  }

})

/* idée alternative pour le form alert //

let loginForm=document.getElementById("loginForm");
function validateForm() {
  let x = document.forms["loginForm"]["login"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

    let y = document.forms["loginForm"]["pass"].value;
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }

}

*************************************************
<script>
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
</head>
<body>

<h2>JavaScript Validation</h2>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

******************************************************
// page profil //

var isAuthenticated = document.cookie.indexOf("authenticated=true") >= 0;

if (isAuthenticated) {
  document.body.className += " authenticated";
}