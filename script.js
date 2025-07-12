function expandCard(e) {
  // Check to see if target is an actual panel
  if (e.target.classList.contains("panel")) {
    // Check to see if the panel is not already active
    if (!e.target.classList.contains("active")) {
      // Grab the previously active panel and make it inactive
      document.querySelector(".container .active").classList.remove("active");
      // Make the selected panel active
      e.target.classList.add("active");
    }
  }
}

// Event delegation on the whole container of the panels
document.querySelector(".container").addEventListener("click", expandCard);
