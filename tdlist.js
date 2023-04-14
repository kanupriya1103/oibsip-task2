const input = document.getElementById("input");
const list = document.getElementById("list");

function addItem() {
  const newItem = document.createElement("li");
  newItem.innerText = input.value;
  list.appendChild(newItem);
  input.value = "";
}
