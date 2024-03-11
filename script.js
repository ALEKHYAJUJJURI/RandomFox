let containerEl = document.getElementById('container');

let spinnerEl = document.getElementById('spinner');


let data = {
    image : "",
    link : ""
}



function fun(jsonData){
    spinnerEl.classList.remove('loader')
    data.image = jsonData.image 
    data.link = jsonData.link
    console.log(data)
    fun2(data)
}
function fun2(data){
    let divCon = document.createElement('div');
    divCon.classList.add('container-card');
    let mainHead = document.createElement('h1');
    mainHead.textContent = "Random Fox Generator" 
    divCon.appendChild(mainHead)

    let imageEl = document.createElement('img');
    imageEl.src = data.image 
    imageEl.classList.add("image")
    divCon.appendChild(imageEl)

    let anchorEl = document.createElement('a');
    anchorEl.href = data.link 
    anchorEl.textContent = "Details"
    anchorEl.style.textDecoration = "none"
    divCon.appendChild(anchorEl)

    let button = document.createElement('button')
    button.textContent = "Refresh"
    button.classList.add('refresh-btn')
    divCon.appendChild(button)
    button.addEventListener("click",function(event){
        spinnerEl.classList.add('loader')
        containerEl.classList.add('display-none')
        window.location.reload()
    })
    containerEl.appendChild(divCon)
    
}

let options = {
    method : "GET"
}
let url = "https://randomfox.ca/floof/"

fetch(url,options)
.then(function(response){
    return response.json()
})
.then(function(jsonData){
    console.log(jsonData)
    fun(jsonData)
})