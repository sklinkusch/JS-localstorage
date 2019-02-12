const key = document.getElementById("key");
const value = document.getElementById("value");
const btn = document.getElementById("go");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  addEntry();
});
function addEntry() {
  const keyVal = key.value;
  const valueVal = value.value;
  console.log(keyVal);
  console.log(valueVal);
  if (keyVal && valueVal) {
    localStorage.setItem(keyVal, valueVal);
    updateList();
  }
}
function updateList() {
  let outputString = "";
  for (let i = 0; i < localStorage.length; i++) {
    const myKey = localStorage.key(i);
    const myVal = localStorage.getItem(myKey);
    outputString += myKey + ":" + myVal + "<br/>";
  }
  output.innerHTML = outputString;
}

updateList();
