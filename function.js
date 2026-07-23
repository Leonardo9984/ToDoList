const input = document.getElementById("addList");
const button = document.getElementById("confirmList");
const list = document.querySelector("ul");

window.onload = () => {alert("oi")}
button.addEventListener("click", () => {
    let valor = input.value;
    if (valor == "") {
        input.style.border = "2px solid red";
        alert("Por favor, insira um valor.");
        return;
    }
        input.style.border = "none";
        
        let li = document.createElement("li");
        li.innerHTML = valor + "<button id='excluir'>X</button>";
        list.appendChild(li);
        input.value = "";
    }
);