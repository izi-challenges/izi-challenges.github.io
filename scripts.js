document.getElementById("myNavbar").innerHTML =
`<div id="home-logo">
    <a href="#home">iZi</a>
</div>

<div id="menu-toggle">
    <ul id="menu">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact-info">Contact</a></li>
    </ul>
</div>`;

function myFunction(param) {
    var home = document.getElementById("home");
    var proj = document.getElementById("projects");
    var contact = document.getElementById("contact-info");

    if (param == 'home') {
        home.style.display = "block";
        proj.style.display = "none";
        contact.style.display = "none";
    } else if (param == 'projects'){
        home.style.display = "none";
        proj.style.display = "block";
        contact.style.display = "none";
    }
  }
