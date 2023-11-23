function openNav() {
  if (window.screen.width <= 980) {
    document.querySelector("#mySidenav").style.width = "60%";
  } else {
    document.querySelector("#mySidenav").style.width = "240px";
  }
}

function closeNav() {
  document.querySelector("#mySidenav").style.width = "0";
}
