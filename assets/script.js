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

var tabs = whatTime.parent().addClass("past")

currentTime = today.hour()


for (var i = 0; i < whatTime.length; i++) {
    console.log(whatTime[i].textContent)
    if (currentTime > 12) {
        currentTime -= 12
    }

    // Check for AM hours

    // if (currentTime == whatTime[i].textContent) { }
    //this is the present 
    console.log(whatTime[i].textContent)
    if (currentTime === parseInt(whatTime[i].textContent)) {
        console.log("present")
        whatTime.parent().eq(i).addClass("present")
    } else if (currentTime < parseInt(whatTime[i].textContent) && whatTime[i].textContent.includes("PM") && parseInt(whatTime[i].textContent) != 12) {
        console.log("future")
        whatTime.parent().eq(i).addClass("future")
    } else if (currentTime > 5 && whatTime[i].textContent.includes("PM")) {
        console.log("double future")
        whatTime.parent().eq(i).addClass("future")
    } // else if (currentTime < 5 && whatTime[i].textContent.includes("PM")) {
    //     console.log("double future")
    //     whatTime.parent().eq(i).addClass("future")



    //  //   console.log(whatTime.parent().eq(i))
    //  //   if (currentTime > parseInt(whatTime[i].textContext)) {
    //  //       console.log("future")
    //         whatTime.parent().eq(i).addClass("future")
    //     } else {
    //         console.log(currentTime, parseInt(whatTime[i].textContent))
    //     }




    console.log(currentTime)


    // whatTime.parent().eq(i).addClass("present")






    // console.log(whatTime.parent().eq(i))

}




console.log(whatTime.parent().eq(2))


console.log(whatTime[4].textContent.includes("PM"))

//console.log(typeof whatTime.toString())

// var whatTime = document.querySelectorAll("p")
// whatTime.html()






