var a = document.querySelector(".user-line1")
var b = document.querySelector(".user-line2")
var c = document.querySelector(".connection")
var d = document.querySelector(".connections")
var f = document.querySelector(".aa")
var x = 2
var y = 418
function delit(){
    a.remove()
    x--
    c.innerHTML = x
    y++
    d.innerHTML = y
}
function del(){
    a.remove()
    x--
    c.innerHTML = x
}

function de(){
    b.remove()
    x--
    c.innerHTML = x
    y++
    d.innerHTML = y
}
function dal(){
    b.remove()
    x--
    c.innerHTML = x
}
function change(){
    f.innerHTML = "wes"
}

