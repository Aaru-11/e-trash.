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
document.addEventListener('DOMContentLoaded', function() {
    const hiddenItems = document.querySelectorAll(".hiddenItem");

    const socialMediaLinks = document.querySelectorAll('.social-media a');

    socialMediaLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.color = 'rgba(255, 255, 255, 0.5)';
        });

        link.addEventListener('mouseout', function() {
            this.style.color = '#fff';
        });
    });

    window.addEventListener('scroll', checkHiddenItems);
    checkHiddenItems(); // Call the function initially to check on page load

    function checkHiddenItems() {
        const triggerBottom = window.innerHeight * 0.8;

        hiddenItems.forEach((hiddenItem) => {
            const hiddenItemTop = hiddenItem.getBoundingClientRect().top;

            if (hiddenItemTop < triggerBottom && !hiddenItem.classList.contains("show")) {
                hiddenItem.classList.add("show");
            }
        });
    }

    window.addEventListener('resize', resizeCollage);

    function resizeCollage() {
        const containerWidth = document.querySelector('.container').clientWidth;
        const collageWidth = document.querySelector('.image-collage').clientWidth;

        if (containerWidth <= 768) {
            document.querySelector('.image-collage').style.width = '100%';
        } else {
            document.querySelector('.image-collage').style.width = collageWidth + 'px';
        }
    }

    resizeCollage();
});

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