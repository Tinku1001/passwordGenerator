// Create container
const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

// Add the main title
const title = document.createElement("h1");
title.textContent = "Password Generator";
container.appendChild(title);

// Password row
const passwordRow = document.createElement("div");
passwordRow.className = "password-row";
container.appendChild(passwordRow);

const passwordInput = document.createElement("input");
passwordInput.type = "text";
passwordInput.id = "password";
passwordRow.appendChild(passwordInput);

const clipboardMsg = document.createElement("p");
clipboardMsg.className = "clipboard-message";
clipboardMsg.id = "clipboard-msg";
clipboardMsg.textContent = "Password copied to clipboard!";
clipboardMsg.style.display = "none"; // Hide by default
clipboardMsg.style.position = "fixed";
clipboardMsg.style.bottom = "50px";
clipboardMsg.style.left = "10px";
clipboardMsg.style.backgroundColor = "#dff0d8";
clipboardMsg.style.padding = "10px";
clipboardMsg.style.borderRadius = "5px";
clipboardMsg.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
document.body.appendChild(clipboardMsg);

const copyButton = document.createElement("button");
copyButton.id = "copy-btn";
copyButton.textContent = "Copy Password";
passwordRow.appendChild(copyButton);

// Slider container
const sliderContainer = document.createElement("div");
sliderContainer.className = "slider-container";
container.appendChild(sliderContainer);

const sliderLabel = document.createElement("label");
sliderLabel.htmlFor = "password-length";
sliderLabel.textContent =
  "Use the slider and select options to lengthen your password (6-24):";
sliderContainer.appendChild(sliderLabel);

const sliderRow = document.createElement("div");
sliderRow.className = "slider-row";
sliderContainer.appendChild(sliderRow);

const passwordLengthInput = document.createElement("input");
passwordLengthInput.type = "range";
passwordLengthInput.id = "password-length";
passwordLengthInput.min = "6";
passwordLengthInput.max = "24";
passwordLengthInput.value = "9";
sliderRow.appendChild(passwordLengthInput);

const passwordLengthValue = document.createElement("span");
passwordLengthValue.id = "password-length-value";
passwordLengthValue.textContent = "9";
sliderRow.appendChild(passwordLengthValue);

const totalCharactersLabel = document.createElement("label");
totalCharactersLabel.htmlFor = "password-length";
totalCharactersLabel.textContent = "Total Characters";
sliderContainer.appendChild(totalCharactersLabel);

// Checkbox options
const checkboxOptions = document.createElement("div");
checkboxOptions.className = "checkbox-options";
container.appendChild(checkboxOptions);

const checkboxData = [
  { id: "include-numbers", text: "Include Numbers", checked: true },
  { id: "include-letters", text: "Include Letters", checked: true },
  { id: "include-mixed-case", text: "Include Mixed Case", checked: true },
  { id: "include-punctuation", text: "Include Punctuation", checked: true },
];

checkboxData.forEach(({ id, text, checked }) => {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = checked;
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(` ${text}`));
  checkboxOptions.appendChild(label);
});

const checkboxMessage = document.createElement("p");
checkboxMessage.textContent =
  "Please select at least one checkbox to generate a password.";
container.appendChild(checkboxMessage);

// Info sections
const infoSections = [
  {
    title: "Do you use any of these weak passwords?",
    items: ["Password", "123456", "Qwerty", "Your name"],
  },
  {
    title: "Why are those passwords weak?",
    items: [
      "They're easy to guess or crack.",
      "If one of your logins is compromised, a hacker can access all your services.",
    ],
  },
];

infoSections.forEach((section) => {
  const infoSection = document.createElement("div");
  infoSection.className = "info-section";
  container.appendChild(infoSection);

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = section.title;

  infoSection.appendChild(sectionTitle);

  const ul = document.createElement("ul");
  
  section.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  infoSection.appendChild(ul);
});

// Options alert
const optionsAlert = document.createElement("div");
optionsAlert.className = "options-alert";
optionsAlert.textContent =
  "Please select at least one checkbox to generate a password.";
optionsAlert.style.display = "none"; // Hide by default
optionsAlert.style.position = "fixed";
optionsAlert.style.bottom = "10px";
optionsAlert.style.left = "10px";
optionsAlert.style.backgroundColor = "#f2dede";
optionsAlert.style.padding = "10px";
optionsAlert.style.borderRadius = "5px";
optionsAlert.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
document.body.appendChild(optionsAlert);

// Show Clipboard Message
function showClipboardMessage() {
  const clipboardMsg = document.getElementById("clipboard-msg");
  clipboardMsg.style.display = "block"; // Show the message
  setTimeout(() => {
    clipboardMsg.style.display = "none"; // Hide after 2 seconds
  }, 2000);
}

// Show Options Alert (Error)
function showOptionsAlert() {
  optionsAlert.style.display = "block"; // Show the message
  setTimeout(() => {
    optionsAlert.style.display = "none"; // Hide after 2 seconds
  }, 2000);
}
