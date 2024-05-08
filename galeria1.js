function showModal(img) {
    // criar o modal
    var modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    // adicionar a imagem clicada
    var modalImg = document.createElement("img");
    modalImg.src = img.src;
    modal.appendChild(modalImg);
    modalImg.classList.add("clicked");

    // adicionar o botão de fechar
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.onclick = function() {
      modal.remove();
    };
    modal.appendChild(closeButton);
}  