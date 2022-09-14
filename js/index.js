const listaDeItens = document.querySelector('.list_cards')
const listaDeItensCarrinho = document.querySelector('.section_aside_div_carrinhoCompras_ul')
const menuNav = document.querySelector('.menu_nav')
const botaoTodos = document.querySelector('#button_menu_1')
const botaoAcessorios = document.querySelector('#button_menu_2')
const botaoCalcados = document.querySelector('#button_menu_3')
const botaoCamisetas = document.querySelector('#button_menu_4')
const inputPesquisa = document.querySelector('#input_research')
const botaoPesquisa = document.querySelector('#button_research')
const carrinhoVazio =  document.querySelector('.carrinho_empty')


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

        listButton.setAttribute('id', `botao_${i + 1}`)

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

        listButton.addEventListener('click', function AdicionarCarrinho(){
            carrinhoVazio.innerHTML = ''

            let novoArr = []

            let quantidadeItens = document.querySelector("#quantidadeDinamica")
                quantidadeItens.innerHTML ++  

            let precoTotal = document.querySelector("#precoDinamico")  
            if(precoTotal.innerHTML == 0){
                precoTotal.innerHTML = `R$ ${+precoTotal.innerHTML + lista[i].value},00`
            }
            else{
                let varTeste = precoTotal.innerHTML.replace('R$ ', '').replace(',00', '')
                precoTotal.innerHTML = `R$ ${+varTeste + lista[i].value},00`
            }
    

            let idElemento = listButton.id
            let id = parseInt(idElemento.substring(6))

            
            if(lista[i].id === id){
                novoArr.push(lista[i])
            }
       
            
            renderizarProdutoCarrinho(novoArr, listaDeItensCarrinho)
        })
    }
}

renderizarProdutoListaPrincipal(data, listaDeItens)



function renderizarProdutoCarrinho(lista, referenciaHtml){

        for(let i = 0; i < lista.length; i++){
            let listItem = document.createElement('li')
            let listImg = document.createElement('img')
            let listDiv = document.createElement('div')
            let listName = document.createElement('h3') 
            let listPrice = document.createElement('span')
            let listButton = document.createElement('button')

            listImg.src = `${lista[i].img}`
            listName.innerHTML = `${lista[i].nameItem}`
            listPrice.innerHTML = `R$ ${lista[i].value},00`
            listButton.innerHTML = 'Remover'

            listItem.classList.add('carrinhoCompras_li_full')
            listDiv.classList.add('list_items_div_carrinho')
            listImg.classList.add('list_items_img_carrinho')
            listPrice.classList.add('list_items_price_carrinho')
            listButton.classList.add('list_items_button_carrinho')
            
            listDiv.append(listName, listPrice, listButton)
            listItem.append(listImg, listDiv)
            referenciaHtml.appendChild(listItem)
           
            listButton.addEventListener('click', function removerItemCarrinho(event){  

                event.path[2].remove()

                let quantidadeItensCarrinho = document.querySelector("#quantidadeDinamica")
                let precoTotal = document.querySelector("#precoDinamico")  

                quantidadeItensCarrinho.innerHTML--  
                precoTotal.innerHTML = `R$ ${+precoTotal.innerHTML.replace('R$ ', '').replace(',00', '') - lista[i].value},00`
            })
        }     
}


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
        let LiSemEstoque = document.createElement('li')
        let H1SemEstoque = document.createElement('h1')

        LiSemEstoque.classList.add('sem_estoque_message')

        H1SemEstoque.innerHTML = 'Não encontramos nenhum item em nosso estoque!'
        LiSemEstoque.appendChild(H1SemEstoque)
        listaDeItens.appendChild(LiSemEstoque)
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
        let LiSemEstoque = document.createElement('li')
        let H1SemEstoque = document.createElement('h1')

        LiSemEstoque.classList.add('sem_estoque_message')

        H1SemEstoque.innerHTML = 'Não encontramos nenhum item em nosso estoque!'
        LiSemEstoque.appendChild(H1SemEstoque)
        listaDeItens.appendChild(LiSemEstoque)
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
        let LiSemEstoque = document.createElement('li')
        let H1SemEstoque = document.createElement('h1')

        LiSemEstoque.classList.add('sem_estoque_message')

        H1SemEstoque.innerHTML = 'Não encontramos nenhum item em nosso estoque!'
        LiSemEstoque.appendChild(H1SemEstoque)
        listaDeItens.appendChild(LiSemEstoque)
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }
})

botaoPesquisa.addEventListener('click', function pesquisarItens(){
    listaDeItens.innerHTML = ''
    let arrFiltro = []

    for(let i = 0; i < data.length; i++){
        if(data[i].nameItem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputPesquisa.value.toLowerCase()) || data[i].tag[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputPesquisa.value.toLowerCase())){
            arrFiltro.push(data[i])
        }
    }

    if(arrFiltro.length == 0){
        let LiSemEstoque = document.createElement('li')
        let H1SemEstoque = document.createElement('h1')

        LiSemEstoque.classList.add('sem_estoque_message')

        H1SemEstoque.innerHTML = 'Não encontramos nenhum item em nosso estoque!'
        LiSemEstoque.appendChild(H1SemEstoque)
        listaDeItens.appendChild(LiSemEstoque)
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }

    inputPesquisa.value = ''
})
