let formFields = new URLSearchParams(window.location.search)

document.querySelector("#name").innerHTML = `${formFields.get("name")}`


let msg = ""
let outreach = formFields.get("outreach")

if(outreach == 1) {
    msg = "same, id take some cookies when your not looking"
} else if (outreach == 2) {
    msg = "its a sweet gift if you cant bake yourself"
} else if (outreach == 3) {
    msg = "you should most likely keep some for yourself....."
} else if (outreach == 4) {
    msg = "dont say they are for work cuz ill spit in them...."
}

document.querySelector(#message).innerHTML = msg
 