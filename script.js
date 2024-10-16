//holds dom selector
const DOMSelectors = {
  form: document.getElementById("form"),
  formInput: document.getElementById("input"),
  formDescription: document.getElementById("description"),
  submitButton: document.getElementById("submit"),
  list: document.getElementById("list")
};

//create function
function createDiv() {
    const div = {
        name: DOMSelectors.formInput.value,
        description: DOMSelectors.formDescription.value
    };

    //call inject function, clear function
    inject(div);
    clearInputs();
}

function inject(div) {
    const item = document.createElement("div");
    item.className = "item"
    item.innerHTML = `
        <p class="box">${div.name}</p>
        <p class="box">${div.description}</p>
        <button class="removeButton">Remove</button>
    `;
    DOMSelectors.list.appendChild(item)
    item.style.backgroundColor = "#94BFA7"
    item.querySelector(".removeButton").addEventListener("click", () => {
        removeDiv(item);
    }
    );
}

function clearInputs() {
    DOMSelectors.formInput.value = "";
    DOMSelectors.formDescription.value = "";
}

function removeDiv(item) {
    DOMSelectors.list.removeChild(item);
}

//listens for submit button click
DOMSelectors.submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the form from submitting
    createDiv();
});


