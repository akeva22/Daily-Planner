var today = moment()

var todayEL = $("#currentDay")
todayEL.text(today.format('LLLL'))

var inputsEl = $("textarea.form-control").text()
console.log(inputsEl)

var saveButtonEl = $("#saveBtn")
console.log(saveButtonEl)

saveButtonEl.on("click", function() {
    localStorage.setItem("the Item", inputsEl); 
    console.log("you been clicked!")
    
})



