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
        
        let li = document.createElement("li");
        li.innerHTML = valor + '<button type="button" class="excluir">X</button>';
        let botaoExcluir = li.querySelector(".excluir");
        botaoExcluir.addEventListener("click", () => {
            li.remove();
        });
        list.appendChild(li);
        input.value = "";
    }
);

