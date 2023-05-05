const submitSelected = document.querySelector("button[id = 'button']")
const scores = document.querySelectorAll('input[name="score"]')
const scoreSelected = document.getElementById("your-selected-score")
const rating = document.getElementsByClassName("rating")
const thank = document.getElementsByClassName("thank")

function goToThankYou() {
  rating[0].classList.add("hide")
  thank[0].classList.remove("hide")
}

function checkedRadio() {
  let radioSelected = document.querySelector("input[name='score']:checked").id

  scoreSelected.textContent = `You select ${radioSelected} de 5!`
}

for (let i = 0; i < scores.length; i++) {
  scores[i].addEventListener("change", function () {
    submitSelected.classList.add("hover")
    submitSelected.classList.remove("inactive")
  })
}

submitSelected.addEventListener("click", function () {
  goToThankYou()
  checkedRadio()
})