const hiddenItems = document.querySelectorAll(".hiddenItem");
const windowPortion = 0.8;

window.addEventListener("scroll", checkHiddenItems);

checkHiddenItems();

function checkHiddenItems() {
  const triggerBottom = window.innerHeight * windowPortion;

  hiddenItems.forEach((hiddenItem) => {
    const hiddenItemTop = hiddenItem.getBoundingClientRect().top;
    hiddenItemTop < triggerBottom
      ? hiddenItem.classList.add("show")
      : hiddenItem.classList.remove("show");
  });
}

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}