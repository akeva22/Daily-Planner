var today = moment()

var todayEL = $("#currentDay")
todayEL.text(today.format('LLLL'))

var saveButtonEl = $(".saveBtn")
console.log(saveButtonEl)




saveButtonEl.on("click", function (e) {
    var inputsEl = $("textarea.form-control")
    console.log("you been clicked!")
   
    userInput = ["", "", "", "", "", "", "", "", ""];
    localStorage.setItem(userInput, ["" , "" , "" , "" , "" , "" , "" , "" , ""]);
  //  console.log(userInput)
    
    if (e.target.id == "9am") {
        localStorage.setItem(userInput.replace[0], inputsEl[0].value)
        console.log(inputsEl[0].value)
        console.log(e.target.id)
    }

    if (e.target.id == "10am") {
        localStorage.setItem(userInput[1].replace(), inputsEl[1].value)
        console.log(inputsEl[1].value)
        console.log(e.target.id)
    }

    if (e.target.id == "11am") {
        localStorage.setItem("11am", inputsEl[2].value)
        console.log(inputsEl[2].value)
        console.log(e.target.id)
    }

    if (e.target.id == "12pm") {
        localStorage.setItem("12pm", inputsEl[3].value)
        console.log(inputsEl[3].value)
        console.log(e.target.id)
    }

    if (e.target.id == "1pm") {
        localStorage.setItem("1pm", inputsEl[4].value)
        console.log(inputsEl[4].value)
        console.log(e.target.id)
    }

    if (e.target.id == "2pm") {
        localStorage.setItem("2pm", inputsEl[5].value)
        console.log(inputsEl[5].value)
        console.log(e.target.id)
    }

    if (e.target.id == "3pm") {
        localStorage.setItem("3pm", inputsEl[6].value)
        console.log(inputsEl[6].value)
        console.log(e.target.id)
    }

    if (e.target.id == "4pm") {
        localStorage.setItem("4pm", inputsEl[7].value)
        console.log(inputsEl[7].value)
        console.log(e.target.id)
    }

    if (e.target.id == "5pm") {
        localStorage.setItem("5pm", inputsEl[8].value)
        console.log(inputsEl[8].value)
        console.log(e.target.id)
    }
})

function loadSavedTasks () {
}

loadSavedTasks()