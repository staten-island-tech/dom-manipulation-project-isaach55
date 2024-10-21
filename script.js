const DOMSelectors = {
  form: document.getElementById("form"),
  formInput: document.getElementById("input"),
  formDescription: document.getElementById("description"),
  formImage: document.getElementById("imageURL"),
  submitButton: document.getElementById("submit"),
  list: document.getElementById("list")
};

function createDiv() {
    const div = {
        image: DOMSelectors.formImage.value,
        name: DOMSelectors.formInput.value,
        description: DOMSelectors.formDescription.value,
    };

    inject(div);
    clearInputs();
}

function inject(div) {
    const item = document.createElement("div");
    item.className = "item"
    item.innerHTML = `
        <img src="${div.image}" alt="Inputted Image">
        <p class="divName">${div.name}</p>
        <p class="divDescription">Description: ${div.description}</p>
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
    DOMSelectors.formDescription.value = "";
    DOMSelectors.formImage.value = "";
}

function removeDiv(item) {
    DOMSelectors.list.removeChild(item);
}

DOMSelectors.submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the form from submitting
    createDiv();
});


