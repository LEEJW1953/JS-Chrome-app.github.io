// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2 = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function () {
    h2.style.color = colors[0];
    h2.innerText = "The mouse is here!";
  },
  handleMouseLeave: function () {
    h2.style.color = colors[1];
    h2.innerText = "The mouse is gone!";
  },
  handleContextMenu: function () {
    h2.style.color = colors[2];
    h2.innerText = "That was a right click!";
  },
  handleWindowResize: function () {
    h2.style.color = colors[3];
    h2.innerText = "You just resized!";
  },
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
window.addEventListener("resize", superEventHandler.handleWindowResize);
