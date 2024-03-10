
var adding = document.getElementById("popup")
var display1 = document.querySelector(".overlay")
var display2 = document.querySelector(".pop")

adding.addEventListener("click",function(){
    display1.style.display="block"
    display2.style.display="block"
})
function norefresh(event){
    event.preventDefault()

    display1.style.display="none"
    display2.style.display="none"

}
var bn = document.getElementById("bookname")
var au = document.getElementById("author")
var de = document.getElementById("descrip")
var app = document.getElementById("addbook")
var wcontain = document.querySelector(".container")

app.addEventListener("click",function(event){
    event.preventDefault()
    if(bn.value=="" || au.value=="" || de.value=="")
    {
        alert("Fill the form before submit")
    }
    else
    {
        var div = document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML = `<h2 class="one two">${bn.value}</h2>
        <h3 class="one three">${au.value}</h3>
        <h4 class="one four">${de.value}</h4> <button class="one five" onclick="dele(event)">Remove</button>`
        wcontain.append(div)
        display1.style.display="none"
        display2.style.display="none"
    }
    
    


})
function dele(event)
{
    event.target.parentElement.remove()
}
