
function responsive() {
    let navigacija = document.getElementById("navigacija");
    if (navigacija.className === "navlinks") {
      navigacija.className += " small-screen";
    } else {
      navigacija.className = "navlinks";
    }
  }
  