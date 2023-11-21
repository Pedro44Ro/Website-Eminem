function openNav() {
  if (window.screen.width <= 980) {
    document.querySelector("#mySidenav").style.width = "50%";
  } else {
    document.querySelector("#mySidenav").style.width = "225px";
  }
}

function closeNav() {
  document.querySelector("#mySidenav").style.width = "0";
}
