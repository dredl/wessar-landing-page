new fullpage("#fullpage", {
  licenseKey: 'YOUR_KEY_HERE',
  anchors: ["section-1", "section-2", "section-3", "section-4", "section-5"],
  autoScrolling: false,
  scrollingSpeed: 1200,
  verticalCentered: false,
  onLeave: function(origin, destination, direction) {
    var stageTitle = document.querySelector(".brand .content")
    var stageTitleFooter = document.querySelector(".brand .content >div:last-child")

    if (destination.index == 0) {
      stageTitle.style.visibility = "hidden"

    }
    //about
    if (destination.index == 1) {
      stageTitle.style.visibility = "visible"
      stageTitleFooter.innerHTML = "О нас"
    }
    //out companies
    if (destination.index == 2) {
      stageTitle.style.visibility = "visible"
      stageTitleFooter.innerHTML = "Наши проекты"
    }
    //out partners
    if (destination.index == 3) {
      stageTitle.style.visibility = "visible"
      stageTitleFooter.innerHTML = "Наши партнеры"
    }
    //out contacts
    if (destination.index >= 4) {
      stageTitle.style.visibility = "hidden"
    }
  }
});

function handleChangeWidth(x) {
  if (x.matches) {
    fullpage.autoScrolling = true;
    console.log("Yes");
  } else {
    fullpage.autoScrolling = false;
    console.log("No");
  }
}

var width = window.matchMedia("(min-width: 768px)");
handleChangeWidth(width);
width.addListener(handleChangeWidth);
