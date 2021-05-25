function responsive() {
  let navigacija = document.getElementById("navigacija");
  if (navigacija.className === "navlinks") {
    navigacija.className = navigacija.className + "small-screen";
  } else {
    navigacija.className = "navlinks";
  }
}
