let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function decrement() {
    if(count > 0){
    count -=1
    countEl.innerText = count
    }
}

function increment() {
    count +=1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}

function clearEntry(){     
    count = 0
    countEl.textContent = 0     
    saveEl.textContent = "Previous entries: "
}
