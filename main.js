let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let home = 0
let guest = 0

function addoneHome(){
    home+=1
    num1.textContent = home
}

function addtwoHome(){
    home+=2
    num1.textContent = home
}

function addthreeHome(){
    home+=3
    num1.textContent = home
}

function addoneGuest(){
    guest+=1
    num2.textContent = guest
}

function addtwoGuest(){
    guest+=2
    num2.textContent = guest
}

function addthreeGuest(){
    guest+=3
    num2.textContent = guest
}