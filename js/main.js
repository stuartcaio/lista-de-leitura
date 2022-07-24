const form = document.getElementsByClassName('formulario')[0];
const botao = document.getElementById('botao');
const input = document.getElementById('input');
const lista = document.getElementsByClassName('lista')[0];
const itens = JSON.parse(localStorage.getItem('itens')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const existe = itens.find(elemento => elemento.livro === input.value);

    const livroInserido = {
        livro: input.value
    }

    if(existe){
        livroInserido.id = existe.id;

        itens[itens.find(elemento => elemento.id = existe.id) = livroInserido];
    } else{
        if(input.value != ""){
            addElemento(livroInserido);
        }    
        itens.push(livroInserido);
    }
    

    localStorage.setItem('itens', JSON.stringify(itens));

    input.value = '';
});

function addElemento(livro){
    const item = document.createElement('li');
    item.classList.add('lista__item');
    item.innerHTML += livro.livro;
    item.dataset.id = livro.id;

    lista.appendChild(item);

    item.addEventListener('click', function(){
        removeElemento(item, livro.id)
    })
}

function removeElemento(tag, id){
    tag.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id));

    localStorage.setItem('itens', JSON.stringify(itens));
}