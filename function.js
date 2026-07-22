const input = document.getElementById("addList");
const button = document.getElementById("confirmList");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
    let valor = input.value;
    if (valor == "") {
        input.style.border = "2px solid red";
        alert("Por favor, insira um valor.");
        return;
    }
        input.style.border = "none";
        list.style.visibility = "visible";
        const li = document.createElement("li");
        li.textContent = valor;
    
})