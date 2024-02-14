import {
  getLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "./localstorage.js";

// Misunderstood assignment, could not generate groups dynamically...

let localNames = getLocalStorage();
let nameDisplay = document.getElementById("nameDisplay");
let nameField = document.getElementById("nameField");
let generateBtn = document.getElementById("generateBtn");
let saveBtn = document.getElementById("saveBtn");
let generateGroupBtn = document.getElementById("generateGroupBtn");
let amountGroupsField = document.getElementById("amountGroupsField");
let amountNamesField = document.getElementById("amountNamesField");
// nameDisplay.textContent = "";
FillNameField();

function FillNameField() {
  let names = getLocalStorage();
  nameDisplay.textContent = "";
  names.map((element) => {
    let p = document.createElement("p");
    p.textContent = element;
    p.className = "text-lg font-medium text-gray-900 dark:text-white";
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = "X";
    button.classList.add(
      "text-gray-400",
      "bg-transparent",
      "hover:bg-gray-200",
      "hover:text-gray-900",
      "rounded-lg",
      "text-sm",
      "w-8",
      "h-8",
      "justify-end",
      "dark:hover:bg-gray-600",
      "dark:hover:text-white",
      "px-2"
    );
    button.addEventListener("click", () => {
      removeFromLocalStorage(element);
      p.remove();
    });
    p.append(button);
    nameDisplay.append(p);
  });
}

localNames.forEach((element) => {
  let span = document.createElement("span");
  let button = document.createElement("button");
  span.textContent = element;
  button.textContent = "X";
  button.classList.add(
    "text-gray-400",
    "bg-transparent",
    "hover:bg-gray-200",
    "hover:text-gray-900",
    "rounded-lg",
    "text-sm",
    "w-8",
    "h-8",
    "justify-end",
    "dark:hover:bg-gray-600",
    "dark:hover:text-white"
  );
  button.addEventListener("click", () => {
    removeFromLocalStorage(element);
    span.remove();
  });
  span.append(button);
  nameField.append(span);

  // nameDisplay.textContent += element + " ";
});

generateBtn.addEventListener("click", async () => {
  let parsedData = await DataFetch();
  let randomIndex = Math.floor(Math.random() * parsedData.length);
  nameField.value = parsedData[randomIndex];
});



saveBtn.addEventListener("click", () => {
  if (nameField.value == "") {
    nameField.placeholder = "Please give a name";
  } else {
    saveToLocalStorage(nameField.value);
    nameField.placeholder = "";
  }
  FillNameField();
});


// generateGroupBtn.addEventListener("click", async () => {
//   numberOfGroups = amountGroupsField.value
//   numberOfNames = amountNamesField.value
//   for(let i = 0; i < numberOfGroups; i++){
//     newGroup = 
//   for(let j = 0; j < numberOfNames; j++){

//   }

//   }
//   let parsedData = await DataFetch();
//   let randomIndex = Math.floor(Math.random() * parsedData.length);
//     saveToLocalStorage();
//   FillNameField();
// });

const DataFetch = async () => {
  const promise = await fetch("../data/samplenames.json");
  // Note: One again, AI used to create sample file, under too much crunch to get creative |=/
  const data = await promise.json();
  return data;
};
