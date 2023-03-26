userEmail.onkeydown = (event) =>{
    if(event.key == "Enter")
        dataBtn.click()
}

const centers = ["Kanpur", "Aligarh", "Mumbai", "Lucknow", "Delhi", "Kolkata", "Chennai"]

let warningMessege = (messege) => {
    warning.classList.remove("warningInvisible")
    warning.innerText = messege
    setTimeout(()=>{
        warning.classList.add("warningInvisible")
    },3000)
}

let isEmailValid = (emailName) =>{
    let atIndex = emailName.indexOf("@")
    let dotIndex = emailName.indexOf(".")
    if(emailName.includes("@") && emailName.includes(".") && dotIndex > atIndex+1 && dotIndex != 0 && atIndex != emailName.length-1)
        return true
    else
        return false
}

let submittedEmails = []

let submittedData = () => {

    let fname = firstName.value
    let lname = lastName.value
    let username = fname + " " + lname
    let email = userEmail.value
    let college = collegeName.value
    let center = centers[Math.floor(Math.random()*centers.length)]
    let tr = document.createElement("tr")

    if(fname == "" && lname == "" && email == "" && college ==""){
        warningMessege("Fill All Inputs!")
    }

    else if(fname.length<4){
        if(fname == ""){
            warningMessege("First Name can't be empty!")
        }
        else
            warningMessege("First Name is less than 4 characters!")
    }

    else if(lname.length<4){
        if(lname == ""){
            warningMessege("Last Name can't be empty!")
        }
        else
            warningMessege("Last Name is less than 4 characters!")
    }

    else if(isEmailValid(email)==false){
        if(email == ""){
            warningMessege("Email can't be empty!")
        }
        else
            warningMessege("Invalid Email!")
        }

    else if(college.length<4){
        if(college == ""){
            warningMessege("College Name can't be empty!")
        }
        else
            warningMessege("College Name is less than 4 characters!")
    }

    else if(submittedEmails.includes(email)){
        warningMessege("Email already exists!")
    }
     
    else{
        dataBtn.style.backgroundColor = "green"
        dataBtn.innerText = "Submitted"
        tr.innerHTML = 
        `<td>${username}</td>
        <td>${college}</td>
        <td>${email}</td>
        <td>${center}</td>`
        table.classList.remove("tvisible")
        table.appendChild(tr)
        submittedEmails.push(email)
        let inputs = document.getElementsByTagName("input")
        for(let i=0; i<inputs.length; i++){
            inputs[i].value = ""
        }
        setTimeout(()=>{
            dataBtn.style.backgroundColor = "black"
            dataBtn.innerText = "Submit"
        }, 2000)
    }
}
