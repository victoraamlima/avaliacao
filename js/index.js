let submitSelected = document.querySelector("button[id = 'button']")

// console.log(submitSelected.classList)


let scores = document.querySelectorAll('input[name="score"]')

// console.log(document.querySelector('button[id="button"]'))


let scoreSelected = document.getElementById("your-score-selected")

let ops = document.getElementsByClassName("ops")



let card1 = document.getElementsByClassName("card1")
let card2 = document.getElementsByClassName("card2")

function goToThankYou() {
    card1[0].classList.add("hide")
    card2[0].classList.remove("hide")
}

function checkedRadio() {
    let radioSelected = document.querySelector("input[name='score']:checked").id

    scoreSelected.textContent = `AMOR, você escolheu ${radioSelected} de 5!`
}


// for (let i = 0; i < scores.length; i++) {

//     scores[i].addEventListener("change", function(){


//         submitSelected.classList.add("hover")
//         submitSelected.classList.remove("inactive")

//     })

for (let i = 0; i < 5; i++) {

    scores[i].addEventListener("change", function(){


        ops[0].classList.remove("hide")

        if (scores[4].checked) {
            ops[0].classList.add("hide")
        }
    })

    
}

scores[4].addEventListener("click", function () {
    submitSelected.classList.add("hover")
    submitSelected.classList.remove("inactive")
})




submitSelected.addEventListener("click", function () {
    // console.log(submitSelected)

    if (scores[4].checked) {
        // console.log(scores[4].checked)
        goToThankYou()

        checkedRadio()
    }

    

    
})