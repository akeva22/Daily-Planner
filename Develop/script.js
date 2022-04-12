var today = moment()

var todayEL = $("#currentDay")
todayEL.text(today.format('LLLL'))

var saveButtonEl = $(".saveBtn")
console.log(saveButtonEl)


saveButtonEl.on("click", function (e) {
    var inputsEl = $("textarea.form-control")
    console.log("you been clicked!")


    if (e.target.id == "9am") {
        localStorage.setItem("9am", inputsEl[0].value)
        console.log(inputsEl[0].value)
        console.log(e.target.id)
    }

    if (e.target.id == "10am") {
        localStorage.setItem("10am", inputsEl[1].value)
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


var whatTime = $(".list-group-item").find("p")

for (var i = 0; i < whatTime.length; i++) {
    console.log(whatTime[i].textContent)
    if (today.hour() - 12 == whatTime[i].textContent) {
        whatTime.parent().eq(i).addClass("present")
    } else if (today.hour() >= 17) {
        whatTime.parent().eq(i).addClass("past")
    }



    // console.log(whatTime.parent().eq(i))


}



console.log(whatTime.parent().eq(2))


console.log(today.hour() - 12)
//console.log(typeof whatTime.toString())

// var whatTime = document.querySelectorAll("p")
// whatTime.html()
