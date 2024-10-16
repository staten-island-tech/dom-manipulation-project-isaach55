//holds dom selector
const DOMSelectors = {
  form: document.getElementById("form"),
  formInput: document.getElementById("input"),
  submitButton: document.getElementById("submit"),
  list: document.getElementById("list")
};

//create function
function createDiv() {
    const div = {
        name: DOMSelectors.formInput.value
    };

    //call inject function, clear function
    inject(div);
    clearInputs();
}

function inject(div) {
    const item = document.createElement("div");
    item.className = "item"
    item.innerHTML = `
        <p>${div.name}</p>
        <button class="removeButton">Remove</button>
    `;
    DOMSelectors.list.appendChild(item)
    item.querySelector(".removeButton").addEventListener("click", () => {
        removeDiv(item);
    }
    );
}

function clearInputs() {
    DOMSelectors.formInput.value = "";
}

function removeDiv(item) {
    DOMSelectors.list.removeChild(item);
}

//listens for submit button click
DOMSelectors.submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the form from submitting
    createDiv();
});

