const follower = document.querySelectorAll(".cursorfollower");
let timetracker;

document.addEventListener("mousemove", (e) => {

  const xdirection = e.clientX;
  const ydirection = e.clientY;

  clearTimeout(timetracker);
  timetracker = setTimeout(() => {

    let count = 1;
    follower.forEach(element => {
      element.style.transform = `translate(${xdirection - 23 + count}px, ${ydirection + 32 + count}px)`;
      count++;
    });

  }, 100);
});

window.addEventListener("scroll", () => {
  const sidebar = document.querySelector(".leftbar");
  if (window.scrollY > 100) {
    sidebar.classList.add("hidden");
  } else {
    sidebar.classList.remove("hidden");
  }
});
