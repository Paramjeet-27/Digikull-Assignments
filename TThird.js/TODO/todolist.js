const addTask = () => {
    document.getElementById("list").innerHTML += `<li>${document.getElementById("tasks").value}</li>`
    document.getElementById("tasks").value = ""
}

const resetList = () => {
    document.getElementById("list").innerHTML = "";
}