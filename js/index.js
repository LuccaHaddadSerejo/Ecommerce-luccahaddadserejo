const listaDeItens = document.querySelector('.list_cards')
const menuNav = document.querySelector('.menu_nav')
const botaoTodos = document.querySelector('#button_menu_1')
const botaoAcessorios = document.querySelector('#button_menu_2')
const botaoCalcados = document.querySelector('#button_menu_3')
const botaoCamisetas = document.querySelector('#button_menu_4')
const inputPesquisa = document.querySelector('#input_research')
const botaoPesquisa = document.querySelector('#button_research')

function renderizarProdutoListaPrincipal(lista, referenciaHtml){
    for(let i = 0; i < lista.length; i++){
        let listItem = document.createElement('li')
        let listImg = document.createElement('img')
        let listDiv = document.createElement('div')
        let listTag = document.createElement('span')
        let listName = document.createElement('h3') 
        let listDescription = document.createElement('p')
        let listPrice = document.createElement('span')
        let listButton = document.createElement('button')

        listImg.src = `${lista[i].img}`
        listTag.innerHTML = `${lista[i].tag[0]}`
        listName.innerHTML = `${lista[i].nameItem}`
        listDescription.innerHTML = `${lista[i].description}`
        listPrice.innerHTML = `R$${lista[i].value},00`
        listButton.innerHTML = `${lista[i].addCart}`

        listItem.classList.add('list_items')
        listDiv.classList.add('list_items_div')
        listImg.classList.add('list_items_img')
        listTag.classList.add('list_items_tag')
        listName.classList.add('list_items_h3')
        listPrice.classList.add('list_items_price')
        listDescription.classList.add('list_items_description')
        listButton.classList.add('list_items_button')

        listDiv.append(listTag, listName, listDescription, listPrice, listButton)
        listItem.append(listImg, listDiv)
        referenciaHtml.appendChild(listItem)
    }
}

renderizarProdutoListaPrincipal(data, listaDeItens)


botaoTodos.addEventListener('click', function filtrarTodos(){ 

    listaDeItens.innerHTML = ''
    renderizarProdutoListaPrincipal(data, listaDeItens)
})

botaoAcessorios.addEventListener('click', function filtrarAcessorios(){ 

    listaDeItens.innerHTML = ''
    let arrFiltro = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Acessórios"){
            arrFiltro.push(data[i])
        }
    }
    if(arrFiltro.length == 0){
        alert('Não encontramos nenhum item em nosso estoque')
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }
})

botaoCalcados.addEventListener('click', function filtrarCalcados(){ 

    listaDeItens.innerHTML = ''
    let arrFiltro = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Calçados"){
            arrFiltro.push(data[i])
        }
    }
    if(arrFiltro.length == 0){
        alert('Não encontramos nenhum item em nosso estoque')
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }
})

botaoCamisetas.addEventListener('click', function filtrarCamisetas(){ 

    listaDeItens.innerHTML = ''
    let arrFiltro = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Camisetas"){
            arrFiltro.push(data[i])
        }
    }
    if(arrFiltro.length == 0){
        alert('Não encontramos nenhum item em nosso estoque')
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }
})

botaoPesquisa.addEventListener('click', function pesquisarItens(){

    listaDeItens.innerHTML = ''
    let arrFiltro = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0].toLowerCase() == inputPesquisa.value.toLowerCase() || data[i].nameItem.toLowerCase() == inputPesquisa.value.toLowerCase()){
            arrFiltro.push(data[i])
        }
    }
    if(arrFiltro.length == 0){
        alert('Não encontramos nenhum item em nosso estoque')
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }
})








