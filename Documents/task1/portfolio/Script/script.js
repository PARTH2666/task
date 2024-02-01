document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebargo");
  if (document.querySelector(".sidebar").classList.contains("sidebargo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".main-content").style.transform =
      "translateX(-10px)";
    document.querySelector(".main").setAttribute("style", "width:100%;");

    console.log(document.getElementsByClassName("main"));
  } else {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".main-content").style.transform =
      "translateX(250px)";
    document.querySelector(".main").setAttribute("style", "width:80%;");
  }
});
