const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById(""),
  input: document.querySelector(`#`),
  text: document.querySelector("#text"),
};

function Text(text) {
  text.textContent = "text";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  Text(DOMSelectors.text);
});
//default
//make 4 seperate functions for this
//make only 1 form
