let count = 0
let total = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let runningTotalSlice = totalEl.textContent.slice(0, 15) 

function increment() {
  count += 1
  total += 1
  countEl.innerText = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  count = 0
  countEl.innerText = count
  totalEl.textContent = runningTotalSlice + total
}

function reset() {
  count = 0
  total = 0
  countEl.innerText = count
  saveEl.textContent = "Previous Entries: "
  totalEl.textContent = "Running Total: 0"
}