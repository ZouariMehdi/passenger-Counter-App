const incBtn = document.getElementById("inc");
const saveBtn = document.getElementById("save");
const counterEl = document.getElementById("counter");
const previousEntriesEl = document.getElementById("print");
let counter = 0;
function increment() {
  counter++;
  counterEl.innerText = counter;
}
function save() {
  previousEntries.innerText += ` - ${counter}`;
  counter = 0;
  counterEl.innerText = 0;
}
