let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let delBtn = document.querySelector(".button");
let btnDiv = document.querySelector("div");




read()
btn.addEventListener("click", () => {
  let obj = {
    name: input1.value,
    lastName: input2.value,
    image: input3.value,
  };
  let data = JSON.parse(localStorage.getItem("person")) || [];
  data.push(obj);
  localStorage.setItem("person", JSON.stringify(data));
  read();
});

function read() {
    list.innerHTML = ""
  let newData = JSON.parse(localStorage.getItem("person")) || [];
  newData.forEach((el,index) => { 
  let infoDiv = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let img = document.createElement("img");
  let imgDiv = document.createElement("div");
  let textDiv = document.createElement("div");
  let btnDel = document.createElement("button");
  let btnDiv = document.createElement("div");


  infoDiv.classList.add("info");
  p1.classList.add("p1");
  p2.classList.add("p2");
  img.classList.add("image");
  imgDiv.classList.add("imgDiv");
  textDiv.classList.add("textDiv");

  
    p1.innerText = `Name:${el.name}`;
    p2.innerText = `LastName:${el.lastName}`;
    btnDel.classList.add("delBtn");
  btnDel.innerText = "Delete";
    img.src = el.image;
    imgDiv.append(img);
    textDiv.append(p1);
    textDiv.append(p2);
    infoDiv.append(imgDiv);
    infoDiv.append(textDiv);
    btnDiv.append(btnDel);
    infoDiv.append(btnDiv);
    list.append(infoDiv);

    btnDel.addEventListener("click",() =>{
        del(index)
    })
  });
}

function del(id){
    let data = JSON.parse(localStorage.getItem("person")) || [];
data.splice(id, 1)
localStorage.setItem("person", JSON.stringify(data));
read()
}












//  read()

//  btn.addEventListener("click",()=>{
//     if(!input1.value || !input2.value){
//         alert("заполните поле")
//         return;
//     }
//     console.log(input1.value);
// list.innerHTML += `
// <div class="main_list">
//  <p>${input1.value [0].toLowerCase()+ input1.value.slice(1).toUpperCase()}}</p>
// <p>${input2.value [0].toUpperCase()+ input2.value.slice(1).toLowerCase()}</p>
// <button class="del_btn">delete</button>
// </div>
// `;
// input1.value = ""
// input2.value = ""
// })

// list.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("del_btn")){
//         e.target.parentNode.remove()
//     }
// })

//  let div = document.createElement("div");
//  let h1 = document.createElement("h1");
//  let input = document.createElement("input");
//  let btn = document.createElement("buttun");
//  let body = document.querySelector("body")

//  h1.innerText = "FR-48"
//  h1.style.backgroundColor = "red"
//  h1.style.textAlign = "center"
//  input.style.backgroundColor = "green"
//  btn.style.backgroundColor = "gold"

//  btn. innerText = "clik"

//  div.append(h1)
//  div.append(input)
//  div.append(btn)

//  console.log(body);
//  body.append(div)

//

//? собития "mousever"
//  let input = document.querySelector(".input")
//  input.addEventListener("mouseover",()=>{
//     input.style.fontSize ="100%"
//  })
// //? собития "mouseout"
//  let input = document.querySelector(".input")
//  input.addEventListener("mouseout",()=>{
//     input.style.fontSize ="300%"
//  })
//? собития "mousemove" при дивижения мыши
//  let img = document.querySelector(".img")
//  img.addEventListener("mousemove",()=>{
//     console.log(img);
// img.style.fontSize ="40%"
//  })
//  let input = document.querySelector(".input")
//  input.addEventListener("mousemove",()=>{
//     input.style.fontSize ="300%"
//  })
// ? собития "change" работает с инпут
// let input = document.querySelector(".input")
// input.addEventListener("change",(e)=>{
// console.log(e.target.value);
//  })
// ? собития "input" влятяет на каждое  изминения
// let input = document.querySelector(".input")
// input.addEventListener("input",(e)=>{
// console.log(e.target.value);
//  })
// ? собития "focus" ползаватель фокусируентся на элемента,например нажимает input
// let input = document.querySelector(".input")
// input.addEventListener("focus",(e)=>{
//     input.style.border = "2px solid red"
//  })
// ? собития "mousedown" когда нажал на кнопку
// let btn = document.querySelector("button")
// btn.addEventListener("mousedown",()=>{
//     btn.style.backgroundColor = "gold"
//  })
// ? собития "mouseup" когда отпустил кнопку
// let btn = document.querySelector("button")
// btn.addEventListener("mouseup",()=>{
//     btn.style.backgroundColor = "gold"
//  })
//? собития "dblclik"
// let btn = document.querySelector("button")
// btn.addEventListener("dblclick",()=>{
//     btn.style.backgroundColor = "gold"
//  })
//? собития "contextmenu"
// let btn = document.querySelector("button")
// btn.addEventListener("contextmenu",()=>{
//     btn.style.backgroundColor = "gold"
//  })
